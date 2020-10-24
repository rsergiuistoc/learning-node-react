module.exports = (sequelize, Sequelize) => {

    // Variation Model
    const variations = sequelize.define('variations', {
        name: Sequelize.STRING,
    });

    // Variation Values Model
    const variationValues = sequelize.define('variation_values', {
        name: Sequelize.STRING,
    });

    variations.hasMany(variationValues, {as: 'values'});
    variationValues.belongsTo(variations, { foreignKey: "fk_valueId", as: "value"});

    // Product Model
    const products = sequelize.define('products', {

    });

    // Product Detail Model
    const productDetails = sequelize.define('product_details', {

        description: Sequelize.STRING,
    });

    products.hasOne(productDetails, {as: "details"})
    productDetails.belongsTo(products, {foreignKey: 'fk_productId', as: 'detail'})

    // Product Variation Model
    const productVariations = sequelize.define('product_variations', {
        productCode: {
            type: Sequelize.STRING,
            unique: true
        },
        sku: Sequelize.STRING,
        price: Sequelize.DOUBLE,
    });

    products.hasMany(productVariations, {as: 'variations'});
    productVariations.belongsTo(products, { foreignKey: "fk_variationId", as: "variation"});

    // Product Images Model
    const productImages = sequelize.define('product_images', {
        
    });

    // Stock Model
    const stocks = sequelize.define('stocks', {

        stock: Sequelize.INTEGER,
        unitPrice: Sequelize.DOUBLE,
        totalPrice: Sequelize.DOUBLE

    });

    productVariations.hasOne(stocks, {as: "stock"});
    stocks.belongsTo(productVariations, {foreignKey: "fk_product_variation_id", as: "stock"});

    // Discount Model
    const discounts = sequelize.define('discounts', {
        percentage: Sequelize.INTEGER
    });

    productVariations.hasOne(discounts, {as: 'discount'});
    discounts.belongsTo(productVariations, { foreignKey: "fk_valueId", as: "value"});

    return products;
}

