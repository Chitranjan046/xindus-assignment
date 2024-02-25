const mongoose = require('mongoose');

const wishlistItemSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  description: String,
  price: Number
});

module.exports = mongoose.model('WishlistItem', wishlistItemSchema);
