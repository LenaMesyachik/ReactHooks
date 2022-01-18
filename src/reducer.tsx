import React from "react"
import './App.css'

    type initialStateType = stateType[]
    type stateType = {
        name: string,
        isCompleted: boolean
    }
  export  const initialState = [
        {
            name: 'by book',
            isCompleted: false
        },
        {
            name: 'shopping',
            isCompleted: false
        },
    ]
   export const reducer = (state: initialStateType, action: any) => {
        switch (action.type) {
            case 'COMPLETE':
                return state.map(i => {
                    if (i.name === action.payload)
                        i.isCompleted = true
                    return i
                })
            case 'UNCOMPLETED':
                return state.map(i => {
                    if (i.name === action.payload)
                        i.isCompleted = false
                    return i
                })
            default:
                return state
        }
    }

