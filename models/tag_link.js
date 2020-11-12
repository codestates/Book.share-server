'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tag_link extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tag_link.init({
    postId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER,
    picture: DataTypes.STRING,
    username: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tag_link',
  });
  return tag_link;
};