import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [users, updateUsers] = useState([]);
  const [currentUserName, setCurrentUserName] = useState("");
  const [currentUserSurname, setCurrentUserSurname] = useState("");
  const addUser = (user) => {
    setCurrentUserName(user.name);
    setCurrentUserSurname(user.surname);
    updateUsers([...users, user]);
  };
  return (
    <div className="App">
      <Form addUser={addUser} />
      
      <List
        users={users}
        currentUserName={currentUserName}
        currentUserSurname={currentUserSurname}
      />
    </div>
  );
}

export default App;
