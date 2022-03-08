const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Post extends Model {}
Post.init( {
    userId:{
        type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
          type: DataTypes.STRING,
          allowNull:false,
      },
      content: {
        type: DataTypes.STRING,
        allowNull:false,
      },
      location: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      category: {
        type: DataTypes.STRING,
        allowNull: false,
      },

});
module.exports = Post;