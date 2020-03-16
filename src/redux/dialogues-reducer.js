//ActionCreator
const  FOLLOW = 'FOLLOW';
export let _FOLLOW = (userId) => ({type : 'FOLLOW', userId});  

const  UNFOLLOW = 'UNFOLLOW';
export let UN_FOLLOW = (userId) => ({type : 'UNFOLLOW', userId});

const SET_STATE = 'SET-STATE'; 
export let  SET__STATE = (usersData)=>({ type: SET_STATE,  usersData})

const PAGINATI_ON = 'PAGINATION';
export let PAGINATION = (numberPage) => ( { type: PAGINATI_ON, numberPage} )

const PAGINATION_NEXT = 'PAGINATION-NEXT';
export let PAGINATION__NEXT = (numeric) => ( {type: PAGINATION_NEXT, numeric})


let initialState = {
     users: [
        // { id: 1, name: 'Denis', followed: false, status: null, uniqueUrlNam: null,
        //    photos: { 
        //        small: null,
        //        large: null 
        //     } 
        // },
        // { id: 2, name: 'Egor', followed: true, status: null, uniqueUrlNam: null,
        //     photos: { 
        //         small: "https://cdn1.flamp.ru/cbdfd4792aaddd457030e8f03b7b7b63.png",
        //         large: null 
        //     }
        //  },
      ],
      totalCount: 19,
      pageSize :  5,
      currentPage: 1,
     
  
    
} 
const dialogues = ( state = initialState, action )=>{     
    switch(action.type ) { 
        
        case PAGINATI_ON:           
            return{
                ...state,
                currentPage: action.numberPage
            }           
        case FOLLOW:                 
            return{
                ...state,
                users: state.users.map( el => {
                     if(el.id === action.userId){
                          return{ ...el,  followed: true  } }                      
                   return el; })
                };                                        
         case UNFOLLOW:           
          return{...state,
              users: state.users.map( el => 
                  { if(el.id === action.userId){
                         return{ ...el, followed: false } 
                      } 
                  return el; })
                  }; 

         case SET_STATE:            
           return{ ...state,
             users:  action.usersData.items, 
             totalCount :  action.usersData.totalCount                      
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

