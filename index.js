var express = require('express')
var session = require('express-session')
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
const { MongoClient, ObjectId } = require('mongodb');
const ejs = require('ejs');
const url = "mongodb+srv://family:aS0507499583@cluster0.dvljyns.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(url);
// async function addNames() {
//     await client.connect();
//     const db = client.db("soqy");
//     const collection = db.collection('users');
//    collection.updateMany({}, {
//     $set:{"exams":["p1","p2","p3"]}
//     }).then(()=>{
//         console.log("done");

//     }).catch(()=>{
//         console.log("error");

//     })

// await collection.insertMany(users).then(() => {
//     // res.send("saved");
// }).catch(() => {
//     // res.send("err");
// })

// }
// addNames();


//Auth
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


// Routing
app.get('/', isAuthenticated, function (req, res) {
    res.redirect("home");
})
app.get('/', isAdmin, function (req, res) {
    res.redirect("admin");
})
app.get('/', isTeacher, function (req, res) {
    res.redirect("admin");
})

app.get('/', function (req, res) {
    // res.render("googlec8565fdb526d95db");
    res.render("login", { collection: "users" });
})

app.get('/home', isAuthenticated, function (req, res) {
    res.render("home", { data: req.session });
})
app.get('/home', function (req, res) {
    res.redirect("/")
})
app.get('/p1', isAuthenticated, function (req, res) {
    if (req.session.p1 == 'done' || !req.session.exams.includes("p1")) {
        res.redirect("home")
        return;
    }
    // console.log(req.session)
    // console.log(req.session.exams.includes("p55"))
    res.render("p1", { name: req.session.name });
})
app.get('/p1', function (req, res) {
    res.redirect("/")
})
app.get('/p2', isAuthenticated, function (req, res) {
    if (req.session.p2 == 'done' || !req.session.exams.includes("p2")) {
        res.redirect("home")
        return;
    }
    res.render("p2", { name: req.session.name });
})
app.get('/p2', function (req, res) {
    res.redirect("/");
})
app.get('/p3', isAuthenticated, function (req, res) {
    if (req.session.p3 == 'done' || !req.session.exams.includes("p3")) {
        res.redirect("home")
        return;
    }
    res.render("p3", { name: req.session.name });
})
app.get('/p3', function (req, res) {
    res.redirect("/");
})

app.get('/p1rate', isAuthenticated, function (req, res) {
    res.render("p1rate", { user: req.session.name });
})
app.get('/p1rate', function (req, res) {
    res.redirect("/");
})
app.get('/p2rate', isAuthenticated, function (req, res) {
    res.render("p2rate", { user: req.session.name });
})
app.get('/p2rate', function (req, res) {
    res.redirect("/");
})
app.get('/p3rate', isAuthenticated, function (req, res) {
    res.render("p3rate", { user: req.session.name });
})
app.get('/p3rate', function (req, res) {
    res.redirect("/");
})


app.post('/addUser', async function ({ body: data }, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    const collection2 = db.collection('tokens');
    const token = await collection2.findOne({ _id: new ObjectId(data.token) })
    console.log(token)
    const check = await collection.findOne({ user: data.user })
    if (token?.status !== "new") {
        res.send("الرمز غير فعال")
        return
    }
    if (check !== null) {
        res.send("المستخدم موجود")
        return
    }

    let user = {
        user: data.user,
        pass: data.pass,
        idNumber: data.idNumber,
        name: data.name,
        phone: data.phone,
        email: data.email,
        teacher: token.teacher,
        permissions: "student",
        exams: token.exams,
    }
    console.log(user)
    await collection.insertMany(user).then(() => {
        res.send("saved");
    }).catch(() => {
        res.send("err");
    })



})

function sumArray(numbers) {
    // .reduce(accumulator, currentValue) => accumulator + currentValue
    // القيمة 0 هي القيمة الابتدائية للمجمع (accumulator)
    return numbers.reduce((total, current) => +total + +current, 0);
}
app.get('/aa', async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('archive');
    const user = await collection.find({}).toArray()
    function aa(xx) {
        let a1 = (user.map(x => x?.rate?.qus[xx]?.val || null).filter(x => x !== null));
        console.log(sumArray(a1), a1.length)
        let gg = (((sumArray(a1) - a1.length) / a1.length))
        return Math.ceil(gg / 2 * 100)
    }

    client.close()
    let all = []
    for (let i = 0; i < 10; i++) {
        all.push(aa(i))
    }
    res.send(all)
})

app.get('/rate', async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('archive');
    const user = await collection.find({}).toArray()
    console.log(user.length);

    client.close()

    res.render("rateShow", { data: user });
})

// app.get('/end', isAuthenticated, async function (req, res) {
//     await client.connect();
//     const db = client.db("soqy");
//     const collection = db.collection('users');
//     const user = await collection.findOne({ user: req.session.user })
//     client.close()
//     const p1 = user.stat?.p1 ? user.stat.p1.tops : null;
//     const p2 = user.stat?.p2 ? user.stat.p2 : null;
//     const p3 = user.stat?.p3 ? user.stat.p3.tops : null;
//     const time = new Date(+user.stat.end) - new Date(+user.stat.start)
//     res.render("end", { user: req.session, time: time, p1, p2, p3 });
// })
// app.get('/end', function (req, res) {
//     res.redirect("/");
// })

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
            id: x.user,
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
            id: x.user,
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
    const user = await collection.findOne({ user: req.params.id })
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
    const user = await collection.findOne({ user: req.params.id })
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
    const user = await collection.findOne({ user: req.params.id })
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
            res.render("studentPage", { id: user.user, name: user.name, p1, p2, p3, rate });
            return;
        }
        res.render("studentPage", { id: user.user, name: user.name, p1, p2, p3, rate: null });
    } else {
        res.redirect('admin');
    }
})
app.get('/admin/end/:id', isTeacher, async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    const user = await collection.findOne({ user: req.params.id })
    client.close()
    if (user) {
        const p1 = user.stat?.p1 ? user.stat.p1.tops : null;
        const p2 = user.stat?.p2 ? user.stat.p2 : null;
        const p3 = user.stat?.p3 ? user.stat.p3.tops : null;
        res.render("studentPage", { id: user.user, name: user.name, p1, p2, p3 });
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

// Result-Page
app.get('/Results/:exam', isAuthenticated, async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    const user = await collection.findOne({ user: req.session.user })
    if (user[req.params.exam]) {
        res.render(`${req.params.exam}Result`, { [req.params.exam]: JSON.stringify(user[req.params.exam]), name: req.session.name, from: "show" });
        return;
    }
    res.send('notFound');
})

app.post('/saveExam', async function (req, res) {
    await client.connect();
    const db = client.db("soqy");
    const collection = db.collection('users');
    let object = { [req.body.type]: req.body.ob == "1" ? JSON.parse(req.body.data) : req.body.data, ["stat.end"]: `${Date.now()}` }
    console.log(object)
    await collection.updateOne({ user: req.session.user }, { $set: object }).then(() => {
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
    await collection.updateOne({ user: req.body.user }, {
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
    await collection.updateOne({ user: req.body.user }, {
        $unset: {
            ["p1"]: "",
            ["p2"]: "",
            ["p3"]: "",
            ["stat"]: "",
            ["rate"]: "",
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
    await collection.deleteOne({ user: req.body.user }).then(() => {
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
            req.session.exams = user.exams
            req.session.rate = user.rate ? "done" : "no"
            req.session.save(function (err) {
                if (err) return next(err)
                res.send(user.user == "admin" ? "admin" : 'exist')
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