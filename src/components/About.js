import React, {useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext'


const About = () => {
    const a = useContext(noteContext)
    useEffect(() => {
        a.update();
        // eslint-disable-next-line
    }, [])
    return (
        <div>
            This is About {a.state.name} and he is {a.state.Age} years old.
        </div>
    )
}

export default About
