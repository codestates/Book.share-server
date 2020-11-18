const { users } = require('../../models/');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const YOUR_SECRET_KEY = process.env.SECRET_KEY;

module.exports = {
    get: (req, res) => {
        let decoded = jwt.verify(req.cookies.userid,YOUR_SECRET_KEY);
        console.log(decoded);
        users
            .findOne({
                where: {
                    id: decoded.id
                }
            }).then(result => {
                if (result) {
                    res.status(200).send(result.dataValues)
                } else {
                    res.status(404).send("없는 회원입니다.");
                }
            }).catch(err => {
                console.log(err)
            })
    }
};