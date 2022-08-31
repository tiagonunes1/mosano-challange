import { useState, useEffect } from "react";

export default function UserForm({ addUser }) {
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    countries: "",
    birthday: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    addUser(formData);
    setSubmitting(true);
    let age = new Date().getFullYear() - formData.birthday.substr(0, 4);
    let day = formData.birthday.substr(8, 2);
    let month = formData.birthday.substr(5, 2);

    setMessage(
      `Hello ${formData.name} ${formData.surname} from ${formData.countries}. On ${day} of ${month} you will have ${age} years`
    );
    setTimeout(() => {
      setSubmitting(false);
    }, 10000);
    setFormData({ name: "", surname: "", countries: "", birthday: "" });
  };

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let data = await fetch(`https://restcountries.com/v3.1/all`).then(
        (response) => response.json()
      );
      setCountries(data);
    };
    getData();
  });

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div>
          <p>
            <label>
              Name:
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
          </p>
        </div>
        <div>
          <p>
            <label>
              Surname:
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                value={formData.surname}
                onChange={handleChange}
                required
              />
            </label>
          </p>
        </div>
        <div>
          <p>
            <label>
              Countries:
              <select
                name="countries"
                onChange={handleChange}
                value={formData.country}
                required
              >
                <option value="">--Please select a country--</option>
                {countries.map(({ name }) => (
                  <option key={name.common} value={name.common}>
                    {name.common}
                  </option>
                ))}
              </select>
            </label>
          </p>
        </div>
        <div>
          <p>
            <label>
              Birthday:
              <input
                type="date"
                name="birthday"
                placeholder="Birthday"
                value={formData.birthday}
                onChange={handleChange}
              />
            </label>
          </p>
        </div>
        <div>
          <button type="submit">Save</button>
        </div>
        {submitting && <p>{message}</p>}
      </form>
    </div>
  );
}
