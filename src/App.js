import React, { createContext, useState } from "react";
import './App.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './Component/Home/Home';
import DemoPage from "./Component/DemoPage/DemoPage";








export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router className="App">
     <Switch>
       <Route exact path="/">
         <Home/>
       </Route>
       <Route exact path="/login">
        <DemoPage/>
       </Route>
       </Switch>
       </Router>
    </UserContext.Provider>
  );
}

export default App;
