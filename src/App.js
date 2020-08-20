import React from 'react';
import './App.css';
import {Redirect, Route} from "react-router-dom";
import ProfileContainer from "./components/Register/RegisterContainer";
import Login from "./components/Login/Login";
import Navbar from "./components/Navbar/Navbat";
import Profile from "./components/Profile/Profile";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Route path='/' render={() => {
                return <Redirect to={"/profile"} />
            }}/>
            <Route path='/profile' render={() => <Profile/>}/>
            <Route path='/register' render={() => <ProfileContainer/>}/>
            <Route path='/login' render={() => <Login/>}/>
        </div>
    );
}

export default App;
