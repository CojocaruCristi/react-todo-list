import React from 'react';
import './App.css';
import {Redirect, Route} from "react-router-dom";
import ProfileContainer from "./components/Register/RegisterContainer";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App">
        {/*<Route path='/' render={() => {*/}
        {/*    return <Redirect to={"/register"} />*/}
        {/*}}/>*/}
      <Route path='/register' render={() => <ProfileContainer /> }/>
      <Route path='/login' render={() => <Login /> }/>
    </div>
  );
}

export default App;
