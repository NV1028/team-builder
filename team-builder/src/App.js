
import React, { useState } from "react";
import Form from "./components/Form";
import "./App.css";
import Users from "./components/Users";

function App() {
  const [users, setusers] = useState([
    { name: "nick", email: "nick@email.com", role: "web" }
  ]);

  const addNewUser = user => {
    setusers([...users, user]);
  };
  return (
    <div className="App">
      <h1>Users</h1>
      <Form addNewUser={addNewUser} />
      <Users users={users} />
    </div>
  );
}

export default App;
