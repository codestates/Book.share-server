const { users } = require('../../models/');

module.exports = {
    post: (req, res) => {

        let _email = '111@com';
        let _password = '123';
        // const { email, password } = req.body;

        let session = req.session.userid;

        users
            .findOne({
                where: {
                    email: _email,
                    password: _password
                }
            }).then((result) => {

                if (result.dataValues.password === _password) {
                    session = result.dataValues.id

                    res.status(200).send({
                        id: result.dataValues.id
                    })
                } else {
                    res.status(402).send('회원 정보가 없습니다.');
                }
            }).catch(err => {
                console.log(err)
            })
    }
};