import React, { useState } from "react";
import Navbar from "./Navbar.jsx";

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
    password:""
  });
  

  function handleChange(event) {
    const { name, value } = event.target;

    setContact(prevValue => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email,
          password :prevValue.password
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email,
          password :prevValue.password
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value,
          password :prevValue.password
        }
      }
        else if(name==="password")
        {
          return{
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: prevValue.email,
          password :value
        }
      };
    });
  }

  return (
    <div>
      <Navbar/>
      <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          value={contact.fName}
          name="fName"
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Email"
        />
        <input
          onChange={handleChange}
          value={contact.password}
          name="password"
          placeholder="Enter password"
        />
        <button style={{backgroundColor :"#white"}}>Submit</button>
      </form>
    </div>
    </div>
  );
}

export default App;
