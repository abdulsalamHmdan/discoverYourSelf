const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema(
  {
    user: { type: String, required: true, unique: true },
    pass: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, default: "teacher" },
  },
  { timestamps: true }
); // يضيف تاريخ الإنشاء والتحديث تلقائياً

module.exports = mongoose.model("teacher", teacherSchema);
