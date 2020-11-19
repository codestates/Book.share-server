const { users } = require('../../models/');
const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    get: (req, res) => {
        //console.log(req.query);
        const requestToken = req.query.code
        const clientID = process.env.GITHUB_CLIENT_ID;
        const clientSecret = process.env.GITHUB_CLIENT_SECRET;
        let accessToken;
        axios({
            method: 'post',
            url: `https://github.com/login/oauth/access_token?client_id=${clientID}&client_secret=${clientSecret}&code=${requestToken}`,
            headers: {
                accept: 'application/json'
            }
        }).then((response) => {
            accessToken = response.data.access_token;
            axios
                .get('https://api.github.com/user', {
                    headers: {
                        Authorization: `token ${accessToken}`
                    }
                })
                .then((res) => {
                    console.log(res.data);
                })
                .catch(err => { err });
            res.cookie('userid', accessToken)
            res.redirect('http://localhost:3000/main');
        });
    }
}