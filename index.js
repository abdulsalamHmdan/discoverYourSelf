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
const { MongoClient } = require('mongodb');
const url = "mongodb+srv://family:aS0507499583@cluster0.dvljyns.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);

// data = data.map(x => { return { idNumber: x.idNumber, name: x.name, email: x.email, phone: x.phone } })

//start routing here;

function isAuthenticated(req, res, next) {
    if (req.session.user) next()
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
    res.render("p2", { user: req.session.name });
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
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    const user = await collection.findOne({ idNumber: req.session.user })
    // client.close()
    if (user.p1 && user.p2 && user.p3) {
        res.render("end", { user: req.session.name, p1: user.p1, p2: user.p2, p3: user.p3 });
        return;
    }
})
app.get('/end', function (req, res) {
    res.redirect("/");
})


// Result-Page
app.get('/Results/:exam', isAuthenticated, async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    const user = await collection.findOne({ idNumber: req.session.user })
    // console.log(req.params)
    if (user[req.params.exam]) {
        res.render(`${req.params.exam}Result`, { [req.params.exam]: user[req.params.exam], user: req.session.name });
        return;
    }
    res.send('notFound');




})
app.get('/Results', function (req, res) {
    res.redirect("/");
})



app.post('/html-to-pdf', async (req, res) => {
    try {
        const html = req.body ? req.body.html : '<p>لا يوجد محتوى</p>';
        // console.log(html)

        // شغّل كروميوم
        const browser = await puppeteer.launch({
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });
        const page = await browser.newPage();

        // لو عندك خطوط من Google أو css داخل <head> خله ضمن الـ html المرسل
        await page.setContent(html, { waitUntil: 'networkidle0' });

        // إعدادات PDF
        const pdfBuffer = await page.pdf({
            format: 'A4',
            printBackground: true,
            // margin: { top: '10mm', bottom: '10mm', left: '10mm', right: '10mm' }
        });

        await browser.close();

        // ترجع الملف مباشرة (يمكن ترجيع base64 بدلاً من ذلك)
        res.set({
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'attachment; filename="report.pdf"',
            'Content-Length': pdfBuffer.length
        });
        res.send(pdfBuffer);

    } catch (err) {
        console.error("err");
        res.status(500).send('خطأ في إنشاء PDF');
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
    // console.log(req.body)
    // console.log(user)
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
                res.send('exist')
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