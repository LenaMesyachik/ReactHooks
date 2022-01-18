import React, {useState} from "react"
import './App.css'

type dataType = {
    name:string
}
const App = () => {
    const [name, setName] = useState('')
    const [data, setData] = useState<dataType>({} as dataType)

    return (
        <div className={'App'}>
            <input value={name} placeholder='Enter name' onChange={e => setName(e.currentTarget.value)}/>
            <input value={data.name} placeholder='Enter name' onChange={e => setData({...data,name:e.currentTarget.value})}/>
            <div><b>value:
                {name}</b></div>
            <div><b>value:
                {data.name}</b></div>
        </div>

    )
}

export default App