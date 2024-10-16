const User = require('../models/register_models'); 

const registerUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });  // Check if the user already exists
        if (user) {
            return res.status(400).json({ message: "User already exists" });
        } else {
            const newUser = await User.create({
                email,
                password
            });
            return res.status(201).json({ message: "User registered successfully" });
        }
    } catch (error) {
        console.log("Error registering user", error);
        res.status(500).send("Server Error");
    }
};

module.exports = { registerUser };
