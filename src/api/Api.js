import * as  axios from "axios"

// let baseUrl = `https://social-network.samuraijs.com/api/1.0/`;

const instance = axios.create({
    withCredentials: true,
    baseURL : `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
         "api-key" : '3a40cbf7-f412-4822-87d7-a71443902536'
    }
});


// export const getUsers = (count = 1, page = 10) => { 
//     return  instance.get(  `users?count=${count}&count=${page}`).then( (response) => {
//     return response.data
//     })
      
//  }

 export const usersApi =  {
 //6281
   
   getAuthMe : () => {
        console.warn("Obsolete method. Please authApi object.");
   return   authApi.getAuthMe()   
   },
   getProfile : (user) => {
      console.warn('Obsolete method. Please profileApi object.');  
      return profileApi.getProfile(user)
     }, 
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


 export const profileApi =  { 
     upDateStatus : (status) => {
          //Не забывем о том, что сервер индифицирует нас автомотически через куки указанные в withCredentials: true
          //Поэтому передаем в запросе только объект с информацией 
         
          return instance.put( `profile/status/`, { status : status } ) 
            }, 
     getStatus : (userId) => {          
          return instance.get( `profile/status/` + userId )       }, 
     getProfile : (user) => {
          return instance.get( `profile/` + user) 
          }, 
 }
 export const authApi =  {
     //6281
       
       getAuthMe : () => {
       return   instance.get(`auth/me`, )
       },
       loginPost : (mail, password, rememberMe ) => {
                      return instance.post(  `auth/login/`,  {email : mail, password : password, rememberMe : rememberMe})
       },
       loginOut : () => {
          return instance.delete(  `auth/login/`,  { }).then(
              
          )  
}


     }