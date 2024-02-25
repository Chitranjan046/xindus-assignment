// backend/server.js
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const connectDB = require('./config/db');

const app = express();
app.use(cors());
connectDB();

// Middleware
app.use(express.json());



// Routes
app.use('/auth', authRoutes);
app.use('/api/wishlists', require('./routes/wishlistRoutes'));





// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong' });
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
