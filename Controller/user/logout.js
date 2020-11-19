module.exports = {
    post: (req,res) =>{
        if(req.cookies.userid){
            res.clearCookie('userid');
            res.redirect('/');
        }else{
            res.redirect('/');
        }
    }
};