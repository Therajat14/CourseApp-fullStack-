const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)

const adminScema = mongoose.Schema(
    {
        username: String,
        password: String
    }, {
    timestamps: true
}
);
const userSchema = mongoose.Schema(
    {
        username: String,
        password: String,
        purchasedCourse: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Course'
        }]
    }, {
    timestamps: true
}
);

const courseSchema = mongoose.Schema(
    {
        title: String,
        discription: String,
        IMG_Url: String,
        price: Number
    }, {
    timestamps: true
}
);



const Admin = mongoose.model("Admin", adminScema);
const Course = mongoose.model("Course", courseSchema);
const User = mongoose.model("User", userSchema);

module.exports = {
    Admin,
    Course,
    User
}