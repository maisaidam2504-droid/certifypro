# 🗺️ خارطة الطريق الكاملة – من الكود إلى المال

## الخطوة 1️⃣: رفع على GitHub (10 دقائق)
## الخطوة 2️⃣: نشر على Netlify (5 دقائق)
## الخطوة 3️⃣: ربط Stripe (15 دقائق)
## الخطوة 4️⃣: أول عميل حقيقي (48 ساعة)

---

# 1️⃣ رفع على GitHub

## أ) إنشاء حساب GitHub (إذا لم يكن لديك)
```
1. افتح: https://github.com
2. انقر "Sign up"
3. أكمل التسجيل (مجاني تماماً)
```

## ب) إنشاء مستودع جديد
```
1. بعد تسجيل الدخول، انقر "+" في أعلى اليمين
2. اختر "New repository"
3. اكتب الاسم: certifypro
4. اختر "Public" (مجاني)
5. لا تضع علامة على أي خيار آخر
6. انقر "Create repository" (الزر الأخضر)
```

## ج) رفع ملفاتك (افتح Terminal/CMD)

### على Windows:
```
ابحث عن "cmd" في قائمة ابدأ → افتحه
```

### على Mac:
```
Spotlight (Cmd+Space) → اكتب "Terminal" → Enter
```

### الأوامر:
```bash
# انتقل إلى مجلد المشروع
# Windows:
cd C:\Users\اسمك\Downloads\certifypro

# Mac/Linux:
cd ~/Downloads/certifypro

# شغّل سكريبت الإعداد (Mac/Linux فقط)
chmod +x setup.sh && ./setup.sh

# أو يدوياً:
npm install

# ربط بـ GitHub (استبدل USERNAME باسمك)
git remote add origin https://github.com/USERNAME/certifypro.git
git branch -M main
git push -u origin main
```

## ✅ النتيجة:
```
رابط مستودعك:
https://github.com/USERNAME/certifypro
```

---

# 2️⃣ النشر على Netlify (5 دقائق!)

## الطريقة الأسهل – بدون كود:

```
1. افتح: https://app.netlify.com
2. سجّل بحساب GitHub (انقر "Sign up with GitHub")
3. انقر "Add new site" → "Import an existing project"
4. اختر "GitHub"
5. اختر مستودع certifypro
6. في إعدادات Build:
   - Base directory: frontend
   - Build command: (اتركه فارغاً)
   - Publish directory: frontend
7. انقر "Deploy site"
8. انتظر 60 ثانية...
```

## 🎉 رابطك الآن:
```
https://certifypro-xxxxx.netlify.app
```

## تغيير اسم الرابط:
```
Netlify → Site settings → Change site name
→ اكتب: certifypro-ar
→ رابطك: https://certifypro-ar.netlify.app
```

---

# 3️⃣ إعداد Stripe (15 دقائق)

## أ) إنشاء حساب Stripe
```
1. افتح: https://stripe.com
2. انقر "Start now"
3. أدخل: الإيميل، الاسم، كلمة المرور
4. تحقق من الإيميل
```

## ب) الحصول على مفاتيح API
```
1. في لوحة Stripe انقر "Developers" (أعلى اليمين)
2. ثم "API keys"
3. ستجد:
   ┌─────────────────────────────────────────┐
   │ Publishable key: pk_test_XXXXXXXXXX    │ ← انسخ هذا
   │ Secret key: sk_test_XXXXXXXXXX         │ ← انسخ هذا
   └─────────────────────────────────────────┘
```

## ج) إضافة المفاتيح للمشروع
```
افتح ملف .env في مجلد certifypro:

STRIPE_SECRET_KEY=sk_test_الكود_الذي_نسخته
STRIPE_PUBLIC_KEY=pk_test_الكود_الذي_نسخته
```

## د) إضافة متغيرات البيئة في Netlify
```
Netlify → Site settings → Environment variables → Add variable

اضف:
STRIPE_SECRET_KEY = sk_test_XXXX
STRIPE_PUBLIC_KEY = pk_test_XXXX
```

## ه) اختبار الدفع
```
بطاقة اختبار Stripe:
رقم البطاقة: 4242 4242 4242 4242
التاريخ: 12/26
CVV: 123

→ إذا نجح الدفع فالكل يعمل! ✅
```

---

# 4️⃣ أول عميل (ابدأ خلال 48 ساعة!)

## المنشور الأول على تويتر:
```
انسخ هذا المنشور وعدّله:

"🚀 أطلقت للتو موقعي الأول!

CertifyPro – أنشئ شهادة احترافية في 60 ثانية

✅ مجاني للتجربة
✅ تحميل PDF فوري  
✅ 3 تصاميم احترافية

جربه الآن: [رابطك]

#عمل_حر #مطورون_عرب #SaaS"
```

## المجموعات الثلاث الأولى:
```
1. "مستقل - العمل الحر العربي" على فيسبوك
2. "وظائف ومستقلون" على فيسبوك  
3. أي مجموعة تقنية عربية على تيليجرام
```

---

# ✅ قائمة التحقق النهائية

```
GitHub:
□ حساب GitHub مُنشأ
□ مستودع certifypro مُنشأ
□ الكود مرفوع

Netlify:
□ حساب Netlify مُنشأ
□ الموقع منشور
□ الرابط يعمل على الجوال

Stripe:
□ حساب Stripe مُنشأ
□ مفاتيح API مضافة
□ بطاقة الاختبار تعمل

التسويق:
□ رابط الموقع جاهز للمشاركة
□ منشور تويتر مكتوب
□ نشرت في مجموعة واحدة على الأقل
```

---

# 🆘 مشاكل شائعة وحلولها

```
المشكلة: git: command not found
الحل: حمّل Git من https://git-scm.com

المشكلة: npm: command not found  
الحل: حمّل Node.js من https://nodejs.org

المشكلة: الموقع لا يفتح بعد Netlify
الحل: انتظر 2 دقيقة ثم حاول مجدداً

المشكلة: الدفع لا يعمل
الحل: تأكد أن مفاتيح Stripe في .env صحيحة
```

---

# 📞 إذا واجهت أي مشكلة

```
أخبرني بالمشكلة بالضبط وسأساعدك فوراً! 💪
```
