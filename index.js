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
//   {
//     "idNumber": "test1",
//     "name": "تجربة 1",
//     "phone": "123456",
//     "email": "test1@gmail.com"
//   },
//   {
//     "idNumber": "test2",
//     "name": "تجربة 2",
//     "phone": "123456",
//     "email": "test1@gmail.com"
//   },
//   {
//     "idNumber": "test3",
//     "name": "تجربة 3",
//     "phone": "123456",
//     "email": "test2@gmail.com"
//   },
//   {
//     "idNumber": "test4",
//     "name": "تجربة 4",
//     "phone": "123456",
//     "email": "test1@gmail.com"
//   },
//   {
//     "idNumber": "test5",
//     "name": "تجربة 5",
//     "phone": "123456",
//     "email": "test2@gmail.com"
//   },
//   {
//     "idNumber": "test6",
//     "name": "تجربة 6",
//     "phone": "123456",
//     "email": "test1@gmail.com"
//   },
//   {
//     "idNumber": "test7",
//     "name": "تجربة 7",
//     "phone": "123456",
//     "email": "test2@gmail.com"
//   },
//   {
//     "idNumber": "test8",
//     "name": "تجربة 8",
//     "phone": "123456",
//     "email": "test1@gmail.com"
//   },
//   {
//     "idNumber": "test9",
//     "name": "تجربة 9",
//     "phone": "123456",
//     "email": "test2@gmail.com"
//   },
//   {
//     "idNumber": "test10",
//     "name": "تجربة 10",
//     "phone": "123456",
//     "email": "test1@gmail.com"
//   },
//   {
//     "idNumber": "test11",
//     "name": "تجربة 11",
//     "phone": "123456",
//     "email": "test2@gmail.com"
//   },
//   {
//     "idNumber": "test12",
//     "name": "تجربة 12",
//     "phone": "123456",
//     "email": "test1@gmail.com"
//   },
//   {
//     "idNumber": "test13",
//     "name": "تجربة 13",
//     "phone": "123456",
//     "email": "test2@gmail.com"
//   },
//   {
//     "idNumber": "test14",
//     "name": "تجربة 14",
//     "phone": "123456",
//     "email": "test1@gmail.com"
//   },
//   {
//     "idNumber": "test15",
//     "name": "تجربة 15",
//     "phone": "123456",
//     "email": "test2@gmail.com"
//   },
//   {
//     "idNumber": "test16",
//     "name": "تجربة 16",
//     "phone": "123456",
//     "email": "test1@gmail.com"
//   },
//   {
//     "idNumber": "test17",
//     "name": "تجربة 17",
//     "phone": "123456",
//     "email": "test2@gmail.com"
//   },
//   {
//     "idNumber": "test18",
//     "name": "تجربة 18",
//     "phone": "123456",
//     "email": "test1@gmail.com"
//   },
//   {
//     "idNumber": "test19",
//     "name": "تجربة 19",
//     "phone": "123456",
//     "email": "test2@gmail.com"
//   },
//   {
//     "idNumber": "test20",
//     "name": "تجربة 20",
//     "phone": "123456",
//     "email": "test1@gmail.com"
//   }
// ]
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
    res.redirect("welcome")
})
app.get('/', function (req, res) {
    res.render("login", { msg: "يجب عليك تسجيل الدخول" });
})

app.get('/welcome', isAuthenticated, function (req, res) {
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


app.get('/admin/end/:id', async function (req, res) {
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

app.post('/deleteExam', async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    console.log(req.body.user)
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