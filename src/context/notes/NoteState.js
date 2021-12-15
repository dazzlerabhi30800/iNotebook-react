// import react from "react";
import NoteContext from "./noteContext";
import {useState} from "react";

const NoteState = (props) => {
    const s1 = {
        "name": "Abhi",
        "Age": "21"
    }
    const [state, setState] = useState(s1);
    const update = () => {
        setTimeout(() => {
            setState({
                "name" : "Michael",
                "Age" : "25"
            })
        }, 1000);
    }

    return (
        <NoteContext.Provider value={{state:state, update:update}}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;

