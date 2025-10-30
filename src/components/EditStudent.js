import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../api";

const EditStudent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", age: "", department: "", marks: "" });

  useEffect(() => {
    API.get(`/${id}`).then(res => setForm(res.data));
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.put(`/${id}`, form);
    navigate("/");
  };

  return (
    <div>
      <h2>Edit Student</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={form.name} onChange={handleChange} /> <br />
        <input name="age" value={form.age} onChange={handleChange} /> <br />
        <input name="department" value={form.department} onChange={handleChange} /> <br />
        <input name="marks" value={form.marks} onChange={handleChange} /> <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditStudent;
