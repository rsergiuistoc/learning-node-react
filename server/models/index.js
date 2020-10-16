const bodyParser = require('body-parser');
const Sequelize = require('sequelize');

const userModels = require('./user');
const createCategory = require('./category');

// TODO: Decoment after testing routes

/*

When using Posgress, MySQL, MariaDB locally , instead of passing each config variable independetly, another approach 
is to pass the url directly.

const sequelize = new Sequelize({
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
})
*/
const sequelize = new Sequelize(
    'packed', 
    'admin',
    'admin',
    {   
        dialect: 'postgres',
    },
);

// Import modules
const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// User Models
db.User = userModels.createUserModel(sequelize, Sequelize);
db.Role = userModels.createRoleModel(sequelize, Sequelize);
db.Token = userModels.createTokenModel(sequelize, Sequelize);

db.User.belongsToMany(db.Role, {through: 'user_roles', foreignKey: 'userId'});
db.Role.belongsToMany(db.User, {through: 'user_roles', foreignKey: 'roleId'});

db.User.hasMany(db.Token, { as: "tokens" });
db.Token.belongsTo(db.User, {foreignKey: "userId", as: "user"});

// Category Models

db.Category = createCategory(sequelize, Sequelize);

// Self Referencing the Category to same in order to create SubCategories
db.Category.hasMany(db.Category, { as: "subcategories", foreignKey: "parentId", useJunctionTable: false});


// Product Models

db.initialize = initialize => {

    options = {}

    if ( process.env.NODE_ENV !== 'production'){
        options.force = true;
    }

    sequelize.sync(options).then( () => {
       createDefaultSchemes(); 
    });
};

function createDefaultSchemes(){

    // Create Roles
    db.Role.create({
        id: 1,
        name: "admin"
    });
}


module.exports = db;