import React from 'react';
import './Header.css'

const Header = (props) => {
    const addFriend = props.addFriend;
    let totalSalary = 0;
    for (let i = 0; i < addFriend.length; i++) {
        const person = addFriend[i];
        // console.log(person);
        totalSalary += person.salary;
    }
    // console.log(totalSalary);
    return (
        <div className='header'>
            <h1>Added Friend: {addFriend.length}</h1>
            <h3>Total Salary: {totalSalary}</h3>
        </div>
    );
};

export default Header;