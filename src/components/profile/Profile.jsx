import React from 'react';

import d from './Profile.module.css';
import Posts from './myPosts/Posts';
import Avatar from './myPosts/avatar/avatar';



const Profile = ()=>{
    return(
      <content className={d.profile}>
        <div className={d.profileBack}>
             <img src="https://cdn.pixabay.com/photo/2016/11/21/15/38/beach-1846009_960_720.jpg"></img> 
        </div>
        <Avatar />        
        <Posts/>       
      </content>
    )
}

export default Profile;