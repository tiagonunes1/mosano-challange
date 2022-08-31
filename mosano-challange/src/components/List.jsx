export default function List({ users, currentUserName, currentUserSurname }) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>name</th>
            <th>country</th>
            <th>birthday</th>
          </tr>
          {users.map((user) => (
            <tr key={user.name}>
              <td key={user.name}>
                {user.name} {user.surname}
              </td>
              <td key={user.countries}>{user.countries}</td>
              <td key={user.birthday}>{user.birthday}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div id="user-name">
        {currentUserName} {currentUserSurname}
      </div>
    </div>
  );
}
