const Joi = require('joi');

const createProduct = {
    body: {
        category_id: Joi.string().required(),
        subcategory_id: Joi.string().required(),
        sku: Joi.number().required(),
        stock: Joi.number().required(),
        name: Joi.string().required().trim(),
        color: Joi.string().required(),
        size: Joi.string().required(),
        weight: Joi.number().required(),
        price: Joi.number().required(),
        mrp: Joi.number().required(),
        description: Joi.string().required(),
        isActive: Joi.boolean()
    }
}

const getProduct = {
    body: Joi.object().keys()
}

const deleteProduct = {
    params: {
        productId: Joi.string().required().trim()
    }
}

const updateProduct = {
    params: {
        productId: Joi.string().required().trim()
    }
}

module.exports = {
    createProduct,
    getProduct,
    deleteProduct,
    updateProduct
}