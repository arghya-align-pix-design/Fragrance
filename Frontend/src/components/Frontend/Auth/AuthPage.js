import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import "./AuthPage.css";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const [selected, setSelected] = useState(null); // "signin" or "signup"
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
  }); // Separate state for Sign-Up
 
  const navigate = useNavigate(); 

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  }); // Separate state for Sign-In

  const handleSelection = (option) => {
    setSelected(option);
    // setFormData({ name: "", email: "", password: "" }); // Reset form when switching
  };

  // Handle changes for Sign-Up form
  const handleSignUpChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

   // Handle changes for Sign-In form
   const handleSignInChange = (e) => {
    const { name, value } = e.target;
    setSignInData({ ...signInData, [name]: value });
  };

  // Handle Sign-Up form submission
  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    const endpoint = "http://localhost:4100/api/users/signup";

    try {
      const response = await axios.post(endpoint, signUpData);
      alert(response.data.message || "Signup successful!");
      setSignUpData({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong!");
    }
  };

  // Handle Sign-In form submission
  const handleSignInSubmit = async (e) => {
    e.preventDefault();
    const endpoint = "http://localhost:4100/api/users/signin";

    try {
      const response = await axios.post(endpoint, signInData);
      alert(`Welcome back, ${response.data.name || "User"}!`);
      navigate("/"); // Redirect to home
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong!");
    }
  };

   
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const endpoint =
  //     selected === "signup"
  //       ? "http://localhost:4100/api/users/signup"
  //       : "http://localhost:4100/api/users/signin";

  //   try {
  //     const response = await axios.post(endpoint, formData);
  //     if (selected === "signup") {
  //       alert(response.data.message || "Signup successful!");
  //     } else {
  //       alert(`Welcome back, ${response.data.name || "User"}!`);
  //     }
  //   } catch (error) {
  //     alert(error.response?.data?.message || "Something went wrong!");
  //   }
  // };

  return (
    <div className="auth-container">
      {/* Sign In Option */}
      <motion.div
        className={`auth-option signin ${
          selected === "signin" ? "expanded" : ""
        }`}
        onClick={() => handleSelection("signin")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {selected === "signin" ? (
          <form
            className={`auth-form ${
              selected === "signup" ? "signup" : "signin"
            }`}  onSubmit={handleSignInSubmit} >
            <h2>Sign In</h2>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={signInData.email}
              onChange={handleSignInChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={signInData.password}
              onChange={handleSignInChange}
              required
            />
            <button type="submit">Sign In</button>
          </form>
        ) : (
          <h3>Sign In</h3>
        )}
      </motion.div>

      {/* Sign Up Option */}
      <motion.div
        className={`auth-option signup ${
          selected === "signup" ? "expanded" : ""
        }`}
        onClick={() => handleSelection("signup")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {selected === "signup" ? (
          <form
            className="auth-form signup"
            onSubmit={handleSignUpSubmit}
          >
            <h2>Sign Up</h2>
            <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={signUpData.name}
              onChange={handleSignUpChange}
              required
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={signUpData.email}
              onChange={handleSignUpChange}
              required
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={signUpData.password}
              onChange={handleSignUpChange}
              required
            />
            <button type="submit">Sign Up</button>
          </form>
        ) : (
          <h3>Sign Up</h3>
        )}
      </motion.div>
    </div>
  );
};

export default AuthPage;



// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import axios from 'axios';
// import "./AuthPage.css";

// const AuthPage = () => {
//   const [selected, setSelected] = useState(null); // "signin" or "signup"
//   const [isSignUp, setIsSignUp] = useState(true); // Toggle between Signup and Signin
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const handleSelection = (option) => {
//     setSelected(option);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const endpoint = (selected==="signup")
//       ? 'http://localhost:4100/api/users/signup'
//       : 'http://localhost:4100/api/users/signin';

//     try {
//       const response = await axios.post(endpoint, formData);
//       if (isSignUp) {
//         alert(response.data.message || 'Signup successful!');
//       } else {
//         alert(`Welcome back, ${response.data.name || 'User'}!`);
//       }
//     } catch (error) {
//       alert(error.response?.data?.message || 'Something went wrong!');
//     }
//   };


//   return (
//     <div className="auth-container">
//       {/* Sign In Option */}
//       <motion.div
//         className={`auth-option signin ${selected === "signin" ? "expanded" : ""}`}
//         onClick={() => handleSelection("signin")}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {selected === "signin" ? (
//           <form className={`auth-form ${selected==='signup' ? 'signup' : 'signin'}` } onSubmit={handleSubmit} >
//             <h2>Sign In</h2>
//             <input type="email" placeholder="Email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required />
//             <input type="password" placeholder="Password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required/>
//             <button type="submit">Sign In</button>
//           </form>
//         ) : (
//           <h3>Sign In</h3>
//         )}
//       </motion.div>

//       {/* Sign Up Option */}
//       <motion.div
//         className={`auth-option signup ${selected === "signup" ? "expanded" : ""}`}
//         onClick={() => handleSelection("signup")}
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 0.5 }}
//       >
//         {selected === "signup" ? (
//           <form className="auth-form"  onSubmit={handleSubmitUp}>
//             <h2>Sign Up</h2>
//             <input type="text" placeholder="Full Name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange} 
//             required/>

//             <input type="email" placeholder="Email"
//              name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required />

//             <input type="password" placeholder="Password" 
//              name="password"
//              value={formData.password}
//              onChange={handleChange}
//              required/>

//             <button type="submit">Sign Up</button>
//           </form>
//         ) : (
//           <h3>Sign Up</h3>
//         )}
//       </motion.div>
//     </div>
//   );
// };

// export default AuthPage;
