import { user } from "../../models/index.js";

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if a user with the given username and password exists
    const foundUser = await user.findOne({
      where: {
        name: username,//'reader1',
        password: password,//'123456', // Note: In a real-world scenario, you'd hash the password and compare hashes
      },
    });

    if (foundUser) {
      // User is authenticated
      return res.json({ success: true, message: "Login successful", user: foundUser.toJSON() });
      // Lưu ý: foundUser.toJSON() để chuyển đổi đối tượng Sequelize thành một đối tượng JSON đơn giản
    } else {
      // User not found or invalid credentials
      return res.json({ success: false, message: "Login successful" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ success: false, error: "Internal Server Error" });
  }
};
const register = async (req, res) => {
  try {
    
    const { username, email, password, permission } = req.body;
console.log(typeof req.body);
    // Check if a user with the given email already exists
    const existingUser = await user.findOne({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      // User with the provided email already exists
      return res.json({ success: false, message: "User with this email already exists" });
    }
console.log(username);
    // Create a new user in the database
    await user.create({
      name: username,
      email: email,
      password: password,
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