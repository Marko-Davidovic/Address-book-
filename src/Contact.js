import React, { useState} from "react";
import "./App.css";
import { db } from "./firebase";
import Button from '@material-ui/core/Button';
import { TextField } from "@material-ui/core";

const Contact = () => {
  const [fname, setName] = useState("");
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
        name: fname,
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
    <form className="form" onSubmit={handleSubmit} autoComplete="on">
      <h1>Add Address 🤳</h1>

        <TextField
            id="outlined-basic" 
            type="text"
            label="Full Name" 
            variant="outlined"
            name="fname"
            value={fname}
            onChange={(e) => setName(e.target.value)}
            required 
        />
        <br/>

        <TextField
            id="outlined-basic" 
            label="Address" 
            variant="outlined"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required 
         />            
        <br/>

        <TextField
            id="outlined-basic" 
            label="Email" 
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" required 
        />
        <br/>

        <TextField
            id="outlined-basic" 
            label="Phone Number" 
            variant="outlined"
            required 
            value={number}
            onChange={(e) => setNumber(e.target.value)}
        />    
        <br/>

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
