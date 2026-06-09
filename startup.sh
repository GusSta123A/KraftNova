#!/bin/bash
# Azure App Service startup script for Next.js

echo "Starting G&G Solutions Next.js app..."
echo "Node version: $(node --version)"
echo "PORT: ${PORT:-3000}"

# Install dependencies (skipped if node_modules exists and package.json hasn't changed)
npm install --omit=dev

# Build the app
npm run build

# Start the server — Azure sets PORT=8080 automatically
npm start
