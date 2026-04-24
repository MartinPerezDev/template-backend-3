import express from 'express';
import healthRouter from './routes/health.router.js';
import productsRouter from './routes/products.router.js';
import cartsRouter from './routes/carts.router.js';
import { env } from './config/env.js';

const app = express();

app.use(express.json());

app.use((req, res, next)=> {
  if(env.maintenance) return res.status(503).json({ status: "maintenance" });

  next();
});

app.use('/api/health', healthRouter);
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

export default app;