const {post_lists} = require('../../models');

module.exports = {
    get:(req,res) =>{
        console.log(req.params);
        post_lists.findAll({
            where:{
                title: req.params.title // params로 수정
            }
        })
        .then(result=>{
            res.status(200).send(result[0]);
        })
        .catch(err=>{
            console.log(err);
            res.send(err);
        })
    }
};