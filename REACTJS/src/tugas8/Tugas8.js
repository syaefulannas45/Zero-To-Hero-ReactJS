import React from "react";

const Tugas8 = (props) => {
  return (
    <div className="tugas">
      <h1>Data diri peserta kelas ReactJS</h1>
      <hr />
      <ul>
        <li>Nama Lengkap : {props.name}</li>
        <li>Email : {props.email}</li>
        <li>Batch : {props.batch}</li>
      </ul>
    </div>
  );
};

export default Tugas8;
