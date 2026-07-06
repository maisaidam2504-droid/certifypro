# 🎓 CertifyPro – منصة شهادات احترافية

> أنشئ شهادتك الاحترافية في 60 ثانية

[![License](https://img.shields.io/badge/License-MIT-gold.svg)](LICENSE)
[![Node](https://img.shields.io/badge/Node.js-18+-green.svg)](https://nodejs.org)
[![Stripe](https://img.shields.io/badge/Payments-Stripe-blue.svg)](https://stripe.com)

---

## ✨ المميزات

- 📸 رفع صورة شخصية
- 🎨 3 قوالب احترافية (ذهبي، فاخر، مهني)
- ⚡ معاينة مباشرة أثناء الكتابة
- 📥 تحميل PDF (مجاني + عالي الجودة)
- 💳 نظام دفع Stripe متكامل
- 📱 متوافق مع الجوال
- 🌐 دعم اللغة العربية (RTL)

## 🚀 تشغيل المشروع

```bash
# تثبيت المتعلقات
npm install

# إعداد البيئة
cp .env.example .env
# أضف مفاتيح Stripe في .env

# تشغيل التطوير
npm run dev

# فتح المتصفح
# http://localhost:3000
```

## 📁 هيكل المشروع

```
certifypro/
├── frontend/
│   └── index.html          # الواجهة الكاملة
├── backend/
│   └── server.js           # API + Stripe
├── docs/
│   ├── DEPLOY_GUIDE.md     # دليل النشر
│   └── MARKETING_GUIDE.md  # دليل التسويق
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## 💰 نموذج الأسعار

| الخطة | السعر | المميزات |
|-------|-------|---------|
| مجاني | $0 | شهادة أساسية، PDF بدقة عادية |
| احترافي | $3 | 3 قوالب، دقة عالية، بدون شعار |
| متقدم | $7/شهر | غير محدود، شعار خاص |
| فريق | $15/شهر | 10 أعضاء |

## 🛠 التقنيات المستخدمة

- **Frontend:** HTML5, CSS3, JavaScript (Vanilla)
- **PDF:** jsPDF + html2canvas
- **Backend:** Node.js + Express
- **دفع:** Stripe
- **نشر:** Railway / Netlify

## 📜 الترخيص

MIT © 2025 CertifyPro
