import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import Search from 'pages/Search/Search'
import Login from 'pages/Login/Login'

const Root = () => (
    <Router>
        <Switch>
            <Route path='/login' component={Login}/>
            <Route path='/' component={Search}/>
        </Switch>
    </Router>
)

export default Root