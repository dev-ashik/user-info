import React from "react";
import "./profile.css";

const Profile = (props) => {
  const { id, name, image, salary, email, phone } = props.person;
  const handleAaddFriend = props.handleAaddFriend;
//   console.log(props);

  return (
    <div className="profile">
      <div className="leftSide">
          <span className="imageBorder">
          <img src={image} alt="img" />
          </span>
        
        <h3>Name: {name}</h3>
      </div>
      <div className="rightSide">
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <p>Salary: {salary}</p>
        <button onClick={()=>handleAaddFriend(props.person)}>Add Friend</button>
      </div>
    </div>
  );
};

export default Profile;
