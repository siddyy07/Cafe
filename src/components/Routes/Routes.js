import React from 'react'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import LandingPage from '../Landingpage/LandingPage'

const Routes = () => {

    const deployRoutes =() => {
        return(
            <Router>
                <Switch>
                    <Route path = "/" exact component ={LandingPage}/>
                </Switch>
            </Router>
        )
    }
    return (
        <>
          {deployRoutes()}  
        </>
    )
}

export default Routes
