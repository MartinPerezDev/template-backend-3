import app from './app.js';

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log('Current environment: development');
  console.log('Active store: CoderShop');
});