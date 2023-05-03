import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import { Outlet } from "react-router-dom";
import MobileNav from "./Component/MobileNav";
import Layover from "./Component/Layover";


function App() {
 
  return (
    <> 
    
      <Header />
      <Outlet />
      <MobileNav/>
     <Layover/>
      <Footer />
     
      
    </>
  );
}

export default App;
