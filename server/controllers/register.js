const User = require("../models/UserModel");
const bcrypt = require('bcrypt')


const register = async (req, res) => {
  try {
    const { name, email, password, profile_pic } = req.body;
    const checkUser = await User.findOne({ email });
    
    if (checkUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)
    const userDetails = {
      name,
      email,
      password:hashedPassword,
      profile_pic,
    };
    const user = new User(userDetails)
    const save_user = await user.save()

    return res.status(201).json({
        message : "User created successfully",
        data : save_user
    })
  
  } catch (error) {
    console.log("Register err:", error);
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
    register
}
