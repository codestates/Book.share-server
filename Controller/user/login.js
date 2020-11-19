const { users } = require('../../models/');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const YOUR_SECRET_KEY = process.env.SECRET_KEY;

module.exports = {
    post: (req, res) => {
        const { email, password } = req.body;
        //let session = req.session.userid;

        users
            .findOne({
                where: {
                    email: email,
                    password: password
                }
            })
            .then((result) => {
                const accessToken = jwt.sign({
                    id: result.id
                },YOUR_SECRET_KEY,{
                    expiresIn: '1h'
                });
                console.log(accessToken);
                if (result.dataValues.password === password) {
                    //session = result.dataValues.id
                    res.cookie('userid',accessToken)
                    res.status(200).send({
                        id: result.dataValues.id,
                        accessToken
                    });
                } else {
                    res.status(402).send('회원 정보가 없습니다.');
                }
            }).catch(err => {
                console.log(err)
            })
    }
};