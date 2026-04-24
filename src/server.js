import app from './app.js';
import { env } from "./config/env.js";

console.log(env);

const PORT = env.port;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Current environment: ${env.nodeEnv}`);
  console.log(`Active store: ${env.storeName}`);
});