import React from 'react';
import d from './Profile.module.css';
import Posts from './myPosts/Posts';
import Avatar from './myPosts/avatar/avatar';

const Profile = (props) => {
  
  const imgBack = props.state.profile.avatar.map(img => <img src={img.backgroundImg} alt={img.backgroundAlt}></img>);
  const avatar = props.state.profile.avatar.map(ava => <Avatar name={ava.name} secondName={ava.secondName} day={ava.day} month={ava.month}
    year={ava.year} city={ava.city} education={ava.education} site={ava.site} avatar={ava.avatar} alt={ava.avatarAlt} />);

  return (
    <content className={d.profile}>

      <div className={d.profileBack}>
        {imgBack}
      </div>
      {avatar}

      <Posts store={props.profile} posts={props.state.profile} newPostText={props.state.profile.inputState} dispatch={props.dispatch} />
    </content>
  )
}

export default Profile;