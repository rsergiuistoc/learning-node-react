const models = require('../models');

/**
 * Is Admin middleware checks if the user which is sending the request has 
 * the rights to access an particular resource.
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const isAdmin = (req, res, next) =>{

    models.User.findByPk(req.user.id).then( user => {
        user.getRoles({raw: true}).then( roles => {
            let authorized = false;
            roles.forEach( role => {
                authorized = role.name === 'admin';
            });

            if( authorized ){
                next();
            }else{
                return res.status(403).send({ message: "User not authorized"});
            }
        });
    });
}

module.exports = {
    isAdmin
}