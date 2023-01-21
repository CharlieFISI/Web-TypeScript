import {useEffect, useRef, useState} from 'react';
import React from 'react';
import './App.css';
import List from './components/List.tsx';
import Form from './components/Form.tsx';
import {Sub} from './components/types.d.ts';

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

const INITIAL_STATE=
[
  {
  nick:'dapelu',
  subMonths: 3,
  avatar: 'https://i.pravatar.cc/150?u=dapelu', // Avatar : midu, dapelu 
  description: 'Dapelu hace de moderador aveces'
  },
  {
  nick:'Charlie mongol',
  subMonths: 5,
  avatar: 'https://i.pravatar.cc/150?u=sergio_serrano', // Avatar : midu, dapelu 
  description: 'Charlie hace de moderador aveces'
  }
]

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([])
  const [newSubsNumber, setNewSubsNumber] = useState<AppState["newSubsNumber"]>(0) 
  const divRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])
  
  const handlNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  } 

  return (
    <div className="App" ref={divRef}>
     <h1>Midu Subs</h1>
      <List subs={subs}/>
      <Form onNewSub={handlNewSub}/>
    </div>
  );
}

export default App;
