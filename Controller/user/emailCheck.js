const { users } = require('../../models/');

module.exports ={
    get:(req,res)=>{
        const { email } = req.params;
        users
        .findOne({
            where:{
                email:email,
            }
        })
        .then((result)=>{
            if(result){
                res.status(205).send("이미 존재하는 회원입니다.");
            }else{
                res.status(200).send("가입 가능한 이메일입니다.");
            }
        })
        .catch(err=>{
            res.status(500).send(err);
        })
    }
};