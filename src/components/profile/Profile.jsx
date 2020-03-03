import React from 'react';
import d from './Profile.module.css';
import Avatar from './myPosts/avatar/avatar';
import PostsContainer from './myPosts/PostsContainer';

const Profile = (props) => {

  const imgBack = props.store.avatar.map(img => <img src={img.backgroundImg} alt={img.backgroundAlt}></img>);
  const avatar = props.store.avatar.map(ava => <Avatar name={ava.name} secondName={ava.secondName} day={ava.day} month={ava.month}
    year={ava.year} city={ava.city} education={ava.education} site={ava.site} avatar={ava.avatar} alt={ava.avatarAlt} />);

  return (
    <content className={d.profile}>
      <div className={d.profileBack}>
          {imgBack}  
      </div>
       {avatar}  

      <PostsContainer />
    </content>
  )
}

export default Profile;