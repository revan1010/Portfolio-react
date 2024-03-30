import React from "react";
import "./ContactForm.css";
import { MdLocationPin } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
const ContactForm = ({ data }) => {
  return (
    <div className="contactForm">
      <div className="contact-head">
        <h1>Contact Me</h1>
      </div>
      <div className="form-Container">
        <div className="info-part">
          <div className="info-form">
            <MdLocationPin
              style={{
                fontSize: "42px",
                backgroundColor: "#0f292f",
                padding: "9px",
                color: "#0fe4d9",
                borderRadius: "36px",
              }}
            />

            <div className="data-form">
              <h3>Address</h3>
              <p>{data.about.address}</p>
            </div>
          </div>
          <div className="info-form">
            <MdEmail
              style={{
                fontSize: "42px",
                backgroundColor: "#0f292f",
                padding: "9px",
                color: "#0fe4d9",
                borderRadius: "36px",
              }}
            />
            <div className="data-form">
              <h3>Email</h3>
              <p>{data.email}</p>
            </div>
          </div>
          <div className="info-form phonee">
            <FaPhoneAlt
              style={{
                fontSize: "42px",
                backgroundColor: "#0f292f",
                padding: "9px",
                color: "#0fe4d9",
                borderRadius: "36px",
              }}
            />
            <div className="data-form">
              <h3>Phone</h3>
              <p>{data.about.phoneNumber}</p>
            </div>
          </div>
        </div>
        <div className="form-input-part">
          <div className="name-email">
            <div className="group">
              <label>Your Full Name</label>
              <br />
              <input type="text" placeholder="Name" />
            </div>
            <div className="group">
              <label>Your Email</label>
              <br />
              <input type="text" />
            </div>
          </div>
          <div className="message">
            <textarea />
          </div>
          <div className="btn-part">
            <button>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
