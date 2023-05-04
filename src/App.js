import "./App.css";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import { Outlet } from "react-router-dom";
import MobileNav from "./Component/MobileNav";
import Layover from "./Component/Layover";
import { useState } from "react";
import AppContext from "./Context/Context";


function App() {
  const [locationShow, setLocationShow] = useState(false)
 
 const initialState = {
  metadata:{}
 }
 
 const [state, setState] = useState(initialState);
 console.log("state",state.metadata.currentPage)
  return (
    
    <AppContext.Provider value={{state,setState}}>
    <div className="overflow-x-hidden	">
    <Header setLocationShow={setLocationShow}/>
      {locationShow && <MobileNav setLocationShow={setLocationShow} />}
        {locationShow && <Layover setLocationShow={setLocationShow} />} 
      <Outlet />
     
      <Footer />
    </div>
    </AppContext.Provider>
   
      
     
      
  
  );
}

export default App;
