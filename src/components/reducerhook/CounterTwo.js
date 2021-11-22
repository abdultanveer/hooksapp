import React, { useReducer } from 'react'
//demo about state as an object as well as action as an object

const initialState = {  //currently this object has only one partition called firstCounter
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment': return {...state, firstCounter: state.firstCounter + action.value } //...state -> spread operator will give you the previous state of the object
        case 'decrement': return {...state, firstCounter: state.firstCounter - action.value}

        case 'increment2': return { ...state,secondCounter: state.secondCounter + action.value }
        case 'decrement2': return { ...state, secondCounter: state.secondCounter - action.value}

        case 'reset': return initialState
        default: return state
    }
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div> Count1 - {count.firstCounter}</div>
            <div> Count2 - {count.secondCounter}</div>

            <button
                onClick={
                    () => dispatch({ type: 'increment', value:1 })
                }> Increment</button>
            <button
                onClick={
                    () => dispatch({ type: 'decrement' , value:1})
                }> Decrement</button>

                <button
                onClick={
                    () => dispatch({ type: 'increment', value:5 })
                }> Increment 5</button>
            <button
                onClick={
                    () => dispatch({ type: 'decrement', value:5 })
                }> Decrement 5 </button>
            <button
                onClick={
                    () => dispatch({ type: 'reset' })
                }> Reset</button>

                <button
                onClick={
                    () => dispatch({ type: 'increment2', value:1 })
                }> Increment2</button>
            <button
                onClick={
                    () => dispatch({ type: 'decrement2' , value:1})
                }> Decrement2</button>

        </div>
    )
}

export default CounterTwo
