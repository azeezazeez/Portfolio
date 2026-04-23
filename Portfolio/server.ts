import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Proxy route for resume download
  app.get("/api/resume-download", async (req, res) => {
  console.info(`[Download] Request received from ${req.ip}`);
  try {
    const FILE_ID = "125zPii-1q9UbMiQLxKC3ZCvSyHNzC2Sd";
    const HEADERS = {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
      "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
    };

    // Step 1: Initial request
    const initialUrl = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;
    const firstResponse = await fetch(initialUrl, { headers: HEADERS, redirect: "follow" });

    if (!firstResponse.ok) {
      return res.redirect(initialUrl);
    }

    const contentType = firstResponse.headers.get("content-type") || "";

    // If we got the PDF directly, stream it
    if (!contentType.includes("text/html")) {
      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", 'attachment; filename="Abdul_Azeez_Resume.pdf"');
      return res.send(Buffer.from(await firstResponse.arrayBuffer()));
    }

    // Step 2: Google returned an HTML warning page — extract confirm token
    const html = await firstResponse.text();
    const confirmMatch = html.match(/confirm=([0-9A-Za-z_\-]+)/);
    const uuidMatch   = html.match(/uuid=([0-9A-Za-z_\-]+)/);

    let downloadUrl;
    if (confirmMatch) {
      downloadUrl = `https://drive.google.com/uc?export=download&id=${FILE_ID}&confirm=${confirmMatch[1]}`;
    } else if (uuidMatch) {
      downloadUrl = `https://drive.usercontent.google.com/download?id=${FILE_ID}&export=download&confirm=t&uuid=${uuidMatch[1]}`;
    } else {
      // Newer Drive pages — usercontent endpoint with confirm=t usually works
      downloadUrl = `https://drive.usercontent.google.com/download?id=${FILE_ID}&export=download&confirm=t`;
    }

    const secondResponse = await fetch(downloadUrl, { headers: HEADERS, redirect: "follow" });

    if (!secondResponse.ok || (secondResponse.headers.get("content-type") || "").includes("text/html")) {
      console.warn("[Download] Falling back to redirect.");
      return res.redirect(initialUrl);
    }

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'attachment; filename="Abdul_Azeez_Resume.pdf"');
    res.send(Buffer.from(await secondResponse.arrayBuffer()));
    console.info("[Download] Streamed successfully.");

  } catch (error) {
    console.error("[Download] Error:", error);
    res.status(500).send("Internal Server Error during download.");
  }
});
}

startServer();
