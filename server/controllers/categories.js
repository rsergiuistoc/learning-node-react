
const categoriesController = {
    
    /**
     * Get All Categories
     * 
     * @param {*} req 
     * @param {*} res 
     */
    getAll(req, res) {

        res.status(200).send("Get All Categories");
    },

    /**
     * Get Category By Id
     * 
     * @param {*} req 
     * @param {*} res 
     */
    getById(req, res){

        res.status(200).send("Get Category By Id");
    },

    /**
     * Create Category
     * 
     * @param {*} req 
     * @param {*} res 
     */
    create(req, res){

        const body = req.body;
        res.status(200).send(body);
    },

    /**
     * Update Category
     * 
     * @param {*} req 
     * @param {*} res 
     */
    update(req, res){

        res.status(200).send("Update Category");
    },

    /**
     * Delete Category
     * 
     * @param {*} req 
     * @param {*} res 
     */
    delete(req, res){

        res.status(200).send("Get Category By Id");
    }
};

module.exports = categoriesController;