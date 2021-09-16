import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router';
import fakeData from '../FakeData/FakeData.json';


const ProfileDetails = () => {
    const [profile, setProfile] = useState([]);
    const {friendId} = useParams();
    // console.log(friendId);
    useEffect(()=>{
        const profile = fakeData.find(profile => profile.id === friendId);
        // console.log(profile);
        setProfile(profile);
    }, [])
    
    return (
        <div>
            <div className="profile">
      <div className="leftSide">
          <span className="imageBorder">
          <img src={profile.image} alt="img" />
          </span> 
        
        <h3>Name: {profile.name}</h3>
      </div>
      <div className="rightSide">
        <p>Email: {profile.email}</p>
        <p>Phone: {profile.phone}</p>
        <p>Salary: {profile.salary}</p>
      </div>
    </div>
        </div>
    );
};

export default ProfileDetails;