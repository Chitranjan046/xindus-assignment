const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlistController');
const authMiddleware = require('../middleware/authMiddleware');

// Define wishlist routes
router.get('/', authMiddleware.authenticateUser, wishlistController.getAllWishlistItems);
router.post('/', authMiddleware.authenticateUser, wishlistController.createWishlistItem);
router.delete('/:id', authMiddleware.authenticateUser, wishlistController.deleteWishlistItem);

module.exports = router;
