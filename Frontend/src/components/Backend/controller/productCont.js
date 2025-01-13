// productController.js
const productRepo = require('../repository/prodRepo');

const getAllProducts = async (req, res,next) => {
  try {
    const products = await productRepo.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getOneProduct= async (req,res,next) =>{
  
}

const addProducts = async (req, res,next) => {
  try {
    const products = await productRepo.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProducts = async (req, res,next) => {
  try {
    const products = await productRepo.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProducts = async (req, res,next) => {
  try {
    const products = await productRepo.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllProducts, getOneProduct, addProducts, updateProducts, deleteProducts };
