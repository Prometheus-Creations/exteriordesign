/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Vehicle from './Vehicle';
import Finance from './Finance';
import About from './About';
import GetInTouch from './GetInTouch';
import Privacy from './Privacy';
import Disclaimer from './Disclaimer';
import Post from './Post';
import Edit from './Edit';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from "./auth/SignIn";
import SignUp from './auth/Signup';
import { auth, onAuthStateChanged } from "../firebase";
import Header from "./Header";


function App() {
    const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    });

    return () => unsubscribe();
  }, []); 
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home isLogged={isLogged} setIsLogged={setIsLogged}  />} />
          <Route path='/inventory' element={<Vehicle isLogged={isLogged} setIsLogged={setIsLogged}  />} />
          <Route path='/financing' element={<Finance isLogged={isLogged} setIsLogged={setIsLogged}  />} />
          <Route path='/about' element={<About isLogged={isLogged} setIsLogged={setIsLogged}  />} />
          <Route path='/getintouch' element={<GetInTouch isLogged={isLogged} setIsLogged={setIsLogged} />} />
          <Route path='/privacy' element={<Privacy  isLogged={isLogged} setIsLogged={setIsLogged}  />} /> 
          <Route path='/disclaimer' element={<Disclaimer isLogged={isLogged} setIsLogged={setIsLogged}  />} />
          <Route path='/post' element={<Post isLogged={isLogged} setIsLogged={setIsLogged} />} />
          <Route path='/edit/:id' element={<Edit isLogged={isLogged} setIsLogged={setIsLogged}  />} />
          <Route path='/signin' element={<SignIn isLogged={isLogged} setIsLogged={setIsLogged}/>} />
          <Route path='/signup' element={<SignUp isLogged={isLogged} setIsLoggedIn={setIsLogged} />} />
          <Route path='/header' element={<Header isLogged={isLogged} setIsLogged={setIsLogged}/>} />
        </Routes>
    </Router>
  );
}

export default App;

