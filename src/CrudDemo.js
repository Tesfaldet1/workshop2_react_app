import axios from "axios";
import React, { useEffect, useState } from "react";

const CrudDemo = () => {
  const [people, setPeople] = useState([]);

  useEffect(async () => {
    await axios
      .get("http://localhost:8080/api/v1/person")
      .then((response) => response.json())
      .then((data) => setPeople(data));
  }, []);

  return (
    <div>
      <h2>CRUD Demo</h2>
    </div>
  );
};

export default CrudDemo;
