var express = require("express");
var session = require("express-session");
const mongoose = require("mongoose");
const User = require("./models/user");
const Teacher = require("./models/teacher");
const Payment = require("./models/payment");
const Exam = require("./models/exam");
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
const { MongoClient, ObjectId } = require("mongodb");
const ejs = require("ejs");
const url =
  "mongodb+srv://family:aS0507499583@cluster0.dvljyns.mongodb.net/soqy?retryWrites=true&w=majority";
mongoose
  .connect(url)
  .then(() => console.log("تم الاتصال بقاعدة البيانات بنجاح!"))
  .catch((err) => console.log("فشل الاتصال:", err));
const axios = require("axios");
const teacher = require("./models/teacher");
const user = require("./models/user");
function isAuthenticated(req, res, next) {
  if (req.session.role == "user") next();
  else next("route");
}
function isAdmin(req, res, next) {
  if (req.session.role == "admin") next();
  else next("route");
}
function isTeacher(req, res, next) {
  if (req.session.role == "teacher") next();
  else next("route");
}

// app.get("/register", async (req, res) => {
//   try {
//     const newTeacher = await Teacher.create({
//       user: "admin",
//       email: "abdulsalam.hmdan@gmail.com",
//       pass: 112233, // ملاحظة: يجب تشفير كلمة المرور في التطبيق الحقيقي
//       name: "مسؤول النظام",
//       role: "admin",
//     });
//     res.json(newTeacher);
//   } catch (error) {
//     res.status(400).send(error.message);
//   }
// });

// مثال: البحث عن جميع المستخدمين (Read)
// app.get("/users", async (req, res) => {
//   const users = await User.find(); // دالة جاهزة من الموديل
//   res.json(users);
// });

// Routing
app.get("/", isAuthenticated, function (req, res) {
  res.redirect("home");
});
app.get("/", isAdmin, function (req, res) {
  res.redirect("admin");
});
app.get("/", isTeacher, function (req, res) {
  res.redirect("admin");
});
app.get("/", function (req, res) {
  res.render("firstpage");
});

app.get("/login", isAuthenticated, function (req, res) {
  res.redirect("/");
});
app.get("/login", isAdmin, function (req, res) {
  res.redirect("/");
});
app.get("/login", isTeacher, function (req, res) {
  res.redirect("/");
});

app.get("/login", function (req, res) {
  res.render("login", { collection: "users" });
});

app.get("/admin", function (req, res) {
  res.render("login", { collection: "admin" });
});

app.get("/home", isAuthenticated, async (req, res) => {
  // console.log(req.session.userId);
  const exams = await Exam.find({
    user: new mongoose.Types.ObjectId(req.session.userId),
  });
  // console.log(exams);
  res.render("home", { data: { exams } });
});
app.get("/home", function (req, res) {
  res.redirect("/");
});

app.get("/exam/:id", async function (req, res) {
  const examId = req.params.id;
  let exam = null;
  try {
    exam = await Exam.findById(examId);
  } catch (error) {
    exam = null;
  }
  if (!exam) {
    res.send("notFound");
    return;
  }
  // if (exam.user.toString() !== req.session.userId) {
  //   res.send("غير مسموح");
  //   return;
  // }

  if (exam.stat === "new") {
    res.render(exam.type, { name: req.session.name });
  }
});

app.get("/exam/:id", function (req, res) {
  res.redirect("/");
});
app.post("/exam/:id", function (req, res) {
  console.log(req.body);
  console.log(req.params.id);
  Exam.findByIdAndUpdate(req.params.id, {
    result: JSON.parse(req.body.data),
    stat: "inprogress",
  })
    .then(() => {
      res.send("started");
    })
    .catch(() => {
      res.send("notFound");
    });
});

app.get("/p1rate", isAuthenticated, function (req, res) {
  res.render("p1Rate", { user: req.session.name });
});
app.get("/Results/:exam", isAuthenticated, async function (req, res) {
  await client.connect();
  const db = client.db("soqy");
  const collection = db.collection("users");
  const user = await collection.findOne({ user: req.session.user });
  if (user[req.params.exam]) {
    res.render(`${req.params.exam}Result`, {
      [req.params.exam]: JSON.stringify(user[req.params.exam]),
      name: req.session.name,
      from: "show",
    });
    return;
  }
  res.send("notFound");
});

app.get("/store", async (req, res) => {
  res.render("store", { exams: [] });
});
app.post("/payment", isAuthenticated, async (req, res) => {
  // const paymentData = {
  //   amount: +req.body.price,
  //   currency: "SAR",
  //   customer: {
  //     first_name: "Ahmed",
  //     email: "ahmed@example.com",
  //   },
  //   source: {
  //     id: "src_all",
  //   },
  //   customer_initiated: true,
  //   threeDSecure: true,
  //   save_card: false,
  //   description: "Test Description",
  //   metadata: { udf1: "Metadata 1" },
  //   receipt: { email: false, sms: false },
  //   reference: { transaction: "txn_01", order: "ord_01" },
  //   merchant: { id: "1234" },
  //   post: { url: "https://discoveryourself.onrender.com/paying" },
  //   redirect: { url: "https://discoveryourself.onrender.com/text" },
  // };
  // try {
  // const response = await axios.post(
  //   "https://api.tap.company/v2/charges", // نقطة نهاية (Endpoint) لإنشاء الدفعة
  //   paymentData,
  //   {
  //     headers: {
  //       Authorization: `Bearer sk_test_XKokBfNWv6FIYuTMg5sLPjhJ`,
  //       "Content-Type": "application/json",
  //     },
  //   }
  // );
  // const redirectUrl = response.data.transaction.url;
  // }
  //  catch (error) {
  //   res.status(500).send("Error creating payment session");
  // }
  const user = await User.findOne({ user: req.session.user });
  Payment.create({
    tapId: "tap_123456789", // يجب أن يكون هذا معرف فريد من نوعه لكل دفعة
    type: "personal",
    exams: ["p1", "p2", "p3"],
    url: "https://baserah.app/text",
    users: [user],
    teacher: null,
    stat: "pending",
  });

  res.send("done");
});

app.get("/text", async (req, res) => {
  const paymentRecord = await Payment.findOne({
    tapId: req.query.tapId,
  }).populate("users");
  if (paymentRecord && paymentRecord.stat === "pending") {
    // console.log("Payment completed for users:", paymentRecord);
    let exams = [];
    paymentRecord.users.forEach((u) => {
      paymentRecord.exams.forEach((e) => {
        exams.push({ payment: paymentRecord._id, user: u._id, type: e });
      });
    });
    await Exam.insertMany(exams);
    paymentRecord.stat = "completed";
    await paymentRecord.save();
    res.render("storeTxt");
  } else {
    res.send("Payment record not found or already processed.");
  }
});
app.post("/paying", isAuthenticated, async (req, res) => {
  // console.log("Payment successful:", req.body);
  res.sendStatus(200);
});

app.get("/signup", async function ({ body: data }, res) {
  res.render("signup");
});
app.post("/signup", express.json(), async function ({ body: data }, res) {
  const check = await User.findOne({ user: data.user });
  const check2 = await User.findOne({ user: data.user });
  if (check) {
    res.send("قم باختيار اسم مستخدم اخر");
    return;
  }
  if (check2) {
    res.send("البريد الالكتروني مستخدم بالفعل");
    return;
  }
  let userData = {
    user: data.user,
    pass: data.pass,
    name: data.name,
    phone: data.phone,
    email: data.email,
  };
  await User.create(userData)
    .then(() => {
      res.send("done");
    })
    .catch(() => {
      res.send("err");
    });
});

app.get("/admin/Results/:id/:exam", isAdmin, async function (req, res) {
  await client.connect();
  const db = client.db("soqy");
  const collection = db.collection("users");
  const user = await collection.findOne({ user: req.params.id });
  if (user[req.params.exam]) {
    res.render(`${req.params.exam}Result`, {
      [req.params.exam]: JSON.stringify(user[req.params.exam]),
      name: user.name,
      from: "show",
    });
    return;
  }
  res.send("notFound");
});

app.get("/admin/Results/:id/:exam", isTeacher, async function (req, res) {
  await client.connect();
  const db = client.db("soqy");
  const collection = db.collection("users");
  const user = await collection.findOne({ user: req.params.id });
  if (user[req.params.exam]) {
    res.render(`${req.params.exam}Result`, {
      [req.params.exam]: JSON.stringify(user[req.params.exam]),
      name: user.name,
      from: "show",
    });
    return;
  }
  res.send("notFound");
});
app.get("/admin/Results/:id/:exam", function (req, res) {
  res.redirect("/admin");
});
app.get("/admin/end/:id", isAdmin, async function (req, res) {
  await client.connect();
  const db = client.db("soqy");
  const collection = db.collection("users");
  const user = await collection.findOne({ user: req.params.id });
  client.close();
  if (user) {
    const p1 = user.stat?.p1 ? user.stat.p1.tops : null;
    const p2 = user.stat?.p2 ? user.stat.p2 : null;
    const p3 = user.stat?.p3 ? user.stat.p3.tops : null;
    if (user.rate) {
      const rate = [
        {
          name: "الميول المهنية",
          val: user.rate.qus
            .slice(0, 3)
            .reduce(
              (accumulator, currentValue) => +accumulator + +currentValue.val,
              0
            ),
        },
        {
          name: "تحليل الشخصية mbti",
          val: user.rate.qus
            .slice(3, 6)
            .reduce(
              (accumulator, currentValue) => +accumulator + +currentValue.val,
              0
            ),
        },
        {
          name: "الذكاءات المتعددة",
          val: user.rate.qus
            .slice(6, 9)
            .reduce(
              (accumulator, currentValue) => +accumulator + +currentValue.val,
              0
            ),
        },
      ];
      // console.log(rate);
      res.render("studentPage", {
        id: user.user,
        name: user.name,
        p1,
        p2,
        p3,
        rate,
      });
      return;
    }
    res.render("studentPage", {
      id: user.user,
      name: user.name,
      p1,
      p2,
      p3,
      rate: null,
    });
  } else {
    res.redirect("admin");
  }
});
app.get("/admin/end/:id", isTeacher, async function (req, res) {
  await client.connect();
  const db = client.db("soqy");
  const collection = db.collection("users");
  const user = await collection.findOne({ user: req.params.id });
  client.close();
  if (user) {
    const p1 = user.stat?.p1 ? user.stat.p1.tops : null;
    const p2 = user.stat?.p2 ? user.stat.p2 : null;
    const p3 = user.stat?.p3 ? user.stat.p3.tops : null;
    res.render("studentPage", { id: user.user, name: user.name, p1, p2, p3 });
  } else {
    res.redirect("admin");
  }
});
app.get("/admin/end/:id", async function (req, res) {
  res.redirect("/admin");
});
app.get("/admin/end/:id", function (req, res) {
  res.send("not allowd");
});

// Result-Page

app.post("/saveExam", async function (req, res) {
  await client.connect();
  const db = client.db("soqy");
  const collection = db.collection("users");
  let object = {
    [req.body.type]:
      req.body.ob == "1" ? JSON.parse(req.body.data) : req.body.data,
    ["stat.end"]: `${Date.now()}`,
  };
  // console.log(object);
  await collection
    .updateOne({ user: req.session.user }, { $set: object })
    .then(() => {
      req.session[req.body.type] = "done";
      req.session.save(function (err) {
        if (err) return next(err);
        res.send("saved");
      });
    })
    .catch((err) => {
      res.send("notFound");
    });
});

// app.post("/deleteExam", async function (req, res) {
//   await client.connect();
//   const db = client.db("soqy");
//   const collection = db.collection("users");
//   // console.log(req.body.user)
//   await collection
//     .updateOne(
//       { user: req.body.user },
//       {
//         $unset: {
//           [req.body.type]: "",
//           [`stat.${req.body.type}`]: "",
//         },
//       }
//     )
//     .then(() => {
//       res.send("deleted");
//     })
//     .catch((err) => {
//       res.send("notFound");
//     });
// });

// app.post("/deleteAll", async function (req, res) {
//   await client.connect();
//   const db = client.db("soqy");
//   const collection = db.collection("users");
//   // console.log(req.body.user)
//   await collection
//     .updateOne(
//       { user: req.body.user },
//       {
//         $unset: {
//           ["p1"]: "",
//           ["p2"]: "",
//           ["p3"]: "",
//           ["stat"]: "",
//           ["rate"]: "",
//         },
//       }
//     )
//     .then(() => {
//       res.send("deleted");
//     })
//     .catch((err) => {
//       res.send("notFound");
//     });
// });

app.post("/deleteStudent", async function (req, res) {
  await client.connect();
  const db = client.db("soqy");
  const collection = db.collection("users");
  // console.log(req.body.user)
  await collection
    .deleteOne({ user: req.body.user })
    .then(() => {
      res.send("deleted");
    })
    .catch((err) => {
      res.send("notFound");
    });
});
app.post(
  "/login",
  express.urlencoded({ extended: false }),
  async function (req, res) {
    const collection = req.body.collection;
    if (collection == "users") {
      // console.log("user login");
      const user = await User.findOne({
        user: req.body.user,
        pass: req.body.pass,
      });
      // console.log(user);
      if (user) {
        // console.log("User ID:", user._id.toString());
        const aa = user._id.toString();
        // console.log(typeof aa);
        req.session.regenerate(function (err) {
          if (err) next(err);
          req.session.userId = aa;
          req.session.user = user.user;
          req.session.name = user.name;
          req.session.role = user.role;
          req.session.save(function (err) {
            if (err) return next(err);
            res.send("exist");
          });
        });
      } else {
        res.send("notFound");
      }
    } else {
      // console.log("admin login");
      const user = await Teacher.findOne({
        user: req.body.user,
        pass: req.body.pass,
      });
      // console.log(user);
      if (user) {
        req.session.regenerate(function (err) {
          if (err) next(err);
          req.session.user = user.user;
          req.session.name = user.name;
          req.session.role = user.role;
          req.session.save(function (err) {
            if (err) return next(err);
            res.send(user.user == "admin" ? "admin" : "exist");
          });
        });
      } else {
        res.send("notFound");
      }
    }
  }
);
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error destroying session:", err);
      return res.status(500).send("Error during logout");
    }
    // Optionally, clear the session cookie from the client's browser
    res.clearCookie("connect.sid"); // Replace 'connect.sid' with your session cookie name
    res.redirect("/");
  });
});
app.listen(3000);
console.log("http://127.0.0.1:3000");
