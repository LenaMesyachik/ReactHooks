import React, {FC, useContext} from "react"
import './App.css'
import {AuthContext} from "./AuthContext";
import {useLocalStorage} from "./useLocalStorage";
import {initialState} from "./reducer";
import {UseInput} from "./useInput";


const App:FC = () => {
    const {isAuth} = useContext(AuthContext)
    const [todos, setTodos] = useLocalStorage('todos', initialState)
   /* const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state)*/
    console.log(todos)
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
            <button onClick={() => setTodos(todos.map((t:any, i:number) => {
                if (i === 1) t.isCompleted = false
                return t }))}>Change second todo</button>
            <UseInput/>
        </div>
)
}

export default App
