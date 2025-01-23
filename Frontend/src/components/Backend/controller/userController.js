const userRepository = require('../repository/userRepo');

// Signup controller
const signup = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Check if email already exists
    const existingUser = await userRepository.findUserByEmail(email);
    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Create new user
    const newUser = await userRepository.createUser({ name, email, password }); // Password should be hashed in production!
    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
//signin controller
const signin = async(req,res)=>{
  const {email, password } = req.body;
   // Validate incoming data
   if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required!" });
  }

  
  try{
    const User = await userRepository.findUserByEmail(email);
    if (!User) {
      return res.status(404).json({ message: "User not found!" });
    }
    
    const isPasswordCorrect = password === User.password; // Replace with bcrypt later
    if (!isPasswordCorrect) {
      return res.status(401).json({ message: "Invalid Password!" });
    }

    const isEmailCorrect = email === User.email;
    if (!isEmailCorrect) {
      return res.status(401).json({ message: "Invalid email!" });
    }

    // If valid, send success response
    return res.status(200).json({
      message: "Sign-In successful!",
      user: {
        id: User._id,
        name: User.name,
        email: User.email,
      },
    });

  }catch(e){
    console.error(e);
    res.status(500).json({ message: 'Internal server error in userController' });
  }

}

module.exports = { signup,signin };
