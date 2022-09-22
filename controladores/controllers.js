const Products = require('../class/index');
const { validateData } = require('../validacion/validation');

const getAllProducts = async (req, res) => {
  try {
    const products = Products.getProductos;
    res.json(products);
  } catch (error) {
    throw new Error(error);
  }
};

const addNewProduct = async (req, res) => {
  try {
    const { title, price, thumbnail } = req.body;
    const newProduct = validateData(title, price, thumbnail);
    if (newProduct.error) {
      res.json(newProduct);
    } else {
      const product = await Products.add(newProduct);
      res.json(product);
    }
  } catch (error) {
    throw new Error(error);
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Products.getProductByID(id);
    res.json(product);
  } catch (error) {
    throw new Error(error);
  }
};


const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Products.delete(id);
    res.json(deletedProduct);
  } catch (error) {
    throw new Error(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, price, thumbnail } = req.body;
    const updateProduct = await validateData(title, price, thumbnail);

    if (updateProduct.error) {
      res.json(updateProduct);
    } else {
      const product = await Products.update(updateProduct, id);
      res.json(product);
    }
  } catch (error) {
    throw new Error(error);
  }
};


module.exports = { getAllProducts, addNewProduct, deleteProduct, getProductById, updateProduct };