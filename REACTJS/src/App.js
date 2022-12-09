import "./App.css";
// import Tugas7 from "./Tugas7/Tugas7";
// import Tugas8 from "./Tugas8/Tugas8";
// import Tugas9 from "./Tugas9/Tugas9";
// import Tugas10 from "./Tugas10/Tugas10";
// import Tugas11 from "./Tugas11/Tugas11";
// import Tugas12 from "./Tugas12/Tugas12";
// import Tugas13 from "./Tugas13/Tugas13";
import Tugas15List from "./Tugas15/Tugas15List";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalProvider } from "./context/GlobalContext";
import Navbar from "./Navbar/Navbar";
import AddList from "./Tugas15/AddList";
import EditList from "./Tugas15/EditList";

function App() {
  return (
    <div className="App">
      {/* <Tugas7 name="Syaeful Annas" />
      <Tugas8 name="Syaeful Annas" email="syaefulannas33@gmail.com" batch="40" />
      <Tugas9 />
      <Tugas10 />
      <Tugas11 />
      <Tugas12/> */}
      <BrowserRouter>
        <Navbar />
        <GlobalProvider>
          <Routes>
            <Route path="/" element={<Tugas15List />} />
            <Route path="/create" element={<AddList />} />
            <Route path="/edit/:idData" element={<EditList />} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
