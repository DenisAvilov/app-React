import React from 'react';
import profile, { add_nuw_post, postDelete, watch_state } from './profile-reducer';

let state = {   
    posts: [
        { id: 1, massedge: 'Денис привет это первое сообщение', like: '21', 
        img: "https://www.w3schools.com/howto/img_avatar.png", alt: "user name" },
        { id: 2, massedge: 'Денис привет это первое сообщение', like: '22', 
        img: "https://www.w3schools.com/howto/img_avatar.png", alt: "user name" },
    ]   
} 

//   test('Post add complite', () => {
// //  // test data 
//     let action = add_nuw_post("Novu post") 
// //    // action
//      let newProfile = profile(state, action)   
//    // exspactation  
//      expect(newProfile.posts.length).toBe(2)  

//   });


 test('Post was delete complite', () => {
    // test data   
      let action = postDelete(2) 
      // action
   let delProfilePost = profile(state, action)
     // exspactation  
       expect(delProfilePost.posts.length).toBe(0)

    });
    test('Post not was delete', () => {
        // test data   
          let action = postDelete(22222) 
          // action
       let delProfilePost = profile(state, action)
         // exspactation  
           expect(delProfilePost.posts.length).toBe(2)
    
        });


  


        