const { Category } = require('../models');
const models = require('../models')

const categoriesController = {
    
    /**
     * Get All Categories
     * 
     * @param {*} req 
     * @param {*} res 
     */
    getAll(req, res) {
        
        // Find all categories with all associated subcategories
        const categories = models.Category.findAll({ include: [{
            model: Category,
            as: 'subcategories',
            required: false,
            attributes: ['id', 'name', 'orderNum']
        }]}).then( categories =>{
            return res.json(categories);
        })
    },

    /**
     * Get Category By Id
     * 
     * @param {*} req 
     * @param {*} res 
     */
    getById(req, res){

        models.Category.findOne({ 
            include: [{
                model: Category,
                as: 'subcategories',
                required: false,
                attributes: ['id', 'name', 'orderNum']
            }], 
            where: { id: req.params.categoryId }
        }).then( category => {
            if ( !category ){
                return res.send(404, {message: "Category not found"});
            };
            res.json(category);
        });
    },

    /**
     * Create Category
     * 
     * @param {*} req 
     * @param {*} res 
     */
    create(req, res){

        const body = req.body;

        models.Category.create({
            name: body.name,
            orderNum: body.orderNum
        }).then(category => {
           res.status(200).send(`Category ${category.name} has been succesfully created`); 
        });
    },

    /**
     * Create Subcategory
     * 
     * @param {*} req 
     * @param {*} res 
     */
    createSubCategory(req, res){

        const body = req.body;

        models.Category.findByPk(body.parentId).then(category => {
            if ( !category ){
                return res.send(404, {message:  "Category not found"});
            }

            models.Category.create({
                name: body.name,
                orderNum: body.orderNum
            }).then( subcategory => {
                category.addSubcategory(subcategory);
                res.json(subcategory);
            });
        });
    },

    /**
     * Update Category
     * 
     * @param {*} req 
     * @param {*} res 
     */
    update(req, res){

        const body = req.body;
        models.Category.findByPk(req.params.categoryId).then( category => {
            if ( !category ){
                return res.send(404, {message: "Category not found"});
            };

            category.update(body);

            res.json(category)
        });
    },

    /**
     * Delete Category
     * 
     * @param {*} req 
     * @param {*} res 
     */
    delete(req, res){

        models.Category.findByPk(req.params.categoryId).then( category => {
            if ( !category ){
                return res.send(404, {message: "Category not found"});
            };

            category.destroy();

            res.send(200, {message: "Category succesfully deleted"});
        });
        
    }
};

module.exports = categoriesController;