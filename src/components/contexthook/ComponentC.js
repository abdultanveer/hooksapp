import React from 'react'
import { UserContext } from '../../App'

function ComponentC() {
    return (
        <div>
        <UserContext.Consumer>
        { user => { return <h1>component C {user}</h1> }}
        </UserContext.Consumer>
            
        </div>
    )
}

export default ComponentC
