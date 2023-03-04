import {useEffect, useRef, useState} from 'react';
import React from 'react';
import './App.css';
import List from './components/List.tsx';
import Form from './components/Form.tsx';
import {Sub} from './components/types.d.ts';
import { SubsResponseFromApi } from './components/types';

interface Sub
{
  nick: string
  subMonths: number
  avatar: string
  description?: String
}

interface AppState{
  subs: Array<Sub>
  newSubsNumber: number
}
//valores iniciales
/* const INITIAL_STATE=
[
  {
  nick:'dapelu',
  subMonths: 3,
  avatar: 'https://i.pravatar.cc/150?u=dapelu', // Avatar : midu, dapelu 
  description: 'Dapelu hace de moderador aveces'
  },
  {
  nick:'Kize',
  subMonths: 5,
  avatar: 'https://i.pravatar.cc/150?u=sergio_serrano', // Avatar : midu, dapelu 
  description: 'Charlie hace de moderador aveces'
  }
] */

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0) 
  const divRef = useRef<HTMLDivElement>(null)

  //muestra los subs
  useEffect(() => {
    const fetchSubs = ():Promise<SubsResponseFromApi> => {
      return fetch('http://localhost:3001/subs').then(res => res.json())
    }

    const mapFromApiToSubs = (apiResponse: SubsResponseFromApi): 
    Array<Sub> => {
      return apiResponse.map(subFromApi => {
        const {
          nick,
          months: subMonths,
          profileUrl: avatar,
          description
        } = subFromApi
        
        return{
          nick,
          description,
          avatar,
          subMonths
        }
      })
    }

    fetchSubs()
    .then(mapFromApiToSubs) //devuelve el argumento para setsubs
    .then(setSubs) //devuelve la promesa 

    //con los valores iniciales
    /* setSubs(INITIAL_STATE)  */

  }, [])
  
  const handlNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
    setNewSubsNumber(n => n+1)
  } 

  return (
    <div className="App" ref={divRef}>
     <h1>Midu Subs</h1>
      <List subs={subs}/>
      New subs: {newSubsNumber}
      <Form onNewSub={handlNewSub}/>
    </div>
  );
}

export default App;
