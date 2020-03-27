import React from 'react';
import d from './Profile.module.css';
import Avatar from './myPosts/avatar/avatar';
import PostsContainer from './myPosts/PostsContainer';

const Profile = (props) => {
  
let mySite = !props.items.contacts? 'НЕТ САЙТА' : props.items.contacts;

  return (
    <content className={d.profile}>
      <div className={d.profileBack}>
    { (!props.items.photos || props.items.photos.large === null) ? <img  src="https://media.wired.com/photos/5d7c1e598f1eae000821c74f/master/w_2560%2Cc_limit/Gear_Fitbit_Versa_2_3QTR_Core_Petal_Copper_Rose_Clock_Default_Shadow.jpg"></img> : <img  src={props.items.photos.large} title='Large'></img> }
    
      </div>
      <Avatar key={props.items.id} name={props.items.fullName}
       lookingForAJob={props.items.lookingForAJob}
       lookingForAJobDescription={props.items.lookingForAJobDescription}
       img={props.items.photos}
       mySite={mySite}
       />
       
      <PostsContainer />
    </content>
  )
}

export default Profile;