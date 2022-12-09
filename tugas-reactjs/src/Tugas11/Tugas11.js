import React from "react";
import { useState, useEffect } from "react";

const Tugas11 = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const res = await fetch("https://backendexample.sanbercloud.com/api/student-scores");
    const data = await res.json();
    setUsers(data);
  };
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
    </div>
  );
};

export default Tugas11;
