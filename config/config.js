const dotenv = require('dotenv');
dotenv.config();
module.exports={
  "development": {
    "username": "admin",
    "password": process.env.DATABASE_PASSWORD,
    "database": "practice",
    "host": "bookshare.cdx7xpj2bq4m.ap-northeast-2.rds.amazonaws.com",
    "port": "3306",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
};
