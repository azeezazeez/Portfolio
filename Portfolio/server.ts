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
  app.get("/api/download-resume.pdf", async (req, res) => {
    try {
      const FILE_ID = "125zPii-1q9UbMiQLxKC3ZCvSyHNzC2Sd";
      const driveUrl = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;
      
      const response = await fetch(driveUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        },
        redirect: 'follow'
      });
      
      if (!response.ok) {
        // Fallback to direct redirect if proxy fetch fails
        console.warn(`Proxy fetch failed (${response.status}), falling back to direct redirect.`);
        return res.redirect(driveUrl);
      }

      const contentType = response.headers.get("content-type") || "";
      
      // If Google Drive returns HTML, it's likely the "virus scan" confirmation page
      if (contentType.includes("text/html")) {
        console.warn("Google Drive returned HTML instead of PDF. Possibly virus scan warning.");
        // Try to extra the confirmation token if needed, or just redirect as a fallback
        return res.redirect(driveUrl);
      }

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", 'attachment; filename="Abdul_Azeez_Resume.pdf"');
      
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      res.send(buffer);
    } catch (error) {
      console.error("Download Proxy Error:", error);
      res.status(500).json({ error: "Failed to process download", details: error instanceof Error ? error.message : String(error) });
    }
  });

  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
