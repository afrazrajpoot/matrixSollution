import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { useGlobalContext } from '../../context/GlobalContext';
import { useGlobalContext } from "../context/GlobalContext";
// import emailjs from 'emailjs-com';
import emailjs from "@emailjs/browser";

const Contact = () => {
  const { setContactState } = useGlobalContext();
  const [formData, setFormData] = useState({
    contctFName: "",
    contctEmail: "",
    contctMobileNo: "",
    Subject: "",
    txt_msg: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validation
    setErrors({
      ...errors,
      [name]: validateField(name, value),
    });
  };

  const validateField = (name, value) => {
    switch (name) {
      case "contctFName":
      case "Subject":
        return value.trim() === "" ? "This field is required" : "";
      case "contctEmail":
        return !/\S+@\S+\.\S+/.test(value) ? "Invalid email address" : "";
      case "contctMobileNo":
        return !/^\+?\d{10,14}$/.test(value) ? "Invalid phone number" : "";
      default:
        return "";
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    for (const key in formData) {
      newErrors[key] = validateField(key, formData[key]);
    }
    setErrors(newErrors);
    const isValid = Object.values(newErrors).every((error) => error === "");
    if (isValid) {
      emailjs
        .send(
          "service_ctvns5v",
          "template_gs496da",
          formData,
          "7Zk4PougliM_PgSEt"
        )
        .then((response) => {
          console.log("Email sent:", response.status, response.text);
          setSubmitted(true); // Set submitted to true to show success message or redirect
        })
        .catch((error) => {
          console.error("Email send error:", error);
          // Handle error, show error message or take appropriate action
        });
    }
  };

  return (
    <div className="contact-form" style={{ display: "block" }}>
      <div className="cf-inner">
        <div className="cf-detail">
          <div
            className="contact-close ir"
            onClick={() => setContactState(false)}
          >
            Menu
          </div>
          <div className="c-left">
            <h2>Contact us</h2>
            <p>
              We’d love to hear from you. Either fill out the form, <br />
              <Link to="mailto:info@matrix-solutions.net"> email us</Link>, or
              give the team a call:
            </p>
            <span className="c-number">
              <Link to="tel:+923008485536" data-tel={+923008485536}>
                +92 300 848 5536
              </Link>
            </span>
            <p>
              666, Askari IX,
              <br />
              Lahore Cantt, Pakistan.
            </p>
            <p>
              129 J, Model Town,
              <br />
              Lahore, Pakistan.
            </p>
          </div>
          {!submitted ? (
            <div className="c-right">
              <div className="form">
                <form id="MyForm" name="MyForm" onSubmit={handleSubmit}>
                  <div>
                    <input
                      id="contctFName"
                      name="contctFName"
                      type="text"
                      placeholder="Name*"
                      value={formData.contctFName}
                      onChange={handleChange}
                    />
                    <div className="relative">
                      {errors.contctFName && (
                        <span
                          style={{ color: "red", margin: "0.5vw" }}
                          className="error"
                        >
                          {errors.contctFName}
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <input
                      id="contctEmail"
                      name="contctEmail"
                      type="text"
                      placeholder="Email*"
                      value={formData.contctEmail}
                      onChange={handleChange}
                    />
                    {errors.contctEmail && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "1vw",
                          marginLeft: "",
                        }}
                        className="error"
                      >
                        {errors.contctEmail}
                      </span>
                    )}
                  </div>
                  <div>
                    <input
                      id="contctMobileNo"
                      name="contctMobileNo"
                      type="text"
                      placeholder="Mobile No"
                      value={formData.contctMobileNo}
                      onChange={handleChange}
                    />
                    {errors.contctMobileNo && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "1vw",
                          marginLeft: "",
                        }}
                        className="error text-red-600 "
                      >
                        {errors.contctMobileNo}
                      </span>
                    )}
                  </div>
                  <div>
                    <input
                      id="Subject"
                      name="Subject"
                      type="text"
                      placeholder="Subject"
                      value={formData.Subject}
                      onChange={handleChange}
                    />
                    {errors.Subject && (
                      <span
                        style={{
                          color: "red",
                          fontSize: "1vw",
                          marginLeft: "",
                        }}
                        className="error"
                      >
                        {errors.Subject}
                      </span>
                    )}
                  </div>
                  <div className="tarea">
                    <textarea
                      id="contctTextarea"
                      name="txt_msg"
                      maxLength={2000}
                      placeholder="Message"
                      value={formData.txt_msg}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <input
                      className="btn submit"
                      id="btncontact"
                      type="submit"
                      value="SUBMIT"
                    />
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="v-center">
              <div className="v-block-detail">
                <h2>Thank you</h2>
                <p>Our team will contact you soon.</p>
                {/* Add link or button to close the form */}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;
