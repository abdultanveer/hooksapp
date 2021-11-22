import React,{useContext} from 'react'
import { CountContext } from '../../App'


function CompF() {
   
    const countContext = useContext(CountContext)
    return (
        <div>
        CompF - {countContext.countState}

             <button onClick = {() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick = {() => countContext.countDispatch('decrement')}>decrement</button>
            <button onClick = {() => countContext.countDispatch('reset')}>reset</button>
        </div>
    )
}

export default CompF
