import {ChangeEvent, useState} from "react";

export const useInput = (initialValue:any) => {
    const [val, setVal] = useState(initialValue)
    const reset = () => {
        setVal(initialValue)
    }
    const bind = {
        value:val,
        onChange: (e:ChangeEvent<HTMLInputElement>) => setVal(e.target.value)
    }
    return { val, reset, bind}
}