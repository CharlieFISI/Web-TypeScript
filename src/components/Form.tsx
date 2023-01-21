import React, {useState } from "react";
import {Sub} from './types.d.ts';

interface FormState{
    inputValues: Sub
}

interface FormProps{
    onNewSub: (newSub: Sub) => void
}



const Form = ({onNewSub}:FormProps) => {
    const [inputValues, setInputValues] = useState<FormState["inputValues"]
    >({
        nick: '',
        subMonths: 0,
        avatar: '',
        description: ''
    
    })

    const handleSubmit= (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onNewSub(inputValues)
        handleClear()
    }  

    const handleChange = (e:React.ChangeEvent<HTMLInputElement | 
        HTMLTextAreaElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.name]: e.target.value
        })
        
    }

    const handleClear= () => {
        setInputValues({
            nick: '',
            subMonths: 0,
            avatar: '',
            description: ''
        })
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