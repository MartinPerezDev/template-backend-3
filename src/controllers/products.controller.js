import { products } from '../data/products.js';
import { createError } from '../utils/createError.js';
import { successResponse } from '../utils/apiResponse.js';

export function getProducts(req, res) {
  return successResponse(res, {
    message: 'Product List',
    payload: products
  });
};

export function getProductById(req, res, next) {
  const { pid } = req.params;

  const product = products.find((item)=> item.id === pid );
  if(!product) {
    return next(createError("Product not found", 404));
  };

  return successResponse(res, {
    message: 'Product by id',
    payload: product
  });
};