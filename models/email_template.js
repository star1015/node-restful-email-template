"use strict";
const {
    Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class email_template extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    email_template.init({
        title: DataTypes.STRING,
        body: DataTypes.JSON,
    }, {
        sequelize,
        modelName: "email_template",
        paranoid: true,
        defaultScope: {
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] }
        }
    });
    return email_template;
};