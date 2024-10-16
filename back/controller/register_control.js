const User = require('../models/register_models');

const registerUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create a new user
        user = new User({
            email,
            password // Save password directly (consider hashing in a real application)
        });

        await user.save(); // Save user to the database

        return res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        console.error("Error registering user:", error);
        return res.status(500).json({ message: "Server error" });
    }
};

module.exports = { registerUser };
