// const mongoose = require('mongoose');

// const wishlistItemSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   name: {
//     type: String,
//     required: true
//   },
//   description: String,
//   price: Number
// });

// module.exports = mongoose.model('WishlistItem', wishlistItemSchema);

const mongoose = require('mongoose');

const WishlistItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('WishlistItem', WishlistItemSchema);
