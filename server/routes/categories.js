const categoriesController = require('../controllers/categories');

module.exports = (app) =>{

    app.get('/api/categories', categoriesController.getAll);

    app.get('/api/category/:categoryId', categoriesController.getById);

    app.post('/api/category', categoriesController.create);

    app.post('/api/category/subcategory', categoriesController.createSubCategory);

    app.put('/api/category/:categoryId', categoriesController.update);

    app.delete('/api/category/:categoryId', categoriesController.delete);
}