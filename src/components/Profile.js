import React, {useEffect, useState} from 'react';
import './style.css'

const Profile = () => {

    const[profile, setProfile] = useState('')

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users/1')
            .then(res => res.json())
            .then(data => setProfile(data))
    }, []);

    return (
        <div className={'profwrap'}>
            <h1>Profile</h1>
            <img width={150} src={'https://www.wilsoncenter.org/sites/default/files/media/images/person/james-person-1.jpg'}/>
            <div className={"profile"}>
                <div><span><strong>Full Name: </strong></span> <span>{profile.name}</span></div>
                <div><span><strong>User Name: </strong></span>{profile.username}</div>
                <div><span><strong>Email: </strong></span>{profile.email}</div>
                <span>This profile was taken from -> https://jsonplaceholder.typicode.com/users/1</span>
            </div>
        </div>
    );
};

export default Profile;