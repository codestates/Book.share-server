module.exports = {
    post: (req,res) =>{
        const sess = req.session;

        if(sess.userid){
            req.session.destroy(err =>{
                if(err){
                    console.log(err);
                }else{
                    res.redirect('/');// 메인페이지로 이동 *수정필요
                }
            });
        }else{
            res.redirect('/');
        }
    }
};