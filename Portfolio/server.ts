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
  app.get("/api/download-resume", async (req, res) => {
    try {
      const FILE_ID = "125zPii-1q9UbMiQLxKC3ZCvSyHNzC2Sd";
      const driveUrl = `https://docs.google.com/uc?export=download&id=${FILE_ID}`;
      
      const response = await fetch(driveUrl);
      
      if (!response.ok) throw new Error("Failed to fetch file from Google Drive");

      const contentType = response.headers.get("content-type") || "application/pdf";
      
      res.setHeader("Content-Type", contentType);
      res.setHeader("Content-Disposition", 'attachment; filename="Abdul_Azeez_Resume.pdf"');
      
      // Stream the response
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      res.send(buffer);
    } catch (error) {
      console.error("Download Error:", error);
      res.status(500).send("Error downloading file.");
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
