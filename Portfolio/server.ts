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
      const driveUrl = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;
      
      const response = await fetch(driveUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        },
        redirect: 'follow'
      });
      
      if (!response.ok) {
        console.error(`[Download] Google Drive Error: ${response.status}`);
        return res.redirect(driveUrl);
      }

      const contentType = response.headers.get("content-type") || "application/pdf";
      
      if (contentType.includes("text/html")) {
        console.warn("[Download] Received HTML from Drive, likely virus scan. Redirecting...");
        return res.redirect(driveUrl);
      }

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader("Content-Disposition", 'attachment; filename="Abdul_Azeez_Resume.pdf"');
      
      const arrayBuffer = await response.arrayBuffer();
      res.send(Buffer.from(arrayBuffer));
      console.info("[Download] File streamed successfully.");
    } catch (error) {
      console.error("[Download] Critical Error:", error);
      res.status(500).send("Internal Server Error during download.");
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
