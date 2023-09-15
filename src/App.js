import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./app.css"
import Leftbar from './Component/Leftbar/Leftbar'
import Home from "./Pages/Home";
import Discoverpage from "./Pages/Discoverpage";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Leftbar/>
      <Routes>
      <Route exact path="/" Component={Home} />
      <Route exact path="/discover" Component={Discoverpage} />
      </Routes>
    </div>
  );
}

export default App;
