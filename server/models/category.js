const { sequelize, Sequelize } = require(".");

module.exports = (sequelize, Sequelize) => {
    const category = sequelize.define('category', {
        name: Sequelize.STRING,
        orderNum: Sequelize.INTEGER,
    });

    return category;
}