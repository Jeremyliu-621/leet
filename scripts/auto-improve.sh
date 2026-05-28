#!/bin/bash
# auto-improve.sh — Scheduled maintenance script for LeetLock
# Finds and fixes lint issues, type errors, and other code quality problems.
# Intended to be run as a cron/scheduled task.

set -euo pipefail
cd "$(dirname "$0")/.."

LOG_FILE="scripts/.auto-improve.log"
echo "=== Auto-improve run at $(date) ===" >> "$LOG_FILE"

# 1. Type check
echo "Running type check..." >> "$LOG_FILE"
if ! npx tsc --noEmit 2>> "$LOG_FILE"; then
  echo "  [WARN] Type errors found" >> "$LOG_FILE"
fi

# 2. Run tests
echo "Running tests..." >> "$LOG_FILE"
if ! npx vitest run 2>> "$LOG_FILE" 1>> "$LOG_FILE"; then
  echo "  [WARN] Test failures found" >> "$LOG_FILE"
fi

# 3. Check for unused imports / variables (via tsc strict checks)
echo "Checking for unused code..." >> "$LOG_FILE"
npx tsc --noEmit --noUnusedLocals --noUnusedParameters 2>> "$LOG_FILE" || true

# 4. Format check
echo "Checking formatting..." >> "$LOG_FILE"
if command -v npx &> /dev/null && [ -f ".prettierrc" ]; then
  npx prettier --check "src/**/*.{ts,tsx}" 2>> "$LOG_FILE" || true
fi

# 5. Build check
echo "Running build..." >> "$LOG_FILE"
if ! npm run build 2>> "$LOG_FILE" 1>> "$LOG_FILE"; then
  echo "  [WARN] Build failed" >> "$LOG_FILE"
fi

echo "=== Auto-improve completed at $(date) ===" >> "$LOG_FILE"
echo "" >> "$LOG_FILE"
