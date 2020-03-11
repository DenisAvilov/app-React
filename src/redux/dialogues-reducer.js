const CHANGESTATE_DIALOGUES = 'CHANGESTATE-DIALOGUES';
export let CHANGE__DIALOGUES = (text)=> ({type : 'CHANGESTATE-DIALOGUES', text : text}); //ActionCreator
const ADD_DIALOGUES = 'ADD-DIALOGUES';
export let ADD__DIALOG = () =>({type: 'ADD-DIALOGUES'});
const  FOLLOW = 'FOLLOW';
export let _FOLLOW = (userId) => ({type : 'FOLLOW', userId});  
const  UNFOLLOW = 'UNFOLLOW';
export let UN_FOLLOW = (userId) => ({type : 'UNFOLLOW', userId});

const SET_STATE = 'SET-STATE'; 
export let  SET__STATE = (usersData)=>({ type: 'SET-STATE',  usersData})




let initialState = {
     users: [
    //     { id: 1, name: 'Denis', follow: false },
    //     { id: 2, name: 'Egor', follow: false },

   ],
     messages: [
    //     { id: 1, message: 'Привет я твой новый взгляд на обычные вещи' },
    //     { id: 2, message: 'Ты слышал обо мне, но не доверял себе, что ты справишся' },
    //     { id: 3, message: 'Тот кто ищет вынужден блуждать' },
    //     { id: 4, message: 'Никита Денисович' },
    //     { id: 5, message: 'Никита Никита' },
     ],
    photos: [],
    placeholder: 'Напиши что то!'

} 

const dialogues = ( state = initialState, action )=>{  
    switch(action.type ) {
        case CHANGESTATE_DIALOGUES:
        let newState = {...state}    
        newState.placeholder = action.text       
        return newState
        case ADD_DIALOGUES:
            let nuwObj = {
                id: 0,
                message: state.placeholder,
            }
            return{ // скопировал state, после запитой перечичлил нужные мне свойства из поверхносной копии.
                ...state,                
                // в своистве massages сделал глубокую копию масива, добавив новый обект в конец масива вместо Push()  
                messages : [ ...state.messages, nuwObj ],
                //Обнулил 
                placeholder : 'Еще сообщение?',
            };          
        case FOLLOW:            
            return{
                ...state,
                users: state.users.map( el => {
                     if(el.id === action.userId){ return{ ...el,  follow: true  } }                      
                   return el; })
                 };                
         case UNFOLLOW:             
          return{...state,
              users: state.users.map( el => 
                  { if(el.id === action.userId){
                         return{ ...el, follow: false } 
                      } 
                  return el; })
                  }; 
          case SET_STATE: 
     
          return{ ...state,
            users : action.usersData,
            messages: action.usersData,
            photos: action.usersData.photos
            // placeholder: action.usersData
            };                    
         default:
             return state  
    }
}

export default dialogues;



// case ADD_DIALOGUES:
//     let nuwObj = {
//         id: 0,
//         message: state.placeholder,
//     }
//     let copyState = {...state};           
//     copyState.messages = [...state.messages];           
//     copyState.messages.push(nuwObj);     
//     copyState.placeholder = 'Еще сообщение?';
//    return copyState

