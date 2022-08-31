import { useState } from "react";
import Message from "./Message";

export default function List({ users, currentUserName, currentUserSurname }) {
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const Trigger = (user) => {
    setShowMessage(true);
    let age = new Date().getFullYear() - user.birthday.substr(0, 4);
    let day = user.birthday.substr(8, 2);
    let month = user.birthday.substr(5, 2);
    setMessage(
      `Hello ${user.name} ${user.surname} from ${user.countries}. On ${day} of ${month} you will have ${age} years`
    );
    setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };
  return (
    <div id="table-container">
      {showMessage && <Message message={message} />}
      <table>
        <tbody>
          <tr>
            <th>name</th>
            <th>country</th>
            <th>birthday</th>
          </tr>
          {users.map((user) => (
            <tr key={user.name}>
              <td
                key={user.name}
                onClick={() => {
                  Trigger(user);
                }}
              >
                {user.name} {user.surname}
              </td>
              <td key={user.countries}>{user.countries}</td>
              <td key={user.birthday}>{user.birthday}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div id="user-name">
        <strong>
          {currentUserName} {currentUserSurname}
        </strong>
      </div>
    </div>
  );
}
