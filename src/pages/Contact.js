import axios from "axios";
import React, { useEffect, useState } from "react";
import fatcher from "../api/baseUrl";

const Contact = () => {
  const [users, setUsers] = useState([]);

  const handleAdduser = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const user = { name };
    console.log(user);

    try {
      const addNewUser = await fatcher.post("/users", user);
      const newUser = addNewUser.data;

      const newUsers = [...users, newUser];
      setUsers(newUsers);
    } catch (error) {
      console.log("can't find the new user", error);
    }

    // fetch("http://localhost:5000/users", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //   },
    //   body: JSON.stringify(user),
    // })
    //   .then((res) => res.json())
    //   .then((user) => {
    //     console.log(user);
    //     const newUsers = [...users, user];
    //     setUsers(newUsers);
    //   });
    event.target.reset();
  };

  useEffect(() => {
    (async () => {
      const result = await fatcher.get("/users");
      console.log(result.data);
      setUsers(result.data);
    })();
  }, []);
  return (
    <div className="mt-16 text-center font-bold">
      <form onSubmit={handleAdduser}>
        <br />
        <input type="text" name="name" required />
        <br />
        <br />
        <button
          style={{ backgroundColor: "white", color: "blue" }}
          type="submit"
        >
          {" "}
          add user
        </button>
      </form>
      <br />
      <h1>total users: {users.length}</h1>
      <div>
        {users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    </div>
  );
};

export default Contact;
