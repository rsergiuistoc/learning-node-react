module.exports = (sequelize, Sequelize) => {

    // Variation Model
    const options = sequelize.define('options', {
        name: Sequelize.STRING,
    });

    // Variation Values Model
    const optionValues = sequelize.define('optionValues', {
        name: Sequelize.STRING,
    });

    options.hasMany(optionValues, {as: 'values'});
    optionValues.belongsTo(options, { foreignKey: "fk_valueId", as: "value"});

    // Product Model
    const products = sequelize.define('products', {
        name: Sequelize.STRING,
    });

    products.hasMany(options, {as: 'options'});
    options.belongsTo(products, {foreignKey: 'fk_productId', as: 'option'});

    // Product Detail Model
    const productDetails = sequelize.define('product_details', {
        description: Sequelize.STRING,
    });

    products.hasOne(productDetails, {as: "details"});
    productDetails.belongsTo(products, {foreignKey: 'fk_productId', as: 'detail'});

    // Product Variation Model
    const productVariations = sequelize.define('product_variations', {
        productCode: {
            type: Sequelize.STRING,
            unique: true
        },
        sku: Sequelize.STRING,
        price: Sequelize.DOUBLE,
        slug: Sequelize.STRING
    });

    products.hasMany(productVariations, {as: 'variations'});
    productVariations.belongsTo(products, { foreignKey: "fk_variationId", as: "variation"});

    // // Product Images Model
    // const productImages = sequelize.define('product_images', {
        
    // });

    // // Stock Model
    // const stocks = sequelize.define('stocks', {

    //     stock: Sequelize.INTEGER,
    //     unitPrice: Sequelize.DOUBLE,
    //     totalPrice: Sequelize.DOUBLE

    // });

    // productVariations.hasOne(stocks, {as: "stock"});
    // stocks.belongsTo(productVariations, {foreignKey: "fk_product_variation_id", as: "stock"});

    // // Discount Model
    // const discounts = sequelize.define('discounts', {
    //     percentage: Sequelize.INTEGER
    // });

    // productVariations.hasOne(discounts, {as: 'discount'});
    // discounts.belongsTo(productVariations, { foreignKey: "fk_valueId", as: "value"});

    return products;
}

