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
function isAuthenticated(req, res, next) {
    if (req.session.permissions == "student") next()
    else next('route')
}
function isAdmin(req, res, next) {
    // next()
    if (req.session.permissions == "admin") next()
    else next('route')
}
function isTeacher(req, res, next) {
    if (req.session.permissions == "teacher") next()
    else next('route')
}
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
        if (x.name.trim() == "عبدالاله علي دعاس الحازمي") {
            console.log(x["p1"], x["p2"], x["p3"])

        }

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
        if (user.rate) {
            const rate = [{ name: "الميول المهنية", val: (user.rate.qus.slice(0, 3).reduce((accumulator, currentValue) => +accumulator + +currentValue.val, 0)) },
            { name: "تحليل الشخصية mbti", val: (user.rate.qus.slice(3, 6).reduce((accumulator, currentValue) => +accumulator + +currentValue.val, 0)) },
            { name: "الذكاءات المتعددة", val: (user.rate.qus.slice(6, 9).reduce((accumulator, currentValue) => +accumulator + +currentValue.val, 0)) }
            ];
            console.log(rate)
            res.render("studentPage", { id: user.idNumber, name: user.name, p1, p2, p3, rate });
            return;
        }
        res.render("studentPage", { id: user.idNumber, name: user.name, p1, p2, p3,rate:null });
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
app.get('/admin/end/:id', function (req, res) {
    res.send("not allowd");
})
app.get('/hh/:id', async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    const user = await collection.findOne({ idNumber: req.params.id })
    res.json(user.rate);
})
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
app.get('/deleteError', async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    // const arr = [
    //     "1139517450", "1140914761", "1144304258", "1142768520", "1141038974", "1141375491", "1142998002", "1141401198", "1140270867", "1143793089", "1142010659", "1140944743", "1144207493", "1133267003", "1144958285", "1144289756", "1145398473", "1145913628", "1186183602", "1144537147", "1144577648", "1166222479", "1144484506", "1144368584", "1141812972", "1143605127", "1143298295", "1139149478", "1141412526", "1140662329", "1144212428", "1144452644", "1162217481", "1139089690", "1143195343", "1145715361", "1146481476", "1143446787", "1144589015", "1137532915", "1144696604", "1139379349", "1145193395", "1140604123", "1142062429", "1150533493", "1146192321", "1155631318", "1156253237", "1145204598", "1174506962", "1145785877", "1142415486", "1146478423", "1141571818", "1144960877"
    // ]
    arr.forEach(async x => {
        await collection.updateOne({ idNumber: x }, {
            $unset: {
                ["p3"]: "",
                ["stat.p3"]: "",
            }
        })
    })

    res.send('notFound');
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