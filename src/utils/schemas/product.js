const joi = require('@hapi/joi');

const productIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const productNameSchema = joi.string().max(80);
const productPriceSchema = joi.number()
const productDescriptionSchema = joi.string().max(255);
const productCategoryIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);
const productImageSchema = joi.string().uri();


const createProductSchema = {
    name: productNameSchema,
    price: productPriceSchema,
    description: productDescriptionSchema,
    categoryId: productCategoryIdSchema,
    image: productImageSchema
};

  const updateProductSchema = {
    name: productNameSchema,
    price: productPriceSchema,
    description: productDescriptionSchema,
    categoryId: productCategoryIdSchema,
    image: productImageSchema
  };

module.exports = {
    productIdSchema,
    createProductSchema,
    updateProductSchema
}

