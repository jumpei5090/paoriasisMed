#!/bin/bash
cd "$(dirname "$0")"
echo "Starting HTTP server on port 8080..."
echo "Please open http://localhost:8080 in your browser"
python3 -m http.server 8080