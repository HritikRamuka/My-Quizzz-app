import React,{useRef} from 'react'

const Start = ({username,setUsername}) => {

    const inputRef = useRef()
    const handleChange = ()=>{
        inputRef.current.value && setUsername(inputRef.current.value)
    }
    return (
        <div className="start">
            
            <input className="input" type="text" placeholder="enter your name" ref={inputRef}/>
            <button className="btn" onClick={handleChange}>Start</button>
    
        </div>
    )
}

export default Start