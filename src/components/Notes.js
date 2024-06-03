import React, { useContext } from 'react'
import NoteContext from '../contexts/NoteContext';
import NoteItem from './NoteItem';

export default function Notes() {
    const context = useContext(NoteContext)
    const {notes,setNotes}= context
  return (
  <div className='row my-3'>
      <h2>Your Note</h2>
    {notes.map((note)=>{
      return <NoteItem note={note}/>
    })}
  </div>
  )
}
