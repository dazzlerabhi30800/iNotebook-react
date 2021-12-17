// import react from "react";
import NoteContext from "./noteContext";
import {useState} from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = []
      const [notes, setNotes] = useState(notesInitial)

      // Get all Notes
      const getNotes = async (title, description, tag) => {
        //TODO: API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
          method: 'GET', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiOGE0N2Q4MjljMTgxNTc0YWE5NGE5In0sImlhdCI6MTYzOTY2NzE0MH0.2Deu4Mh5m0rLKMtLZknKzF42ZRx9ony6T4w7l93-udQ"
          },  
        });
        const json = await response.json();
        console.log(json)
        setNotes(json)
      }



      // Add a note
      const addNote = async (title, description, tag) => {
        //TODO: API Call
        const response = await fetch(`${host}/api/notes/addnote`, {
          method: 'POST', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiOGE0N2Q4MjljMTgxNTc0YWE5NGE5In0sImlhdCI6MTYzOTQ5MzEyM30.OCkyS7z-9mJUVmTXYAQ0C1TcSdwW08QcHiNxxgnD6yI"
          },
          body: JSON.stringify({title, description, tag}) 
        });

        const json = await response.json();
        console.log(json);

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
      const deleteNote = async (id) => {
          //TODO: API Call
          const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            headers: {
              'Content-Type': 'application/json',
              "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiOGE0N2Q4MjljMTgxNTc0YWE5NGE5In0sImlhdCI6MTYzOTY2NzE0MH0.2Deu4Mh5m0rLKMtLZknKzF42ZRx9ony6T4w7l93-udQ"
            },
          });
          const json = response.json();
          console.log(json)
        
          console.log("Deleting the note with id:", id);
          const newNotes = notes.filter((note)=> {return note._id!==id});
          setNotes(newNotes);
      }

      // Edit a note
      const editNote = async (id, title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
          method: 'PUT', // *GET, POST, PUT, DELETE, etc.
          headers: {
            'Content-Type': 'application/json',
            "auth-token" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiOGE0N2Q4MjljMTgxNTc0YWE5NGE5In0sImlhdCI6MTYzOTY2NzE0MH0.2Deu4Mh5m0rLKMtLZknKzF42ZRx9ony6T4w7l93-udQ"
          },
          body: JSON.stringify({title, description, tag}) 
        });
        const json = await response.json(); 
        console.log(json);

        let newNotes = JSON.parse(JSON.stringify(notes));
        // Login to edit in client
        for (let index = 0; index <newNotes.length; index++) {
          const element = newNotes[index];
          if(element._id === id){
            newNotes[index].title = title;
            newNotes[index].description = description;
            newNotes[index].tag = tag;
            break;         
          }
        }
        console.log(id, newNotes);
        setNotes(newNotes);

      }
    return (
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote, getNotes}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;

