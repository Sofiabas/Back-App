const Container = require('../class/index');
const file = new Container('./data/products.txt');
const getProductsDBS = file.getAll();

const getProducts = async (req, res) => {
  const result = await getProductsDBS;
  res.json(result);
};

const getProductRandom = async (req, res) => {
  const result = await getProductsDBS;
  const productRandom = result[Math.floor(Math.random() * result.length)];
  res.json(productRandom);
};

const getStartPage = (req, res) => {
  res.send('Use /products para ver todos los productos o /productRandom para ver un producto aleatorio');
};

module.exports = { getProducts, getProductRandom, getStartPage };