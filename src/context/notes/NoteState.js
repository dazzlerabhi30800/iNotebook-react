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

      // Add a note
      const addNote = (title, description, tag) => {
        //TODO: API Call
        console.log("Adding a new Note!")
        const note = {
          "_id": "61b981371aacfdeb914296b25",
          "user": "61b8a47d829c181574aa94a9",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2021-12-15T05:46:31.110Z",
          "__v": 0
        };
        setNotes(notes.concat(note))
      }
      // Delete a note
      const deleteNote = (id) => {
          //TODO: API Call
          console.log("Deleting the note with id:", id);
          const newNotes = notes.filter((note)=> {return note._id!==id});
          setNotes(newNotes);
      }

      // Edit a note
      const editNote = () => {

      }
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;

