console.clear();

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const userRouter = require('./routes/user');
const adminRouter = require('./routes/admin');
const jwt = require('jsonwebtoken');
const JWT_key = process.env.SECRET_KEY;
console.log(JWT_key);


// console.log(process.env.PORT)


app.use(bodyParser.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter)

app.get("/", (req, res) => res.json({ "msg": "welcome to our app" }));



app.listen(process.env.PORT, () => console.log(`Server is running on ${process.env.PORT}`));


