const express = require('express');
const router = express.Router();

const { userController } = require('../Controller');


// *POST /user/login
router.get('/github',userController.github.get);
//router.get('/google',);

router.post('/login', userController.login.post);

// *POST /user/logout
router.post('/logout', userController.logout.post);

// *POST /user/signup
router.post('/signup', userController.signup.post);

// *GET /user/info 모달창
router.get('/info', userController.userinfo.get);

// *GET /user/modifyInfo
router.post('/changeInfo', userController.changeInfo.post);

// *GET /user/emailCheck
router.get('/emailCheck/:email',userController.emailCheck.get);

//*POST /user/changeinfo 회원정보수정 버튼 클릭시 발생

module.exports = router;