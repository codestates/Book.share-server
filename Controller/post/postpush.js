const {post_lists} = require('../../models');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const YOUR_SECRET_KEY = process.env.SECRET_KEY;

module.exports = {
    post:(req,res) =>{
        let {title,article} = req.body;
        post_lists
        .create({
            title:title,
            article:article,
            userId: jwt.verify(req.cookies.userid,YOUR_SECRET_KEY).id
        })
        .then(result=>{
            res.status(201).send(result);
        })
        .catch(err=>{res.status(500).send(err)});
    }
};