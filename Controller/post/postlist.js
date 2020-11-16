const {post_lists} = require('../../models');

module.exports = {
    get:(req,res) =>{
        post_lists.findAll({limit:7})
        .then(results=>{
            if(results.length===0){
                res.status(200).send("글 목록에 글이 하나도 없습니다.");
            }
            res.status(200).send({
                "posts": results
            });
        })
        .catch(err=>{
            res.status(404).send(err);
        })
    }
};