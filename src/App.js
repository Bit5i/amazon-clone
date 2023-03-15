import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { Route,Routes } from "react-router-dom";

function App() {
  return (
      <div className="app">
    
      <Routes>
          <Route path="/" element={ <><Header/><Home /></>}/>

            {/* <Route path="/login" element={<Login/>}/> */}

          <Route path="/checkout" element={<> <Header/><Checkout /></>}/>
          </Routes>
        
      </div>
  );
}

export default App;
