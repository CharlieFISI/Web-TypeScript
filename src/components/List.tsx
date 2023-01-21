import React from "react"
import {Sub} from './types.d.ts';


interface Props{
    subs: Array<Sub>
}
//export default function
const List =  ({subs}: Props) => {   //row function
    const renderList = (): JSX.Element[] => { //JSX devuelve un array
        return subs.map(sub => {
            return (
              <li key={sub.nick} >
                <img src={sub.avatar} alt={'Avatar for ${sub.nick}'} />
                <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                <p>{sub.description?.substring(0,100)}</p>
              </li>
            ) 
              }
          )
    }
    return (
        <ul>
            {renderList()}
        </ul>
    )
}       
     



export default List;