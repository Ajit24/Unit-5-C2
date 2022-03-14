import { useState } from "react"
export const AddHouse = () => {
  const [form, setForm] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = form;
    console.log("Data",payload)
    fetch("http://localhost:8080/houses", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: { 'Content-Type': 'application/json' }
    }).then(() => {
      console.log("Data",payload)
      
    })
  }

  return (
    <div className="addHouseContainer">
      <form onSubmit={handleSubmit}>
        <label>name</label>
        <input type="text" className="name" name="nam" onChange={handleChange} required />
        <br />
        <label>ownerName</label>
        <input name="owner" type="text" className="ownerName" onChange={handleChange} required />
        <br />
        <label>address</label>
        <input name="address" type="text" className="address" onChange={handleChange} required />
        <br />
        <label>areaCode</label>
        <input name="areacode" type="text" className="areaCode" onChange={handleChange} required />
        <br />
        <label>rent</label>
        <input name="rent" type="text" className="rent" onChange={handleChange} required />
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input type="checkbox" name="bachelor" onChange={handleChange} className="bachelor" />
        <br />
        <label>married</label>
        <input type="checkbox" name="married" onChange={handleChange} className="married" />
        <br />
        <label>image</label>
        <input name="" type="text" className="image" onChange={handleChange} required />
        <br />
        <input className="submitBtn" type="submit" value="Submit" />
      </form>
    </div>
  );
};