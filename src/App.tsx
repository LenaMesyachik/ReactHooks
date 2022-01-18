import React, {useReducer} from "react"
import './App.css'
import {initialState, reducer} from "./reducer";


const App = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)
    return (
        <div className={'App'}>
            {state.map(todo =>
                <button
                    key = {todo.name}
                    style={{display:"flex", alignItems: 'center'}}
                onClick={() => dispatch({type: 'COMPLETE', payload:todo.name})}>
                    <div style={{backgroundColor: todo.isCompleted ? 'green' : 'grey',
                    width:15, height:15, marginRight: 5}}></div>
                    <div> {todo.name}</div>
                </button>)}

        </div>

    )
}

export default App
