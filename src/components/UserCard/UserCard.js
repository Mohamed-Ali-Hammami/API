import React from "react";

const UserCard = ({ user }) => {
  return (
    <div>
      <h2> {user.name}</h2>
    </div>
  );
};

export default UserCard;
