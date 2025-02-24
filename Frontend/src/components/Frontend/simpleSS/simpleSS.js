import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [formData, setFormData] = useState({
    Ref_No: "",
    Date:"",
    Cname: "",
    ContactPNo:"",
    ContactNo:"",
    State:"",
    email: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post("https://script.google.com/macros/s/AKfycbzVy8sg2HdEaCTNxF9wucryr-7Hg4FfRirMEYkg6szLyKzAsQxJk1Jb6X6jVp77i_KBtA/exec",
    JSON.stringify(formData), {
      headers: { "Content-Type": "application/json" },
    },);

    if (response.ok) {
        const data= await response.json();
        console.log(data);
        alert("Data submitted successfully!");
      } else {
        console.error("Error submitting data");
      }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
      <textarea name="message" onChange={handleChange} placeholder="Message"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
