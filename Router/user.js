const express = require('express');
const router = express.Router();

const { userController } = require('../Controller');
const user = require('../Controller/user');


// *POST /user/login

router.post('/login', userController.login.post);

// *POST /user/logout
router.post('/logout', userController.logout.post);

// *POST /user/signup
router.post('/signup', userController.signup.post);

// *POST /user/info 모달창
router.get('/info', userController.userinfo.get);

// *POST /user/modifyInfo
router.get('/modifyInfo', userController.userinfo.get);

//*POST /user/changeinfo 회원정보수정 버튼 클릭시 발생

module.exports = router;