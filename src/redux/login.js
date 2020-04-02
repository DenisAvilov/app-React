import { usersApi } from "../api/Api";

const  IS_LOGIN = 'IS-LOGIN'; 

let initialState = {   
  id: null,
  login: null,
  email: null,
  isYou: false
    
} 

const login = ( state = initialState, action )=>{     
  switch(action.type){
      case IS_LOGIN:{
       
          return{
              ...state,
              id: action.id,
              login: action.login,
              email: action.email,
              isYou: true
          }
      }
      default:{
          return {...state}
      }
  }         
    }

export default login;
export const is_login = (id, login, email) => ( { type:IS_LOGIN, id, login, email} )
  
export const login_success = () => {
    return (distpath) => {       
       usersApi.getAuthMe().then( (response) => {
        if(response.data.resultCode === 0){           
            distpath( is_login(response.data.data.id, 
               response.data.data.login, response.data.data.email))
        } 
        } 
       )
    }
}     


 