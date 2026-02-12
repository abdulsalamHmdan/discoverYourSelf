const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    user: { type: String, required: true, unique: true },
    pass: { type: String, required: true },
    name: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    teacher: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "teacher",
      },
    ],
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

// 1. استخدام متغير مؤقت لمعرفة ما إذا كان المستند جديداً أم تحديثاً
userSchema.pre('save', function(next) {
  this.wasNew = this.isNew;
  next();
});

// 2. الـ Hook الذي ينشئ الاختبارات بعد حفظ المستخدم
userSchema.post("save", async function (doc, next) {
  // ننفذ الكود فقط إذا كان المستخدم جديداً (ولليس عند التعديل)
  if (doc.wasNew) {
    try {
      // نحصل على موديل الاختبارات بطريقة آمنة
      const Exam = mongoose.model("exam");

      // ملاحظة هامة: يجب أن يكون لديك معرف "payment" صالح لأن الحقل required في موديل الاختبار
      // ضعه هنا أو اجعل الحقل غير إلزامي في موديل الاختبار
      const defaultPaymentId = "65c123456789abcdef123456"; // <-- استبدل هذا بمعرف دفع صالح أو افتراضي

      const initialExams = [
        { user: doc._id, type: "p1",},
        { user: doc._id, type: "p2"},
        { user: doc._id, type: "p3"},
      ];

      await Exam.insertMany(initialExams);
      
    } catch (error) {
      console.error("Error creating initial exams:", error);
      // لا نوقف العملية بـ next(error) حتى لا يفشل إنشاء المستخدم، فقط نسجل الخطأ
    }
  }
  next();
});

module.exports = mongoose.model("user", userSchema);