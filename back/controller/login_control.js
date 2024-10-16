const login = require('../models/login_model');
const jwt = require('jsonwebtoken');
const jwt_secret = 'tamsilmathakiya';

const loginuser = async (req, res) => {
    const { email, password } = req.body;
    try {
        let user = await login.findOne({ email });
        if (user) {
            const data = { user: { email: user.email } };
            const authtoken = jwt.sign(data, jwt_secret);
            return res.json({ message: "user login", token: authtoken });
        } else {
            const newuser = await login.create({
                email,
                password
            });
            const data = { user: { email: newuser.email } };
            const authtoken = jwt.sign(data, jwt_secret);
            return res.status(201).json({ message: "user is login success", token: authtoken });
        }
    } catch (error) {
        console.log("not login", error);
        res.status(500).send("Server Error");
    }
};

module.exports = { loginuser };
