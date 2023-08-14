import React, { useEffect, useState } from "react";
import "material-icons/iconfont/material-icons.css";
import Nav from "./components/nav/Nav";
import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import "./App.css";


function App() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("stays.json");
      const resJson = await res.json();
      setData(resJson);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Nav />
      <Card/>
      <Footer/>
    </>
  );
}

export default App;
