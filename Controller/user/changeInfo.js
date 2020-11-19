const {users} = require('../../models');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const YOUR_SECRET_KEY = process.env.SECRET_KEY;

module.exports = {
    post: (req,res) =>{
        let decoded = jwt.verify(req.cookies.userid,YOUR_SECRET_KEY);
        const { email,password,username}= req.body;

        users
        .update({
            email:email,
            password:password,
            username:username
        },{
            where:{
                id: decoded.id
            }
        })
        .then((data) => {
            res.status(202).send("회원정보 수정 완료");
        })
        .catch(err=>{
            res.send(err);
        })
    }
};