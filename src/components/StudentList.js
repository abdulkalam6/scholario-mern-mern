import React, { useEffect, useState } from "react";
import API from "../api";
import { Link } from "react-router-dom";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    API.get("/")
      .then(res => setStudents(res.data))
      .catch(err => console.error(err));
  }, []);

  const deleteStudent = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      await API.delete(`/${id}`);
      setStudents(students.filter(s => s._id !== id));
    }
  };

  return (
    <div className="container">
      <h2>Student Records</h2>
      <Link to="/add">Add New Student</Link>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Department</th>
            <th>Marks</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s._id}>
              <td>{s.name}</td>
              <td>{s.age}</td>
              <td>{s.department}</td>
              <td>{s.marks}</td>
              <td>
                <Link to={`/edit/${s._id}`}>Edit</Link> |{" "}
                <button onClick={() => deleteStudent(s._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
