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
export let is_login = (id, login, email) => ( { type:IS_LOGIN, id, login, email} )