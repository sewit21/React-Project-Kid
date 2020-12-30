import React, { useState } from "react";
import "./pages.css";
import { db } from "./firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        alert("Message has been submitted");
        setLoader(false);
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };
  return (
    <>
      <form className="contact" onSubmit={handleSubmit}>
        <h1 className="ctitle">Contact Form</h1>

        <label className="item">Name</label>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onBlur={(e) => setName(e.target.value)}
        />

        <label className="item">Email</label>
        <input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={(e) => setEmail(e.target.value)}
        />

        <label className="item">Message</label>
        <textarea
          placeholder="Place your ideas here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onBlur={(e) => setMessage(e.target.value)}
        ></textarea>

        <button
          type="submit"
          style={{ background: loader ? "yellow" : "grey" }}
        >
          {" "}
          Submit{" "}
        </button>
      </form>

      <h1 className="pic"> 🤸🏼‍♀️ </h1>
    </>
  );
};

export default Contact;
