'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.post_lists, {
        as: 'post_lists',
        foreignKey: 'userId',
        sourceKey: 'id',
      });
    }
  };
  users.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    picture: DataTypes.STRING,
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};