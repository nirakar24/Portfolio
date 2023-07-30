import React , {useState, useEffect, color} from "react";
import "./index.css"
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Projects from "./routes/Projects";
import DotLoader from "react-spinners/DotLoader";

import {Route , Routes} from "react-router-dom"

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() =>{
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    },3000)
  },[])
  return (
    <>
    {
       loading ? 
      <div className="App">
       <DotLoader
        color={"#46CFA1"}
        loading={loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      </div>
       :
    
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/projects" element={<Projects/>}/>
    </Routes>}
    </>
    
  );
}

export default App;
