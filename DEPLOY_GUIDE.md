# 🚀 دليل النشر الكامل – CertifyPro

## الخيار 1: نشر مجاني على Netlify (للواجهة فقط)
## الخيار 2: نشر كامل على Railway (Frontend + Backend)

---

## ✅ الخيار 1: Netlify (مجاني وسريع – 10 دقائق)

### الخطوة 1: إنشاء حساب
1. اذهب إلى 👉 https://netlify.com
2. انقر "Sign up" → "Continue with GitHub"
3. اربط حساب GitHub الخاص بك

### الخطوة 2: رفع ملفاتك
```
الطريقة السريعة (Drag & Drop):
1. افتح https://app.netlify.com
2. اسحب مجلد (frontend/) وأفلته في المنطقة المحددة
3. انتظر 30 ثانية
4. احصل على رابطك: https://amazing-name-123.netlify.app
```

### الخطوة 3: رابط مخصص (اختياري)
```
1. في لوحة Netlify → "Domain settings"
2. انقر "Add custom domain"
3. أضف نطاقك: certifypro.com
4. اتبع تعليمات DNS
```

---

## ✅ الخيار 2: Railway (Backend + Frontend معاً)

### الخطوة 1: رفع المشروع على GitHub
```bash
# في مجلد المشروع
git init
git add .
git commit -m "🚀 Initial commit - CertifyPro"

# أنشئ مستودع على GitHub ثم:
git remote add origin https://github.com/USERNAME/certifypro.git
git push -u origin main
```

### الخطوة 2: إنشاء مشروع على Railway
1. اذهب إلى 👉 https://railway.app
2. انقر "Start a New Project"
3. اختر "Deploy from GitHub repo"
4. اختر مستودع certifypro
5. Railway سيكشف Node.js تلقائياً ✅

### الخطوة 3: إضافة متغيرات البيئة
```
في Railway → Variables:
────────────────────────────────
NODE_ENV         = production
PORT             = 3000
STRIPE_SECRET_KEY = sk_live_XXXXXXXX
STRIPE_PUBLIC_KEY = pk_live_XXXXXXXX
FRONTEND_URL     = https://your-app.railway.app
────────────────────────────────
```

### الخطوة 4: الحصول على الرابط
```
Railway → Settings → Domains → Generate Domain
ستحصل على: https://certifypro-production.up.railway.app
```

---

## 💳 إعداد Stripe للدفع الحقيقي

### الخطوة 1: إنشاء حساب Stripe
1. اذهب إلى 👉 https://stripe.com
2. انقر "Create account"
3. أكمل بياناتك (تحتاج بطاقة بنكية لاستلام المدفوعات)

### الخطوة 2: الحصول على مفاتيح API
```
Stripe Dashboard → Developers → API keys

Test Keys (للاختبار):
- Publishable key: pk_test_XXXX
- Secret key: sk_test_XXXX

Live Keys (للإنتاج - بعد التحقق):
- Publishable key: pk_live_XXXX
- Secret key: sk_live_XXXX
```

### الخطوة 3: بطاقات الاختبار
```
رقم البطاقة: 4242 4242 4242 4242
تاريخ الانتهاء: أي تاريخ مستقبلي (مثل 12/26)
CVV: أي 3 أرقام (مثل 123)
```

### الخطوة 4: استلام الأموال
```
Stripe → Settings → Payouts
أضف حساب مصرفي أو بطاقة Visa لاستلام المدفوعات
المدفوعات تصل خلال 2-7 أيام عمل
```

---

## 🔧 إعداد المشروع محلياً

```bash
# 1. استنسخ المشروع
git clone https://github.com/USERNAME/certifypro.git
cd certifypro

# 2. ثبت المتعلقات
npm install

# 3. إعداد البيئة
cp .env.example .env
# عدّل .env وأضف مفاتيح Stripe

# 4. تشغيل المشروع
npm run dev

# 5. افتح المتصفح
# http://localhost:3000
```

---

## 📊 التحقق من نجاح النشر

```bash
# تحقق من الخادم
curl https://your-app.railway.app

# تحقق من API الدفع
curl -X POST https://your-app.railway.app/api/create-checkout \
  -H "Content-Type: application/json" \
  -d '{"plan":"pro"}'

# يجب أن تحصل على:
# {"success":true,"clientSecret":"pi_xxx_secret_xxx"}
```

---

## ✅ قائمة تحقق قبل الإطلاق

- [ ] الموقع يفتح بشكل صحيح
- [ ] رفع الصورة يعمل
- [ ] المعاينة تتحدث فور الكتابة
- [ ] التحميل المجاني يولد PDF
- [ ] نافذة الدفع تفتح
- [ ] بطاقة اختبار Stripe تعمل
- [ ] التحميل المدفوع يعمل بجودة عالية
- [ ] الموقع يعمل على الجوال
- [ ] HTTPS مفعّل (تلقائي في Railway/Netlify)

---

## 🆘 حل المشكلات الشائعة

### مشكلة: الموقع لا يفتح
```
التحقق: هل أضفت متغيرات البيئة في Railway/Netlify؟
الحل: Railway → Variables → أضف المتغيرات
```

### مشكلة: الدفع لا يعمل
```
التحقق: هل مفاتيح Stripe صحيحة؟
الحل: تأكد من استخدام مفاتيح الاختبار أولاً (sk_test_)
```

### مشكلة: PDF لا يُنشأ
```
التحقق: هل المتصفح يدعم html2canvas؟
الحل: جرب Chrome أو Firefox
```
