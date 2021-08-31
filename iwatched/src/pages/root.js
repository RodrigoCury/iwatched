import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import Search from 'pages/Search/Search'

const Root = () => (
    <Router>
        <Switch>
            <Route path='/' component={Search}/>
        </Switch>
    </Router>
)

export default Root