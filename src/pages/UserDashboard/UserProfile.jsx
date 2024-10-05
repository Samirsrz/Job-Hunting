import React from 'react';
import ProfileCard from '../../components/UserDashboard/ProfileCard';
import UserSkill from '../../components/UserDashboard/UserSkill';
import UserEducation from '../../components/UserDashboard/UserEducation';


const UserProfile = () => {
    return (
        <div className='min-h-screen bg-[#f5f6fa] p-10'>
            <ProfileCard/>
            <UserSkill/>
            <UserEducation />
        </div>
    );
};

export default UserProfile;