import React, { createContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
  const navigate = useNavigate();
  const { idData } = useParams();
  //STATE
  const [users, setUsers] = useState([]);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [score, setScore] = useState("");

  //FUNCTION
  const handleScore = (nilai) => {
    if (nilai > 80) {
      return "A";
    } else if (nilai > 70 && nilai < 80) {
      return "B";
    } else if (nilai > 60 && nilai < 70) {
      return "D";
    } else {
      return "E";
    }
  };
  const addUsers = async (e) => {
    e.preventDefault();
    const newUsers = { name, course, score };
    await fetch("https://backendexample.sanbercloud.com/api/student-scores", {
      method: "POST",
      body: JSON.stringify(newUsers),
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };

  const deleteUsers = async (idData) => {
    await fetch(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    getData();
    reload();
  };
  const reload = () => {
    setTimeout(function () {
      window.location.reload();
    }, 300);
  };
  const getData = async () => {
    const res = await fetch("https://backendexample.sanbercloud.com/api/student-scores");
    const data = await res.json();
    setUsers(data);
  };


  const state = { users, setUsers, name, setName, course, setCourse, score, setScore, idData };

  const handleFunction = { handleScore, addUsers, deleteUsers, reload, getData};

  return (
    <GlobalContext.Provider
      value={{
        state,
        handleFunction,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
