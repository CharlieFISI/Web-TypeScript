import React, {useReducer, useState } from "react";
import useNweSubForm from "../hooks/useNewSubForm.tsx";
import {Sub} from './types.d.ts';



interface FormProps{
    onNewSub: (newSub: Sub) => void
}




const Form = ({onNewSub}:FormProps) => {
    /* const [inputValues, setInputValues] = useState<FormState["inputValues"]
    >(INITIAL_STATE) */

    const [inputValues, dispatch] = useNweSubForm()

    const handleSubmit= (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onNewSub(inputValues)
        dispatch({type: "clear"})
    }  

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | 
        HTMLTextAreaElement>) => {
            const {name,value} = e.target

            dispatch({
                type: "change_value",
                payload: {
                    inputName: name,
                    inputValue: value
                }
            })
            
        
    }
    
    const handleClear= () => {
        dispatch({type: "clear"})
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type="text" name="nick" placeholder="nick"/>
                <input onChange={handleChange} value={inputValues.subMonths} type="text" name="subMonths" placeholder="subMonths"/>
                <input onChange={handleChange} value={inputValues.avatar} type="text" name="avatar" placeholder="avatar"/>
                <input onChange={handleChange} value={inputValues.description} type="text" name="description" placeholder="description"/>
            
                <button onClick={handleClear} type="button">Clear the form</button>
                <button type="submit">Save new sub</button>

            </form>
            
        </div>
    )
}

export default Form