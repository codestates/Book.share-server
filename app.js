const express = require('express');
const cors = require('cors');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
const port = 8080;

const usersRouter = require('./Router/user');
const postsRouter = require('./Router/post');
//middle ware
app.use(
    session({
        secret: '@bookshare',
        resave: false,
        saveUninitialized: true
    })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    cors({
        origin: ['.*/'],
        methods: ['GET', 'POST'],
        credentials: true
    })
);
app.use('/user', usersRouter)
app.use('/post', postsRouter)

app.get('/', (req, res) => {
    res.send('Hello world');
});


app.set('port', port);
app.listen(app.get('port'), () => {
    console.log(`app is listening in PORT ${app.get('port')}`);
});

module.exports = app;