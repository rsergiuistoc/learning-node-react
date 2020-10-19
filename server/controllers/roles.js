const models = require('../models/index');

const roleController = {

    /**
     * Get Roles assigned to a user.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    getRoles(req, res) {

        models.User.findByPk(req.params.userId).then( user => {
            
            if( !user ){
                return res.send(404, {message: "User not found"});
            }
            
            user.getRoles().then( roles => {
                res.json(roles);  
            })
        });
    },

    /**
     * Add Role to user.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    addRole(req, res) {

        const body = req.body;
        models.User.findByPk(req.params.userId).then( user => {
            
            if( !user ){
                return res.send(404, {message: "User not found"});
            }

            models.Role.findOne({ where: { name: body.role}}).then(role => {

                if ( !role ){
                    return res.send(404, {message: "Role does not exist"});
                }
                user.addRole(role);

                res.send(200, {message: "Role was assigned to user"});
            });
            
        });
    },

    /**
     * Remove Role from user.
     * 
     * @param {*} req 
     * @param {*} res 
     */
    removeRole(req, res) {

        const body = req.body;
        models.User.findByPk(req.params.userId).then( user => {
            
            if( !user ){
                return res.send(404, {message: "User not found"});
            }

            models.Role.findOne({ where: { name: body.role}}).then( role => {

                if ( !role ){
                    return res.send(404, {message: "Role does not exist"});
                }
                user.removeRole(role);

                res.send(200, {message: "Role was removed from user"});
            });
        });
    }
}

module.exports = roleController;