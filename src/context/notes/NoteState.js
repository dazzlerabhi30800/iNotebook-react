// import react from "react";
import NoteContext from "./noteContext";
import {useState} from "react";

const NoteState = (props) => {
    const notesInitial = [
        {
          "_id": "161b981371aacfdeb91296b25",
          "user": "61b8a47d829c181574aa94a9",
          "title": "New Note",
          "description": "Please code everyday",
          "tag": "Coding",
          "date": "2021-12-15T05:46:31.110Z",
          "__v": 0
        },
        {
          "_id": "61b9813721aacfdeb91296b25",
          "user": "61b8a47d829c181574aa94a9",
          "title": "New Note 2",
          "description": "Please code everyday",
          "tag": "Coding",
          "date": "2021-12-15T05:46:31.110Z",
          "__v": 0
        },
        {
          "_id": "61b981371aacfde7b91296b25",
          "user": "61b8a47d829c181574aa94a9",
          "title": "New Note",
          "description": "Please code everyday",
          "tag": "Coding",
          "date": "2021-12-15T05:46:31.110Z",
          "__v": 0
        },
        {
          "_id": "61b981371aacfdeb951296b25",
          "user": "61b8a47d829c181574aa94a9",
          "title": "Anime To Watch",
          "description": "Please code everyday",
          "tag": "Coding",
          "date": "2021-12-15T05:46:31.110Z",
          "__v": 0
        },
        {
          "_id": "61b981371aacfde3b91296b25",
          "user": "61b8a47d829c181574aa94a9",
          "title": "New Note",
          "description": "Please code everyday",
          "tag": "Coding",
          "date": "2021-12-15T05:46:31.110Z",
          "__v": 0
        },
        {
          "_id": "61b981371aacfdeb914296b25",
          "user": "61b8a47d829c181574aa94a9",
          "title": "New Note",
          "description": "Please code everyday",
          "tag": "Coding",
          "date": "2021-12-15T05:46:31.110Z",
          "__v": 0
        },
      ]
      const [notes, setNotes] = useState(notesInitial)
    return (
        <NoteContext.Provider value={{notes, setNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;

