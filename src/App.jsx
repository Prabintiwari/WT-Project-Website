import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Error from "./Error";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Register from "./Components/Register";


function App() {

  const location = useLocation();

  return (
   <div className="min-h-screen relative">
       <NavBar />
       <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/*' element={<Error />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
        </Routes>
        {location.pathname !== "/login" && location.pathname !== "/register" && <Footer />}
   </div> 
  );
}

export default App;
