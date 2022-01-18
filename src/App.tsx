import React, {FC, useContext, useReducer} from "react"
import './App.css'
import {initialState, reducer} from "./reducer";
import {AuthContext} from "./AuthContext";


const App:FC = () => {
    const {isAuth} = useContext(AuthContext)
   /* const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)*/
    return (
        <div style={{marginTop:100}}>
            {isAuth && 'aвторизированный пользователь'}
           {/* {state.map(todo =>
                <button
                    key = {todo.name}
                    style={{display:"flex", alignItems: 'center'}}
                onClick={() => todo.isCompleted ? dispatch({type: 'UNCOMPLETED', payload:todo.name}) :
                    dispatch({type: 'COMPLETE', payload:todo.name}) }>
                    <div style={{backgroundColor: todo.isCompleted ? 'green' : 'grey',
                    width:15, height:15, marginRight: 5}}></div>
                    <div> {todo.name}</div>
                </button>)}
*/}
        </div>
)
}

export default App
