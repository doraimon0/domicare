@echo off
chcp 65001 >nul
:: DomiCare Local Runner for Windows (Arabic translation)
title مشغل منصة دومي كير المحلي
echo ===================================================
echo             دومي كير - DomiCare
echo      منصة ولعبة توعوية تفاعلية لمرضى G6PD
echo ===================================================
echo.

:: Check if Node.js is installed
where node >nul 2>nul
if %errorlevel% neq 0 (
    echo [X] لم يتم العثور على برنامج Node.js في جهازك!
    echo.
    echo لتشغيل اللعبة والمنصة على جهازك، يرجى اتباع الآتي:
    echo 1. قم بتحميل وتثبيت Node.js (النسخة الموصى بها LTS) من الموقع الرسمي:
    echo    https://nodejs.org
    echo 2. بعد اكتمال التثبيت، أعد تشغيل هذا الملف مجدداً (اضغط عليه مرتين).
    echo.
    pause
    exit /b
)

echo [!] تم العثور على Node.js بنجاح! جاري إعداد وتجهيز اللعبة للتشغيل...
echo.

:: If node_modules folder doesn't exist, run npm install
if not exist node_modules (
    echo [~] جاري تثبيت ملفات التشغيل المطلوبة (يحدث هذا لأول مرة فقط)...
    call npm install
) else (
    echo [~] ملفات التشغيل مثبتة مسبقاً وجاهزة.
)

echo.
echo [~] جاري تشغيل المنصة التفاعلية وفتحها في المتصفح في غضون ثوانٍ...
echo.

:: Open the browser automatically after 3 seconds
start "" "http://localhost:3000"

:: Start Vite dev server on port 3000
call npm run dev -- --port 3000

pause
