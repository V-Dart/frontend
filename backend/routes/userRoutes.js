const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/Users');


const router = express.Router();

// @route    POST /api/users/register
// @desc     Register a new user
router.post('/register', async (req, res) => {
  try {
    const { username, email, password, phone, role } = req.body;

    // check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // create user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      role
    });

    // save user
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
});

module.exports = router;

// @route    POST /api/users/login
// @desc     Login user
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Create JWT payload
    const payload = {
      id: user._id,
      email: user.email,
      role: user.role
    };

    // Sign token
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Success response
    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server Error' });
  }
});
