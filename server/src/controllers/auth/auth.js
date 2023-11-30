import { user } from "../../models/index.js";

import bcrypt from "bcryptjs";
const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if a user with the given username and password exists
    const foundUser = await user.findOne({
      where: {
        name: username,//'reader1',
      },
    });
    if (foundUser) {
      // So sánh mật khẩu
      bcrypt.compare(password, foundUser.password, (err, result) => {
        if (err) {
          console.error('Error during password comparison:', err);
        } else if (result) {
          // Mật khẩu khớp, xử lý đăng nhập
          return res.json({ success: true, message: 'Login successful' ,user: foundUser});
        } else {
          // Mật khẩu không khớp, xử lý đăng nhập thất bại
          return res.json({ success: false, message: 'Login failed' });
        }
      });
    } else {
      // Người dùng không tồn tại
      return res.json({ success: false, message: 'User not found' });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
const register = async (req, res) => {
  try {
    
    const { username, email, password, permission } = req.body;
    // Check if a user with the given email already exists
    const existingUser = await user.findOne({
      where: {
        email: email,
      },
    });
    const existingUser1 = await user.findOne({
      where: {
        name: username,
      },
    });

    if (existingUser || existingUser1) {
      // User with the provided email already exists
      return res.json({ success: false, message: "User with this email already exists" });
    }
const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user in the database
    await user.create({
      name: username,
      email: email,
      password: hashedPassword,
      id_role: permission,
    }).then(()=>{
      return res.status(200).json({ success: true,  message: "Registration successful" });
    }).catch((error)=>{
    return res.status(500).json({ success: false, error: "Internal Server Error" });

    })

  } catch (error) {
    console.error("Error during registration:", error);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};


export default { login,register };