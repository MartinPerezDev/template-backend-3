import app from './app.js';

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
  console.log('Entorno actual: development');
  console.log('Tienda activa: CoderShop');
});