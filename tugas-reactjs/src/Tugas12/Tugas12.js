import React from "react";
import { useState, useEffect } from "react";

const Tugas12 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await fetch("https://backendexample.sanbercloud.com/api/student-scores");
    const data = await res.json();
    setUsers(data);
  };
  console.log(users);
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
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [score, setScore] = useState("");
  const addUsers = async (e) => {
     e.preventDefault()
    const newUsers = { name, course, score };
    await fetch("https://backendexample.sanbercloud.com/api/student-scores", {
      method: "POST",
      body: JSON.stringify(newUsers),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };
  const reload = () => {
    if (reload) {
      setTimeout(function () {
        window.location.reload();
      }, 300);
    }
  };
  return (
    <div className="w-full">
      <table className="w-4/5 mx-auto mt-10 p-10 text-center shadow-md rounded-lg" cellPadding={5}>
        <thead className="bg-sky-500 text-white">
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Mata Kuliah</th>
            <th>Nilai</th>
            <th>Index Nilai</th>
          </tr>
        </thead>
        <tbody className="">
          {users.map((res, index) => (
            <tr key={res.id} className="border">
              <td>{index + 1}</td>
              <td>{res.name}</td>
              <td>{res.course}</td>
              <td>{res.score}</td>
              <td>{handleScore(res.score)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <form action="post" className="mt-8 w-3/4 mx-auto shadow-lg p-5 rounded-lg" onSubmit={addUsers}>
        <h1 className="text-4xl">Tambah Data</h1>
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
        <button className="bg-sky-500 w-20 h-8 rounded-md" onClick={reload}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Tugas12;
