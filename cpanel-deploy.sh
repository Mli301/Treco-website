#!/bin/bash
set -euo pipefail

# cpanel-deploy.sh
# Deployment helper for cPanel / Elite Host
# Usage: set this script as the "Deployment Script" in cPanel's Git Version Control
# or run it manually on the server from the repository directory after a git pull.

echo "Starting cPanel deployment script"

# Ensure npm is available
if ! command -v npm >/dev/null 2>&1; then
  echo "npm not found in PATH. Install Node.js / npm or use local build + upload." >&2
  exit 1
fi

echo "Installing dependencies..."
npm ci --unsafe-perm

echo "Building project..."
npm run build

# Destination: default cPanel document root. Edit if your host uses a different path.
DEST="$HOME/public_html"
echo "Deploying built files to: $DEST"
mkdir -p "$DEST"

# Use rsync where available for a safe mirror; otherwise fallback to cp
if command -v rsync >/dev/null 2>&1; then
  rsync -av --delete dist/public/ "$DEST/"
else
  # simple fallback
  rm -rf "$DEST"/* || true
  cp -r dist/public/* "$DEST/"
fi

echo "Deployment complete. Site files copied to $DEST"
