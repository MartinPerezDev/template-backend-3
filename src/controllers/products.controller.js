import { products } from '../data/products.js';

export function getProducts(req, res) {
  return res.status(200).json({
    status: 'success',
    payload: products,
  });
};