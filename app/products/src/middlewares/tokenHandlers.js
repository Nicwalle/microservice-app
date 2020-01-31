const jwt = require("jsonwebtoken");

validToken = (req, res, next) => {
    if (!req || !req.header('Authorization')) {
        res.status(403).json({status: "FORBIDDEN", message: "Missing authentication token"});
    } else {
        const token = req.header('Authorization').split(" ")[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                res.status(403).json({status: "BAD TOKEN", message: "Token incorrect"});
            } else {
                res.locals.role = decoded.role;
                next();
            }
        })
    }
};

adminOnly = (req, res, next) => {
    if (!res.locals || res.locals.role !== "ADMIN") {
        res.status(403).json({status: "FORBIDDEN", message: "No administrator access"});
    } else {
        next();
    }


};

module.exports = {
    validToken,
    adminOnly
};
