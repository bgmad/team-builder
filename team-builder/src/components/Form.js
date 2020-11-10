import React from 'react';

const formValues = {
    name: '',
    email: '',
    role: ''
}

export default function Form({ members, setMembersList}) {
    const submitForm = e => {
        e.preventDefault();
        setMembersList([...members, formValues]);

    }

    const change = e => 
        formValues[`${e.target.name}`] = e.target.value;

    return (
        <div>
            <form>
                <input name='name' type='text' onChange={change}>
                </input>
                <input name='email' type='email' onChange={change}>
                </input>
                <input name='role' type='text' onChange={change}>
                </input>
                <button onClick={submitForm}>Submit</button>
            </form>
        </div>
    );
}