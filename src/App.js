import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [mode, setmode] = useState("light"); // whether the darkmode is enabled or not
  // const [bluemode,setbluemode] = useState(null); // change mode in blue mode
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    // this is for alert custom message
    setalert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      //it is used to give command after some tim(time in milisec)
      setalert(null);
    }, 10000);
  };

  const togglemode = () => {
    // for darkmode enable disable
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "darkgrey";
      showalert("Niggamode enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showalert("Whitemode enabled", "success");
    }
  };

  // in function this is called JSx
  return (
    <>

      <BrowserRouter>
        <Navbar mode={mode} togglemode={togglemode}></Navbar>
        <Alert alert={alert}> </Alert>

        <Routes>
          <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode}></TextForm>}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
