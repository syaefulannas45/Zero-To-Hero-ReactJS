import React, { useState } from "react";

const Tugas9 = () => {
  const [count, setCount] = useState(1);
  const handlingCount = () => {
     if (count < 10){
          setCount(count + 1)
     }else {
          setCount("State Count Sudah Lebih dari 10!!")
     }
  }
  return (
    <div className="usestate">
      <p>{count}</p>
      <hr />
      <button onClick={handlingCount} className="buttonstate">Tambah</button>
    </div>
  );
};

export default Tugas9;
