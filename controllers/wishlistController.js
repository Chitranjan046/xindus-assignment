const WishlistItem = require('../models/WishlistItem');
// Controller methods for wishlist management
exports.getAllWishlistItems = async (req, res) => {
  try {
    const wishlistItems = await WishlistItem.find({ user: req.user.id });
    res.json(wishlistItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.createWishlistItem = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const newItem = new WishlistItem({
      user: req.user.id,
      name,
      description,
      price
    });
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.deleteWishlistItem = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedItem = await WishlistItem.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({ message: 'Wishlist item not found' });
    }
    res.json({ message: 'Wishlist item deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


