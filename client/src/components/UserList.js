import React from "react";

const UserList = props => {
  console.log("UserList props: ", props);

  return (
    <div>
      <div className="headerWrapper">
        <h1>User List</h1>
        <hr />
      </div>
      <div>
        {props.users.map(user => {
          console.log("user: ", user);
          return <p key={Date.now() * 55}>{user.name}</p>;
        })}
      </div>
    </div>
  );
};

export default UserList;
