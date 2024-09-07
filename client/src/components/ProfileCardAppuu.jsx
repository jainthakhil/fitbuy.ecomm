// ProfileCard.jsx
import React from 'react';
import Img from '../assets/images/akkii4.jpg'

function ProfileCard({ profile }) {
  return (
    <div className="profile-card w-[90%] h-96 flex items-center justify-between rounded-3xl mx-auto mt-[10%] shadow-2xl relative">
      <div className="avatar-section h-full w-2/6 flex flex-col items-center justify-center rounded-full border-3 border-black/20">
        <img src={Img} alt="Avatar" className="avatar h-20 rounded-full border-4 border-black/60" />
        <p className='font-bold'>{profile.completion} <br /> completed</p>
      </div>
      <div className="profile-info w-4/6 h-full flex flex-col items-start justify-center text-left">
        <h2 className='font-black'>{profile.name}</h2>
        <p className='font-extrabold'><i className="fas fa-envelope"></i> {profile.email}</p>
        <p className='font-bold'><strong>Gender:</strong> {profile.gender}</p>
        <p className='font-bold'><i className="fas fa-phone"></i> {profile.phone}</p>
        <p className='font-extrabold'><strong>Currency code:</strong> {profile.currency}</p>
        <p className='font-bold'><strong>Date Of Birth:</strong> {profile.dob}</p>
      </div>
      <div className="edit-icon absolute top-5 right-5">
        <i className="fas fa-edit">✏️</i>
      </div>
    </div>
  );
}

export default ProfileCard;