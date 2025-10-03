var express = require('express')
var session = require('express-session')
const puppeteer = require('puppeteer');
const pdf = require("html-pdf-node");


var app = express()
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}));
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));
const { MongoClient } = require('mongodb');
const ejs = require('ejs');
const url = "mongodb+srv://family:aS0507499583@cluster0.dvljyns.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

// let data = [
//     {
//         "idNumber": "a100",
//         "name": "زياد بن منصور الرسيني",
//         "phone": "554690669",
//         "email": "z.alresaini@gmail.com"
//     },
//     {
//         "idNumber": "a101",
//         "name": "سليمان بن محمد المجلي",
//         "phone": "565385664",
//         "email": "sm.almujalli@gmail.com"
//     },
//     {
//         "idNumber": "a102",
//         "name": "عبدالعزيز عبدالرحمن العبدان",
//         "phone": "530976215",
//         "email": "bb0427045@gmail.com"
//     },
//     {
//         "idNumber": "a103",
//         "name": "مؤيد بن محمد بن علي العجاجي",
//         "phone": "507720908",
//         "email": "moi.alajaji@gmail.com"
//     },
//     {
//         "idNumber": "a104",
//         "name": "صالح حمد السبر ",
//         "phone": "544233020",
//         "email": "saleh27hss@gmail.com"
//     },
//     {
//         "idNumber": "a105",
//         "name": "عبدالسلام سليمان الجلنداني ",
//         "phone": "581749759",
//         "email": "slloooome5@gmail.com"
//     },
//     {
//         "idNumber": "a106",
//         "name": "محمد بن عبدالله الطلحة",
//         "phone": "560633582",
//         "email": "mo.altalhah@gmail.com"
//     },
//     {
//         "idNumber": "a107",
//         "name": "محمد بن فهد العبدالمنعم",
//         "phone": "530880727",
//         "email": "m.alabdmn2m@gmail.com"
//     },
//     {
//         "idNumber": "a108",
//         "name": "ناصر محمد الجليل",
//         "phone": "539179198",
//         "email": "kkssaa569@gmail.com"
//     },
//     {
//         "idNumber": "a109",
//         "name": "يوسف زيد الدكان",
//         "phone": "564289708",
//         "email": "yousef056.428.9708@gmail.com"
//     },
//     {
//         "idNumber": "a110",
//         "name": "الوليد بن عبدالملك خياط ",
//         "phone": "538469699",
//         "email": "alwaleedkhiat1@gmail.com"
//     },
//     {
//         "idNumber": "a111",
//         "name": "خالد حسين الأشدق",
//         "phone": "531348213",
//         "email": "psdk5555@gmail.com"
//     },
//     {
//         "idNumber": "a112",
//         "name": "سعيد خالد الضعيان",
//         "phone": "538134592",
//         "email": "sydaldyan7@gmail.com"
//     },
//     {
//         "idNumber": "a113",
//         "name": "عبدالحكيم بن عبدالعزيز السالم",
//         "phone": "534721163",
//         "email": "77keem@gmail.com"
//     },
//     {
//         "idNumber": "a114",
//         "name": "عبدالعزيز بن عبدالله بن غشيان ",
//         "phone": "546465565",
//         "email": "az.ghashyan@gmail.com"
//     },
//     {
//         "idNumber": "a115",
//         "name": "عبدالله سليمان الهمش",
//         "phone": "555280684",
//         "email": "abdullahsalhemsh@gmail.com"
//     },
//     {
//         "idNumber": "a116",
//         "name": "عبدالملك بن حسن الخنبشي",
//         "phone": "539493988",
//         "email": "saduzi87@gmail.com"
//     },
//     {
//         "idNumber": "a117",
//         "name": "محمد عبد اللطيف العجلان",
//         "phone": "555090957",
//         "email": "mohammedpppp49@gmail.com"
//     },
//     {
//         "idNumber": "a118",
//         "name": "محمد علي الزبيري",
//         "phone": "505116485",
//         "email": "masnzalzubairi@gmail.com"
//     },
//     {
//         "idNumber": "a119",
//         "name": "يوسف بن عبدالكريم احمد ادريس",
//         "phone": "599153625",
//         "email": "yosefedres1417@gmail.com"
//     },
//     {
//         "idNumber": "a120",
//         "name": "يوسف بن موسى الوادي",
//         "phone": "548984040",
//         "email": "y.s.f.wade@gmail.com"
//     },
//     {
//         "idNumber": "a121",
//         "name": "محمد إبراهيم السيف",
//         "phone": "501699538",
//         "email": "Mohammedalsif@icloud.com"
//     },
//     {
//         "idNumber": "a122",
//         "name": "معاذ بن سعود النقيثان",
//         "phone": "599192800",
//         "email": "moa2800h@gmail.com"
//     },
//     {
//         "idNumber": "a123",
//         "name": "ابراهيم بن محمد الدكان",
//         "phone": "568702756",
//         "email": "bindakkan@gmail.com"
//     },
//     {
//         "idNumber": "a124",
//         "name": "أحمد حسين العبداللطيف",
//         "phone": "599071110",
//         "email": "alabdullateef@abanumay.sa"
//     },
//     {
//         "idNumber": "a125",
//         "name": "أحمد لافي الأحمدي",
//         "phone": "566775700",
//         "email": "eng.ahmed.alahmadi@gmail.com"
//     },
//     {
//         "idNumber": "a126",
//         "name": "حسن عبدالمنعم الشبعان ",
//         "phone": "545496170",
//         "email": "geniushassan7@gmail.com"
//     },
//     {
//         "idNumber": "a127",
//         "name": "عادل فهيد سعيد بامطرف",
//         "phone": "535505755",
//         "email": "murafi1440@gmail.com"
//     },
//     {
//         "idNumber": "a128",
//         "name": "عبدالله عمر بافارع",
//         "phone": "562176550",
//         "email": "aobafara@gmail.com"
//     },
//     {
//         "idNumber": "a129",
//         "name": "عبدالله محمد القفاري",
//         "phone": "505748373",
//         "email": "alqfarybdallh506@gmail.com"
//     },
//     {
//         "idNumber": "a130",
//         "name": "عبدالله يوسف الصغير ",
//         "phone": "550544880",
//         "email": "abdallahalsugeer@gmail.com"
//     },
//     {
//         "idNumber": "a131",
//         "name": "فيصل صالح الشقحاء",
//         "phone": "566023047",
//         "email": "ggggx321@gmail.com"
//     },
//     {
//         "idNumber": "a132",
//         "name": "محسن هزاع الزهراني",
//         "phone": "505698535",
//         "email": "Mzahrani@rf.org.sa"
//     },
//     {
//         "idNumber": "a133",
//         "name": "نايف بدر المطيري",
//         "phone": "543752335",
//         "email": "naifalmutiri1646@gmail.com"
//     }
// ]

function isAuthenticated(req, res, next) {
    if (req.session.permissions == "student") next()
    else next('route')
}
function isAdmin(req, res, next) {
    if (req.session.permissions == "admin") next()
    else next('route')
}
function isTeacher(req, res, next) {
    if (req.session.permissions == "teacher") next()
    else next('route')
}
/*
app.get('/data', async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    await collection.updateMany({}, // يفلتر اللي ما عندهم pass
        [
            { $set: { user: "$idNumber", pass: "$phone" } },

        ]
    )
    client.close()
    res.send("done");

    // await collection.insertMany(admins)
    // await collection.deleteMany()
})
    */

app.get('/', isAuthenticated, function (req, res) {
    res.redirect("welcome");
})
app.get('/', isAdmin, function (req, res) {
    res.redirect("admin");
})
app.get('/', isTeacher, function (req, res) {
    res.redirect("admin");
})
app.get('/', function (req, res) {
    res.render("login", { collection: "users" });
})

app.get('/welcome', isAuthenticated, function (req, res) {
    if (req.session.p1 == 'done' || req.session.p2 == 'done' || req.session.p3 == 'done') {
        res.redirect("p1")
        return;
    }
    res.render("welcome");
})
app.get('/welcome', function (req, res) {
    res.redirect("/")
})

app.get('/p1', isAuthenticated, function (req, res) {
    if (req.session.p1 == 'done') {
        res.redirect("p2")
        return;
    }
    res.render("p1", { name: req.session.name });
})
app.get('/p1', function (req, res) {
    res.redirect("/")
})
app.get('/p2', isAuthenticated, function (req, res) {
    if (req.session.p1 == 'no') {
        res.redirect("p1")
        return;
    }
    if (req.session.p2 == 'done') {
        res.redirect("p3")
        return;
    }
    res.render("p2", { name: req.session.name });
})
app.get('/p2', function (req, res) {
    res.redirect("/");
})
app.get('/p3', isAuthenticated, function (req, res) {
    if (req.session.p1 == 'no') {
        res.redirect("p1")
        return;
    }
    if (req.session.p2 == 'no') {
        res.redirect("p2")
        return;
    }
    if (req.session.p3 == 'done') {
        res.redirect("rate")
        return;
    }
    res.render("p3", { name: req.session.name });
})
app.get('/p3', function (req, res) {
    res.redirect("/");
})

//end pages
app.get('/rate', isAuthenticated, function (req, res) {
    if (req.session.p1 == 'no') {
        res.redirect("p1")
        return;
    }
    if (req.session.p2 == 'no') {
        res.redirect("p2")
        return;
    }
    if (req.session.p3 == 'no') {
        res.redirect("p3")
        return;
    }
    if (req.session.rate == 'done') {
        res.redirect("end")
        return;
    }
    res.render("rate", { user: req.session.name });
})
app.get('/rate', function (req, res) {
    res.redirect("/");
})
app.get('/end', isAuthenticated, async function (req, res) {
    // console.log(req.session)
    if (req.session.p1 == 'no') {
        res.redirect("p1")
        return;
    }
    if (req.session.p2 == 'no') {
        res.redirect("p2")
        return;
    }
    if (req.session.p3 == 'no') {
        res.redirect("p3")
        return;
    }
    if (req.session.rate == 'no') {
        res.redirect("rate")
        return;
    }
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    const user = await collection.findOne({ idNumber: req.session.user })
    client.close()
    const p1 = user.stat?.p1 ? user.stat.p1.tops : null;
    const p2 = user.stat?.p2 ? user.stat.p2 : null;
    const p3 = user.stat?.p3 ? user.stat.p3.tops : null;
    const time = new Date(+user.stat.end) - new Date(+user.stat.start)
    res.render("end", { user: req.session, time: time, p1, p2, p3 });
})

app.get('/end', function (req, res) {
    res.redirect("/");
})



// Admin pages

app.get('/admin', isAdmin, async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    let user = await collection.find({}).toArray();
    client.close()
    user = user.map(x => {
        let completion = 0;
        let prog = "";
        if (x["p1"]) {
            completion += 33
        }
        if (x["p2"]) {
            completion += 33
        }
        if (x["p3"]) {
            completion += 34
        }
        prog = completion == 100 ? "completed" : completion > 0 ? "in-progress" : "not-started";


        return {
            id: x.idNumber,
            name: x.name,
            phone: x.phone,
            studentId: x.idNumber,
            status: prog,
            completion: completion,
            riasec: x?.stat?.p1?.tops?.map(l => l.dim),
            mbti: x?.stat?.p2?.type,
            thk: x?.stat?.p3?.tops?.map(l => l.name),
            startTime: +x?.stat?.start,
            endTime: +x?.stat?.end
        }
    })
    res.render("adminPage", { data: JSON.stringify(user) });
})
app.get('/admin', isTeacher, async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    let user = await collection.find({ techer: req.session.name }).toArray();
    client.close()
    user = user.map(x => {
        let completion = 0;
        let prog = "";
        if (x["p1"]) {
            completion += 33
        }
        if (x["p2"]) {
            completion += 33
        }
        if (x["p3"]) {
            completion += 34
        }
        prog = completion == 100 ? "completed" : completion > 0 ? "in-progress" : "not-started";


        return {
            id: x.idNumber,
            name: x.name,
            phone: x.phone,
            studentId: x.idNumber,
            status: prog,
            completion: completion,
            riasec: x?.stat?.p1?.tops?.map(l => l.dim),
            mbti: x?.stat?.p2?.type,
            thk: x?.stat?.p3?.tops?.map(l => l.name),
            startTime: +x?.stat?.start,
            endTime: +x?.stat?.end
        }
    })
    res.render("adminPage", { data: JSON.stringify(user) });
})

app.get('/admin', function (req, res) {
    res.render("login", { collection: "admin" });
})

app.get('/admin/Results/:id/:exam', isAdmin, async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    const user = await collection.findOne({ idNumber: req.params.id })
    if (user[req.params.exam]) {
        res.render(`${req.params.exam}Result`, { [req.params.exam]: JSON.stringify(user[req.params.exam]), name: user.name, from: "show" });
        return;
    }
    res.send('notFound');
})
app.get('/admin/Results/:id/:exam', isTeacher, async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    const user = await collection.findOne({ idNumber: req.params.id })
    if (user[req.params.exam]) {
        res.render(`${req.params.exam}Result`, { [req.params.exam]: JSON.stringify(user[req.params.exam]), name: user.name, from: "show" });
        return;
    }
    res.send('notFound');
})
app.get('/admin/Results/:id/:exam', function (req, res) {
   res.redirect("/admin")

});


app.get('/admin/end/:id', isAdmin, async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    const user = await collection.findOne({ idNumber: req.params.id })
    client.close()
    if (user) {
        const p1 = user.stat?.p1 ? user.stat.p1.tops : null;
        const p2 = user.stat?.p2 ? user.stat.p2 : null;
        const p3 = user.stat?.p3 ? user.stat.p3.tops : null;
        res.render("studentPage", { id: user.idNumber, name: user.name, p1, p2, p3 });
    } else {
        res.redirect('admin');
    }
})
app.get('/admin/end/:id', isTeacher, async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    const user = await collection.findOne({ idNumber: req.params.id })
    client.close()
    if (user) {
        const p1 = user.stat?.p1 ? user.stat.p1.tops : null;
        const p2 = user.stat?.p2 ? user.stat.p2 : null;
        const p3 = user.stat?.p3 ? user.stat.p3.tops : null;
        res.render("studentPage", { id: user.idNumber, name: user.name, p1, p2, p3 });
    } else {
        res.redirect('admin');
    }
})
app.get('/admin/end/:id', async function (req, res) {
    res.redirect("/admin")
})

// app.get('/hh', async function (req, res) {
//     await client.connect();
//     const db = client.db("soqy");
//     const collection = db.collection('users');
//     const user = await collection.findOne({ idNumber: "test8" })
//     res.json(user.p2);
// })
// app.get('/admin/end/:id', function (req, res) {
//     res.send("not allowd");
// })

// Result-Page
app.get('/Results/:exam', isAuthenticated, async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    const user = await collection.findOne({ idNumber: req.session.user })
    if (user[req.params.exam]) {
        res.render(`${req.params.exam}Result`, { [req.params.exam]: JSON.stringify(user[req.params.exam]), name: req.session.name, from: "show" });
        return;
    }
    res.send('notFound');
})

// app.get('/Results/:id/:exam', async function (req, res) {
//     await client.connect();
//     const db = client.db("soqy");
//     const collection = db.collection('users');
//     const user = await collection.findOne({ idNumber: req.params.id })
//     if (user[req.params.exam]) {
//         res.render(`${req.params.exam}Result`, { [req.params.exam]: JSON.stringify(user[req.params.exam]), name: user.name, from: "show" });
//         return;
//     }
//     res.send('notFound');
// })

app.post('/html-to-pdf', async (req, res) => {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    const user = await collection.findOne({ idNumber: req.body.id })
    if (user[req.body.exam]) {
        try {
            const html = await ejs.renderFile(`views/${req.body.exam}Result.ejs`, { [req.body.exam]: user[req.body.exam], name: user.name, from: "print" });
            // 2. إعدادات PDF
            const options = { format: "A4", printBackground: true };
            const file = { content: html };
            await new Promise(resolve => setTimeout(resolve, 1000));
            // 3. توليد PDF وإرساله كـ response
            const pdfBuffer = await pdf.generatePdf(file, options);
            // ترجع الملف مباشرة
            res.set({
                'Content-Type': 'application/pdf',
                'Content-Disposition': 'attachment; filename="report.pdf"',
                'Content-Length': pdfBuffer.length
            });
            res.send(pdfBuffer);


        } catch (err) {
            console.error("خطأ أثناء إنشاء PDF:", err);
            res.status(500).send('حدث خطأ أثناء إنشاء ملف PDF');
        }

    } else {
        res.status(500).send('الاختبار غير محفوظ');

    }
});

app.post('/saveExam', async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    // console.log(req.body.type.startsWith("p"))
    let object = { [req.body.type]: req.body.ob == "1" ? JSON.parse(req.body.data) : req.body.data, ["stat.end"]: `${Date.now()}` }
    await collection.updateOne({ idNumber: req.session.user }, { $set: object }).then(() => {
        req.session[req.body.type] = "done"
        req.session.save(function (err) {
            if (err) return next(err)
            res.send('saved')
        })

    }).catch(err => {
        res.send('notFound');
    })
})

app.post('/deleteExam', async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    // console.log(req.body.user)
    await collection.updateOne({ idNumber: req.body.user }, {
        $unset: {
            [req.body.type]: "",
            [`stat.${req.body.type}`]: ""
        }
    }).then(() => {
        res.send("deleted")

    }).catch(err => {
        res.send('notFound');
    })
})
app.post('/deleteAll', async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    // console.log(req.body.user)
    await collection.updateOne({ idNumber: req.body.user }, {
        $unset: {
            ["p1"]: "",
            ["p2"]: "",
            ["p3"]: "",
            ["stat"]: "",
        }
    }).then(() => {
        res.send("deleted")

    }).catch(err => {
        res.send('notFound');
    })
})

app.post('/deleteStudent', async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    // console.log(req.body.user)
    await collection.deleteOne({ idNumber: req.body.user }).then(() => {
        res.send("deleted")

    }).catch(err => {
        res.send('notFound');
    })
})





app.post('/login', express.urlencoded({ extended: false }), async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection(req.body.collection);
    // {projection:{ email: 1, }}
    const user = await collection.findOne({ user: req.body.user, pass: req.body.pass })
    if (user) {
        req.session.regenerate(function (err) {
            if (err) next(err)
            req.session.user = user.user
            req.session.name = user.name
            req.session.permissions = user.permissions
            req.session.p1 = user.p1 ? "done" : "no"
            req.session.p2 = user.p2 ? "done" : "no"
            req.session.p3 = user.p3 ? "done" : "no"
            req.session.rate = user.rate ? "done" : "no"
            req.session.save(function (err) {
                if (err) return next(err)
                // res.redirect('/')
                res.send(user.idNumber == "admin" ? "admin" : 'exist')
            })
        })
    } else {
        res.send('notFound');
    }
})

app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error('Error destroying session:', err);
            return res.status(500).send('Error during logout');
        }
        // Optionally, clear the session cookie from the client's browser
        res.clearCookie('connect.sid'); // Replace 'connect.sid' with your session cookie name
        res.send('Logged out successfully');
    });
});

app.listen(3000)
console.log("http://127.0.0.1:3000")