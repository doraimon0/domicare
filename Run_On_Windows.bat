@echo off
:: DomiCare Local Runner for Windows
title DomiCare Local Runner
echo ===================================================
echo             DomiCare - Learn & Play
echo       Interactive G6PD Awareness Platform
echo ===================================================
echo.

:: Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [X] Node.js is not installed on this system!
    echo.
    echo Please follow these steps to play or present the game locally:
    echo 1. Download and install Node.js from: https://nodejs.org
    echo 2. After installation, restart this script (double-click again).
    echo.
    pause
    exit /b
)

echo [!] Node.js detected! Setting up the local environment...
echo.

:: If node_modules folder doesn't exist, run npm install
if not exist node_modules (
    echo [~] Installing project dependencies (this may take a minute first time)...
    call npm install
) else (
    echo [~] Project dependencies are already installed.
)

echo.
echo [~] Building and starting the local interactive server...
echo.

:: Open the browser automatically after 3 seconds
start "" "http://localhost:3000"

:: Start Vite dev server on port 3000
call npm run dev -- --port 3000

pause
