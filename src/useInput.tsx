import {useInput} from "./useInputHook";

export const UseInput = () => {
    const {bind, val} = useInput('')
    console.log(val)
    return <input {...bind}  placeholder = 'Enter text' />
}