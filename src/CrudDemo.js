import axios from "axios";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Id</th>
        <th>firstName</th>
        <th>lastName</th>
        <th>Email</th>
        <th>title</th>
        <th>Action</th>
      </tr>
    </thead>
  );
};

const TableAction = ({ id, onDelete }) => {
  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <td>
      <button className="btn btn-danger" onClick={handleDelete}>
        Delete
      </button>
      <button className="btn btn-info">Details</button>
      <button className="btn btn-warning">edit</button>
    </td>
  );
};

const TableRow = ({ person, onDelete }) => {
  return (
    <tr>
      <td>{person.id}</td>
      <td>{person.firstName}</td>
      <td>{person.lastName}</td>
      <td>{person.email}</td>
      <td>{person.title}</td>
      <TableAction id={person.id} onDelete={onDelete} />
    </tr>
  );
};

const Table = ({ persons, onDelete }) => {
  return (
    <table>
      <TableHeader />
      <tbody>
        {persons.map((person) => (
          <TableRow key={person.id} person={person} onDelete={onDelete} />
        ))}
      </tbody>
    </table>
  );
};

const CrudDemo = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v2/persons")
      .then((response) => setPersons(response.data))
      .catch((error) => console.log(error));
  }, []);

  const handleDelete = (id) => {
    const updatedPersons = persons.filter((person) => person.id !== id);
    setPersons(updatedPersons);
  };

  return (
    <div>
      <h2>Crud Demo</h2>
      <li className="nav-item">
        <Link className="nav-link" to="/crud">
          CrudDemo
        </Link>
      </li>
      <Table persons={persons} onDelete={handleDelete} />
    </div>
  );
};
export default CrudDemo;
