const categoriesController = require('../controllers/categories');

const auth = require('../middlewares/authorization');

module.exports = (app) =>{

    app.get('/api/categories', categoriesController.getAll);

    app.get('/api/category/:categoryId', categoriesController.getById);

    app.post('/api/category', auth.isAdmin, categoriesController.create);

    app.post('/api/category/subcategory', auth.isAdmin, categoriesController.createSubCategory);

    app.put('/api/category/:categoryId', auth.isAdmin, categoriesController.update);

    app.delete('/api/category/:categoryId', auth.isAdmin, categoriesController.delete);
}