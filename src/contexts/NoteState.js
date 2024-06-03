import { useState } from "react";
import NoteContext from "./NoteContext";


const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "665757a8aa67455d63dd8833",
          "user": "6655572d6ef26b0b25904071",
          "title": "my notebook",
          "description": "my book store",
          "tag": "General",
          "date": "2024-05-29T16:28:24.998Z",
          "__v": 0
        },
        {
          "_id": "665757b3aa67455d63dd8835",
          "user": "6655572d6ef26b0b25904071",
          "title": "my notebook",
          "description": "my book store",
          "tag": "personal",
          "date": "2024-05-29T16:28:35.752Z",
          "__v": 0
        },
        {
          "_id": "665757b5aa67455d63dd8837",
          "user": "6655572d6ef26b0b25904071",
          "title": "mynotebook",
          "description": "my book store",
          "tag": "personal",
          "date": "2024-05-29T16:28:37.547Z",
          "__v": 0
        },
        {
          "_id": "665757a8aa67455d63dd8833",
          "user": "6655572d6ef26b0b25904071",
          "title": "my notebook",
          "description": "my book store",
          "tag": "General",
          "date": "2024-05-29T16:28:24.998Z",
          "__v": 0
        },
        {
          "_id": "665757b3aa67455d63dd8835",
          "user": "6655572d6ef26b0b25904071",
          "title": "my notebook",
          "description": "my book store",
          "tag": "personal",
          "date": "2024-05-29T16:28:35.752Z",
          "__v": 0
        },
        {
          "_id": "665757b5aa67455d63dd8837",
          "user": "6655572d6ef26b0b25904071",
          "title": "mynotebook",
          "description": "my book store",
          "tag": "personal",
          "date": "2024-05-29T16:28:37.547Z",
          "__v": 0
        },
 
      ]

      const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={ {notes,setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;