const userController = require('../controllers/user');

module.exports = (app) => {

    app.post('/api/reset-password', userController.forgotPassword);

    app.post('/api/reset-password/:token', userController.validateToken);

    app.post('/api/reset-password/:token/reset', userController.resetPassword);
}