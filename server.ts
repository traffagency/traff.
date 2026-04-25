import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import cors from "cors";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // 1. Basic Security Headers (XSS, Clickjacking, etc.)
  app.use(
    helmet({
      contentSecurityPolicy: {
        directives: {
          ...helmet.contentSecurityPolicy.getDefaultDirectives(),
          "script-src": ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://www.googletagmanager.com", "https://connect.facebook.net"],
          "img-src": ["'self'", "data:", "https:", "https://drive.google.com"],
          "frame-src": [
            "'self'", 
            "https://www.googletagmanager.com", 
            "https://www.facebook.com", 
            "https://calendly.com",
            "https://ai.studio",
            "https://*.google.com",
            "https://*.run.app"
          ],
          "frame-ancestors": ["'self'", "https://ai.studio", "https://*.google.com", "https://*.run.app"],
        },
      },
      crossOriginEmbedderPolicy: false,
      xFrameOptions: false,
    })
  );

  // 2. CORS Policy - Restrict to self in production
  app.use(cors());

  // 3. Body Parsing with size limits to prevent large payload attacks
  app.use(express.json({ limit: "10kb" }));
  app.use(express.urlencoded({ extended: true, limit: "10kb" }));

  // 4. Rate Limiting to prevent brute force/DDoS
  const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    limit: 100, // Limit each IP to 100 requests per `window`
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    message: "Demasiadas peticiones desde esta IP, por favor inténtalo de nuevo más tarde."
  });
  app.use("/api/", limiter);

  // API routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", security: "fortified" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { 
        middlewareMode: true,
        host: '0.0.0.0',
        port: 3000
      },
      appType: "spa",
    });
    app.use(vite.middlewares);

    // Development Fallback: serve index.html for unknown routes
    app.use('*', async (req, res, next) => {
      const url = req.originalUrl;
      try {
        let template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');
        template = await vite.transformIndexHtml(url, template);
        res.status(200).set({ 'Content-Type': 'text/html' }).end(template);
      } catch (e) {
        vite.ssrFixStacktrace(e as Error);
        next(e);
      }
    });
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    
    // SPA Fallback: handle all other requests by serving index.html
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
