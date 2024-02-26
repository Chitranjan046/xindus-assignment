const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the username is already taken
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const hashpassword = await bcrypt.hash(password, 10);
    console.log(hashpassword, password);
      // Store hash in your password DB.
  
    // Create a new user
    user = new User({ username, password:hashpassword});
    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if the user exists
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if the password is correct
    // const isValidPassword = await user.isValidPassword(password);
    // if (!isValidPassword) {
    //   return res.status(401).json({ message: 'Invalid credentials' });
    // }
   

    // Load hash from your password DB.
      const hashpassword = await bcrypt.compare(password, user.password );
      if(hashpassword){

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.status(201).json({ token });

    }

    // Generate JWT token
    // 

   
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


