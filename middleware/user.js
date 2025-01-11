const { User } = require('../db/index')


function userMiddleware(req, res, next) {

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

}

module.exports = userMiddleware;