const {post_lists} = require('../../models');

module.exports = {
    get:(req,res) =>{
        console.log(req.body);
        post_lists.findAll({
            where:{
                title: req.body.title
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