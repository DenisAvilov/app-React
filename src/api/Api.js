import * as  axios from "axios"

// let baseUrl = `https://social-network.samuraijs.com/api/1.0/`;

const instance = axios.create({
    withCredentials: true,
    baseURL : `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
         "api-key" : '1cd7ed20-2594-4b51-9fbf-9dab248db7bc'
    }
});


// export const getUsers = (count = 1, page = 10) => { 
//     return  instance.get(  `users?count=${count}&count=${page}`).then( (response) => {
//     return response.data
//     })
      
//  }

 export const usersApi =  {

    getUsers :  ( count = 1, page = 10, ) => {        
        return  instance.get(  `users?count=${page}&page=${count}`).then(
             (response) => {
                  return response.data
        })
          
     },
     deleteUsers : (userId) => { 
        return  instance.delete(  `follow/${userId}`)
         .then(
              (response) => {
                   return response.data.resultCode
         })
          
     },   
   postUsers : (userId) => { 
        return  instance.post(  `follow/${userId}`,{},)
          .then(
            (response) => {
                   return response.data.resultCode
         })
          
     }

 }


 