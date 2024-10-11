import React from 'react';
import ProfileCard from '../../components/UserDashboard/ProfileCard';
import UserSkill from '../../components/UserDashboard/UserSkill';
import UserEducation from '../../components/UserDashboard/UserEducation';
import ResumeUploader from '../../components/UserDashboard/ResumeUploader ';


const UserProfile = () => {
    return (
        <div className='min-h-screen bg-[#f5f6fa] p-10'>
            <ProfileCard/>
            <UserSkill/>
            <UserEducation />
            <ResumeUploader/>
        </div>
    );
};

export default UserProfile;