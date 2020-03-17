//ActionCreator
const  FOLLOW = 'FOLLOW'; 
const  UNFOLLOW = 'UNFOLLOW';
const SET_STATE = 'SET-STATE';
const PAGINATI_ON = 'PAGINATION';
const PAGINATION_NEXT = 'PAGINATION-NEXT';
const LOADING = 'LOADING';



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
      isLoading: true
  
    
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
         case LOADING:
            
             return{...state,
            isLoading: action.boolean
            }
         default:
             return state  
    }
}

export default dialogues;



export let follow = (userId) => ({type : 'FOLLOW', userId}); 
export let unfollow = (userId) => ({type : 'UNFOLLOW', userId});
export let setUsers = (usersData)=>({ type: SET_STATE,  usersData})
export let pagination = (numberPage) => ( { type: PAGINATI_ON, numberPage} )
export let PAGINATION__NEXT = (numeric) => ( {type: PAGINATION_NEXT, numeric})
export let is_Loading = (boolean) => ({ type: LOADING , boolean})

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

