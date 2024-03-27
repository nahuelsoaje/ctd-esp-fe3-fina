
import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Favs from "./Routes/Favs";
import Detail from "./Routes/Detail";
import { routes } from "./Components/utils/routes";


function App() {
  return (
    <div className="App">
        <Navbar/>
        <Footer/>
        <Routes>
         <Route path={routes.home} element={<Home/>} /> 
         <Route path={routes.favs} element={<Favs/>} /> 
         <Route path={routes.contact} element={<Contact/>} /> 
         <Route path={routes.detail+':id'} element={<Detail/>} /> 
      
        </Routes>
      </div>
  );
}

export default App;
