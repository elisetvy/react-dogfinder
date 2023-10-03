import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Navbar from "./Navbar";
import DogList from "./DogList";
import DogDetails from "./DogDetails";

function DogFinderApp() {
  const [ dogList, setDogList ] = useState("Loading");
  const [ callGetDogs, setCallGetDogs ] = useState(true);

  async function getDogs() {
    const resp = await fetch('http://localhost:5001/dogs');
    const data = await resp.json()
    setDogList(data);
    setCallGetDogs(false);
  }

  if (callGetDogs === true) {
    getDogs();
  }

  return (
    <>
    <BrowserRouter>
      <Navbar dogList={dogList} />
      <Routes>
      <Route element= { <DogList dogList={dogList} />} path="/" />
      <Route element= { <DogDetails dogList={dogList} getDogs={getDogs} callGetDogs={callGetDogs} />} path="/dogs/:name" />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default DogFinderApp;