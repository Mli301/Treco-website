import express, { type Express } from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer } from "vite";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Dev server integration removed for client-only workflow.
 * These functions are no-ops so the project can be built and deployed
 * as a static Vite site without starting an Express server.
 */

export async function setupVite(_app: Express, _httpServer: import("http").Server) {
  // no-op in client-only mode
  console.info("setupVite: skipped (client-only mode)");
}

export function serveStatic(_app: Express) {
  // no-op in client-only mode
  console.info("serveStatic: skipped (client-only mode)");
}
