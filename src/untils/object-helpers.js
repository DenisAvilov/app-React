

export const usersFollow = (users, action, id,  newObj ) => {
   return users.map(el => {
        if (el[id] === action) { return { ...el, ...newObj }   } return el;
    } )
}    
//dialogues-reducer.js
// users: state.users.map(el => {
//     if (el.id === action.userId) {
//         return { ...el, followed: true }
//     }
//     return el;
// })