import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Profile = (props) => {
  const { id, name, image } = props.person;
  const handleAaddFriend = props.handleAaddFriend;
  //   console.log(props);
  let history = useHistory();
  function handleClick(friendId) {
    history.push(`/friend/${friendId}`);
  }

  return (
    <div className="profile">
      <div className="leftSide">
        <span className="imageBorder">
          <img src={image} alt="img" />
        </span>

        <h3>Name: {name}</h3>
      </div>
      <div className="rightSide">
        {/* <Link to={`/friend/${id}`}><button>Detail about this person</button></Link><br/> */}
        <button onClick={() => handleClick(id)}>
          Detail about this person
        </button>
        <br />
        <button onClick={() => handleAaddFriend(props.person)}>
          Add Friend
        </button>
      </div>
    </div>
  );
};

export default Profile;
