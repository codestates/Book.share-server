const express = require('express');
const router = express.Router();

const { userController } = require('../Controller');


// *POST /user/login

router.post('/login', userController.login.post);

// *POST /user/logout
router.post('/logout', userController.logout.post);

// *POST /user/signup
router.post('/signup', userController.signup.post);

// *GET /user/info 모달창
router.get('/info', userController.userinfo.get);

// *GET /user/modifyInfo
router.get('/modifyInfo', userController.userinfo.get);

// *GET /user/emailCheck
router.get('/emailCheck/:email',userController.emailCheck.get);

//*POST /user/changeinfo 회원정보수정 버튼 클릭시 발생

module.exports = router;