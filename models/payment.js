const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    // id by hand (not default _id)
    tapId: {
      type: String, // أو Number حسب رغبتك
      required: true,
      unique: true, // لضمان عدم تكرار رقم الفاتورة اليدوي
    },
    // users array form table users
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
      },
    ],

    // teacher from table teachers
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "teacher",
    },

    stat: { type: String, default: "pending" }, // حالة الدفع
  },
  { timestamps: true }
);

module.exports = mongoose.model("payment", paymentSchema);
