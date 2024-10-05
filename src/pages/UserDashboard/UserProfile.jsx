import React from 'react';
import ProfileCard from '../../components/UserDashboard/ProfileCard';
import UserSkill from '../../components/UserDashboard/UserSkill';


const UserProfile = () => {
    return (
        <div className='min-h-screen bg-[#f5f6fa] p-10'>
            <ProfileCard/>
            <UserSkill/>
        </div>
    );
};

export default UserProfile;