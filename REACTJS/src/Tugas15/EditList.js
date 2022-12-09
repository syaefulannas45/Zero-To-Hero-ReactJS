import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditList = () => {
  const { state } = useContext(GlobalContext);

  const { name, setName, course, setCourse, score, setScore } = state;

  useEffect(() => {
    getUsersById();
  }, []);

  const { idData } = useParams();
  const navigate = useNavigate();

  const getUsersById = async () => {
    const response = await fetch(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`);
    const data = await response.json();
    setName(data.name);
    setCourse(data.course);
    setScore(data.score);
  };

  const editUsers = async (e) => {
    e.preventDefault();
    const editUser = { name, course, score };
    await fetch(`https://backendexample.sanbercloud.com/api/student-scores/${idData}`, {
      method: "put",
      body: JSON.stringify(editUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };

  return (
    <div>
      {" "}
      <form className="mt-8 w-3/4 mx-auto shadow-lg p-5 rounded-lg" onSubmit={editUsers}>
        <h1 className="text-4xl">Edit Data</h1>
        <div className="w-1/4 bg-sky-500 h-1"></div> <br />
        <label htmlFor="name">Nama</label>
        <br />
        <input type="text" name="name" className="h-8 bg-slate-200 rounded-sm" value={name} onChange={(e) => setName(e.target.value)} />
        <br />
        <label htmlFor="course">Mata Kuliah</label> <br />
        <input type="text" name="course" className="h-8 bg-slate-200 rounded-sm" value={course} onChange={(e) => setCourse(e.target.value)} />
        <br />
        <label htmlFor="score">Nilai</label> <br />
        <input type="number" name="score" className="h-8 bg-slate-200 rounded-sm" value={score} onChange={(e) => setScore(e.target.value)} />
        <br /> <br />
        <button className="bg-amber-500 w-20 h-8 rounded-md text-white ml-2">Ubah</button>
      </form>
    </div>
  );
};

export default EditList;
