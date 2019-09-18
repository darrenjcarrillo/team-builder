import React, { useState } from "react";

import FormMember from "./components/Form";
import Members from "./components/MembersList";

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "doejohn@gmail.com",
      role: "Space Cowboy"
    }
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };

  // const addNewMember = newMember => {
  //   newMember.id = members.length + 1;
  //   setMembers([...members, newMember]);
  // };

  return (
    <div className="App">
      <h1>Team Builder</h1>

      <div>
        <h3>Members</h3>
      </div>

      <div>
        <h2>Add Members</h2>
        <FormMember addNewMember={addNewMember} />
        <Members members={members} />
      </div>
    </div>
  );
}

export default App;
