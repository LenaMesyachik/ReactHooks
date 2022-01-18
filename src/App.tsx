import React, {useEffect, useLayoutEffect, useState} from "react"
import './App.css'
import {log} from "util";

type dataType = {
    name: string
}
const App = () => {
    const [name, setName] = useState('')
    const [data, setData] = useState<dataType>({} as dataType)


    useEffect(() => {
        console.log('Name changed')
    }, [data.name])

useEffect(() => {
    const interval = setInterval(() => {
        console.log('500')}, 1000)
    return () => {clearInterval(interval)}
}, [])

useLayoutEffect(() => {
    console.log('LayoutEffect')
}, [])
    useEffect(() => {
        console.log('UseEffect')
    }, [])







    return (
        <div className={'App'}>
            <input value={name} placeholder='Enter name' onChange={e => setName(e.currentTarget.value)}/>
            <input value={data.name} placeholder='Enter name'
                   onChange={e => setData({...data, name: e.currentTarget.value})}/>
            <div>
                <div>
                    <b>value:{name}</b>
                </div>
            </div>
            <div>
                <div>
                    <b>value:{data.name}</b>
                </div>
            </div>
        </div>

    )
}

export default App