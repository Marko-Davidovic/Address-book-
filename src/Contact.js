import React, { useState, useEffect } from "react";
import "./App.css";
import { db } from "./firebase";
import Button from '@material-ui/core/Button';
import { TextField } from "@material-ui/core";

const Contact = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        address:address,
        email: email,
        number: number,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setAddress("");
    setEmail("");
    setNumber("");
    setMessage("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1>Add Address 🤳</h1>

      
        <TextField
            id="outlined-basic" 
            label="Full Name" 
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <br/>

        {/* <label>Address</label> */}
        <TextField
            id="outlined-basic" 
            label="Address" 
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
         />            
        <br/>

        {/* <label>Email</label> */}
        <TextField
            id="outlined-basic" 
            label="Email" 
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <br/>

        {/* <label>Phone Number</label> */}
        <TextField
            id="outlined-basic" 
            label="Phone Number" 
            variant="outlined"
            
            value={number}
            onChange={(e) => setNumber(e.target.value)}
        />    
        <br/>

        {/* <label>Message</label> */}
        <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <br/>
        <Button
            type="submit"
            variant="contained" 
            color="primary"
            style={{ background: loader ? "#ccc" : " rgb(80, 196, 242)" }}
        >
            Submit
        </Button>
    </form>
  );
};

export default Contact;
