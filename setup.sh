#!/bin/bash
# ==========================================
# 🚀 CertifyPro – سكريبت الإعداد التلقائي
# شغّله مرة واحدة فقط!
# ==========================================

echo ""
echo "╔══════════════════════════════════╗"
echo "║   🚀 CertifyPro Setup Script     ║"
echo "╚══════════════════════════════════╝"
echo ""

# ===== التحقق من Node.js =====
if ! command -v node &> /dev/null; then
  echo "❌ Node.js غير مثبت!"
  echo "👉 حمّله من: https://nodejs.org"
  exit 1
fi

echo "✅ Node.js: $(node -v)"
echo "✅ npm: $(npm -v)"
echo ""

# ===== تثبيت المتعلقات =====
echo "📦 جاري تثبيت المتعلقات..."
npm install
echo "✅ تم تثبيت المتعلقات!"
echo ""

# ===== إعداد .env =====
if [ ! -f .env ]; then
  cp .env.example .env
  echo "✅ تم إنشاء ملف .env"
  echo "⚠️  لا تنس إضافة مفاتيح Stripe في .env"
else
  echo "✅ ملف .env موجود مسبقاً"
fi
echo ""

# ===== إعداد Git =====
if [ ! -d .git ]; then
  git init
  git add .
  git commit -m "🚀 Initial commit - CertifyPro"
  echo "✅ تم تهيئة Git وأول commit!"
else
  echo "✅ Git مُهيأ مسبقاً"
fi
echo ""

echo "╔══════════════════════════════════╗"
echo "║   ✅ الإعداد اكتمل!              ║"
echo "╠══════════════════════════════════╣"
echo "║  شغّل المشروع: npm run dev       ║"
echo "║  ثم افتح: http://localhost:3000  ║"
echo "╚══════════════════════════════════╝"
echo ""
echo "📖 الخطوة التالية: ارفع على GitHub"
echo "   راجع: docs/DEPLOY_GUIDE.md"
