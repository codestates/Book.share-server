const {post_lists} = require('../../models');

module.exports = {
    post:(req,res) =>{
        const {title,article,id} = req.body;
        post_lists.findOrCreate({
            where:{
                id: id
            },
            defaults: {
                id: id,
                title:title,
                article:article,
            }
        })
        .then(async ([post,created])=>{
            if(!created){
                post_lists.update({title:title,article:article},{
                    where: {
                        id: id
                    }
                });
                res.status(201).send("글 수정이 완료되었습니다.");
            }else{
                const data = await post.get({plain:true});
                res.status(201).send(data);
            }
            
        })
        .catch(err=>{
            res.status(500).send(err);
        })
    }
};