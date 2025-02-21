const { Admin } = require('../db/index');
const JWT_key = require('../index')
const jwt = require('jsonwebtoken');
require('dotenv').config();





function adminMiddlewear(req, res, next) {

    const token = req.headers.authorization;
    const words = token.split(" ");
    JWTtoken = words[1];
    const decoded = jwt.verify(JWTtoken, JWT_key,);
    if (decoded.username)
        next();
    else
        res.json({
            msg: "invlid user"
        });



    // const decodedValue = jwt.verify(JWTtoken, JWT_key);
    // console.log(decodedValue);


}


module.exports = adminMiddlewear;
