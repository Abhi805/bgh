import React from 'react'

export default function NoteItem(props) {
    const {note} =props;
  return (
    <div className='col-md-3'>
 

  <div className="card-body my-3">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description} </p>
   
  </div>
</div>
 
  )
}
