const productController = require('../controllers/products')

module.exports = (app) => {

    /**
     * Get All Products Route
     */
    app.get(`api/products/`, productController.getAll);

    /**
     * Get Product By Id Route
     */
    app.get(`api/products/:slugId`, productController.getById);

    /**
     * Filter Product
     */
    app.get(`api/products/filter`, productController.getById);

    /**
     * Create New Product Route
     */
    app.post(`api/products/`, productController.create);

    /**
     * Update Product Route
     */
    app.put(`api/products/:slugId`, productController.update);

    /**
     * Delete Product by Id Route
     */
    app.delete(`api/products/:slugId`, productController.delete);


}