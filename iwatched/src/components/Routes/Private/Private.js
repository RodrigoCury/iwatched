import React, {useContext} from "react"
import { Route, Redirect} from "react-router-dom"
import StoreContext from "components/Store/Context"

// eslint-disable-next-line react/prop-types
const RoutesPrivate = ({component: Component, ...restProps}) => {

    const {token} = useContext(StoreContext)

    return (
        <Route 
            {...restProps}
            render={() => token && token.token
                ? <Component {...restProps} />
                : <Redirect to='/login' />
            }
        />
    )
}

export default RoutesPrivate