const roleController = require('../controllers/roles');

module.exports = (app) => {
    
    app.get('/api/roles/:userId', roleController.getRoles);

    app.put('/api/role/:userId', roleController.addRole);

    app.delete('/api/role/:userId', roleController.removeRole);
}