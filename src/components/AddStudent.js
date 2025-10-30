import React, { useState } from "react";
import API from "../api";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const [form, setForm] = useState({ name: "", age: "", department: "", marks: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/", form);
    navigate("/");
  };

  return (
    <div>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} /> <br />
        <input name="age" placeholder="Age" onChange={handleChange} /> <br />
        <input name="department" placeholder="Department" onChange={handleChange} /> <br />
        <input name="marks" placeholder="Marks" onChange={handleChange} /> <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddStudent;
