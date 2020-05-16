import { usersApi, profileApi } from "../api/Api";
//Action это {} у которого есть как минимум { type : 'ADD-POST' } 
//constanta for Action
const ADD_POST = 'FIRST-APP/PROFILE-REDUCER/ADD-POST';
const WATCH_STATE = 'FIRST-APP/PROFILE-REDUCER/WATCH-STATE';
const SET_STATUS = 'FIRST-APP/PROFILE-REDUCER/SET-STATUS'; 
const POST_DELETE = 'FIRST-APP/PROFILE-REDUCER/POST-DELETE'

let initialState = {
    items: [
        {
            photos: {
                small: null,
                large: null
            },

        },
    ],
    match: {
        params: {}
    },
    posts: [
        { id: 1, massedge: 'Денис привет это первое сообщение', like: '21', 
        img: "https://www.w3schools.com/howto/img_avatar.png", alt: "user name" },
        { id: 2, massedge: 'Денис привет это первый втой тест', like: '22', 
        img: "https://www.w3schools.com/howto/img_avatar.png", alt: "user name" },
    ],
    placeholder: 'Nova kraina',
    status: 'local state',
    
}
// Reducer это чистая ф которая принимает State и Action, если нужно приминяет этот Action к State и возвращает новый State 
// или возвращает неизмененый State который был до этого
const profile = (state = initialState, action) => {
    
    switch (action.type) {       
        
        //Создание нового объекта с новыми параметрамииз actiona
        case ADD_POST:
            // let text = state.placeholder;           
            return {
                ...state,
                posts: [...state.posts, // Пушим объект с права от запятой - конец масива
                {
                    id: 90, massedge: action.massedge,
                    img: "https://static6.depositphotos.com/1000422/567/i/450/depositphotos_5675738-stock-photo-emoticon.jpg",                    
                }
            ]
            };
        case WATCH_STATE: {
            return {
                ...state,
                items: action.info,
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case POST_DELETE: {            
            return {
                 ...state,
                 posts: state.posts.filter(item => { 
                     return item.id != action.postID
                }
                 ) 
             }
         }
        default: {
            return {...state}
        }
    }
}
// Action Creator - Distpath Action in  State
export let add_nuw_post = (massedge) => ({ type: ADD_POST, massedge })
export let watch_state = (info) => ({ type: WATCH_STATE, info })
export let setUserStatus = (status) => ({ type: SET_STATUS, status })
export let postDelete = (postID) =>({type: POST_DELETE, postID }) 

export default profile;
//san-creator
export const is_watch_state = (user) => {
    //sanka
    return async (distpath) => {
       let response = await  usersApi.getProfile(user)          
                distpath(watch_state(response.data))          
    }
}
export const getUserStatus = (userId) => {
    return  async (distpath) => {
      let response = await profileApi.getStatus(userId)
            distpath(setUserStatus(response.data))        
    }
}
export const upStatus = (status) => {
    return async (distpath) => {
      let response = await profileApi.upDateStatus(status)
       if (response.data.resultCode === 0) distpath(setUserStatus(status))
       
    }
} 