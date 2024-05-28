import React, {useState} from "react";

const Greeting=()=>{

    const [name, setName]=useState('');

    const handleChange=(event)=>{
        setName(event.target.value);
    }

    return(
        <div>
             <label htmlFor="nameInput">Enter your name:</label>
            <input
                id="nameInput"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={handleChange}
            />
            <p>{name ? `Hello ${name}!` : ''}</p>
        </div>
    );
}

export default Greeting;