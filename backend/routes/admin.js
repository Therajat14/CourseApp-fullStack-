const Router = require('express');
const router = Router();
const adminMiddlewear = require("../middleware/admin");
const { Admin, Course } = require('../db/index');
const jwt = require('jsonwebtoken');



router.post("/signin", async (req, res) => {
    //logic to signup

    const username = req.body.username;
    const password = req.body.password;


    // check if the username is already exist with that username 
    await Admin.create({
        username: username,
        password: password
    });

    res.json({
        'message': 'Admin Created Successfuly'
    });
    console.log("Admin Created");
});

router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = await Admin.find({
        username: username,
        password: password
    });

    if (user) {
        const token = jwt.sign({
            username
        }, process.env.SECRET_KEY);

        res.json(token);

    }
    else
        res.send({
            msg: "Invalid user"
        })

});

router.post("/courses", adminMiddlewear, async (req, res) => {
    //course update logic here
    const title = req.body.title;
    const discription = req.body.discription;
    const price = req.body.price;
    const imgLink = req.body.imgLink;

    const newCourse = await Course.create({
        title: title,
        discription: discription,
        IMG_Url: imgLink,
        price: price
    });
    res.json({
        "msg": "Course Created",
        "course id": newCourse._id
    })
    console.log("Course Created");

});


router.get("/courses", adminMiddlewear, async (req, res) => {
    // logic to get course list of that amdin
    const response = await Course.find({});
    res.json({
        "Courses": response
    })
})


module.exports = router;
