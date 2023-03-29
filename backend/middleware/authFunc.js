// const connection = require("../database");

async function  checkAuth(req, res, next) {
    if (req.session.user && req.session.user.role === 'admin') {
        next();
    } else {
        res.status(401).send({message: 'Unauthorized'});
    }
}

module.exports = checkAuth