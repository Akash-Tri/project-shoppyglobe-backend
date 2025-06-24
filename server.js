import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';

import productRoutes from './routes/products.js';
import cartRoutes from './routes/cart.js';
import authRoutes from './routes/auth.js';
import { errorHandler } from './middleware/errorMiddleware.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.use('/', authRoutes);

app.get('/', (req, res) => res.send('ShoppyGlobe API is running...'));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
