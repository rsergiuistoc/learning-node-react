const categoriesController = require('../controllers/categories');

module.exports = (app) =>{

    app.get('/api/categories', categoriesController.getAll);

    app.post('/api/category', categoriesController.create);

    app.put('/api/category/:categoryId', categoriesController.update);

    app.delete('/api/category/:categoryId', categoriesController.delete);
}