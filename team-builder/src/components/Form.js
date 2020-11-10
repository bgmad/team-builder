import React from 'react';

const formValues = {
    name: '',
    email: '',
    role: ''
}

export default function Form({ members, setMembersList}) {
    const submitForm = e => {
        e.preventDefault();
        if(formValues.name !== '' && formValues.email !== '' && formValues.role !== '') {
            setMembersList([...members, formValues]);
            setTimeout(() => {
                for(let key in formValues) {
                    document.getElementById(`${key}-input`).value = '';
                    formValues[`${key}`] = '';
                }
            }, 50);
        } else {
            return null;
        }
    }

    const change = e => formValues[`${e.target.name}`] = e.target.value;

    return (
        <div>
            <form>
                <input id='name-input' name='name' type='text' placeholder='Name' onChange={change}>
                </input>
                <input id='email-input' name='email' type='email' placeholder='Email' onChange={change}>
                </input>
                <input id='role-input' name='role' type='text' placeholder='Role' onChange={change}>
                </input>
                <button onClick={submitForm}>Submit</button>
            </form>
        </div>
    );
}