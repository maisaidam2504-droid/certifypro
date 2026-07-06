// ==========================================
// CertifyPro - Backend Server
// Node.js + Express + Stripe
// ==========================================

require('dotenv').config();
const express  = require('express');
const stripe   = require('stripe')(process.env.STRIPE_SECRET_KEY);
const cors     = require('cors');
const path     = require('path');

const app  = express();
const PORT = process.env.PORT || 3000;

// ==========================================
// Middleware
// ==========================================
app.use(cors({ origin: process.env.FRONTEND_URL || '*' }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

// ==========================================
// الصفحة الرئيسية
// ==========================================
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

// ==========================================
// إنشاء جلسة دفع Stripe
// ==========================================
app.post('/api/create-checkout', async (req, res) => {
  try {
    const { plan } = req.body;

    // خطط الأسعار
    const plans = {
      pro: {
        name:   'CertifyPro – احترافي',
        amount: 300,   // $3.00 بالسنت
        description: 'شهادة احترافية واحدة بدقة عالية'
      },
      elite: {
        name:   'CertifyPro – متقدم',
        amount: 700,   // $7.00
        description: 'شهادات غير محدودة لمدة شهر'
      },
      team: {
        name:   'CertifyPro – فريق',
        amount: 1500,  // $15.00
        description: '10 أعضاء / شهر'
      }
    };

    const selectedPlan = plans[plan] || plans.pro;

    // إنشاء PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount:   selectedPlan.amount,
      currency: 'usd',
      metadata: { plan, product: 'CertifyPro' },
      automatic_payment_methods: { enabled: true }
    });

    res.json({
      success:      true,
      clientSecret: paymentIntent.client_secret,
      plan:         selectedPlan
    });

  } catch (error) {
    console.error('Stripe error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==========================================
// التحقق من الدفع
// ==========================================
app.post('/api/verify-payment', async (req, res) => {
  try {
    const { paymentIntentId } = req.body;
    const intent = await stripe.paymentIntents.retrieve(paymentIntentId);

    if (intent.status === 'succeeded') {
      res.json({
        success: true,
        plan:    intent.metadata.plan,
        message: 'تم الدفع بنجاح!'
      });
    } else {
      res.json({ success: false, message: 'الدفع لم يكتمل بعد' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// ==========================================
// Webhook من Stripe (للأحداث التلقائية)
// ==========================================
app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];

  try {
    const event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );

    switch (event.type) {
      case 'payment_intent.succeeded':
        console.log('✅ دفع ناجح:', event.data.object.id);
        // هنا يمكنك: إرسال إيميل، تسجيل في قاعدة البيانات، الخ
        break;

      case 'payment_intent.payment_failed':
        console.log('❌ دفع فاشل:', event.data.object.id);
        break;

      default:
        console.log('📌 حدث Stripe:', event.type);
    }

    res.json({ received: true });
  } catch (err) {
    console.error('Webhook Error:', err.message);
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
});

// ==========================================
// إحصائيات بسيطة (يمكن ربطها بقاعدة بيانات)
// ==========================================
let stats = { total: 0, paid: 0, free: 0 };

app.post('/api/track', (req, res) => {
  const { type } = req.body;
  stats.total++;
  if (type === 'paid') stats.paid++;
  else stats.free++;
  res.json({ success: true });
});

app.get('/api/stats', (req, res) => {
  res.json(stats);
});

// ==========================================
// تشغيل الخادم
// ==========================================
app.listen(PORT, () => {
  console.log(`
  ╔═══════════════════════════════════╗
  ║   🚀 CertifyPro Server Running!   ║
  ╠═══════════════════════════════════╣
  ║  URL:  http://localhost:${PORT}      ║
  ║  Mode: ${process.env.NODE_ENV || 'development'}              ║
  ╚═══════════════════════════════════╝
  `);
});

module.exports = app;
