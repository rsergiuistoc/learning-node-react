const productController = {

    /**
     * Get All Products
     * 
     * @param {*} req 
     * @param {*} res 
     */
    getAll(req, res) {

        res.status(200).send("Get All Products");
    },

    /**
     * Get Product By Id
     * 
     * @param {*} req 
     * @param {*} res 
     */
    getById(req, res){

        res.status(200).send("Get Product By Id");
    },

    /**
     * Create Product
     * 
     * @param {*} req 
     * @param {*} res 
     */
    create(req, res){

        res.status(200).send("Create Product");
    },

    /**
     * Update Product
     * 
     * @param {*} req 
     * @param {*} res 
     */
    update(req, res){

        res.status(200).send("Update Product");
    },

    /**
     * Delete Product
     * 
     * @param {*} req 
     * @param {*} res 
     */
    delete(req, res){

        res.status(200).send("Get Product By Id");
    }
};

module.exports = productController;