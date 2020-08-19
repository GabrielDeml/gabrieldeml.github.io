import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MainPage from "./MainPage";
import About from "./About";
import Projects from "./Projects";
import ART from "./ART";
import Code from "./Code";



const Main = () => {
    return (
        <Switch> {/* The Switch decides which component to show based on the current URL.*/}
            <Route exact path='/' component={MainPage}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/projects' component={Projects}/>
            <Route exact path='/art' component={ART}/>
            <Route exact path='/code' component={Code}/>
        </Switch>
    );
}

export default Main;