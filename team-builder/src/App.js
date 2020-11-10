import React, { useState } from 'react';
import Form from './components/Form';

const renderMembers = (membersList) => {
  return membersList.map(member => {
    return (
      <div>
        <h3>{member.name}</h3>
        <p>{member.email}</p>
        <p>{member.role}</p>
      </div>
    )
  })
}

function App() {

  const [membersList, setMembersList] = useState([]);

  return (
    <div>
      <Form members={membersList} setMembersList={setMembersList}>
      </Form>
      {renderMembers(membersList)}
    </div>
  );
}

export default App;
