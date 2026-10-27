/*
 * Resume download helper.
 *
 * The PDF is fetched into memory ahead of time (blob), so when the user
 * clicks "Download" the browser already has the file and shows the
 * save dialog instantly instead of waiting for the network.
 *
 * Place at: src/utils/resumeDownload.ts
 */

export const RESUME_FILE = 'AZEEZ_RESUME.pdf';
export const RESUME_URL = `${import.meta.env.BASE_URL}${RESUME_FILE}`;

let blobUrl: string | null = null;
let pending: Promise<string | null> | null = null;

/** Start loading the PDF into memory (safe to call many times). */
export const prefetchResume = (): Promise<string | null> => {
  if (blobUrl) return Promise.resolve(blobUrl);
  if (pending) return pending;

  pending = fetch(RESUME_URL)
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.blob();
    })
    .then((blob) => {
      const pdfBlob = new Blob([blob], { type: 'application/pdf' });
      blobUrl = URL.createObjectURL(pdfBlob);
      return blobUrl;
    })
    .catch((err) => {
      console.error('Resume prefetch failed:', err);
      pending = null;
      return null;
    });

  return pending;
};

const triggerDownload = (href: string) => {
  const link = document.createElement('a');
  link.href = href;
  link.download = RESUME_FILE;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

/**
 * Download the resume. Uses the in-memory copy when ready (instant),
 * otherwise falls back to the direct file URL and starts caching it.
 */
export const downloadResume = () => {
  if (blobUrl) {
    triggerDownload(blobUrl);
    return;
  }

  triggerDownload(RESUME_URL);
  void prefetchResume();
};
