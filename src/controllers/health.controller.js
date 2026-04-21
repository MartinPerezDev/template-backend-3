export function getHealth(req, res) {
  return res.status(200).json({
    status: 'ok',
    environment: 'development',
    store: 'CoderShop',
  });
};