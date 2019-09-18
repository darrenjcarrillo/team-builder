import React from "react";

const Members = props => {
  return (
    <>
      {props.members.map(member => (
        <div className="members-div" key={member.id}>
          <h2>Name: {member.name}</h2>
          <h2>Email: {member.email}</h2>
          <h2>Role: {member.role}</h2>
        </div>
      ))}
    </>
  );
};

export default Members;
