import React, { useState } from 'react';

const formValues = {
    name: '',
    email: '',
    role: ''
}

export default function Form({ members, setMembersList}) {

    const [form, setForm] = useState(formValues);

    const submitForm = e => {
        e.preventDefault();
        if(form.name !== '' && form.email !== '' && form.role !== '') {
            setMembersList([...members, form]);
            setTimeout(() => {
                for(let key in form) {
                    document.getElementById(`${key}-input`).value = '';
                    setForm({...form, [key]: ''});
                }
            }, 200);
        } else {
            return null;
        }
    }

    const change = e => setForm({...form, [e.target.name]: e.target.value});

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