const { users } = require('../../models/');

module.exports = {
    get: (req, res) => {

        users
            .findOne({
                where: {
                    id: req.session.userid
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