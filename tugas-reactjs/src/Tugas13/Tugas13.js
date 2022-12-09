import React from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";
const Tugas13 = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { users, setUsers, name, setName, course, setCourse, score, setScore } = state;
  const { handleScore, addUsers, deleteUsers, reload, getData } = handleFunction;

  const navigate = useNavigate();
  const { idData } = useParams();
  useEffect(() => {
    getData();
    getUsersById();
  }, []);

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
    reload();
  };

  return (
    <div className="w-full">
      <table className="w-3/4 mx-auto mt-10 p-10 text-center shadow-md rounded-lg" cellPadding={5}>
        <thead className="bg-sky-500 text-white">
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Mata Kuliah</th>
            <th>Nilai</th>
            <th>Index Nilai</th>
            <th>Action</th>
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
              <td>
                <div className="mx-autow-1/2 flex justify-around">
                  <div className="button bg-amber-300 text-white w-10 h-8 rounded-md">
                    <Link to={`${res.id}`} onClick={reload}>
                      Edit
                    </Link>
                  </div>
                  <div className="button bg-red-400 text-white w-14 h-8 rounded-md">
                    <button
                      onClick={() => {
                        deleteUsers(res.id);
                      }}
                    >
                      Hapus
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <form className="mt-8 w-3/4 mx-auto shadow-lg p-5 rounded-lg">
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
        <button className="bg-sky-500 w-20 h-8 rounded-md text-white" onClick={addUsers}>
          Tambah
        </button>
        <button className="bg-amber-500 w-20 h-8 rounded-md text-white ml-2" onClick={editUsers}>
          Ubah
        </button>
      </form>
    </div>
  );
};

export default Tugas13;
