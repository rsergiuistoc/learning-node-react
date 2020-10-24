const createUserModel = (sequelize, Sequelize) => {

    const user = sequelize.define('user', {
        id : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Sequelize.STRING,
            unique: true
        },
        password: Sequelize.STRING,
        email: {
           type:  Sequelize.STRING,
           unique: true
        },
        joined: Sequelize.DATE,
    });

    return user;
};

const createRoleModel = (sequelize, Sequelize) => {

    const role = sequelize.define('role', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: Sequelize.STRING
    });

    return role;
};

const createTokenModel = (sequelize, Sequelize) => {

    const token = sequelize.define('token', {
        
        key: Sequelize.STRING,
        created: Sequelize.DATE,
        expiry: Sequelize.DATE
    })

    return token;
};


module.exports = {
    createUserModel,
    createRoleModel,
    createTokenModel
}