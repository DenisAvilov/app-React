import { login_success } from "./login";


const  INITIALIZE_APP = 'INITIALIZE_APP';  

let initializeApp = {   
  initializeApp: false    
} 

const initialize = ( state = initializeApp, action)=>{     
  switch(action.type){
      case INITIALIZE_APP:{              
          return{
              ...state,              
              initializeApp: true
          }
      }     
      default:{
          return {...state}
      }
  }         
    }

export default initialize;
export const initializeSuccess = () => ( { type:INITIALIZE_APP } )



export const is_initialize = ( ) => (distpath) => {   
      //получам Promise который нам вернул диспатч о регистрации пользоваиеля, внесим его в очередь загрузки
  let promis = distpath(login_success()); 
 
  //let promisNext = distpath(someThinElse())
  //let promisNextNext = distpath(someThinElse())
  //если нужно использовать только один Promise
  // promis.then( () =>    distpath(initializeSuccess())  )
  //Если нужно  использовать несколько промисов то ставим их в очередь с помощью масива

  Promise.all( [promis]).then( () =>
    distpath(initializeSuccess())
    ) 
  
 


} 

// authApi.getAuthMe().then(
//   response => {
//     distpath(is_login(response.data.data.id, response.data.data.login, response.data.data.email, true))
//   }
// )


 