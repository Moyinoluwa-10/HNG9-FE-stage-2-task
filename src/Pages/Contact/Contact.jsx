import React from "react";
import Footer from "../../components/Footer/Footer";
import "./Contact.css";

const Contact = () => {
  const name = "Moyinoluwa";
  return (
    <div className="contact">
      <div className="container">
        <div className="box">
          <div className="form-container">
            <h1>Contact Me</h1>
            <p>
              Hi there, contact me to ask me about anything you have in mind.
            </p>
            <form className="form">
              <div className="form-box">
                <div className="form-group">
                  <label htmlFor="">First name</label>
                  <input
                    id="firstname"
                    type="text"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastname">Last name</label>
                  <input
                    id="lastname"
                    type="text"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="firstname"
                  type="email"
                  placeholder="yourname@email.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  type="text"
                  placeholder="Send me a message and I'll reply you as soon as possible"
                  required
                  cols="30"
                  rows="10"
                />
              </div>
              <div className="form-group group1">
                <input type="checkbox" id="checkbox" required />
                <label htmlFor="checkbox">
                  You agree to providing your data to {name} who may contact you
                </label>
              </div>
              <div className="button-group">
                <button type="submit">Send message</button>
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
