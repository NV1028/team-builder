import React, { useState } from "react";

const Form = props => {
  const [user, setUser] = useState({ name: "", email: "", role: "" });

  const handleChange = event => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const submitForm = event => {
    event.preventDefault();
    props.addNewUser(user);
    setUser({ username: "", email: "", role: "" });
  };

  return (
    <div>
      <form onSubmit={event => submitForm(event)}>
        <label htmlFor="">
          Team Members
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={event => handleChange(event)}
          />
        </label>
        <br />
        <label htmlFor="">
          email:
          <input
            type="text"
            name="email"
            value={user.email}
            onChange={event => handleChange(event)}
          />
        </label>
        <br />
        <label htmlFor="">
          role:
          <input
            type="text"
            name="role"
            value={user.role}
            onChange={event => handleChange(event)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;