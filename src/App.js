import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import Signup from "./screens/Signup";
import { useState } from "react";

function App() {
  const [user, setLoginUser] = useState({});
  return (
    
    <Router>
     <div>
        <Routes>

          <Route exact path="/" element={user && user._id ? (
              <Home setLoginUser={setLoginUser} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )}/>
          {/* <Route>{
              user && user._id ? <Home setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} /> 
            }</Route> */}
          <Route exact path="/login" element={<Login setLoginUser={setLoginUser}/>}/>
          <Route exact path="/creatuser" element={<Signup/>}/>
          {/* <Route exact path="/">
            {user && user._id ? (
              <Home setLoginUser={setLoginUser} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )}
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>
       
          <Route path="/creatuser" ><Signup/></Route>  */}
        </Routes>
        </div>
    </Router>
    
  );
}

export default App;
