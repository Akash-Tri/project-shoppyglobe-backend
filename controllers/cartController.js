import CartItem from '../models/CartItem.js';
import Product from '../models/Product.js';
import mongoose from 'mongoose';

export const addToCart = async (req, res, next) => {
  try {
    const { productId, quantity } = req.body;
    const userId = req.user._id;

    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({ message: 'Invalid product ID' });
    }

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: 'Product not found' });

    const cartItem = new CartItem({ productId, quantity, userId });
    await cartItem.save();
    res.status(201).json(cartItem);
  } catch (err) {
    next(err);
  }
};

export const updateCartItem = async (req, res, next) => {
  try {
    const item = await CartItem.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Cart item not found' });

    item.quantity = req.body.quantity;
    await item.save();
    res.json(item);
  } catch (err) {
    next(err);
  }
};

export const deleteCartItem = async (req, res, next) => {
  try {
    const item = await CartItem.findById(req.params.id);
    if (!item) return res.status(404).json({ message: 'Cart item not found' });

    await item.deleteOne();
    res.json({ message: 'Item removed from cart' });
  } catch (err) {
    next(err);
  }
};
