import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-3/4 mx-auto flex justify-between mt-5">
      <div>
        <h1>ReactJS</h1>
      </div>
      <div className="w-1/4">
        <ul className=" flex justify-around items-center flex-row">
          <li className="text-sky-500">
            <Link to={"/"}>Home</Link>
          </li>
          <li>Tugas 15</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
