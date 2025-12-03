// models/Exam.js
const mongoose = require('mongoose');

const examSchema = new mongoose.Schema({
  // 1. الربط مع جدول المدفوعات (كما كان سابقاً)
  payment: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'payment',
    required: true
  },

  // 2. الربط الجديد مع جدول المستخدمين (الطالب الذي أدى الاختبار)
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user', // يشير إلى موديل User
    required: true // جعلناه إجبارياً لأن الاختبار لابد أن يكون له صاحب
  },
  
  type: { type: String },
  stat: { type: String },
  
  hidden: { 
    type: Boolean, 
    default: false 
  },
  
  result: { 
    type: Object, 
    default: null 
  },
  
  rate: { 
    type: Object, 
    default: null 
  }
}, { timestamps: true });

module.exports = mongoose.model('exam', examSchema);