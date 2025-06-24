
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Product from './models/Product.js';
import products from './data/products.js';
import connectDB from './config/db.js';

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Product.deleteMany(); // Clears existing products
    await Product.insertMany(products); // Inserts sample products
    console.log('✅ Product Data Imported');
    process.exit();
  } catch (err) {
    console.error(`❌ Error: ${err.message}`);
    process.exit(1);
  }
};

importData();
