const User = require('../models/register_models');
const jwt = require('jsonwebtoken');

const jwtSecret = 'tamsilmathakiya'; // Keep this secure

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Compare the plain-text password (Note: ideally, passwords should be hashed)
        if (user.password !== password) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // Create JWT payload and sign token
        const payload = { user: { id: user._id, email: user.email } };
        const token = jwt.sign(payload, jwtSecret, { expiresIn: '1h' });

        // Respond with the token
        return res.json({ token });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).send('Server error');
    }
};

module.exports = { loginUser };
