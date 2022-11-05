import React, { useState } from "react";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";

const Contact = () => {
  const name = "Moyinoluwa";

  const initialValue = {
    first_name: "",
    last_name: "",
    email: "",
    checked: false,
  };

  const [userData, setUserData] = useState(initialValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully");
  };

  const handleChange = (event) => {
    console.log(event.target);
    const { name, value, type, checked } = event.target;
    setUserData({ ...userData, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="contact">
      <div className="container">
        <div className="box">
          <div className="form-container">
            <h1>Contact Me</h1>
            <p>
              Hi there, contact me to ask me about anything you have in mind.
            </p>
            <form className="form" onSubmit={handleSubmit}>
              <div className="form-box">
                <div className="form-group">
                  <label htmlFor="first_name">First name</label>
                  <input
                    name="first_name"
                    id="first_name"
                    type="text"
                    placeholder="Enter your first name"
                    required
                    value={userData.first_name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="last_name">Last name</label>
                  <input
                    name="last_name"
                    id="last_name"
                    type="text"
                    placeholder="Enter your last name"
                    required
                    value={userData.last_name}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="yourname@email.com"
                  required
                  value={userData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  name="message"
                  id="message"
                  type="text"
                  placeholder="Send me a message and I'll reply you as soon as possible"
                  required
                  cols="30"
                  rows="10"
                  value={userData.firstname}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group group1">
                <input
                  name="checked"
                  type="checkbox"
                  id="checkbox"
                  required
                  value={userData.firstname}
                  onChange={handleChange}
                />
                <label htmlFor="checkbox">
                  You agree to providing your data to {name} who may contact you
                </label>
              </div>
              <div className="button-group">
                <button type="submit" id="btn__submit">
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
