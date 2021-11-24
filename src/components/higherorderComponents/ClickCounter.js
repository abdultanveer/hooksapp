import React, { Component } from 'react'
import UpdatedComponent from './withCounter'

//demo - life b4 higher order components came into picture
 class ClickCounter extends Component {
    
     
    render() {
       const {countKey, incrementCount} = this.props
        return (
            <div>
               
                <button onClick = {incrementCount}>clicked {countKey} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)
