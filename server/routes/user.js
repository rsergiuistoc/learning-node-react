const userController = require('../controllers/user');

module.exports = (app) => {

    app.post(`/api/forgot-password`, userController.forgotPassword);

    app.post(`/api/reset-password`, userController.resetPassword);
}