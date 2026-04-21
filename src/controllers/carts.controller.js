import { carts } from '../data/carts.js';

export function createCart(req, res) {
  const newCart = {
    id: `c${carts.length + 1}`,
    products: [],
    createdAt: new Date().toISOString(),
  };

  carts.push(newCart);

  return res.status(201).json({
    status: 'success',
    payload: newCart,
  });
};