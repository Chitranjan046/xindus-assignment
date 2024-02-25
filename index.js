// backend/server.js
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const app = express();
app.use(cors());
connectDB();

// Middleware
app.use(express.json());



// Routes
app.use('/api/wishlists', require('./routes/wishlistRoutes'));



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
