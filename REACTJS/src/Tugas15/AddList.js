import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const AddList = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { name, course, score, setName, setScore, setCourse } = state;
  const { addUsers } = handleFunction;
  return (
    <div>
      <form className="mt-8 w-3/4 mx-auto shadow-lg p-5 rounded-lg" onSubmit={addUsers}>
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
        <button className="bg-sky-500 w-20 h-8 rounded-md text-white">Tambah</button>
      </form>
    </div>
  );
};

export default AddList;
