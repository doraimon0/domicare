# 🎮 DomiCare - تشغيل المشروع محلياً | Running DomiCare Locally

هذا الدليل يشرح لك كيف تقوم بتشغيل اللعبة والموقع على جهازك الشخصي خطوة بخطوة، ولماذا لا تعمل اللعبة بمجرد الضغط المباشر على ملف `index.html`.

This guide explains how to run the game and website on your personal computer step-by-step, and why it doesn't work by just double-clicking `index.html`.

---

## ❓ لماذا لا تعمل اللعبة عند فتح ملف `index.html` مباشرة؟
المشاريع الحديثة المصممة بـ **React** و **Vite** تستخدم تقنيات تسمى "برمجة جافا سكريبت النمطية" (ES Modules). المتصفحات تمنع تشغيل هذه الملفات من القرص الصلب مباشرة (باستخدام بروتوكول `file://`) لأسباب أمنية (حمايتك من الاختراقات وتسمى سياسة CORS).
لذلك، **تحتاج اللعبة إلى خادم محلي صغير (Local Server)** ليقوم بتشغيلها بأمان وسرعة فائقة.

## ❓ Why doesn't the game work when clicking `index.html` directly?
Modern web projects built with **React** and **Vite** use ES Modules. Browsers block these scripts when loaded directly from your hard drive (`file://` URL) for security reasons (CORS policy).
Therefore, **you need to run a small local web server** to serve the files securely and support rapid updates.

---

## 🚀 طريقة تشغيل اللعبة على جهازك الشخصي (خلال دقيقتين!)
## 🚀 How to Run on Your PC (In 2 Minutes!)

### 1️⃣ الخطوة الأولى: تثبيت جافا سكريبت (Node.js)
* قم بتحميل وتثبيت برنامج **Node.js** (وهو المحرك المجاني والمستقر لتشغيل مشاريع الويب) من الموقع الرسمي:
  👉 [https://nodejs.org](https://nodejs.org) (اختر النسخة المستقرة **LTS**).

### 1️⃣ Step 1: Install Node.js
* Download and install **Node.js** (the free, stable javascript runtime for development) from:
  👉 [https://nodejs.org](https://nodejs.org) (Recommended: click the **LTS** version).

---

### 2️⃣ الخطوة الثانية: فتح مجلد المشروع بالترمينال (Terminal)
* بعد تحميل المشروع كملف مضغوط (`ZIP`) من موقع AI Studio وفك الضغط عنه:
* افتح واجهة الأوامر في جهازك (Terminal في الماك، أو Command Prompt / PowerShell في الويندوز) داخل مجلد المشروع نفسه.
* أو ببساطة: افتح مجلد المشروع في برنامج **VS Code** وافتح الـ Terminal المدمج بالضغط على `Ctrl + ~`.

### 2️⃣ Step 2: Open Project Folder in Terminal
* Download your project as a `ZIP` from the AI Studio settings, and extract it on your desktop.
* Open your Terminal (Mac/Linux) or Command Prompt/PowerShell (Windows) in the project root folder.
* **Or easiest**: Open the folder in **VS Code** and open the built-in terminal (`Ctrl + ~` or `Cmd + ~`).

---

### 3️⃣ الخطوة الثالثة: تثبيت حزم البرمجة (Installation)
اكتب الأمر التالي في واجهة الأوامر واضغط Enter لتثبيت جميع الأدوات والمكتبات اللازمة لمرة واحدة فقط:
```bash
npm install
```

### 3️⃣ Step 3: Install Package Dependencies
Type this command and press Enter inside the project terminal (only needed once):
```bash
npm install
```

---

### 4️⃣ الخطوة الرابعة: تشغيل اللعبة! (Run Dev Server)
اكتب الأمر التالي لتشغيل اللعبة في وضع التطوير الفوري:
```bash
npm run dev
```

### 4️⃣ Step 4: Start the Game!
Type this command to run your website locally:
```bash
npm run dev
```

وبعد كتابة هذا الأمر، سيظهر لك رابط مثل:
`http://localhost:3000` أو `http://localhost:5173`
قم بنسخه وفتحه في المتصفح، وستعمل اللعبة معك بشكل كامل وتفاعلي، وتستطيع التعديل عليها مباشرة وستتحدث تلقائياً!

A local link will appear in your console, usually:
`http://localhost:3000` or `http://localhost:5173`
Just copy & paste it in your browser, and the game will boot instantly!

---

## 🎨 دليل رفع الصور المخصصة للبطاقات
مجلد الصور المخصصة تم إنشاؤه مسبقاً في المشروع على هذا المسار:
`/public/images/characters/`

عندما تقوم بتجهيز رسوماتك المفرغة (Transparent PNG)، قم بتسميتها بالأسماء التالية تماماً ورفعها للمجلد المقابل، وستتحول اللعبة والموقع تلقائياً من الإيموجيات القديمة إلى صورك الاحترافية والجميلة!

---

Developed with ❤️ for **DomiCare** educational platform.
