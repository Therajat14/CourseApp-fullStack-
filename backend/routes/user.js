const Router = require('express');
const userMiddleware = require("../middleware/user");
const router = Router();
const { User, Course } = require('../db/index');
const { PureComponent } = require('react');

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;


    // check if the username is already exist with that username 
    await User.create({
        username: username,
        password: password
    });

    res.json({
        'message': 'User Created Successfuly'
    });
    console.log("User Created");

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find({});
    res.json({
        "Courses": response
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;


    // await User.updateOne({
    //     username: username
    // },
    //  {
    //     purchasedCourse: {
    //         "$push": courseId
    //     }
    // });


    try {
        await User.updateOne(
            { username: username },
            { $push: { purchasedCourse: courseId } }
        );

        res.json({
            "msg": "Purchased Successfull"
        })
        console.log("Purchased Successful");
    }
    catch (e) {
        console.log(e)
    }




});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {

    const user = await User.findOne({
        username: req.headers.username
    });

    const purchasedCourse = await Course.find({
        _id:
        {
            "$in": user.purchasedCourse
        }
    }
    );

    console.log(purchasedCourse);


    res.json({
        msg: purchasedCourse
    });



});


module.exports = router;