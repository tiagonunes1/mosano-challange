export default function List({ users }) {
  return (
    <div>
      <table>
        <tr>
          <th>name</th>
          <th>country</th>
          <th>birthday</th>
        </tr>
        {users.map((user) => (
          <tr>
            <td key={user.name}>{user.name} {user.surname}</td>
            <td key={user.countries}>{user.countries}</td>
            <td key={user.birthday}>{user.birthday}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
