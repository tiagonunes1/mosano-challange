import { useState, useEffect } from "react";

export default function UserForm({ addUser }) {
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
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
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
              >
                <option value="">--Please select a country--</option>
                {countries.map(({ name }) => (
                  <option value={name.common}>{name.common}</option>
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
          <button>Save</button>
        </div>
        {submitting && (
          <div>
            Hello {formData.name} {formData.surname} from {formData.countries}
          </div>
        )}
      </form>
    </div>
  );
}
