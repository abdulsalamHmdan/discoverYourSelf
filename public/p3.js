let autoSubmit = true;

// بيانات الاختبار
const intelligences = {
  linguistic: { name: "لغوي/لفظي", icon: "📚", color: "#ef4444" },
  logical: { name: "منطقي/رياضي", icon: "🔢", color: "#f97316" },
  spatial: { name: "بصري/مكاني", icon: "🎨", color: "#eab308" },
  bodily: { name: "جسدي/حركي", icon: "🏃", color: "#22c55e" },
  musical: { name: "إيقاعي", icon: "🎵", color: "#06b6d4" },
  interpersonal: { name: "اجتماعي", icon: "👥", color: "#3b82f6" },
  intrapersonal: { name: "ذاتي", icon: "🎭", color: "#8b5cf6" },
  naturalist: { name: "طبيعي/بيئي", icon: "🌿", color: "#10b981" },
};

// تفاصيل شاملة لكل نوع ذكاء
const intelligenceDetails = {
  linguistic: {
    description:
      "يتميز الأشخاص ذوو الذكاء اللغوي بحبهم للكلمات والقراءة والكتابة. يتعلمون بشكل أفضل من خلال الاستماع والتحدث والقراءة، ولديهم قدرة عالية على التعبير عن أنفسهم بوضوح.",
    strengths: [
      "التعبير الواضح والبليغ",
      "حفظ المعلومات اللفظية بسهولة",
      "فهم قواعد اللغة والنحو",
      "الاستمتاع بالقراءة والكتابة",
      "القدرة على الإقناع والتأثير بالكلمات",
    ],
    learningMethods: [
      "القراءة بصوت عالٍ",
      "كتابة الملاحظات والملخصات",
      "المناقشات والحوارات",
      "الاستماع للمحاضرات والبودكاست",
      "استخدام الكلمات المفتاحية والمرادفات",
    ],
    activities: [
      "كتابة اليوميات والقصص",
      "قراءة الكتب والروايات",
      "المشاركة في النقاشات الأدبية",
      "تعلم لغات جديدة",
      "كتابة الشعر والخواطر",
      "المشاركة في المسابقات الثقافية",
    ],
    careers: [
      "كاتب ومؤلف",
      "صحفي ومراسل",
      "مترجم",
      "محامي",
      "مدرس لغة",
      "محرر ومدقق لغوي",
      "مذيع إذاعي وتلفزيوني",
      "شاعر وأديب",
    ],
  },
  logical: {
    description:
      "يتميز أصحاب الذكاء المنطقي بحبهم للأرقام والأنماط والتحليل المنطقي. يستمتعون بحل المشكلات المعقدة ويفضلون التفكير المنهجي والمنطقي في جميع جوانب الحياة.",
    strengths: [
      "التفكير التحليلي والمنطقي",
      "حل المشكلات المعقدة",
      "فهم الأنماط والعلاقات",
      "العمل مع الأرقام والإحصائيات",
      "التخطيط المنهجي والتنظيم",
    ],
    learningMethods: [
      "حل المسائل والتمارين العملية",
      "استخدام الرسوم البيانية والجداول",
      "التعلم خطوة بخطوة",
      "ربط المعلومات بالأسباب والنتائج",
      "استخدام الأمثلة الرقمية والإحصائية",
    ],
    activities: [
      "حل الألغاز والأحاجي الرياضية",
      "لعب الشطرنج والألعاب الاستراتيجية",
      "البرمجة وتطوير التطبيقات",
      "إجراء التجارب العلمية",
      "تحليل البيانات والإحصائيات",
      "دراسة الفلسفة والمنطق",
    ],
    careers: [
      "مهندس",
      "عالم رياضيات",
      "محاسب ومحلل مالي",
      "مبرمج ومطور برمجيات",
      "عالم فيزياء أو كيمياء",
      "محلل بيانات",
      "باحث علمي",
      "مستشار إداري",
    ],
  },
  spatial: {
    description:
      "يتميز أصحاب الذكاء البصري المكاني بقدرتهم على التفكير بالصور والأشكال. يتعلمون بشكل أفضل من خلال الرؤية والتخيل، ولديهم حس فني قوي وقدرة على تصور الأشياء في الفضاء.",
    strengths: [
      "التفكير البصري والتخيل",
      "فهم الخرائط والمخططات",
      "الحس الفني والجمالي",
      "تذكر الوجوه والأماكن",
      "القدرة على التصميم والإبداع البصري",
    ],
    learningMethods: [
      "استخدام الصور والرسوم التوضيحية",
      "عمل الخرائط الذهنية",
      "التعلم بالألوان والرموز",
      "مشاهدة الفيديوهات التعليمية",
      "استخدام النماذج ثلاثية الأبعاد",
    ],
    activities: [
      "الرسم والتصوير",
      "التصميم الجرافيكي",
      "النحت والأعمال الفنية",
      "التصوير الفوتوغرافي",
      "بناء النماذج والمجسمات",
      "ترتيب وتنسيق المساحات",
    ],
    careers: [
      "مصمم جرافيك",
      "مهندس معماري",
      "فنان تشكيلي",
      "مصور فوتوغرافي",
      "مصمم داخلي",
      "رسام كاريكاتير",
      "مخرج سينمائي",
      "مصمم ألعاب",
    ],
  },
  bodily: {
    description:
      "يتميز أصحاب الذكاء الجسدي الحركي بحبهم للحركة والنشاط البدني. يتعلمون بشكل أفضل من خلال التجربة العملية واستخدام أجسامهم، ولديهم مهارات حركية متقدمة وتناسق جيد.",
    strengths: [
      "التناسق الحركي والمهارات البدنية",
      "التعلم من خلال التجربة العملية",
      "استخدام اليدين بمهارة",
      "التعبير بلغة الجسد",
      "ردود الفعل السريعة والدقيقة",
    ],
    learningMethods: [
      "التعلم بالممارسة والتجربة",
      "الحركة أثناء الدراسة",
      "استخدام الأدوات والمواد الملموسة",
      "التعلم في الهواء الطلق",
      "الأنشطة التفاعلية والعملية",
    ],
    activities: [
      "ممارسة الرياضة والألعاب",
      "الرقص والحركات الإيقاعية",
      "الأعمال اليدوية والحرف",
      "الطبخ والخبز",
      "البستنة والزراعة",
      "التمثيل والأداء المسرحي",
    ],
    careers: [
      "رياضي محترف",
      "مدرب رياضي",
      "راقص أو مصمم رقصات",
      "جراح",
      "حرفي ماهر",
      "طبيب علاج طبيعي",
      "ممثل",
      "طيار",
    ],
  },
  musical: {
    description:
      "يتميز أصحاب الذكاء الإيقاعي بحساسيتهم للأصوات والإيقاعات والأنماط المنتظمة. يحبون النظام والتكرار المنتظم، ويتعلمون بشكل أفضل في بيئة منظمة ومنتظمة.",
    strengths: [
      "ملاحظة الأنماط والإيقاعات",
      "الحساسية للأصوات والنغمات",
      "التنظيم والترتيب المنهجي",
      "التعلم بالتكرار المنتظم",
      "إدارة الوقت والجداول الزمنية",
    ],
    learningMethods: [
      "التعلم بالإيقاع والتكرار",
      "استخدام الجداول الزمنية المنتظمة",
      "التعلم في بيئة هادئة ومنظمة",
      "ربط المعلومات بالأنماط",
      "استخدام الأصوات والنغمات في التعلم",
    ],
    activities: [
      "الاستماع للموسيقى والأصوات الطبيعية",
      "تنظيم الأعمال بجداول زمنية",
      "ممارسة التمارين بإيقاع منتظم",
      "تعلم الآلات الموسيقية",
      "إنشاء قوائم وجداول منظمة",
      "ممارسة التأمل والاسترخاء",
    ],
    careers: [
      "موسيقي أو عازف",
      "منظم فعاليات",
      "مدير مشاريع",
      "محاسب",
      "مدرب تنمية بشرية",
      "مهندس صوت",
      "مدير إداري",
      "مطور أنظمة",
    ],
  },
  interpersonal: {
    description:
      "يتميز أصحاب الذكاء الاجتماعي بقدرتهم على فهم الآخرين والتواصل معهم بفعالية. يحبون العمل الجماعي ولديهم مهارات قيادية وتأثير إيجابي على من حولهم.",
    strengths: [
      "فهم مشاعر ودوافع الآخرين",
      "التواصل الفعال والإقناع",
      "القيادة والتأثير الإيجابي",
      "بناء العلاقات القوية",
      "حل النزاعات والوساطة",
    ],
    learningMethods: [
      "التعلم في مجموعات",
      "المناقشات والحوارات",
      "التعلم التعاوني والتشاركي",
      "لعب الأدوار والمحاكاة",
      "التعلم من خلال التدريس للآخرين",
    ],
    activities: [
      "المشاركة في الأنشطة الجماعية",
      "تنظيم الفعاليات الاجتماعية",
      "العمل التطوعي والخيري",
      "التدريب والتوجيه",
      "المشاركة في النوادي والجمعيات",
      "ممارسة الألعاب الجماعية",
    ],
    careers: [
      "مدير موارد بشرية",
      "مستشار نفسي أو اجتماعي",
      "مدرس أو مدرب",
      "مندوب مبيعات",
      "سياسي أو دبلوماسي",
      "مدير تسويق",
      "منسق اجتماعي",
      "مذيع أو إعلامي",
    ],
  },
  intrapersonal: {
    description:
      "يتميز أصحاب الذكاء الذاتي بفهمهم العميق لأنفسهم ومشاعرهم وأهدافهم. يحبون التأمل والتفكر، ولديهم قدرة عالية على التحليل الذاتي والتطوير الشخصي.",
    strengths: [
      "الوعي الذاتي والفهم العميق للنفس",
      "إدارة المشاعر والانفعالات",
      "وضع الأهداف والتخطيط الشخصي",
      "التأمل والتفكر العميق",
      "الاستقلالية في التعلم والعمل",
    ],
    learningMethods: [
      "التعلم الذاتي والفردي",
      "التأمل والتفكر في المعلومات",
      "ربط التعلم بالأهداف الشخصية",
      "كتابة اليوميات والتأملات",
      "التعلم في بيئة هادئة ومنعزلة",
    ],
    activities: [
      "كتابة اليوميات والتأملات الشخصية",
      "ممارسة التأمل والاسترخاء",
      "وضع الأهداف والخطط الشخصية",
      "القراءة في التطوير الذاتي",
      "ممارسة الهوايات الفردية",
      "السفر والاستكشاف الذاتي",
    ],
    careers: [
      "كاتب أو مؤلف",
      "مستشار شخصي",
      "باحث أو عالم",
      "فيلسوف أو مفكر",
      "مدرب تنمية ذاتية",
      "رائد أعمال",
      "فنان مستقل",
      "محلل نفسي",
    ],
  },
  naturalist: {
    description:
      "يتميز أصحاب الذكاء الطبيعي بحبهم للطبيعة والبيئة. لديهم قدرة على ملاحظة وفهم الأنماط الطبيعية، ويشعرون بالراحة والسلام في البيئات الطبيعية.",
    strengths: [
      "ملاحظة وفهم الأنماط الطبيعية",
      "الحساسية للتغيرات البيئية",
      "تصنيف وتمييز الكائنات الحية",
      "فهم النظم البيئية والطبيعية",
      "الاهتمام بالقضايا البيئية",
    ],
    learningMethods: [
      "التعلم في البيئات الطبيعية",
      "استخدام أمثلة من الطبيعة",
      "الملاحظة المباشرة والاستكشاف",
      "التصنيف والمقارنة",
      "ربط التعلم بالقضايا البيئية",
    ],
    activities: [
      "زراعة النباتات والبستنة",
      "مراقبة الطيور والحيوانات",
      "التخييم والرحلات الطبيعية",
      "جمع العينات الطبيعية",
      "التصوير الطبيعي",
      "المشاركة في حملات حماية البيئة",
    ],
    careers: [
      "عالم أحياء أو بيئة",
      "مهندس زراعي",
      "طبيب بيطري",
      "مرشد سياحي طبيعي",
      "باحث في علوم الأرض",
      "مصمم حدائق",
      "ناشط بيئي",
      "عالم جيولوجيا",
    ],
  },
};

// خلط الأسئلة بشكل عشوائي
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

const importing = [
  {
    qu: "أتعلم بسرعة عندما أمارس الشيء عمليًا.",
    type: "bodily",
  },
  {
    qu: "أعبّر عن أفكاري بإيماءات أو حركات تلقائية.",
    type: "bodily",
  },
  {
    qu: "أستمتع بالأعمال اليدوية أو الحرفية.",
    type: "bodily",
  },
  {
    qu: "أفضّل النشاطات التي تتضمن حركة على الجلوس الطويل.",
    type: "bodily",
  },
  {
    qu: "أستطيع تقليد الحركات أو الإيماءات بسهولة.",
    type: "bodily",
  },
  {
    qu: "أجد متعة في الأنشطة الرياضية أو التمثيلية.",
    type: "bodily",
  },
  {
    qu: "أمتلك توازنًا جسديًا جيدًا.",
    type: "bodily",
  },
  {
    qu: "أتعلم المهارات الحركية الجديدة بسرعة.",
    type: "bodily",
  },
  {
    qu: "أحب استخدام جسدي في التعبير (كالرقص أو المسرح).",
    type: "bodily",
  },
  {
    qu: "أنسجم أكثر عندما أتحرك أثناء التعلم أو التفكير.",
    type: "bodily",
  },
  {
    qu: "أستطيع قراءة مشاعر الآخرين من وجوههم.",
    type: "interpersonal",
  },
  {
    qu: "أستمتع بالتحدث مع أشخاص من خلفيات مختلفة.",
    type: "interpersonal",
  },
  {
    qu: "أستطيع اكتشاف نوايا الناس بسرعة.",
    type: "interpersonal",
  },
  {
    qu: "أعمل بكفاءة ضمن فريق متعاون.",
    type: "interpersonal",
  },
  {
    qu: "أساعد الآخرين على حل خلافاتهم.",
    type: "interpersonal",
  },
  {
    qu: "أستطيع تحفيز من حولي بسهولة.",
    type: "interpersonal",
  },
  {
    qu: "ألاحظ متى يشعر أحدهم بالضيق حتى دون أن يقول.",
    type: "interpersonal",
  },
  {
    qu: "أتكيف مع أنماط الشخصيات المختلفة.",
    type: "interpersonal",
  },
  {
    qu: "أستطيع التأثير في الآخرين بإيجابية.",
    type: "interpersonal",
  },
  {
    qu: "أستمتع ببناء العلاقات الاجتماعية المستمرة.",
    type: "interpersonal",
  },
  {
    qu: "أعرف نقاط قوتي وضعفي بوضوح.",
    type: "intrapersonal",
  },
  {
    qu: "أراجع أفكاري ومواقفي بانتظام.",
    type: "intrapersonal",
  },
  {
    qu: "أستطيع التحكم في مشاعري أثناء التوتر.",
    type: "intrapersonal",
  },
  {
    qu: "أضع أهدافًا طويلة المدى وأسعى لتحقيقها.",
    type: "intrapersonal",
  },
  {
    qu: "أحتاج أحيانًا إلى العزلة للتفكير العميق.",
    type: "intrapersonal",
  },
  {
    qu: "أتعلم من أخطائي بوعي حقيقي.",
    type: "intrapersonal",
  },
  {
    qu: "ألاحظ تأثير مشاعري على قراراتي.",
    type: "intrapersonal",
  },
  {
    qu: "أعبّر عن ذاتي بصدق حتى في المواقف الصعبة.",
    type: "intrapersonal",
  },
  {
    qu: "أضع خطط تطوير شخصية بشكل مستمر.",
    type: "intrapersonal",
  },
  {
    qu: "لديّ وعي واضح بهويتي وقيمي الشخصية.",
    type: "intrapersonal",
  },
  {
    qu: "أجد سهولة في التعبير عن أفكاري بوضوح ودقة.",
    type: "linguistic",
  },
  {
    qu: "أستمتع بقراءة النصوص وتحليلها.",
    type: "linguistic",
  },
  {
    qu: "أستطيع إقناع الآخرين باستخدام الكلمات المناسبة.",
    type: "linguistic",
  },
  {
    qu: "أمتلك مفردات غنية وأستخدمها بطلاقة.",
    type: "linguistic",
  },
  {
    qu: "أجد متعة في كتابة القصص أو المقالات.",
    type: "linguistic",
  },
  {
    qu: "ألاحظ التفاصيل اللغوية الصغيرة في النصوص.",
    type: "linguistic",
  },
  {
    qu: "أحبّ المناقشات والحوار الفكري.",
    type: "linguistic",
  },
  {
    qu: "أتعلم بشكل أفضل عندما أقرأ أو أكتب المعلومات.",
    type: "linguistic",
  },
  {
    qu: "أستطيع تحويل فكرة مجردة إلى شرح بسيط وواضح.",
    type: "linguistic",
  },
  {
    qu: "أستمتع باللعب بالكلمات أو إنشاء العبارات الإبداعية.",
    type: "linguistic",
  },
  {
    qu: "أستمتع بحل المشكلات المعقدة خطوة بخطوة.",
    type: "logical",
  },
  {
    qu: "أستطيع اكتشاف الأنماط والقوانين بسهولة.",
    type: "logical",
  },
  {
    qu: "أستخدم المنطق عند اتخاذ القرارات.",
    type: "logical",
  },
  {
    qu: "أحبّ التعامل مع الأرقام والإحصاءات.",
    type: "logical",
  },
  {
    qu: "أستمتع بالألعاب الذهنية التي تتطلب التفكير.",
    type: "logical",
  },
  {
    qu: "أطرح على نفسي أسئلة تحليلية باستمرار.",
    type: "logical",
  },
  {
    qu: "ألاحظ التناقضات في الحجج أو الأفكار بسرعة.",
    type: "logical",
  },
  {
    qu: "أحبّ فهم كيفية عمل الأشياء من الداخل.",
    type: "logical",
  },
  {
    qu: "أتعلم بسرعة عندما أطبّق التفكير المنهجي.",
    type: "logical",
  },
  {
    qu: "أجد متعة في البرمجة أو التفكير العلمي الدقيق.",
    type: "logical",
  },
  {
    qu: "ألاحظ الفروق الدقيقة بين الأصوات أو النبرات.",
    type: "musical",
  },
  {
    qu: "أستمتع بالاستماع للكلام المنطوق أكثر من القراءة.",
    type: "musical",
  },
  {
    qu: "أتعلم بسهولة عندما أسمع المعلومات.",
    type: "musical",
  },
  {
    qu: "أميز الأصوات المحيطة حتى في الخلفية.",
    type: "musical",
  },
  {
    qu: "أستخدم نغمة صوتي للتعبير عن المعنى.",
    type: "musical",
  },
  {
    qu: "أستمتع بتقليد الأصوات أو اللهجات.",
    type: "musical",
  },
  {
    qu: "أتعرف على الأشخاص من أصواتهم بسهولة.",
    type: "musical",
  },
  {
    qu: "أستخدم الصوت أو الإيقاع للمساعدة في التذكر.",
    type: "musical",
  },
  {
    qu: "ألاحظ التغيّر في نبرة الآخرين أثناء الحديث.",
    type: "musical",
  },
  {
    qu: "أستمتع بسماع الخطب أو الحوارات أكثر من النصوص المكتوبة.",
    type: "musical",
  },
  {
    qu: "أستمتع بالتأمل في الطبيعة أو مراقبة الكائنات الحية.",
    type: "naturalist",
  },
  {
    qu: "ألاحظ تغيرات الطقس أو الفصول بسهولة.",
    type: "naturalist",
  },
  {
    qu: "أهتم بالحيوانات والنباتات من حولي.",
    type: "naturalist",
  },
  {
    qu: "أحبّ الأنشطة الخارجية أكثر من الأماكن المغلقة.",
    type: "naturalist",
  },
  {
    qu: "أميز أنواع الأشجار أو الطيور أو الصخور.",
    type: "naturalist",
  },
  {
    qu: "أشعر بالراحة النفسية في الأماكن الطبيعية.",
    type: "naturalist",
  },
  {
    qu: "أهتم بالحفاظ على البيئة والنظافة العامة.",
    type: "naturalist",
  },
  {
    qu: "أستمتع بالرحلات أو المغامرات البيئية.",
    type: "naturalist",
  },
  {
    qu: "ألاحظ أدق التفاصيل في المناظر الطبيعية.",
    type: "naturalist",
  },
  {
    qu: "أتعلم بسرعة من الظواهر البيئية أو الميدانية.",
    type: "naturalist",
  },
  {
    qu: "أستطيع تخيّل الأشكال أو الأماكن بوضوح ذهني.",
    type: "spatial",
  },
  {
    qu: "ألاحظ التفاصيل البصرية في الصور والمشاهد.",
    type: "spatial",
  },
  {
    qu: "أرتب الأشياء بطريقة منسقة وجذابة بصريًا.",
    type: "spatial",
  },
  {
    qu: "أستمتع بالرسم أو التصميم أو التصوير.",
    type: "spatial",
  },
  {
    qu: "أستخدم الخرائط والمخططات بسهولة.",
    type: "spatial",
  },
  {
    qu: "أتعلم بشكل أفضل عندما أرى صورًا أو رسومات توضيحية.",
    type: "spatial",
  },
  {
    qu: "ألاحظ الجمال في الألوان والتناسق.",
    type: "spatial",
  },
  {
    qu: "أستطيع تكوين صورة ذهنية لأي فكرة أسمعها.",
    type: "spatial",
  },
  {
    qu: "أحبّ التجارب المرئية مثل الفيديوهات أو الرسوم المتحركة.",
    type: "spatial",
  },
  {
    qu: "أمتلك حسًّا قويًا بالاتجاهات والمواقع.",
    type: "spatial",
  },
];
// إنشاء HTML للسؤال

const originalQuestions = importing
  // .filter((x, i) => i<10)
  .map((x) => {
    return {
      type: x.type,
      questionType: "rating",
      question: "قيّم مدى انطباق هذه العبارة عليك:",
      weight: 1,
      difficulty: "medium",
      reliability: 1,
      statements: [{ text: x.qu, value: 0 }],
    };
  });
// [
// أسئلة الذكاء اللغوي
// {
//     type: 'linguistic',
//     questionType: 'single',
//     question: 'عندما تذاكر، أي أسلوب تفضّل؟',
//     weight: 1.2,
//     difficulty: 'easy',
//     reliability: 0.9,
//     options: [
//         { text: 'قراءة ملخّصات وكتب', value: 2 },
//         { text: 'مشاهدة فيديو تعليمي', value: 1 },
//         { text: 'عمل مخطط بصري', value: 1 },
//         { text: 'مناقشة مع صديق', value: 2 }
//     ]
// },
// {
//     type: 'linguistic',
//     questionType: 'single',
//     question: 'عندما تذاكر، أي أسلوب تفضّل؟',
//     weight: 1.2,
//     difficulty: 'easy',
//     reliability: 0.9,
//     options: [
//         { text: 'قراءة ملخّصات وكتب', value: 2 },
//         { text: 'مشاهدة فيديو تعليمي', value: 1 },
//         { text: 'عمل مخطط بصري', value: 1 },
//         { text: 'مناقشة مع صديق', value: 2 }
//     ]
// },
// {
//     type: 'bodily',
//     questionType: 'multiple',
//     question: 'أي بيئة عمل تفضل؟ (اختر كل ما ينطبق)',
//     weight: 1.0,
//     difficulty: 'easy',
//     reliability: 0.7,
//     options: [
//         { text: 'ورشة عمل أو مختبر', value: 4 },
//         { text: 'في الهواء الطلق', value: 4 },
//         { text: 'صالة رياضية', value: 3 },
//         { text: 'مكان يسمح بالحركة', value: 4 }
//     ]
// },
// {
//     type: 'musical',
//     questionType: 'ranking',
//     question: 'رتّب هذه الأنشطة الإيقاعية حسب استمتاعك بها (الأول الأكثر تفضيلاً):',
//     weight: 1.2,
//     difficulty: 'medium',
//     reliability: 0.8,
//     options: [
//         { text: 'التصفيق على الإيقاع', value: 0 },
//         { text: 'المشي بخطوات منتظمة', value: 0 },
//         { text: 'تنظيم الأعمال بجدول زمني', value: 0 },
//         { text: 'ممارسة التمارين بإيقاع ثابت', value: 0 }
//     ]
// },
// {
//     type: 'naturalist',
//     questionType: 'rating',
//     question: 'قيّم مدى انطباق هذه العبارات عليك (1-5 نجوم):',
//     weight: 1,
//     difficulty: 'medium',
//     reliability: 1,
//     statements: [
//         { text: 'أشعر بالسلام في الطبيعة', value: 0 },
//     ]
// }
// ];

// خلط الأسئلة عشوائياً
const questions = shuffleArray(originalQuestions);
// متغيرات الحالة
let currentUser = "";
let currentQuestionIndex = 0;
let answers = {};
let startTime = Date.now();
let timerInterval;

// عناصر DOM
const welcomeScreen = document.getElementById("welcome-screen");
const onboardingScreen = document.getElementById("onboarding-screen");
const testScreen = document.getElementById("test-screen");
const resultsScreen = document.getElementById("results-screen");
const endScreen = document.getElementById("end-screen");
const userNameInput = document.getElementById("userName");
const startBtn = document.getElementById("startBtn");
const howItWorksBtn = document.getElementById("howItWorksBtn");
const howItWorksModal = document.getElementById("howItWorksModal");
const closeModalBtn = document.getElementById("closeModalBtn");
const startTestBtn = document.getElementById("startTestBtn");
const midwayBreak = document.getElementById("midway-break");
const continueTestBtn = document.getElementById("continueTestBtn");

// أحداث الأزرار
startBtn.addEventListener("click", function () {
  showOnboarding();
});

howItWorksBtn.addEventListener("click", function () {
  howItWorksModal.classList.remove("hidden");
  howItWorksModal.classList.add("flex");
});

closeModalBtn.addEventListener("click", function () {
  howItWorksModal.classList.add("hidden");
  howItWorksModal.classList.remove("flex");
});

// أحداث نافذة الاختبار غير المكتمل
document
  .getElementById("continueTestFromModal")
  .addEventListener("click", function () {
    document.getElementById("incompleteTestModal").classList.add("hidden");
    // الانتقال لأول سؤال غير مُجاب عليه
    goToFirstUnansweredQuestion();
  });

document
  .getElementById("showPartialResults")
  .addEventListener("click", function () {
    document.getElementById("incompleteTestModal").classList.add("hidden");
    proceedWithResults();
  });

document
  .getElementById("closeIncompleteModal")
  .addEventListener("click", function () {
    document.getElementById("incompleteTestModal").classList.add("hidden");
  });

// أحداث نافذة مراجعة الاختبار
document
  .getElementById("proceedToResults")
  .addEventListener("click", function () {
    document.getElementById("reviewTestModal").classList.add("hidden");
    proceedWithResults();
  });

document.getElementById("reviewAnswers").addEventListener("click", function () {
  document.getElementById("reviewTestModal").classList.add("hidden");
  // الانتقال لأول سؤال غير مُجاب عليه أو السؤال الأول
  const firstUnanswered = findFirstUnansweredQuestion();
  if (firstUnanswered !== -1) {
    currentQuestionIndex = firstUnanswered;
  } else {
    currentQuestionIndex = 0;
  }
  showQuestion(currentQuestionIndex);
});

document
  .getElementById("closeReviewModal")
  .addEventListener("click", function () {
    document.getElementById("reviewTestModal").classList.add("hidden");
  });

startTestBtn.addEventListener("click", function () {
  startTest();
});

continueTestBtn.addEventListener("click", function () {
  midwayBreak.classList.add("hidden");
});

// إظهار نافذة استكمال الاختبار

// إظهار شاشة الدليل السريع
function showOnboarding() {
  welcomeScreen.classList.add("hidden");
  onboardingScreen.classList.remove("hidden");
}

// بدء الاختبار
function startTest() {
  onboardingScreen.classList.add("hidden");
  testScreen.classList.remove("hidden");

  // إنشاء شريط التقدم
  createProgressTimeline();

  // بدء المؤقت
  startTimer();

  // عرض السؤال الأول
  showQuestion(0);
}

// إنشاء شريط التقدم التفاعلي
function createProgressTimeline() {
  const timeline = document.getElementById("progressTimeline");
  timeline.innerHTML = "";

  for (
    let i = currentQuestionIndex - 4;
    i <= (currentQuestionIndex > 4 ? currentQuestionIndex + 4 : 9);
    i++
  ) {
    if (i <= originalQuestions.length && i > 0) {
      createDot(i);
    }
  }

  function createDot(i) {
    const dot = document.createElement("div");
    const isAnswered = answers[i - 1] !== undefined;
    const isCurrent = i === currentQuestionIndex + 1;

    let className =
      "w-8 h-8 rounded-full border-2 flex items-center justify-center text-xs font-bold cursor-pointer transition-all ";

    if (isAnswered) {
      className +=
        "bg-green-500 text-white border-green-500 hover:bg-green-600";
    } else if (isCurrent) {
      className += "bg-indigo-600 text-white border-indigo-600 animate-pulse";
    } else {
      className +=
        "bg-white text-gray-400 border-gray-300 hover:border-gray-400";
    }
    dot.className = className;
    dot.textContent = i;
    dot.title = isAnswered
      ? "تمت الإجابة"
      : isCurrent
      ? "السؤال الحالي"
      : "لم تتم الإجابة";
    dot.addEventListener("click", () => goToQuestion(i - 1));
    timeline.appendChild(dot);
  }
}

// الانتقال لسؤال محدد
function goToQuestion(index) {
  if (index >= 0 && index < questions.length) {
    currentQuestionIndex = index;
    showQuestion(index);
  }
}

// الانتقال لأول سؤال غير مُجاب عليه
function goToFirstUnansweredQuestion() {
  for (let i = 0; i < questions.length; i++) {
    if (answers[i] === undefined) {
      currentQuestionIndex = i;
      showQuestion(i);
      return;
    }
  }
}

// عرض شرح نوع السؤال
function showQuestionTypeExplanation(questionType) {
  const explanationContainer = document.getElementById(
    "questionTypeExplanation"
  );
  let explanationHTML = "";

  switch (questionType) {
    case "single":
      explanationHTML = `
                        <div class="flex items-center gap-3">
                            <span class="text-2xl">🎯</span>
                            <div>
                                <h4 class="font-semibold text-blue-800">اختيار واحد</h4>
                                <p class="text-sm text-blue-600">اختر الإجابة الأقرب لك من بين الخيارات</p>
                            </div>
                        </div>
                    `;
      break;

    case "multiple":
      explanationHTML = `
                        <div class="flex items-center gap-3">
                            <span class="text-2xl">☑️</span>
                            <div>
                                <h4 class="font-semibold text-blue-800">اختيار متعدد</h4>
                                <p class="text-sm text-blue-600">اختر كل ما ينطبق عليك، ثم اضغط "تأكيد الإجابة"</p>
                            </div>
                        </div>
                    `;
      break;

    case "ranking":
      explanationHTML = `
                        <div class="flex items-center gap-3">
                            <span class="text-2xl">📊</span>
                            <div>
                                <h4 class="font-semibold text-blue-800">ترتيب حسب التفضيل</h4>
                                <p class="text-sm text-blue-600">استخدم الأزرار ↑ ↓ لترتيب العناصر من الأكثر تفضيلاً إلى الأقل</p>
                            </div>
                        </div>
                    `;
      break;

    case "rating":
      explanationHTML = `
                        <div class="flex items-center gap-3">
                            <span class="text-2xl">⭐</span>
                            <div>
                                <h4 class="font-semibold text-blue-800">تقييم بالنجوم</h4>
                                <p class="text-sm text-blue-600">قيّم كل عبارة من 1 إلى 5 نجوم حسب انطباقها عليك</p>
                            </div>
                        </div>
                    `;
      break;
  }

  explanationContainer.innerHTML = explanationHTML;
}

// عرض السؤال
function showQuestion(index) {
  const question = questions[index] || "noQ";
  const intelligence = intelligences[question.type] || "noQ";
  const container = document.getElementById("questionContainer");

  // إضافة تأثير الخروج
  container.classList.add("question-transition", "question-exit");

  setTimeout(() => {
    // إخفاء معلومات الذكاء الحالي لجعل الاختبار أكثر حيادية
    document.getElementById("currentIntelligenceIcon").textContent = "🧠";
    document.getElementById("currentIntelligenceName").textContent =
      "اختبار الذكاءات المتعددة";
    // document.getElementById('currentIntelligenceIcon').textContent = intelligence.icon;
    // document.getElementById('currentIntelligenceName').textContent = intelligence.name;

    // تحديث رقم السؤال والتقدم
    document.getElementById("currentQuestion").textContent = index;
    const progress = ((index + 1) / (questions.length + 1)) * 100;
    document.getElementById("progressPercent").textContent =
      Math.round(progress) + "%";

    // تحديث دائرة التقدم
    const circle = document.getElementById("progressCircle");
    const circumference = 2 * Math.PI * 20;
    const offset = circumference - (progress / 100) * circumference;
    circle.style.strokeDashoffset = offset;

    // تحديث النص التقدمي
    const answeredCount = Object.keys(answers).length;
    document.getElementById(
      "progressText"
    ).textContent = `تمت الإجابة على ${answeredCount} من ${
      questions.length
    } · المتبقي: ${questions.length - answeredCount} سؤالًا`;

    // تحديث شريط التقدم
    createProgressTimeline();
    if (question == "noQ") {
      updateNavigationButtons();
      // container.innerHTML = `<div class="option-item"> <div class="rating-scale">نهاية الاسئلة</div></div>`;
      container.innerHTML = `<div class="option-item items-center"> <div class="rating-scale text-center" style="flex-direction: column;">نهاية الاسئلة</div></div>`;
      return;
    }

    // عرض شرح نوع السؤال
    // showQuestionTypeExplanation(question.questionType);

    // عرض السؤال الجديد
    container.innerHTML = createQuestionHTML(question, index);

    // إضافة تأثير الدخول
    container.classList.remove("question-exit");
    container.classList.add("question-enter");

    setTimeout(() => {
      container.classList.remove("question-enter");
      container.classList.add("question-active");
    }, 50);

    // تحديث أزرار التنقل
    updateNavigationButtons();
    // document.getElementById('prevBtn').disabled = index === 0;
    // document.getElementById('nextBtn').disabled = !answers[index];

    // إضافة مستمعي الأحداث
    addQuestionEventListeners(question, index);

    // استراحة منتصف الطريق
    if (index === 20) {
      showMidwayBreak();
    }
  }, 200);
}

// إنشاء HTML للسؤال
function createQuestionHTML(question, index) {
  let html = `<h3 class="text-2xl md:text-3xl font-semibold mb-8 text-center leading-relaxed">${question.question}</h3>`;
  html += '<div class="space-y-6">';
  question.statements.forEach((statement, i) => {
    // if (!answers[index]) {
    //     answers[index] = new Array(1).fill(0);
    // }
    // // حفظ التقييم
    // answers[index][0] = Math.ceil(Math.random() * 5);

    const currentRating =
      answers[index] && answers[index][i] ? answers[index][i] : 0;
    html += `
                    <div class="option-item ${
                      question.type === "preference" ? "preference-option" : ""
                    }">
                        <div class="option-text">${statement.text}</div>
                        <div class="rating-scale">
                            <div class="rating-label">لا تنطبق</div>
                            <div class="rating-buttons">
                                ${[1, 2, 3, 4, 5]
                                  .map(
                                    (rating) => `
                                    <div class="rating-btn ${
                                      currentRating === rating ? "selected" : ""
                                    }" 
                                         data-rating="${rating}"
                                         onclick="selectRating(${index}, ${rating})">
                                        ${rating}
                                    </div>
                                `
                                  )
                                  .join("")}
                            </div>
                            <div class="rating-label">تنطبق تماماً</div>
                        </div>
                    </div>
                `;

    // for (let star = 1; star <= 5; star++) {
    //     const filled = star <= currentRating ? 'text-yellow-400' : 'text-gray-300';
    //     html += `
    //                 <button type="button" class="star-btn text-3xl hover:text-yellow-400 transition-colors ${filled}"
    //                         data-rating="${star}" data-statement="${i}">
    //                     ★
    //                 </button>
    //             `;
    // }
  });
  // html += '</div></div>';
  return html;
}

// إضافة مستمعي الأحداث للسؤال
function addQuestionEventListeners(question, index) {
  // initializeRatingSystem(question, index);
}
function selectRating(index, rating) {
  // answers[questionIndex][optionIndex] = rating;
  if (!answers[index]) {
    answers[index] = new Array(1).fill(0);
  }

  // حفظ التقييم
  answers[index][0] = rating;

  const ratingButtons = document.querySelectorAll(".rating-btn");
  ratingButtons.forEach((btn) => {
    const btnRating = parseInt(btn.getAttribute("data-rating"));
    btn.classList.toggle("selected", btnRating === rating);
  });
  saveAnswer();
  updateNavigationButtons();
  setTimeout(() => {
    if (
      index < questions.length &&
      currentQuestionIndex !== index + 1 &&
      autoSubmit
    ) {
      currentQuestionIndex = index + 1;
      showQuestion(currentQuestionIndex);
    } else if (index >= questions.length) {
      showReviewModal();
    }
  }, 300);
}
// document.getElementById('startBtn').click()
// document.getElementById('startTestBtn').click()

// تهيئة الترتيب بالأزرار
function initializeSortable(index) {
  const container = document.getElementById("rankingContainer");

  // إضافة مستمعي الأحداث لأزرار الحركة
  container.addEventListener("click", function (e) {
    if (
      e.target.classList.contains("move-up-btn") ||
      e.target.classList.contains("move-down-btn")
    ) {
      const direction = e.target.dataset.direction;
      const itemIndex = parseInt(e.target.dataset.itemIndex);
      const items = Array.from(container.children);
      const currentItem = items[itemIndex];

      if (direction === "up" && itemIndex > 0) {
        // تحريك للأعلى
        const previousItem = items[itemIndex - 1];
        container.insertBefore(currentItem, previousItem);
      } else if (direction === "down" && itemIndex < items.length - 1) {
        // تحريك للأسفل
        const nextItem = items[itemIndex + 1];
        container.insertBefore(nextItem, currentItem);
      }

      updateRankingNumbers();
      updateMoveButtons();
      saveRankingAnswer(index);
    }
  });
}

// تحديث أزرار الحركة
function updateMoveButtons() {
  const container = document.getElementById("rankingContainer");
  const items = Array.from(container.children);

  items.forEach((item, index) => {
    const upBtn = item.querySelector(".move-up-btn");
    const downBtn = item.querySelector(".move-down-btn");

    // تحديث data-item-index
    upBtn.dataset.itemIndex = index;
    downBtn.dataset.itemIndex = index;

    // تعطيل/تفعيل الأزرار حسب الموقع
    if (index === 0) {
      upBtn.disabled = true;
      upBtn.classList.add("opacity-50", "cursor-not-allowed");
    } else {
      upBtn.disabled = false;
      upBtn.classList.remove("opacity-50", "cursor-not-allowed");
    }

    if (index === items.length - 1) {
      downBtn.disabled = true;
      downBtn.classList.add("opacity-50", "cursor-not-allowed");
    } else {
      downBtn.disabled = false;
      downBtn.classList.remove("opacity-50", "cursor-not-allowed");
    }
  });
}

// تحديث أرقام الترتيب
function updateRankingNumbers() {
  const items = document.querySelectorAll(".ranking-item");
  items.forEach((item, i) => {
    const numberSpan = item.querySelector("span");
    numberSpan.textContent = i + 1;
  });
}

// حفظ إجابة الترتيب
function saveRankingAnswer(index) {
  const items = document.querySelectorAll(".ranking-item");
  answers[index] = Array.from(items).map((item) =>
    parseInt(item.dataset.index)
  );
  saveAnswer();
  updateNavigationButtons();
}

// حفظ الترتيب الافتراضي عند تحميل السؤال
function saveDefaultRanking(index) {
  if (!answers[index]) {
    // إذا لم تكن هناك إجابة محفوظة، احفظ الترتيب الافتراضي
    answers[index] = [0, 1, 2, 3]; // الترتيب الأصلي
    saveAnswer();
    updateNavigationButtons();
  }
}

// تهيئة نظام التقييم بالنجوم
function initializeRatingSystem(question, index) {
  const starButtons = document.querySelectorAll(".star-btn");

  starButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const rating = parseInt(this.dataset.rating);
      const statementIndex = parseInt(this.dataset.statement);

      // تهيئة مصفوفة الإجابات إذا لم تكن موجودة
      if (!answers[index]) {
        answers[index] = new Array(question.statements.length).fill(0);
      }

      // حفظ التقييم
      answers[index][statementIndex] = rating;

      // تحديث النجوم بصرياً
      const statementStars = document.querySelectorAll(
        `[data-statement="${statementIndex}"] .star-btn`
      );
      statementStars.forEach((star, i) => {
        if (i < rating) {
          star.classList.remove("text-gray-300");
          star.classList.add("text-yellow-400");
        } else {
          star.classList.remove("text-yellow-400");
          star.classList.add("text-gray-300");
        }
      });

      saveAnswer();
      updateNavigationButtons();
    });
  });

  // تفعيل الزر إذا كانت هناك إجابة محفوظة مسبقاً
  if (answers[index] && answers[index].every((rating) => rating > 0)) {
    const confirmBtn = document.getElementById("confirmRatingBtn");
    if (confirmBtn) {
      confirmBtn.disabled = false;
    }
  }
}

// حفظ الإجابة وإظهار رسالة
function saveAnswer() {
  const message = document.getElementById("autoSaveMessage");
  message.style.opacity = "1";
  setTimeout(() => {
    message.style.opacity = "0";
  }, 600);
}

// استرداد البيانات المحفوظة
function loadSavedData() {
  const savedAnswers = localStorage.getItem("multipleIntelligenceAnswers");
  const savedProgress = localStorage.getItem("multipleIntelligenceProgress");

  if (savedAnswers && savedProgress) {
    const progress = JSON.parse(savedProgress);
    const timeDiff = Date.now() - progress.startTime;

    // إذا مر أقل من 24 ساعة، اعرض خيار الاستكمال
    if (timeDiff < 24 * 60 * 60 * 1000) {
      return {
        answers: JSON.parse(savedAnswers),
        progress: progress,
        canResume: true,
      };
    }
  }

  return { canResume: false };
}

// إظهار مؤشر الانتقال التلقائي
// function showAutoAdvanceIndicator() {
//     const indicator = document.getElementById('autoAdvanceIndicator');
//     indicator.style.opacity = '1';
// }

// // إخفاء مؤشر الانتقال التلقائي
// function hideAutoAdvanceIndicator() {
//     const indicator = document.getElementById('autoAdvanceIndicator');
//     indicator.style.opacity = '0';
// }

// تحديث أزرار التنقل
function updateNavigationButtons() {
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  // const finishBtn = document.getElementById('finishTestBtn');

  prevBtn.disabled = currentQuestionIndex === 0;
  nextBtn.disabled = !answers[currentQuestionIndex] || autoSubmit;

  // إظهار زر الإنهاء إذا تم الإجابة على 90% من الأسئلة على الأقل
  const answeredCount = Object.keys(answers).length;
  const completionPercentage = (answeredCount / questions.length) * 100;

  // تحديث نص زر التالي في السؤال الأخير
  if (currentQuestionIndex === questions.length) {
    nextBtn.textContent = "🏁 إنهاء الاختبار";
    nextBtn.classList.remove("bg-indigo-600", "hover:bg-indigo-700");
    nextBtn.classList.add("bg-green-600", "hover:bg-green-700");
    nextBtn.disabled = false;
  } else {
    nextBtn.textContent = "التالي";
    nextBtn.classList.remove("bg-green-600", "hover:bg-green-700");
    nextBtn.classList.add("bg-indigo-600", "hover:bg-indigo-700");
  }
}

// أحداث أزرار التنقل
document.getElementById("prevBtn").addEventListener("click", function () {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion(currentQuestionIndex);
    updateNavigationButtons();
  }
});

document.getElementById("nextBtn").addEventListener("click", function () {
  if (currentQuestionIndex < questions.length) {
    currentQuestionIndex++;
    showQuestion(currentQuestionIndex);
  } else {
    showReviewModal();
  }
});
// document.querySelector('.autoSubmit').addEventListener('click', function () {
//     const autoSubmitText = document.getElementById('autoSubmitText');
//     autoSubmit = !autoSubmit
//     autoSubmitText.textContent = `💡 اضغط هنا ${autoSubmit ? 'لتعطيل' : 'لتفعيل'} الانتقال تلقائياً بعد الإجابة`
//     autoSubmitText.classList.toggle("bg-blue-100", autoSubmit)
//     updateNavigationButtons()
// });

// زر حفظ لاحقاً
// document.getElementById('saveLaterBtn').addEventListener('click', function () {
//     // حفظ التقدم الحالي
//     saveAnswer();

//     // إظهار رسالة تأكيد مع معلومات التقدم
//     const answeredCount = Object.keys(answers).length;
//     const progress = Math.round((answeredCount / questions.length) * 100);

//     if (confirm(`تم حفظ تقدمك!\n\nالتقدم الحالي: ${answeredCount} من ${questions.length} سؤالاً (${progress}%)\n\nيمكنك العودة لاحقاً لإكمال الاختبار من حيث توقفت.\n\nهل تريد الخروج الآن؟`)) {
//         // العودة للشاشة الرئيسية
//         testScreen.classList.add('hidden');
//         welcomeScreen.classList.remove('hidden');

//         // إيقاف المؤقت
//         if (timerInterval) {
//             clearInterval(timerInterval);
//         }

//         // إظهار رسالة نجاح الحفظ
//         setTimeout(() => {
//             alert('✅ تم حفظ تقدمك بنجاح!\n\nعند العودة، اضغط "ابدأ الاختبار" وستجد خيار "استكمال الاختبار" للمتابعة من حيث توقفت.');
//         }, 500);
//     }
// });

// زر إنهاء الاختبار
// document.getElementById('finishTestBtn').addEventListener('click', function () {
//     showReviewModal();
// });

// // زر الأسئلة غير المجابة
// document.getElementById('goToUnansweredBtn').addEventListener('click', function () {
//     goToFirstUnansweredQuestion();
// });

// بدء المؤقت
function startTimer() {
  timerInterval = setInterval(function () {
    const elapsed = Date.now() - startTime;
    const minutes = Math.floor(elapsed / 60000);
    const seconds = Math.floor((elapsed % 60000) / 1000);
    document.getElementById("timerDisplay").textContent = `${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }, 1000);
}

// إظهار استراحة منتصف الطريق
function showMidwayBreak() {
  midwayBreak.classList.remove("hidden");

  // تمرين التنفس
  let breathCount = 0;
  const breathingText = document.getElementById("breathingText");

  const breathingInterval = setInterval(function () {
    if (breathCount < 5) {
      // 5 دورات تنفس
      if (breathCount % 2 === 0) {
        breathingText.textContent = `شهيق... ${4 - (breathCount % 4)}`;
      } else {
        breathingText.textContent = `زفير... ${4 - (breathCount % 4)}`;
      }
      breathCount++;
    } else {
      clearInterval(breathingInterval);
      breathingText.textContent = "جاهز للمتابعة!";
    }
  }, 1000);
}

// حساب النتائج مع نظام الأوزان والموثوقية المحسن
function calculateResults() {
  const scores = {};
  const maxScores = {};
  const actualScores = {};
  const weightedMaxScores = {};
  const weightedActualScores = {};
  const questionCounts = {};
  const detailedBreakdown = {};
  const reliabilityScores = {};

  // تهيئة النقاط والحد الأقصى لكل نوع ذكاء
  Object.keys(intelligences).forEach((type) => {
    scores[type] = 0;
    maxScores[type] = 0;
    actualScores[type] = 0;
    weightedMaxScores[type] = 0;
    weightedActualScores[type] = 0;
    questionCounts[type] = 0;
    reliabilityScores[type] = 0;
    detailedBreakdown[type] = {
      questions: [],
      totalPossible: 0,
      totalAchieved: 0,
      answeredQuestions: 0,
      weightedPossible: 0,
      weightedAchieved: 0,
      averageReliability: 0,
      difficultyBreakdown: { easy: 0, medium: 0, hard: 0 },
    };
  });

  // حساب النقاط والحد الأقصى لكل سؤال مع نظام الأوزان المحسن
  questions.forEach((question, index) => {
    const questionType = question.type;
    const weight = question.weight || 1.0; // الوزن الافتراضي 1.0
    const reliability = question.reliability || 0.8; // الموثوقية الافتراضية 80%
    const difficulty = question.difficulty || "medium";

    questionCounts[questionType]++;

    // حساب الحد الأقصى للسؤال مع التحقق المتقدم
    let questionMaxScore = 0;
    let questionActualScore = 0;
    let isAnswered = false;

    switch (question.questionType) {
      case "rating":
        questionMaxScore = 4; // 5 نجوم لكل عبارة

        // حساب النقاط الفعلية
        if (
          answers[index] !== undefined &&
          answers[index] !== null &&
          Array.isArray(answers[index]) &&
          answers[index].length === question.statements.length
        ) {
          let validRatings = 0;
          answers[index].forEach((rating) => {
            if (typeof rating === "number" && rating >= 1 && rating <= 5) {
              questionActualScore += rating - 1;
              validRatings++;
            }
          });

          // اعتبر السؤال مُجاب عليه إذا تم تقييم 80% من العبارات على الأقل
          isAnswered =
            validRatings >= Math.ceil(question.statements.length * 0.8);

          if (!isAnswered && validRatings > 0) {
            // إعطاء نقاط جزئية للتقييمات الناقصة
            questionActualScore =
              (questionActualScore / validRatings) *
              question.statements.length *
              0.7;
            isAnswered = true;
          }
        }
        break;
    }

    // التأكد من أن النقاط في النطاق المنطقي
    questionActualScore = Math.max(
      0,
      Math.min(questionMaxScore, questionActualScore)
    );

    // تطبيق عامل الموثوقية على النقاط
    const reliableActualScore = questionActualScore * reliability;
    const reliableMaxScore = questionMaxScore * reliability;

    // إضافة النقاط للمجاميع (العادية والموزونة)
    maxScores[questionType] += questionMaxScore;
    actualScores[questionType] += questionActualScore;
    weightedMaxScores[questionType] += questionMaxScore * weight;
    weightedActualScores[questionType] += reliableActualScore * weight;
    reliabilityScores[questionType] += reliability;

    // حفظ تفاصيل السؤال للتشخيص المحسن
    detailedBreakdown[questionType].questions.push({
      questionIndex: index + 1,
      questionType: question.questionType,
      maxScore: questionMaxScore,
      actualScore: questionActualScore,
      weight: weight,
      reliability: reliability,
      difficulty: difficulty,
      weightedMaxScore: questionMaxScore * weight,
      weightedActualScore: reliableActualScore * weight,
      isAnswered: isAnswered,
      answer: answers[index],
    });

    if (isAnswered) {
      detailedBreakdown[questionType].answeredQuestions++;
      detailedBreakdown[questionType].difficultyBreakdown[difficulty]++;
    }

    detailedBreakdown[questionType].totalPossible += questionMaxScore;
    detailedBreakdown[questionType].totalAchieved += questionActualScore;
    detailedBreakdown[questionType].weightedPossible +=
      questionMaxScore * weight;
    detailedBreakdown[questionType].weightedAchieved +=
      reliableActualScore * weight;
  });

  // تحويل النقاط إلى نسب مئوية مع نظام الأوزان المحسن
  Object.keys(actualScores).forEach((type) => {
    // حساب متوسط الموثوقية لهذا النوع من الذكاء
    const avgReliability =
      questionCounts[type] > 0
        ? reliabilityScores[type] / questionCounts[type]
        : 0;
    detailedBreakdown[type].averageReliability =
      Math.round(avgReliability * 100) / 100;

    if (
      weightedMaxScores[type] > 0 &&
      detailedBreakdown[type].answeredQuestions > 0
    ) {
      // حساب النسبة المئوية الموزونة بدقة عالية
      const weightedPercentage =
        (weightedActualScores[type] / weightedMaxScores[type]) * 100;

      // تطبيق عامل تصحيح الصعوبة
      const difficultyFactor = calculateDifficultyFactor(
        detailedBreakdown[type].difficultyBreakdown,
        detailedBreakdown[type].answeredQuestions
      );

      // تطبيق عامل تصحيح الموثوقية
      const reliabilityFactor = Math.min(1.0, avgReliability + 0.1); // مكافأة صغيرة للموثوقية العالية

      // حساب النتيجة النهائية
      let finalScore =
        weightedPercentage * difficultyFactor * reliabilityFactor;

      // تقريب لأقرب عُشر مع ضمان الدقة
      scores[type] = Math.round(finalScore * 10) / 10;

      // التأكد من أن النسبة في النطاق الصحيح
      scores[type] = Math.max(0, Math.min(100, scores[type]));

      // تطبيق تعديل للأسئلة غير المجابة (أقل قسوة مع النظام الجديد)
      const answerRate =
        detailedBreakdown[type].answeredQuestions / questionCounts[type];
      if (answerRate < 1.0 && answerRate >= 0.6) {
        // تقليل النتيجة بناءً على نسبة الأسئلة غير المجابة (أقل عقوبة)
        const penalty = (1 - answerRate) * 0.2; // عقوبة 20% كحد أقصى
        scores[type] = Math.round(scores[type] * (1 - penalty) * 10) / 10;
      } else if (answerRate < 0.6) {
        // إذا أُجيب على أقل من 60% من الأسئلة، تطبيق عقوبة أكبر
        const penalty = Math.min(0.5, (1 - answerRate) * 0.8);
        scores[type] = Math.round(scores[type] * (1 - penalty) * 10) / 10;
      }
    } else {
      scores[type] = 0;
    }
  });

  // دالة حساب عامل الصعوبة
  function calculateDifficultyFactor(difficultyBreakdown, totalAnswered) {
    if (totalAnswered === 0) return 1.0;

    const easyWeight = 0.9; // الأسئلة السهلة تحصل على وزن أقل قليلاً
    const mediumWeight = 1.0; // الأسئلة المتوسطة وزن عادي
    const hardWeight = 1.2; // الأسئلة الصعبة تحصل على مكافأة

    const weightedTotal =
      difficultyBreakdown.easy * easyWeight +
      difficultyBreakdown.medium * mediumWeight +
      difficultyBreakdown.hard * hardWeight;

    return Math.min(1.15, weightedTotal / totalAnswered); // حد أقصى 15% مكافأة
  }

  // إنشاء تقرير تشخيصي شامل
  const diagnostics = {
    summary: {
      totalQuestions: questions.length,
      answeredQuestions: Object.keys(answers).length,
      completionRate: Math.round(
        (Object.keys(answers).length / questions.length) * 100
      ),
    },
    byIntelligenceType: {},
    validation: {
      errors: [],
      warnings: [],
      isReliable: true,
    },
    statistics: {},
  };

  // متوسطات عامة مرجعية لكل نوع ذكاء (بناءً على دراسات سابقة)
  const generalAverages = {
    linguistic: 62,
    logical: 58,
    spatial: 55,
    bodily: 60,
    musical: 45,
    interpersonal: 68,
    intrapersonal: 52,
    naturalist: 48,
  };

  // تفاصيل كل نوع ذكاء مع المقارنات
  Object.keys(intelligences).forEach((type) => {
    const breakdown = detailedBreakdown[type];
    const generalAvg = generalAverages[type];
    const scoreDifference = scores[type] - generalAvg;

    diagnostics.byIntelligenceType[type] = {
      name: intelligences[type].name,
      totalQuestions: questionCounts[type],
      answeredQuestions: breakdown.answeredQuestions,
      completionRate: Math.round(
        (breakdown.answeredQuestions / questionCounts[type]) * 100
      ),
      maxPossibleScore: maxScores[type],
      actualScore: actualScores[type],
      weightedMaxScore: weightedMaxScores[type],
      weightedActualScore: weightedActualScores[type],
      finalPercentage: scores[type],
      efficiency:
        maxScores[type] > 0
          ? Math.round((actualScores[type] / maxScores[type]) * 100)
          : 0,
      averageReliability: breakdown.averageReliability,
      difficultyBreakdown: breakdown.difficultyBreakdown,
      // مقارنة مع المتوسط العام
      generalAverage: generalAvg,
      differenceFromAverage: Math.round(scoreDifference * 10) / 10,
      performanceLevel:
        scoreDifference > 15
          ? "ممتاز"
          : scoreDifference > 5
          ? "جيد جداً"
          : scoreDifference > -5
          ? "متوسط"
          : scoreDifference > -15
          ? "أقل من المتوسط"
          : "يحتاج تطوير",
    };
  });

  // حساب الإحصائيات العامة
  const allScores = Object.values(scores);
  const validScores = allScores.filter((score) => score > 0);

  if (validScores.length > 0) {
    const sum = validScores.reduce((a, b) => a + b, 0);
    const mean = sum / validScores.length;
    const variance =
      validScores.reduce((acc, score) => acc + Math.pow(score - mean, 2), 0) /
      validScores.length;
    const standardDeviation = Math.sqrt(variance);

    diagnostics.statistics = {
      mean: Math.round(mean * 10) / 10,
      median: validScores.sort((a, b) => a - b)[
        Math.floor(validScores.length / 2)
      ],
      standardDeviation: Math.round(standardDeviation * 10) / 10,
      min: Math.min(...validScores),
      max: Math.max(...validScores),
      range: Math.max(...validScores) - Math.min(...validScores),
    };
  }

  // التحقق من صحة النتائج
  Object.keys(scores).forEach((type) => {
    const typeData = diagnostics.byIntelligenceType[type];

    // تحقق من اكتمال البيانات
    if (typeData.completionRate < 50) {
      diagnostics.validation.warnings.push(
        `نسبة إكمال منخفضة للذكاء ${intelligences[type].name}: ${typeData.completionRate}%`
      );
    }

    // تحقق من منطقية النتائج
    if (scores[type] === 0 && typeData.answeredQuestions > 0) {
      diagnostics.validation.errors.push(
        `نتيجة صفر غير منطقية للذكاء ${intelligences[type].name} رغم وجود إجابات`
      );
    }

    if (scores[type] > 95 && typeData.completionRate === 100) {
      diagnostics.validation.warnings.push(
        `نتيجة عالية جداً للذكاء ${intelligences[type].name}: ${scores[type]}%`
      );
    }
  });

  // تحقق من التوزيع العام
  if (diagnostics.statistics.mean) {
    if (diagnostics.statistics.mean < 15) {
      diagnostics.validation.warnings.push(
        `متوسط النتائج منخفض جداً: ${diagnostics.statistics.mean}%`
      );
      diagnostics.validation.isReliable = false;
    }

    if (diagnostics.statistics.mean > 85) {
      diagnostics.validation.warnings.push(
        `متوسط النتائج مرتفع جداً: ${diagnostics.statistics.mean}%`
      );
    }

    if (diagnostics.statistics.standardDeviation < 3) {
      diagnostics.validation.warnings.push(
        `تشابه كبير في النتائج قد يشير لعدم دقة الإجابات`
      );
    }
  }

  // طباعة التقرير التشخيصي الشامل
  // console.group("🔍 تقرير تشخيص النتائج الشامل");
  // console.log("📊 الملخص العام:", diagnostics.summary);
  // console.log("📈 الإحصائيات:", diagnostics.statistics);
  // console.log("🎯 تفاصيل كل نوع ذكاء:", diagnostics.byIntelligenceType);

  // if (diagnostics.validation.errors.length > 0) {
  //   console.error("❌ أخطاء:", diagnostics.validation.errors);
  // }

  // if (diagnostics.validation.warnings.length > 0) {
  //   console.warn("⚠️ تحذيرات:", diagnostics.validation.warnings);
  // }

  // console.log(
  //   "✅ موثوقية النتائج:",
  //   diagnostics.validation.isReliable ? "عالية" : "منخفضة"
  // );
  // console.groupEnd();

  // إرجاع النتائج مع معلومات إضافية
  return {
    scores: scores,
    diagnostics: diagnostics,
    isReliable: diagnostics.validation.isReliable,
  };
}

// إظهار نافذة مراجعة الاختبار
function showReviewModal() {
  const totalQuestions = questions.length;
  const answeredQuestions = Object.keys(answers).length;

  // إنشاء ملخص الإجابات
  createReviewSummary();

  // إظهار الأسئلة غير المجابة إن وجدت
  if (answeredQuestions < totalQuestions) {
    showUnansweredQuestions();
  } else {
    document.getElementById("unansweredSection").classList.add("hidden");
  }

  document.getElementById("reviewTestModal").classList.remove("hidden");
  document.getElementById("reviewTestModal").classList.add("flex");
}

// إنشاء ملخص الإجابات
function createReviewSummary() {
  const reviewSummary = document.getElementById("reviewSummary");
  const intelligenceTypes = Object.keys(intelligences);

  reviewSummary.innerHTML = intelligenceTypes
    .map((type) => {
      const intel = intelligences[type];
      const questionsOfType = questions.filter((q) => q.type === type);
      const answeredOfType = questionsOfType.filter((q, index) => {
        const questionIndex = questions.indexOf(q);
        return answers[questionIndex] !== undefined;
      }).length;

      const percentage =
        questionsOfType.length > 0
          ? Math.round((answeredOfType / questionsOfType.length) * 100)
          : 0;

      return `
                    <div class="text-center p-3 bg-white rounded-lg border border-gray-200">
                        <div class="text-2xl mb-1">${intel.icon}</div>
                        <div class="text-xs font-semibold text-gray-700 mb-1">${intel.name}</div>
                        <div class="text-sm font-bold" style="color: ${intel.color}">
                            ${answeredOfType}/${questionsOfType.length}
                        </div>
                        <div class="text-xs text-gray-500">${percentage}%</div>
                    </div>
                `;
    })
    .join("");
}

// إظهار الأسئلة غير المجابة
function showUnansweredQuestions() {
  const unansweredSection = document.getElementById("unansweredSection");
  const unansweredList = document.getElementById("unansweredList");

  const unanswered = [];
  for (let i = 0; i < questions.length; i++) {
    if (answers[i] === undefined) {
      unanswered.push(i + 1);
    }
  }

  if (unanswered.length > 0) {
    unansweredSection.classList.remove("hidden");

    const displayList =
      unanswered.length <= 15
        ? unanswered.join("، ")
        : unanswered.slice(0, 15).join("، ") +
          ` و${unanswered.length - 15} أسئلة أخرى`;

    unansweredList.innerHTML = `
                    <p class="mb-2">الأسئلة التالية لم تتم الإجابة عليها:</p>
                    <div class="bg-white rounded-lg p-3 border border-yellow-300">
                        <strong>أرقام الأسئلة:</strong> ${displayList}
                    </div>
                    <p class="mt-2 text-xs">💡 يمكنك الضغط على "مراجعة الإجابات" للعودة وإكمالها</p>
                `;
  }
}

// البحث عن أول سؤال غير مُجاب عليه
function findFirstUnansweredQuestion() {
  for (let i = 0; i < questions.length; i++) {
    if (answers[i] === undefined) {
      return i;
    }
  }
  return -1;
}

// عرض النتائج (الوظيفة القديمة محدثة)
function showResults() {
  showReviewModal();
}

// إظهار نافذة الاختبار غير المكتمل
function showIncompleteTestModal(answeredQuestions, totalQuestions) {
  const remainingQuestions = totalQuestions - answeredQuestions;
  const percentage = Math.round((answeredQuestions / totalQuestions) * 100);

  // العثور على أرقام الأسئلة غير المجابة
  const unansweredQuestions = [];
  for (let i = 0; i < totalQuestions; i++) {
    if (answers[i] === undefined) {
      unansweredQuestions.push(i + 1);
    }
  }

  const unansweredList =
    unansweredQuestions.length <= 10
      ? unansweredQuestions.join("، ")
      : unansweredQuestions.slice(0, 10).join("، ") + ` وأسئلة أخرى...`;

  document.getElementById("incompleteMessage").innerHTML = `
                تمت الإجابة على <strong>${answeredQuestions}</strong> من <strong>${totalQuestions}</strong> سؤالاً<br>
                <span class="text-sm text-gray-500">نسبة الإكمال: ${percentage}% • المتبقي: ${remainingQuestions} أسئلة</span><br>
                <div class="mt-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div class="text-sm font-semibold text-yellow-800 mb-1">الأسئلة غير المجابة:</div>
                    <div class="text-sm text-yellow-700">${unansweredList}</div>
                </div>
            `;

  document.getElementById("incompleteTestModal").classList.remove("hidden");
  document.getElementById("incompleteTestModal").classList.add("flex");
}

// المتابعة مع النتائج مع التحقق الشامل من الدقة
function proceedWithResults() {
  clearInterval(timerInterval);
  // testScreen.classList.add('hidden');
  // resultsScreen.classList.remove('hidden');

  // حساب النتائج مع التشخيص الشامل
  const resultsData = calculateResults();
  const scores = resultsData.scores;
  const diagnostics = resultsData.diagnostics;
  const isReliable = resultsData.isReliable;

  // عرض تحذير إذا كانت النتائج غير موثوقة
  if (!isReliable) {
    // console.warn(
    //   "⚠️ تحذير: النتائج قد تكون غير دقيقة بسبب عدم اكتمال الإجابات"
    // );

    // يمكن إضافة تنبيه بصري للمستخدم
    const warningDiv = document.createElement("div");
    warningDiv.className =
      "bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6 mx-4";
    warningDiv.innerHTML = `
                    <div class="flex items-center gap-3">
                        <span class="text-2xl">⚠️</span>
                        <div>
                            <h4 class="font-semibold text-yellow-800">تنبيه حول دقة النتائج</h4>
                            <p class="text-yellow-700 text-sm mt-1">
                                بعض النتائج قد تكون غير دقيقة بسبب عدم إكمال جميع الأسئلة. 
                                للحصول على تقييم أكثر دقة، يُنصح بإعادة الاختبار وإكمال جميع الأسئلة.
                            </p>
                        </div>
                    </div>
                `;
    resultsScreen.insertBefore(
      warningDiv,
      resultsScreen.firstChild.nextSibling
    );
  }

  // عرض اسم المستخدم
  document.getElementById("resultUserName").textContent = currentUser;

  // عرض ملخص نمط الذكاءات
  showIntelligencePattern(scores);

  // عرض مقارنة مع المتوسط العام
  showAverageComparison(scores, diagnostics);

  // عرض أقل 3 ذكاءات
  showLowestIntelligences(scores);

  // إنشاء الرسم البياني
  createResultsChart(scores);

  // عرض أعلى 3 ذكاءات
  showTopIntelligences(scores);

  // عرض التفاصيل الكاملة
  showDetailedResults(scores);

  // عرض التوصيات الشخصية
  showPersonalRecommendations(scores);

  // عرض خطة التطوير
  showDevelopmentPlan(scores);

  // إضافة معلومات إحصائية في أسفل الصفحة للمهتمين
  if (diagnostics.statistics.mean) {
    const statsDiv = document.createElement("div");
    statsDiv.className =
      "bg-gray-50 border border-gray-200 rounded-lg p-4 mt-8 mx-4";
    statsDiv.innerHTML = `
                    <details class="cursor-pointer">
                        <summary class="font-semibold text-gray-700 hover:text-gray-900">
                            📊 إحصائيات تفصيلية (للمهتمين)
                        </summary>
                        <div class="mt-3 grid md:grid-cols-3 gap-4 text-sm">
                            <div class="bg-white rounded p-3">
                                <div class="font-semibold text-gray-600">المتوسط العام</div>
                                <div class="text-lg font-bold text-indigo-600">${diagnostics.statistics.mean}%</div>
                            </div>
                            <div class="bg-white rounded p-3">
                                <div class="font-semibold text-gray-600">الانحراف المعياري</div>
                                <div class="text-lg font-bold text-blue-600">${diagnostics.statistics.standardDeviation}</div>
                            </div>
                            <div class="bg-white rounded p-3">
                                <div class="font-semibold text-gray-600">نسبة الإكمال</div>
                                <div class="text-lg font-bold text-green-600">${diagnostics.summary.completionRate}%</div>
                            </div>
                        </div>
                    </details>
                `;
    resultsScreen.appendChild(statsDiv);
  }

  shareResults();
}

// عرض مقارنة مع المتوسط العام
function showAverageComparison(scores, diagnostics) {
  const averageComparison = document.getElementById("averageComparison");

  // ترتيب الذكاءات حسب الفرق عن المتوسط
  const comparisons = Object.keys(scores)
    .map((key) => ({
      type: key,
      score: scores[key],
      ...intelligences[key],
      ...diagnostics.byIntelligenceType[key],
    }))
    .sort((a, b) => b.differenceFromAverage - a.differenceFromAverage);

  averageComparison.innerHTML = comparisons
    .map((intel) => {
      const isAboveAverage = intel.differenceFromAverage > 0;
      const difference = Math.abs(intel.differenceFromAverage);
      const arrowIcon = isAboveAverage ? "↗️" : "↘️";
      const colorClass = isAboveAverage ? "text-green-600" : "text-orange-600";
      const bgClass = isAboveAverage
        ? "bg-green-50 border-green-200"
        : "bg-orange-50 border-orange-200";

      return `
                    <div class="bg-white rounded-xl p-4 border-2 ${bgClass} hover:shadow-lg transition-shadow">
                        <div class="text-center mb-3">
                            <div class="text-3xl mb-2">${intel.icon}</div>
                            <h4 class="font-semibold text-gray-800 text-sm">${
                              intel.name
                            }</h4>
                        </div>
                        
                        <div class="space-y-2">
                            <div class="flex justify-between items-center">
                                <span class="text-xs text-gray-600">نتيجتك:</span>
                                <span class="font-bold" style="color: ${
                                  intel.color
                                }">${intel.score}%</span>
                            </div>
                            
                            <div class="flex justify-between items-center">
                                <span class="text-xs text-gray-600">المتوسط العام:</span>
                                <span class="font-semibold text-gray-700">${
                                  intel.generalAverage
                                }%</span>
                            </div>
                            
                            <div class="border-t pt-2">
                                <div class="flex items-center justify-center gap-2">
                                    <span class="text-lg">${arrowIcon}</span>
                                    <span class="font-bold ${colorClass}">
                                        ${
                                          isAboveAverage ? "+" : "-"
                                        }${difference}%
                                    </span>
                                </div>
                                <div class="text-center mt-1">
                                    <span class="text-xs px-2 py-1 rounded-full ${bgClass} ${colorClass} font-medium">
                                        ${intel.performanceLevel}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
    })
    .join("");
}

// عرض ملخص نمط الذكاءات
function showIntelligencePattern(scores) {
  const intelligencePattern = document.getElementById("intelligencePattern");

  // ترتيب الذكاءات حسب النقاط
  const sortedIntelligences = Object.keys(scores)
    .map((key) => ({
      type: key,
      score: scores[key],
      ...intelligences[key],
    }))
    .sort((a, b) => b.score - a.score);

  // تحديد النمط العام
  const topThree = sortedIntelligences.slice(0, 3);
  const averageScore =
    Object.values(scores).reduce((sum, score) => sum + score, 0) / 8;

  let patternDescription = "";
  if (averageScore >= 70) {
    patternDescription = "لديك توازن ممتاز في معظم أنواع الذكاءات! 🌟";
  } else if (averageScore >= 50) {
    patternDescription = "لديك توزيع متوازن مع تميز في بعض المجالات 👍";
  } else {
    patternDescription = "لديك نقاط قوة محددة يمكن التركيز عليها وتطويرها 💪";
  }

  intelligencePattern.innerHTML = `
                <div class="mb-6">
                    <p class="text-xl text-indigo-700 font-semibold mb-4">${patternDescription}</p>
                    <div class="bg-white rounded-xl p-4 border border-indigo-200">
                        <h4 class="font-semibold text-gray-800 mb-3">أقوى 3 ذكاءات لديك:</h4>
                        <div class="flex flex-wrap justify-center gap-4">
                            ${topThree
                              .map(
                                (intel, index) => `
                                <div class="flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 px-4 py-2 rounded-full border border-indigo-300">
                                    <span class="text-2xl">${intel.icon}</span>
                                    <span class="font-semibold text-indigo-800">${intel.name}</span>
                                    <span class="bg-indigo-600 text-white px-2 py-1 rounded-full text-sm font-bold">${intel.score}%</span>
                                </div>
                            `
                              )
                              .join("")}
                        </div>
                    </div>
                </div>
                
                <div class="grid grid-cols-4 md:grid-cols-8 gap-2">
                    ${sortedIntelligences
                      .map(
                        (intel) => `
                        <div class="text-center">
                            <div class="w-16 h-16 mx-auto mb-2 rounded-full flex items-center justify-center text-2xl" 
                                 style="background-color: ${intel.color}20; border: 2px solid ${intel.color}">
                                ${intel.icon}
                            </div>
                            <div class="text-xs font-bold" style="color: ${intel.color}">${intel.score}%</div>
                            <div class="text-xs text-gray-600 mt-1">${intel.name}</div>
                        </div>
                    `
                      )
                      .join("")}
                </div>
            `;
}

// عرض أقل 3 ذكاءات
function showLowestIntelligences(scores) {
  const lowestIntelligences = document.getElementById("lowestIntelligences");

  // ترتيب الذكاءات من الأقل للأعلى
  const sortedIntelligences = Object.keys(scores)
    .map((key) => ({
      type: key,
      score: scores[key],
      ...intelligences[key],
      details: intelligenceDetails[key],
    }))
    .sort((a, b) => a.score - b.score)
    .slice(0, 3);

  lowestIntelligences.innerHTML = sortedIntelligences
    .map(
      (intel, index) => `
                <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 border-l-4 border-gray-400 hover:shadow-lg transition-shadow">
                    <div class="text-center mb-4">
                        <div class="text-4xl mb-2">${intel.icon}</div>
                        <h4 class="text-lg font-bold text-gray-800">${
                          intel.name
                        }</h4>
                        <div class="flex items-center justify-center gap-2 mt-2">
                            <div class="bg-gray-200 rounded-full h-3 w-20">
                                <div class="h-3 rounded-full bg-gray-400 transition-all duration-1000" style="width: ${
                                  intel.score
                                }%"></div>
                            </div>
                            <span class="text-lg font-bold text-gray-600">${
                              intel.score
                            }%</span>
                        </div>
                    </div>
                    
                    <div class="bg-white rounded-lg p-4 mb-4">
                        <h5 class="font-semibold text-gray-700 mb-2 flex items-center gap-2">
                            <span class="text-sm">📝</span> ما هو؟
                        </h5>
                        <p class="text-sm text-gray-600 leading-relaxed">
                            ${intel.details.description.substring(0, 120)}...
                        </p>
                    </div>
                    
                    <div class="bg-blue-50 rounded-lg p-4">
                        <h5 class="font-semibold text-blue-700 mb-3 flex items-center gap-2">
                            <span class="text-sm">🚀</span> كيفية التطوير
                        </h5>
                        <ul class="space-y-2">
                            ${intel.details.learningMethods
                              .slice(0, 3)
                              .map(
                                (method) => `
                                <li class="flex items-start gap-2 text-sm text-blue-700">
                                    <span class="text-blue-500 font-bold mt-0.5">•</span>
                                    <span>${method}</span>
                                </li>
                            `
                              )
                              .join("")}
                        </ul>
                        
                        <div class="mt-3 pt-3 border-t border-blue-200">
                            <h6 class="font-semibold text-blue-600 mb-2 text-sm">أنشطة مقترحة:</h6>
                            <div class="flex flex-wrap gap-1">
                                ${intel.details.activities
                                  .slice(0, 2)
                                  .map(
                                    (activity) => `
                                    <span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">${activity}</span>
                                `
                                  )
                                  .join("")}
                            </div>
                        </div>
                    </div>
                </div>
            `
    )
    .join("");
}

// عرض أعلى 3 ذكاءات
function showTopIntelligences(scores) {
  const topIntelligences = document.getElementById("topIntelligences");

  // ترتيب الذكاءات حسب النقاط
  const sortedIntelligences = Object.keys(scores)
    .map((key) => ({
      type: key,
      score: scores[key],
      ...intelligences[key],
      details: intelligenceDetails[key],
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  topIntelligences.innerHTML = sortedIntelligences
    .map((intel, index) => {
      const medalColors = ["🥇", "🥈", "🥉"];
      const gradients = [
        "from-yellow-50 to-amber-50 border-yellow-400",
        "from-gray-50 to-slate-50 border-gray-400",
        "from-orange-50 to-amber-50 border-orange-400",
      ];

      return `
                    <div class="bg-gradient-to-r ${
                      gradients[index]
                    } rounded-xl border-l-4 p-6 shadow-lg">
                        <div class="flex items-center mb-4">
                            <div class="text-4xl mr-4">${
                              medalColors[index]
                            }</div>
                            <div class="text-4xl mr-4">${intel.icon}</div>
                            <div class="flex-1">
                                <h4 class="text-xl font-bold text-gray-800">${
                                  intel.name
                                }</h4>
                                <div class="flex items-center gap-2 mt-2">
                                    <div class="bg-gray-200 rounded-full h-4 flex-1">
                                        <div class="h-4 rounded-full transition-all duration-1000" style="width: ${
                                          intel.score
                                        }%; background-color: ${
        intel.color
      }"></div>
                                    </div>
                                    <span class="text-xl font-bold" style="color: ${
                                      intel.color
                                    }">${intel.score}%</span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="bg-white rounded-lg p-4 mb-4">
                            <p class="text-gray-700 leading-relaxed">${
                              intel.details.description
                            }</p>
                        </div>
                        
                        <div class="grid md:grid-cols-2 gap-4">
                            <div class="bg-white rounded-lg p-3">
                                <h5 class="font-semibold text-green-700 mb-2 flex items-center gap-2">
                                    <span>💪</span> نقاط القوة
                                </h5>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    ${intel.details.strengths
                                      .slice(0, 2)
                                      .map(
                                        (strength) => `<li>• ${strength}</li>`
                                      )
                                      .join("")}
                                </ul>
                            </div>
                            
                            <div class="bg-white rounded-lg p-3">
                                <h5 class="font-semibold text-blue-700 mb-2 flex items-center gap-2">
                                    <span>💼</span> مهن مناسبة
                                </h5>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    ${intel.details.careers
                                      .slice(0, 3)
                                      .map((career) => `<li>• ${career}</li>`)
                                      .join("")}
                                </ul>
                            </div>
                        </div>
                    </div>
                `;
    })
    .join("");
}

// عرض التفاصيل الكاملة
function showDetailedResults(scores) {
  const detailedResults = document.getElementById("detailedResults");

  // ترتيب جميع الذكاءات حسب النقاط
  const sortedIntelligences = Object.keys(scores)
    .map((key) => ({
      type: key,
      score: scores[key],
      ...intelligences[key],
      details: intelligenceDetails[key],
    }))
    .sort((a, b) => b.score - a.score);

  detailedResults.innerHTML = sortedIntelligences
    .map((intel, index) => {
      const isTopThree = index < 3;
      const borderClass = isTopThree ? "border-l-4" : "border-l-2";
      const bgClass = isTopThree
        ? "from-indigo-50 to-purple-50"
        : "from-gray-50 to-white";

      return `
                    <div class="bg-gradient-to-r ${bgClass} rounded-xl ${borderClass} p-6 shadow-lg transition-all hover:shadow-xl" style="border-color: ${
        intel.color
      }">
                        <!-- Header -->
                        <div class="flex items-center mb-6">
                            <div class="text-4xl mr-4">${intel.icon}</div>
                            <div class="flex-1">
                                <div class="flex items-center gap-3 mb-2">
                                    <h4 class="text-2xl font-bold" style="color: ${
                                      intel.color
                                    }">${intel.name}</h4>
                                    ${
                                      isTopThree
                                        ? `<span class="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">أعلى ${
                                            index + 1
                                          }</span>`
                                        : ""
                                    }
                                </div>
                                <div class="flex items-center gap-3">
                                    <div class="bg-gray-200 rounded-full h-5 flex-1">
                                        <div class="h-5 rounded-full transition-all duration-1000" style="width: ${
                                          intel.score
                                        }%; background-color: ${
        intel.color
      }"></div>
                                    </div>
                                    <span class="text-2xl font-bold" style="color: ${
                                      intel.color
                                    }">${intel.score}%</span>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Description -->
                        <div class="bg-white rounded-lg p-4 mb-6 border border-gray-100">
                            <h5 class="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                <span class="text-lg">📝</span> وصف هذا النوع من الذكاء
                            </h5>
                            <p class="text-gray-700 leading-relaxed">${
                              intel.details.description
                            }</p>
                        </div>
                        
                        <!-- Details Grid -->
                        <div class="grid md:grid-cols-2 gap-6">
                            <!-- Learning Methods -->
                            <div class="bg-white rounded-lg p-4 border border-gray-100">
                                <h5 class="font-semibold text-green-700 mb-3 flex items-center gap-2">
                                    <span class="text-lg">📚</span> طرق التعلم المناسبة
                                </h5>
                                <ul class="space-y-2">
                                    ${intel.details.learningMethods
                                      .map(
                                        (method) => `
                                        <li class="flex items-start gap-2 text-gray-700">
                                            <span class="text-green-500 font-bold mt-1">•</span>
                                            <span>${method}</span>
                                        </li>
                                    `
                                      )
                                      .join("")}
                                </ul>
                            </div>
                            
                            <!-- Activities -->
                            <div class="bg-white rounded-lg p-4 border border-gray-100">
                                <h5 class="font-semibold text-blue-700 mb-3 flex items-center gap-2">
                                    <span class="text-lg">🎯</span> أنشطة وهوايات مقترحة
                                </h5>
                                <ul class="space-y-2">
                                    ${intel.details.activities
                                      .map(
                                        (activity) => `
                                        <li class="flex items-start gap-2 text-gray-700">
                                            <span class="text-blue-500 font-bold mt-1">•</span>
                                            <span>${activity}</span>
                                        </li>
                                    `
                                      )
                                      .join("")}
                                </ul>
                            </div>
                            
                            <!-- Careers -->
                            <div class="bg-white rounded-lg p-4 border border-gray-100">
                                <h5 class="font-semibold text-purple-700 mb-3 flex items-center gap-2">
                                    <span class="text-lg">💼</span> مهن وتخصصات مناسبة
                                </h5>
                                <div class="flex flex-wrap gap-2">
                                    ${intel.details.careers
                                      .map(
                                        (career) => `
                                        <span class="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">${career}</span>
                                    `
                                      )
                                      .join("")}
                                </div>
                            </div>
                            
                            <!-- Strengths -->
                            <div class="bg-white rounded-lg p-4 border border-gray-100">
                                <h5 class="font-semibold text-orange-700 mb-3 flex items-center gap-2">
                                    <span class="text-lg">💪</span> نقاط القوة الرئيسية
                                </h5>
                                <ul class="space-y-2">
                                    ${intel.details.strengths
                                      .map(
                                        (strength) => `
                                        <li class="flex items-start gap-2 text-gray-700">
                                            <span class="text-orange-500 font-bold mt-1">•</span>
                                            <span>${strength}</span>
                                        </li>
                                    `
                                      )
                                      .join("")}
                                </ul>
                            </div>
                        </div>
                        
                        ${
                          isTopThree
                            ? `
                            <div class="mt-6 bg-gradient-to-r from-yellow-50 to-amber-50 border border-yellow-200 rounded-lg p-4">
                                <h5 class="font-semibold text-amber-800 mb-2 flex items-center gap-2">
                                    <span class="text-lg">💡</span> نصائح خاصة لتطوير هذا الذكاء
                                </h5>
                                <p class="text-amber-700 text-sm leading-relaxed">
                                    هذا أحد أقوى أنواع الذكاء لديك! ركز على الأنشطة والمهن المذكورة أعلاه، واستخدم طرق التعلم المناسبة لتحقيق أفضل النتائج في دراستك وعملك.
                                </p>
                            </div>
                        `
                            : ""
                        }
                    </div>
                `;
    })
    .join("");
}

// عرض التوصيات الشخصية
function showPersonalRecommendations(scores) {
  const personalRecommendations = document.getElementById(
    "personalRecommendations"
  );

  // الحصول على أعلى 3 ذكاءات
  const topThree = Object.keys(scores)
    .map((key) => ({
      type: key,
      score: scores[key],
      ...intelligences[key],
      details: intelligenceDetails[key],
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  // جمع التوصيات من أعلى 3 ذكاءات
  const allLearningMethods = [
    ...new Set(topThree.flatMap((intel) => intel.details.learningMethods)),
  ];
  const allActivities = [
    ...new Set(topThree.flatMap((intel) => intel.details.activities)),
  ];
  const allCareers = [
    ...new Set(topThree.flatMap((intel) => intel.details.careers)),
  ];

  personalRecommendations.innerHTML = `
                <div class="bg-white rounded-xl p-6 shadow-lg">
                    <h4 class="text-xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                        <span class="text-2xl">📚</span> طرق التعلم الأنسب لك
                    </h4>
                    <div class="space-y-3">
                        ${allLearningMethods
                          .slice(0, 6)
                          .map(
                            (method) => `
                            <div class="flex items-center gap-3 p-3 bg-indigo-50 rounded-lg">
                                <span class="w-2 h-2 bg-indigo-500 rounded-full"></span>
                                <span class="text-gray-700">${method}</span>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg">
                    <h4 class="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                        <span class="text-2xl">🎯</span> أنشطة مقترحة لك
                    </h4>
                    <div class="space-y-3">
                        ${allActivities
                          .slice(0, 6)
                          .map(
                            (activity) => `
                            <div class="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                                <span class="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span class="text-gray-700">${activity}</span>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg md:col-span-2">
                    <h4 class="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
                        <span class="text-2xl">💼</span> مجالات مهنية مناسبة لك
                    </h4>
                    <div class="grid md:grid-cols-3 gap-3">
                        ${allCareers
                          .slice(0, 12)
                          .map(
                            (career) => `
                            <div class="bg-purple-50 border border-purple-200 rounded-lg p-3 text-center">
                                <span class="text-purple-800 font-medium">${career}</span>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
            `;
}

// عرض خطة التطوير
function showDevelopmentPlan(scores) {
  const developmentPlan = document.getElementById("developmentPlan");

  // الحصول على أعلى 3 ذكاءات
  const topThree = Object.keys(scores)
    .map((key) => ({
      type: key,
      score: scores[key],
      ...intelligences[key],
      details: intelligenceDetails[key],
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  // الحصول على أقل 2 ذكاءات للتطوير
  const bottomTwo = Object.keys(scores)
    .map((key) => ({
      type: key,
      score: scores[key],
      ...intelligences[key],
      details: intelligenceDetails[key],
    }))
    .sort((a, b) => a.score - b.score)
    .slice(0, 2);

  developmentPlan.innerHTML = `
                <div class="bg-white rounded-xl p-6 shadow-lg">
                    <h4 class="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                        <span class="text-2xl">🚀</span> استثمر نقاط قوتك
                    </h4>
                    <p class="text-gray-600 mb-4">ركز على تطوير هذه الذكاءات القوية لديك:</p>
                    <div class="space-y-4">
                        ${topThree
                          .map(
                            (intel, index) => `
                            <div class="border-l-4 pl-4" style="border-color: ${
                              intel.color
                            }">
                                <div class="flex items-center gap-3 mb-2">
                                    <span class="text-2xl">${intel.icon}</span>
                                    <h5 class="font-semibold" style="color: ${
                                      intel.color
                                    }">${intel.name} (${intel.score}%)</h5>
                                </div>
                                <ul class="text-sm text-gray-700 space-y-1">
                                    ${intel.details.activities
                                      .slice(0, 2)
                                      .map(
                                        (activity) => `<li>• ${activity}</li>`
                                      )
                                      .join("")}
                                </ul>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
                
                <div class="bg-white rounded-xl p-6 shadow-lg">
                    <h4 class="text-xl font-bold text-orange-800 mb-4 flex items-center gap-2">
                        <span class="text-2xl">💪</span> طور نقاط الضعف
                    </h4>
                    <p class="text-gray-600 mb-4">هذه المجالات تحتاج لمزيد من التطوير:</p>
                    <div class="space-y-4">
                        ${bottomTwo
                          .map(
                            (intel) => `
                            <div class="border-l-4 border-gray-300 pl-4">
                                <div class="flex items-center gap-3 mb-2">
                                    <span class="text-2xl">${intel.icon}</span>
                                    <h5 class="font-semibold text-gray-700">${
                                      intel.name
                                    } (${intel.score}%)</h5>
                                </div>
                                <ul class="text-sm text-gray-600 space-y-1">
                                    ${intel.details.learningMethods
                                      .slice(0, 2)
                                      .map(
                                        (method) => `<li>• جرب: ${method}</li>`
                                      )
                                      .join("")}
                                </ul>
                            </div>
                        `
                          )
                          .join("")}
                    </div>
                </div>
                
                <div class="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 md:col-span-2">
                    <h4 class="text-xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                        <span class="text-2xl">📋</span> خطة عمل لمدة 30 يوماً
                    </h4>
                    <div class="grid md:grid-cols-3 gap-4">
                        <div class="bg-white rounded-lg p-4">
                            <h5 class="font-semibold text-green-700 mb-3">الأسبوع الأول</h5>
                            <ul class="text-sm text-gray-700 space-y-2">
                                <li>• ابدأ بنشاط واحد من نقاط قوتك</li>
                                <li>• اقرأ عن أعلى ذكاء لديك</li>
                                <li>• جرب طريقة تعلم جديدة</li>
                            </ul>
                        </div>
                        <div class="bg-white rounded-lg p-4">
                            <h5 class="font-semibold text-blue-700 mb-3">الأسبوع الثاني-الثالث</h5>
                            <ul class="text-sm text-gray-700 space-y-2">
                                <li>• طبق طرق التعلم المناسبة لك</li>
                                <li>• ابدأ هواية جديدة من قائمة الأنشطة</li>
                                <li>• اعمل على تطوير نقطة ضعف واحدة</li>
                            </ul>
                        </div>
                        <div class="bg-white rounded-lg p-4">
                            <h5 class="font-semibold text-purple-700 mb-3">الأسبوع الرابع</h5>
                            <ul class="text-sm text-gray-700 space-y-2">
                                <li>• قيّم تقدمك</li>
                                <li>• ابحث عن فرص مهنية مناسبة</li>
                                <li>• ضع خطة للشهر القادم</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `;
}

// إنشاء الرسم البياني
function createResultsChart(scores) {
  const ctx = document.getElementById("resultsChart").getContext("2d");

  const labels = Object.keys(intelligences).map(
    (key) => intelligences[key].name
  );
  const data = Object.keys(intelligences).map((key) => scores[key]);
  const colors = Object.keys(intelligences).map(
    (key) => intelligences[key].color
  );

  new Chart(ctx, {
    type: "radar",
    data: {
      labels: labels,
      datasets: [
        {
          label: "نسبة الذكاء",
          data: data,
          backgroundColor: "rgba(79, 70, 229, 0.2)",
          borderColor: "rgba(79, 70, 229, 1)",
          borderWidth: 2,
          pointBackgroundColor: colors,
          pointBorderColor: "#fff",
          pointBorderWidth: 2,
          pointRadius: 6,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        r: {
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20,
          },
        },
      },
    },
  });
}

// أحداث أزرار الإجراءات
function setupActionButtons() {
  // زر تحميل PDF
  const downloadBtn = document.getElementById("downloadPdfBtn");
  if (downloadBtn) {
    downloadBtn.addEventListener("click", function () {
      generatePDFReport();
    });
  }

  // زر حفظ النتائج
  const saveBtn = document.getElementById("saveResultsBtn");
  if (saveBtn) {
    saveBtn.addEventListener("click", function () {
      saveResultsToFile();
    });
  }

  // زر طباعة الأجوبة
  const printAnswersBtn = document.getElementById("printAnswersBtn");
  if (printAnswersBtn) {
    printAnswersBtn.addEventListener("click", function () {
      printAnswers();
    });
  }

  // زر عرض النتائج في الكونسل
  const showConsoleBtn = document.getElementById("showConsoleBtn");
  if (showConsoleBtn) {
    showConsoleBtn.addEventListener("click", function () {
      // إظهار نافذة إعدادات الكونسل
      document
        .getElementById("consoleSettingsModal")
        .classList.remove("hidden");
      document.getElementById("consoleSettingsModal").classList.add("flex");
    });
  }

  // أحداث نافذة إعدادات الكونسل
  document
    .getElementById("applyConsoleSettings")
    .addEventListener("click", function () {
      let DEBUG_SETTINGS = {};
      // تحديث الإعدادات من النافذة
      DEBUG_SETTINGS.showDetailedScoring = document.getElementById(
        "showDetailedScoring"
      ).checked;
      DEBUG_SETTINGS.showQuestionAnalysis = document.getElementById(
        "showQuestionAnalysis"
      ).checked;
      DEBUG_SETTINGS.showRecommendations = document.getElementById(
        "showRecommendations"
      ).checked;
      DEBUG_SETTINGS.showStatistics =
        document.getElementById("showStatistics").checked;
      DEBUG_SETTINGS.enablePerformanceMetrics = document.getElementById(
        "enablePerformanceMetrics"
      ).checked;

      // حساب النتائج وعرضها في الكونسل
      const resultsData = calculateResults();
      displayResultsInConsole(
        resultsData.scores,
        resultsData.diagnostics,
        resultsData.diagnostics.byIntelligenceType
      );

      // إخفاء النافذة
      document.getElementById("consoleSettingsModal").classList.add("hidden");
      document.getElementById("consoleSettingsModal").classList.remove("flex");

      // إظهار رسالة للمستخدم
      alert(
        "تم عرض النتائج التفصيلية في الكونسل!\n\nافتح أدوات المطور (F12) واذهب لتبويب Console لرؤية النتائج الكاملة مع التوصيات والتحليلات."
      );
    });

  document
    .getElementById("closeConsoleModal")
    .addEventListener("click", function () {
      document.getElementById("consoleSettingsModal").classList.add("hidden");
      document.getElementById("consoleSettingsModal").classList.remove("flex");
    });

  // زر إعادة الاختبار
  // const retakeBtn = document.getElementById('retakeBtn');
  // if (retakeBtn) {
  //     retakeBtn.addEventListener('click', function () {
  //         if (confirm('هل أنت متأكد من أنك تريد إعادة الاختبار؟ ستفقد النتائج الحالية.')) {
  //             // مسح البيانات المحفوظة
  //             localStorage.removeItem('multipleIntelligenceAnswers');
  //             localStorage.removeItem('multipleIntelligenceProgress');
  //             localStorage.removeItem('multipleIntelligenceResults');
  //             location.reload();
  //         }
  //     });
  // }
  const reloadBtn = document.getElementById("reload");
  if (reloadBtn) {
    reloadBtn.addEventListener("click", function () {
      location.href = "./rate";
    });
  }
}

// مشاركة النتائج
async function shareResults() {
  const resultsData = calculateResults();
  const scores = resultsData.scores;

  // ترتيب الذكاءات
  const sortedIntelligences = Object.keys(scores)
    .map((key) => ({
      type: key,
      score: scores[key],
      name: intelligences[key].name,
    }))
    .sort((a, b) => b.score - a.score);

  const topThree = sortedIntelligences.slice(0, 3);
  var data2 = new URLSearchParams();
  data2.append(
    "data",
    JSON.stringify({ tops: topThree, time: Date.now() - startTime })
  );
  data2.append("type", "stating");
  data2.append("ob", "1");
  await fetch('', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: data2
  }).catch((e) => {
      console.log(e);
  });
  console.log("data sent",);
  var data = new URLSearchParams();
  data.append("data", JSON.stringify({ scores, questions, answers }));
  data.append("type", "exam");
  data.append("ob", "1");
  fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: data,
  })
    .then((response) => {
      return response.text();
    })
    .then((x) => {
      if (x == "notFound") {
        alert("حصلت مشكلة في حفظ البيانات قد تضطر الى اعادة الاختبار");
        return;
      }
      testScreen.classList.add("hidden");
      endScreen.classList.remove("hidden");
    })
    .catch((e) => {
      console.log(e);
      alert("حصلت مشكلة في حفظ البيانات قد تضطر الى اعادة الاختبار");
    });
}

// حفظ النتائج في ملف
function saveResultsToFile() {
  const resultsData = calculateResults();
  const scores = resultsData.scores;

  // إنشاء بيانات شاملة للحفظ
  const fullResults = {
    userInfo: {
      name: currentUser,
      testDate: new Date().toISOString(),
      completionTime: Math.round((Date.now() - startTime) / 1000 / 60), // بالدقائق
    },
    scores: scores,
    answers: answers,
    diagnostics: resultsData.diagnostics,
    recommendations: generateRecommendations(scores),
  };

  // حفظ في التخزين المحلي أيضاً
  // localStorage.setItem('multipleIntelligenceResults', JSON.stringify(fullResults));

  // تحميل كملف JSON
  const dataStr = JSON.stringify(fullResults, null, 2);
  const dataBlob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(dataBlob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `نتائج_الذكاءات_المتعددة_${new Date().getTime()}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  alert("تم حفظ النتائج بنجاح! يمكنك استيرادها لاحقاً.");
}

// إنشاء التوصيات
function generateRecommendations(scores) {
  const sortedIntelligences = Object.keys(scores)
    .map((key) => ({
      type: key,
      score: scores[key],
      name: intelligences[key].name,
      details: intelligenceDetails[key],
    }))
    .sort((a, b) => b.score - a.score);

  const topThree = sortedIntelligences.slice(0, 3);

  return {
    learningMethods: [
      ...new Set(topThree.flatMap((intel) => intel.details.learningMethods)),
    ].slice(0, 8),
    activities: [
      ...new Set(topThree.flatMap((intel) => intel.details.activities)),
    ].slice(0, 8),
    careers: [
      ...new Set(topThree.flatMap((intel) => intel.details.careers)),
    ].slice(0, 10),
  };
}

// إنشاء تقرير PDF
function generatePDFReport() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  // إعداد الخط العربي
  doc.setFont("helvetica");
  doc.setFontSize(16);

  // العنوان
  doc.text("تقرير الذكاءات المتعددة", 105, 20, { align: "center" });
  doc.setFontSize(12);
  doc.text(`اسم المستخدم: ${currentUser}`, 20, 40);
  doc.text(`تاريخ الاختبار: ${new Date().toLocaleDateString("ar-SA")}`, 20, 50);

  // حساب النتائج
  const resultsData = calculateResults();
  const scores = resultsData.scores;

  // ترتيب الذكاءات
  const sortedIntelligences = Object.keys(scores)
    .map((key) => ({
      type: key,
      score: scores[key],
      name: intelligences[key].name,
    }))
    .sort((a, b) => b.score - a.score);

  // أعلى 3 ذكاءات
  doc.setFontSize(14);
  doc.text("أعلى 3 ذكاءات:", 20, 70);
  doc.setFontSize(12);

  let yPos = 85;
  sortedIntelligences.slice(0, 3).forEach((intel, index) => {
    doc.text(`${index + 1}. ${intel.name}: ${intel.score}%`, 25, yPos);
    yPos += 10;
  });

  // جميع النتائج
  doc.setFontSize(14);
  doc.text("جميع النتائج:", 20, yPos + 15);
  doc.setFontSize(10);
  yPos += 30;

  sortedIntelligences.forEach((intel) => {
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
    doc.text(`${intel.name}: ${intel.score}%`, 25, yPos);
    yPos += 8;
  });

  // التوصيات
  if (yPos > 200) {
    doc.addPage();
    yPos = 20;
  }

  doc.setFontSize(14);
  doc.text("التوصيات:", 20, yPos + 15);
  doc.setFontSize(10);
  yPos += 30;

  const topIntel = sortedIntelligences[0];
  const recommendations = intelligenceDetails[
    topIntel.type
  ].learningMethods.slice(0, 5);

  recommendations.forEach((rec) => {
    if (yPos > 270) {
      doc.addPage();
      yPos = 20;
    }
    const lines = doc.splitTextToSize(`• ${rec}`, 170);
    doc.text(lines, 25, yPos);
    yPos += lines.length * 5 + 3;
  });

  // حفظ الملف
  doc.save(`تقرير_الذكاءات_المتعددة_${new Date().getTime()}.pdf`);
}

// تصدير البيانات إلى CSV
function exportDataToCSV() {
  const resultsData = calculateResults();
  const scores = resultsData.scores;

  // إنشاء بيانات CSV
  let csvContent = "نوع الذكاء,النسبة المئوية,الوصف\n";

  Object.keys(intelligences).forEach((type) => {
    const intel = intelligences[type];
    const score = scores[type];
    csvContent += `"${intel.name}","${score}%","${intelligenceDetails[
      type
    ].description.substring(0, 100)}..."\n`;
  });

  // إضافة ملخص الإجابات
  csvContent += "\n\nملخص الإجابات:\n";
  csvContent += "رقم السؤال,نوع السؤال,الإجابة\n";

  questions.forEach((question, index) => {
    const answer = answers[index];
    let answerText = "لم يتم الإجابة";

    if (answer !== undefined) {
      if (Array.isArray(answer)) {
        answerText = answer.join(", ");
      } else {
        answerText = answer.toString();
      }
    }

    csvContent += `"${index + 1}","${question.questionType}","${answerText}"\n`;
  });

  // تحميل الملف
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.setAttribute("href", url);
  link.setAttribute(
    "download",
    `بيانات_الذكاءات_المتعددة_${new Date().getTime()}.csv`
  );
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// طباعة الأجوبة التفصيلية
function printAnswers() {
  // إنشاء نافذة طباعة للأجوبة
  const printWindow = window.open("", "_blank");

  // تجميع الأجوبة حسب نوع الذكاء
  const answersByIntelligence = {};
  Object.keys(intelligences).forEach((type) => {
    answersByIntelligence[type] = [];
  });

  // تصنيف الأسئلة والأجوبة
  questions.forEach((question, index) => {
    const answer = answers[index];
    let answerText = "لم يتم الإجابة";
    let answerDetails = "";

    if (answer !== undefined && answer !== null) {
      switch (question.questionType) {
        case "single":
          if (
            typeof answer === "number" &&
            answer >= 0 &&
            answer < question.options.length
          ) {
            answerText = question.options[answer].text;
            answerDetails = `الخيار ${answer + 1}`;
          }
          break;

        case "multiple":
          if (Array.isArray(answer) && answer.length > 0) {
            const selectedOptions = answer
              .map((optIndex) => {
                if (optIndex >= 0 && optIndex < question.options.length) {
                  return question.options[optIndex].text;
                }
                return "خيار غير صحيح";
              })
              .filter((opt) => opt !== "خيار غير صحيح");

            answerText = selectedOptions.join(" • ");
            answerDetails = `تم اختيار ${selectedOptions.length} من ${question.options.length} خيارات`;
          }
          break;

        case "ranking":
          if (Array.isArray(answer) && answer.length === 4) {
            const rankedItems = answer.map((optIndex, rank) => {
              if (optIndex >= 0 && optIndex < question.options.length) {
                return `${rank + 1}. ${question.options[optIndex].text}`;
              }
              return `${rank + 1}. خيار غير صحيح`;
            });
            answerText = rankedItems.join(" | ");
            answerDetails = "ترتيب من الأكثر تفضيلاً للأقل";
          }
          break;

        case "rating":
          if (Array.isArray(answer) && answer.length > 0) {
            const ratings = answer
              .map((rating, index) => {
                if (index < question.statements.length) {
                  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
                  return `${question.statements[index].text}: ${stars} (${rating}/5)`;
                }
                return "";
              })
              .filter((r) => r !== "");

            answerText = ratings.join(" | ");
            answerDetails = `تقييم ${ratings.length} عبارات`;
          }
          break;
      }
    }

    answersByIntelligence[question.type].push({
      questionNumber: index + 1,
      question: question.question,
      questionType: question.questionType,
      answer: answerText,
      details: answerDetails,
      isAnswered: answer !== undefined && answer !== null,
    });
  });

  // حساب إحصائيات الإجابات
  const totalQuestions = questions.length;
  const answeredQuestions = Object.keys(answers).length;
  const completionRate = Math.round((answeredQuestions / totalQuestions) * 100);

  // إنشاء محتوى الطباعة
  printWindow.document.write(`
                <!DOCTYPE html>
                <html dir="rtl" lang="ar">
                <head>
                    <meta charset="UTF-8">
                    <title>تفاصيل الأجوبة - اختبار الذكاءات المتعددة</title>
                    <style>
                        body { 
                            font-family: Arial, sans-serif; 
                            margin: 20px; 
                            line-height: 1.6; 
                            font-size: 12px;
                        }
                        .header { 
                            text-align: center; 
                            border-bottom: 3px solid #4f46e5; 
                            padding-bottom: 20px; 
                            margin-bottom: 30px; 
                            background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
                            padding: 20px;
                            border-radius: 10px;
                        }
                        .stats {
                            background-color: #f8fafc;
                            padding: 15px;
                            border-radius: 8px;
                            margin-bottom: 25px;
                            border-left: 4px solid #10b981;
                        }
                        .intelligence-section {
                            margin-bottom: 30px;
                            page-break-inside: avoid;
                        }
                        .intelligence-header {
                            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
                            color: white;
                            padding: 12px 20px;
                            border-radius: 8px;
                            margin-bottom: 15px;
                            font-weight: bold;
                            font-size: 14px;
                        }
                        .question-item {
                            margin: 12px 0;
                            padding: 15px;
                            border: 1px solid #e5e7eb;
                            border-radius: 8px;
                            background-color: #fafafa;
                            page-break-inside: avoid;
                        }
                        .question-item.answered {
                            border-left: 4px solid #10b981;
                            background-color: #f0fdf4;
                        }
                        .question-item.unanswered {
                            border-left: 4px solid #ef4444;
                            background-color: #fef2f2;
                        }
                        .question-number {
                            font-weight: bold;
                            color: #4f46e5;
                            font-size: 13px;
                        }
                        .question-text {
                            font-weight: 600;
                            margin: 8px 0;
                            color: #374151;
                        }
                        .question-type {
                            font-size: 10px;
                            background-color: #e5e7eb;
                            padding: 2px 8px;
                            border-radius: 12px;
                            color: #6b7280;
                            display: inline-block;
                            margin-bottom: 8px;
                        }
                        .answer-text {
                            background-color: white;
                            padding: 10px;
                            border-radius: 6px;
                            border: 1px solid #d1d5db;
                            margin-top: 8px;
                        }
                        .answer-details {
                            font-size: 10px;
                            color: #6b7280;
                            font-style: italic;
                            margin-top: 5px;
                        }
                        .unanswered-text {
                            color: #dc2626;
                            font-style: italic;
                        }
                        .page-break {
                            page-break-before: always;
                        }
                        .summary-box {
                            background: linear-gradient(135deg, #fef3c7 0%, #fde68a 100%);
                            border: 2px solid #f59e0b;
                            padding: 15px;
                            border-radius: 10px;
                            margin: 20px 0;
                        }
                        @media print { 
                            body { margin: 0; font-size: 11px; }
                            .page-break { page-break-before: always; }
                        }
                        .type-stats {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            background-color: rgba(255,255,255,0.3);
                            padding: 8px 12px;
                            border-radius: 6px;
                            margin-top: 8px;
                        }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>📋 تفاصيل الأجوبة - اختبار الذكاءات المتعددة</h1>
                        <p><strong>اسم المستخدم:</strong> ${currentUser}</p>
                        <p><strong>تاريخ الاختبار:</strong> ${new Date().toLocaleDateString(
                          "ar-SA"
                        )}</p>
                        <p><strong>وقت الطباعة:</strong> ${new Date().toLocaleString(
                          "ar-SA"
                        )}</p>
                    </div>
                    
                    <div class="stats">
                        <h2>📊 إحصائيات الإجابات:</h2>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-top: 10px;">
                            <div><strong>إجمالي الأسئلة:</strong> ${totalQuestions} سؤال</div>
                            <div><strong>الأسئلة المجابة:</strong> ${answeredQuestions} سؤال</div>
                            <div><strong>الأسئلة غير المجابة:</strong> ${
                              totalQuestions - answeredQuestions
                            } سؤال</div>
                            <div><strong>نسبة الإكمال:</strong> ${completionRate}%</div>
                        </div>
                    </div>
                    
                    ${Object.keys(intelligences)
                      .map((type) => {
                        const intel = intelligences[type];
                        const questionsOfType = answersByIntelligence[type];
                        const answeredOfType = questionsOfType.filter(
                          (q) => q.isAnswered
                        ).length;
                        const typeCompletionRate =
                          questionsOfType.length > 0
                            ? Math.round(
                                (answeredOfType / questionsOfType.length) * 100
                              )
                            : 0;

                        return `
                            <div class="intelligence-section">
                                <div class="intelligence-header">
                                    ${intel.icon} ${intel.name}
                                    <div class="type-stats">
                                        <span>الأسئلة: ${
                                          questionsOfType.length
                                        }</span>
                                        <span>المجابة: ${answeredOfType}</span>
                                        <span>النسبة: ${typeCompletionRate}%</span>
                                    </div>
                                </div>
                                
                                ${questionsOfType
                                  .map(
                                    (item) => `
                                    <div class="question-item ${
                                      item.isAnswered
                                        ? "answered"
                                        : "unanswered"
                                    }">
                                        <div class="question-number">السؤال رقم ${
                                          item.questionNumber
                                        }</div>
                                        <div class="question-type">
                                            ${
                                              item.questionType === "single"
                                                ? "اختيار واحد"
                                                : item.questionType ===
                                                  "multiple"
                                                ? "اختيار متعدد"
                                                : item.questionType ===
                                                  "ranking"
                                                ? "ترتيب"
                                                : item.questionType === "rating"
                                                ? "تقييم بالنجوم"
                                                : item.questionType
                                            }
                                        </div>
                                        <div class="question-text">${
                                          item.question
                                        }</div>
                                        <div class="answer-text ${
                                          !item.isAnswered
                                            ? "unanswered-text"
                                            : ""
                                        }">
                                            <strong>الإجابة:</strong> ${
                                              item.answer
                                            }
                                        </div>
                                        ${
                                          item.details
                                            ? `<div class="answer-details">${item.details}</div>`
                                            : ""
                                        }
                                    </div>
                                `
                                  )
                                  .join("")}
                            </div>
                        `;
                      })
                      .join("")}
                    
                    <div class="summary-box page-break">
                        <h2>📝 ملخص الأجوبة:</h2>
                        <p><strong>تم إكمال ${completionRate}% من الاختبار</strong></p>
                        ${
                          answeredQuestions < totalQuestions
                            ? `
                            <p style="color: #dc2626;">
                                <strong>تنبيه:</strong> لم يتم الإجابة على ${
                                  totalQuestions - answeredQuestions
                                } أسئلة. 
                                للحصول على نتائج أكثر دقة، يُنصح بإكمال جميع الأسئلة.
                            </p>
                        `
                            : `
                            <p style="color: #059669;">
                                <strong>ممتاز!</strong> تم الإجابة على جميع الأسئلة. النتائج ستكون دقيقة وشاملة.
                            </p>
                        `
                        }
                        
                        <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #d1d5db;">
                            <h3>توزيع الأجوبة حسب نوع الذكاء:</h3>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 10px; margin-top: 10px;">
                                ${Object.keys(intelligences)
                                  .map((type) => {
                                    const intel = intelligences[type];
                                    const questionsOfType =
                                      answersByIntelligence[type];
                                    const answeredOfType =
                                      questionsOfType.filter(
                                        (q) => q.isAnswered
                                      ).length;
                                    const typeRate =
                                      questionsOfType.length > 0
                                        ? Math.round(
                                            (answeredOfType /
                                              questionsOfType.length) *
                                              100
                                          )
                                        : 0;

                                    return `
                                        <div style="background: white; padding: 8px; border-radius: 6px; border: 1px solid #e5e7eb;">
                                            <strong>${intel.icon} ${intel.name}:</strong><br>
                                            ${answeredOfType}/${questionsOfType.length} (${typeRate}%)
                                        </div>
                                    `;
                                  })
                                  .join("")}
                            </div>
                        </div>
                    </div>
                    
                    <div style="margin-top: 40px; text-align: center; font-size: 10px; color: #6b7280; border-top: 1px solid #e5e7eb; padding-top: 20px;">
                        <p>تم إنشاء هذا التقرير بواسطة اختبار الذكاءات المتعددة</p>
                        <p>تاريخ الطباعة: ${new Date().toLocaleString(
                          "ar-SA"
                        )}</p>
                        <p>هذا التقرير يحتوي على جميع إجاباتك التفصيلية لكل سؤال في الاختبار</p>
                    </div>
                </body>
                </html>
            `);

  printWindow.document.close();
  printWindow.focus();

  // انتظار تحميل المحتوى ثم طباعة
  setTimeout(() => {
    printWindow.print();
    printWindow.close();
  }, 1000);
}

// طباعة النتائج
function printResults() {
  const resultsData = calculateResults();
  const scores = resultsData.scores;

  // ترتيب الذكاءات
  const sortedIntelligences = Object.keys(scores)
    .map((key) => ({
      type: key,
      score: scores[key],
      name: intelligences[key].name,
      icon: intelligences[key].icon,
    }))
    .sort((a, b) => b.score - a.score);

  // إنشاء نافذة طباعة
  const printWindow = window.open("", "_blank");
  printWindow.document.write(`
                <!DOCTYPE html>
                <html dir="rtl" lang="ar">
                <head>
                    <meta charset="UTF-8">
                    <title>تقرير الذكاءات المتعددة</title>
                    <style>
                        body { font-family: Arial, sans-serif; margin: 20px; line-height: 1.6; }
                        .header { text-align: center; border-bottom: 2px solid #333; padding-bottom: 20px; margin-bottom: 30px; }
                        .intelligence-item { margin: 15px 0; padding: 10px; border: 1px solid #ddd; border-radius: 5px; }
                        .score { font-weight: bold; color: #2563eb; }
                        .top-three { background-color: #f0f9ff; }
                        .recommendations { margin-top: 30px; padding: 20px; background-color: #f9fafb; border-radius: 5px; }
                        @media print { body { margin: 0; } }
                    </style>
                </head>
                <body>
                    <div class="header">
                        <h1>🧠 تقرير الذكاءات المتعددة</h1>
                        <p><strong>اسم المستخدم:</strong> ${currentUser}</p>
                        <p><strong>تاريخ الاختبار:</strong> ${new Date().toLocaleDateString(
                          "ar-SA"
                        )}</p>
                        <p><strong>وقت الاختبار:</strong> ${new Date().toLocaleTimeString(
                          "ar-SA"
                        )}</p>
                    </div>
                    
                    <h2>📊 النتائج مرتبة حسب القوة:</h2>
                    ${sortedIntelligences
                      .map(
                        (intel, index) => `
                        <div class="intelligence-item ${
                          index < 3 ? "top-three" : ""
                        }">
                            <h3>${intel.icon} ${intel.name}</h3>
                            <p class="score">النسبة: ${intel.score}%</p>
                            ${
                              index < 3
                                ? "<p><em>⭐ من أقوى ذكاءاتك</em></p>"
                                : ""
                            }
                        </div>
                    `
                      )
                      .join("")}
                    
                    <div class="recommendations">
                        <h2>💡 توصيات للتطوير:</h2>
                        <h3>🚀 استثمر نقاط قوتك:</h3>
                        <ul>
                            ${sortedIntelligences
                              .slice(0, 3)
                              .map(
                                (intel) => `
                                <li><strong>${intel.name}:</strong> ركز على الأنشطة المناسبة لهذا النوع من الذكاء</li>
                            `
                              )
                              .join("")}
                        </ul>
                        
                        <h3>📈 طور نقاط الضعف:</h3>
                        <ul>
                            ${sortedIntelligences
                              .slice(-2)
                              .map(
                                (intel) => `
                                <li><strong>${intel.name}:</strong> مارس الأنشطة التي تقوي هذا النوع من الذكاء</li>
                            `
                              )
                              .join("")}
                        </ul>
                    </div>
                    
                    <div style="margin-top: 40px; text-align: center; font-size: 12px; color: #666;">
                        <p>تم إنشاء هذا التقرير بواسطة اختبار الذكاءات المتعددة</p>
                        <p>للمزيد من المعلومات والتوصيات المفصلة، راجع النتائج الكاملة على الموقع</p>
                    </div>
                </body>
                </html>
            `);

  printWindow.document.close();
  printWindow.focus();

  // انتظار تحميل المحتوى ثم طباعة
  setTimeout(() => {
    printWindow.print();
    printWindow.close();
  }, 500);
}

// زر إعادة الاختبار
const retakeBtn = document.getElementById("retakeBtn");
if (retakeBtn) {
  retakeBtn.addEventListener("click", function () {
    location.reload();
  });
}

// تهيئة الأحداث عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", function () {
  setupActionButtons();

  // إضافة مستمعي الأحداث للأزرار الجديدة
  const exportBtn = document.getElementById("exportDataBtn");
  if (exportBtn) {
    exportBtn.addEventListener("click", exportDataToCSV);
  }

  const printBtn = document.getElementById("printResultsBtn");
  if (printBtn) {
    printBtn.addEventListener("click", printResults);
  }
});
