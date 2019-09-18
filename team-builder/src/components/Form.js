import React, { useState } from "react";

function FormMember(props) {
  console.log(props);
  const [teamMember, setTeamMember] = useState({
    name: " ",
    email: " ",
    role: " "
  });

  // Handle Changes
  const handleChanges = e => {
    setTeamMember({ ...teamMember, [e.target.name]: e.target.value });
    console.log(teamMember);
  };

  // Prevent Default
  const submitForm = e => {
    e.preventDefault();
    // will update state?
    props.addNewMember(teamMember);
    // Clears out the input values after clicking submit button
    setTeamMember({ name: " ", email: " ", role: " " });
    console.log("Will console log inputed team member", teamMember);
  };

  // Return Form
  return (
    <form onSubmit={submitForm}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={handleChanges}
          value={teamMember.name}
        />
      </label>
      <label>
        Email:
        <input
          type="text"
          name="email"
          onChange={handleChanges}
          value={teamMember.email}
        />
      </label>
      <label>
        Role:
        <input
          type="text"
          name="role"
          onChange={handleChanges}
          value={teamMember.role}
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormMember;
