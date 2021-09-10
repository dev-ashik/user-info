import React, { useEffect, useState } from "react";
import Profile from "../Profile/Profile";
import fakeData from "../FakeData/FakeData.json";
import Header from "../Header/Header";
import "./homePage.css";

const HomePage = () => {
  const [persons, setPersons] = useState([]);
  const [addFriend, setAddFriend] = useState([]);
  useEffect(() => {
    // const allFakeData = super(fakeData);
    // console.log(allFakeData);
    const first10Datas = fakeData.slice(0, 10);
    setPersons(first10Datas);
  }, []);

  const handleAaddFriend = (person) => {
    const newAddFriendList = [...addFriend, person];
    setAddFriend(newAddFriendList);
  };
  // console.log(addFriend);
  return (
    <div>
      <Header addFriend={addFriend} />
      <div className="homepageProfilearea">
        {
        persons.map((person, i) => (
          <Profile person={person} key={i} handleAaddFriend={handleAaddFriend} />
        ))
        }
      </div>
    </div>
  );
};

export default HomePage;
