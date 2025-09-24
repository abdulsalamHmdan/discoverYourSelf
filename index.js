var express = require('express')
var session = require('express-session')
var session = require('express-session')
const puppeteer = require('puppeteer');

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
const { MongoClient, Admin } = require('mongodb');
const { name } = require('ejs');
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
// ];

// data = data.map(x => { return { idNumber: x.idNumber, name: x.name, email: x.email, phone: x.phone } })

//start routing here;

function isAuthenticated(req, res, next) {
    if (req.session.user) next()
    else next('route')
}
function isAdmin(req, res, next) {
    if (req.session.user == "admin") next()
    else next('route')
}

// app.get('/data', async function (req, res) {
//     await client.connect();
//     const db = client.db("soqy");
//     const collection = db.collection('users');
//     await collection.insertMany(data)
//     client.close()
//     res.send(",jhsaxhg");

// })

app.get('/', isAuthenticated, function (req, res) {
    res.redirect("p1")
})
app.get('/', function (req, res) {
    res.render("login", { msg: "يجب عليك تسجيل الدخول" });
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
    res.render("end", { user: req.session.name, p1: user.stat.p1, p3: user.stat.p3 });
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
            riasec: ["A", "S", "E"],
            mbti: "ENFP",
            startTime: "2024-01-13 11:15",
            endTime: "2024-01-13 12:00"
        }
    })
    res.render("adminPage", { data: JSON.stringify(user) });
})
app.get('/admin', function (req, res) {
    res.render("login", { msg: "يجب عليك تسجيل الدخول" });
})

app.get('/admin/Results/:id/:exam', isAdmin, async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    const user = await collection.findOne({ idNumber: req.params.id })
    if (user[req.params.exam]) {
        res.render(`${req.params.exam}Result`, { [req.params.exam]: user[req.params.exam], name: user.name });
        return;
    }
    res.send('notFound');
})
app.get('/admin/Results/:id/:exam', function (req, res) {
    res.send('غير مصرح لك بالدخول');

});


app.get('/admin/end/:id', isAdmin, async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    const user = await collection.findOne({ idNumber: req.params.id })
    client.close()
    const p1 = user.stat?.p1 ? JSON.parse(user.stat.p1).tops : null;
    const p2 = user.stat?.p2 ? JSON.parse(user.stat.p2).tops : null;
    const p3 = user.stat?.p3 ? JSON.parse(user.stat.p3).tops : null;
    res.render("studentPage", { id: user.idNumber, name: user.name, p1, p2, p3 });
})

app.get('/admin/end/:id', function (req, res) {
    res.send("not allowd");
})

// Result-Page
app.get('/Results/:exam', isAuthenticated, async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    const user = await collection.findOne({ idNumber: req.session.user })
    if (user[req.params.exam]) {
        res.render(`${req.params.exam}Result`, { [req.params.exam]: user[req.params.exam], name: req.session.name });
        return;
    }
    res.send('notFound');
})

app.get('/Results/:id/:exam', async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    const user = await collection.findOne({ idNumber: req.params.id })
    if (user[req.params.exam]) {
        res.render(`${req.params.exam}Result`, { [req.params.exam]: user[req.params.exam], user: user.name });
        return;
    }
    res.send('notFound');
})

app.post('/html-to-pdf', async (req, res) => {
    try {
        const url = req.body?.url;

        if (!url) {
            return res.status(400).send('يرجى تزويد رابط الصفحة في body');
        }

        // شغّل كروميوم
        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();

        // فتح الصفحة من الرابط المحدد
        await page.goto(url, { waitUntil: 'networkidle0' });

        // إعدادات PDF
        const pdfBuffer = await page.pdf({
            format: 'A4',
            printBackground: true,
            // margin: { top: '10mm', bottom: '10mm', left: '10mm', right: '10mm' }
        });

        await browser.close();

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
});

app.post('/saveExam', async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    // console.log(req.body)
    await collection.updateOne({ idNumber: req.session.user }, { $set: { [req.body.type]: req.body.data } }).then(() => {
        req.session[req.body.type] = "done"
        req.session.save(function (err) {
            if (err) return next(err)
            res.send('saved')
        })

    }).catch(err => {
        res.send('notFound');
    })
})




app.post('/login', express.urlencoded({ extended: false }), async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    const user = await collection.findOne({ idNumber: req.body.user, phone: req.body.pass })

    if (user) {
        req.session.regenerate(function (err) {
            if (err) next(err)
            req.session.user = user.idNumber
            req.session.name = user.name
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