import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useEffect } from "react";

const Tugas15List = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { users } = state;
  const { reload,handleScore,deleteUsers,getData } = handleFunction;
    useEffect(() => {
      getData();
    }, []);

  return (
    <div className="w-full mt-10">
    <Link to={"/create"} className="block w-20 mx-auto bg-sky-600 text-white rounded-md text-center">Create</Link>
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
                    <Link to={`/edit/${res.id}`} onClick={reload}>
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
    </div>
  );
};

export default Tugas15List;
