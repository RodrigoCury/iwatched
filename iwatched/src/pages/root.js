import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import StoreProvider from 'components/Store/Provider'
import Search from 'pages/Search/Search'
import Login from 'pages/Login/Login'
import RoutesPrivate from 'components/Routes/Private/Private'

const Root = () => (
    <Router>
        <StoreProvider>
            <Switch>
                <Route path='/login' component={Login}/>
                <RoutesPrivate path='/' component={Search}/>
            </Switch>
        </StoreProvider>
    </Router>
)

export default Root