const Images = require("../../models/Image");
const categories = require("../../models/category");
const product = require("../../models/product");
const express = require("express");
const getProductByCategory = async (req, res) => {
  const category = req.params.name.toLowerCase();
  try {
    const categoryId = await categories.findOne({
      where: { category_name: category },
    });
    if (categoryId === null || categoryId.length === 0) {
      return res
        .status(404)
        .json({ message: "No data found for the given categoryName" });
    }
    const products = await product.findAll({
      where: { categoryId: categoryId.dataValues.categoryId },
      include: [
        {
          model: Images,
          as: "image",
        },
      ],
    });
    if (products.length === 0) {
      return res
        .status(404)
        .json({ message: "No products found in this category" });
    }

    const result = products.map((product) => {
      return {
        id: product.productId,
        name: product.product_name,
        imageUrl: product.image ? `/uploads/${product.image.filename}` : null,
        stock: product.product_stock,
        price: product.product_price,
        description: product.product_description,
      };
    });
    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching products", error: error.message });
  }
};

const addProduct = async (req, res) => {
  const { category, code, description, name, price, stock } = req.body;
  try {
    // Check if file is uploaded
    if (!req.file) {
      return res.status(400).json({ message: "No image uploaded." });
    }

    const { filename, path } = req.file;

    // Create image record
    const image = await Images.create({
      filename,
      path,
    });

    // Find category
    const categoryRecord = await categories.findOne({
      where: { category_name: category.toLowerCase() },
    });

    if (!categoryRecord) {
      return res.status(400).json({ message: "Invalid category." });
    }

    const { categoryId } = categoryRecord;

    // Create news record
    await product.create({
      product_code: code,
      product_description: description,
      product_name: name,
      product_price: price,
      product_stock: stock,
      categoryId,
      imageId: image.id,
    });

    return res.status(201).json({ message: "News added successfully." });
  } catch (error) {
    console.log("Error in postNews function", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal Server Error" });
  }
};
const getAllProducts = async (req, res) => {
  try {
    const products = await product.findAll({
      include: [
        {
          model: Images,
          as: "image",
        },
      ],
    });

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    const result = products.map((product) => {
      return {
        id: product.productId,
        name: product.product_name,
        imageUrl: product.image ? `/uploads/${product.image.filename}` : null,
        stock: product.product_stock,
        price: product.product_price,
        description: product.product_description,
      };
    });

    res.status(200).json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error fetching products", error: error.message });
  }
};
const deleteProduct = async (req, res) => {
  const productId = req.params.id;
  try {
    const productToDelete = await product.findByPk(productId);
    if (!productToDelete) {
      return res.status(404).json({ message: "Product not found" });
    }
    await product.destroy({ where: { productId } });

    // Delete the image associated with the product
    if (productToDelete.imageId) {
      const image = await Images.findByPk(productToDelete.imageId);
      if (image) {
        await Images.destroy({ where: { id: image.id } });
      }
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error("Error deleting product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = {
  getProductByCategory,
  addProduct,
  getAllProducts,
  deleteProduct,
};
