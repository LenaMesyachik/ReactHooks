import React, {useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState} from "react"
import './App.css'
import {log} from "util";

type dataType = {
    name: string,
    age : number
}
const App = () => {
    const [name, setName] = useState('')
    const [data, setData] = useState<dataType>({} as dataType)
   /* const inputRef = useRef<HTMLInputElement>(null)*/
const useDebugValue = (name ? 'hello' : 'bye')

  /*  const value = useMemo<dataType>(()=>({
        name, age
    }), [name])*/
 /*   const getName = useCallback(()=>{
        console.log(name)
    }, [name])*/
  /*  useEffect(() => {
        console.log('Name changed')
    }, [data.name])*/

   /* useEffect(() => {
        const interval = setInterval(() => {
            console.log('500')
        }, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [])*/

   /* useLayoutEffect(() => {
        console.log(inputRef.current.value)
    }, [])
    useEffect(() => {
        console.log(inputRef.current.value = 'vasya')
    }, [])*/
    return (
        <div className={'App'}>
            <input  value={name} placeholder='Enter name'/>
            {/* <input value={data.name} placeholder='Enter name'
                   onChange={e => setData({...data, name: e.currentTarget.value})}/>*/}
           {/* <div>
                <div>
                    <b>value:{name}</b>
                </div>
            </div>
            <div>
                <div>
                    <b>value:{data.name}</b>
                </div>
            </div>*/}
        </div>

    )
}

export default App