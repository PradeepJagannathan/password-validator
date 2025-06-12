import React, { useState } from "react";
import './App.css';
import validator from 'validator'

const App = () => {

    const [Message, setMessage] = useState('')

    const validate = (value) => {

        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setMessage('Is Strong Password')
        } else {
            setMessage('Is Not Strong Password')
        }
    }


    return (
        <div class="App-header">
            <pre>
                <h2>Checking Password Strength in ReactJS</h2>
                <span>Enter Password: </span><input type="text"
                    onChange={(e) => validate(e.target.value)}></input> <br />
                {Message === '' ? null :
                    <span style={{
                        fontWeight: 'bold',
                        color: 'red',
                    }}>{Message}</span>}
            </pre>
        </div>
    );
}

export default App