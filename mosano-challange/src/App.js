import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [users, updateUsers] = useState([]);
  const addUser = (user) => {
    updateUsers([...users, user]);
  };
  return (
    <div className="App">
      <Form addUser={addUser} />
      <List users={users} />
    </div>
  );
}

export default App;
