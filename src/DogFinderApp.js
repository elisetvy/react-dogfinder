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
  }

  if (callGetDogs === true) {
    getDogs();
    setCallGetDogs(false);
  }

  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route element= { <DogList dogList={dogList} />} path="/" />
      <Route element= { <DogDetails />} path="/dogs/:name" />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default DogFinderApp;