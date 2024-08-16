import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import Error from "./Error";


function App() {
  return (
   <div className="">
       <NavBar />
       <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/*' element={<Error />}></Route>
          <Route path='/'></Route>
        </Routes>
   </div> 
  );
}

export default App;
