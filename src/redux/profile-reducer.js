import { usersApi } from "../api/Api";

 const ADD_POST = 'ADD-POST'; 
 const CHANGE_STATE = 'CHANGE-STATE'; 
 const WATCH_STATE = 'WATCH-STATE';

let initialState = {       
        items: [
             {            
             photos: {
               small : null,
              large : null
             },
            
             },
        ],
        match: {
            params: {}
        },
        posts: [
            { id: 1, massedge: 'Денис привет это первое сообщение', like: '21', img: "https://www.w3schools.com/howto/img_avatar.png", alt: "user name" },
            { id: 2, massedge: 'Julia привет это первое сообщение', like: '22', img: "https://static.knigavuhe.org/poster.jpg", alt: "user name" },
            { id: 3, massedge: 'Привет', like: '32', img: "https://img.7dach.ru/image/600/03/69/46/2018/05/15/d5a8ac-nomark.jpg", alt: "user name" },
            { id: 4, massedge: 'Julia привет это сообщение', like: '32', img: "https://static.knigavuhe.org/poster.jpg", alt: "user ne" },
        ],
        placeholder: 'Nova kraina'
    }
    
 const profile = (state = initialState, action )=>{ 
       
           switch(action.type){
            case CHANGE_STATE: 
               return { ...state,
                    placeholder : action.text
                }; //Создание нового объекта с новыми параметрамииз actiona
            case ADD_POST:              
                let text = state.placeholder;           
                return { ...state, 
                 posts: [ ...state.posts, // Пушим объект с права от запятой - конец масива
                     { id: 90, massedge: text,                     
                        img: "https://static6.depositphotos.com/1000422/567/i/450/depositphotos_5675738-stock-photo-emoticon.jpg",
                    } ],
                 placeholder : "Напиши еще новость"
                }; 
            case WATCH_STATE:{
            
                return{ ...state,
                    items :  action.info,

                }
            }                  
           }
            return state;
   
   
}

export let textarea_change_state  = (text) => ({ type: CHANGE_STATE, text: text })
export let add_nuw_post = ()=>({ type: ADD_POST }) 
export let watch_state = (info) => ({type: WATCH_STATE, info})
 export default profile;

export const is_watch_state = (user) => {

    return (distpath) => {  
        usersApi.getProfile(user)     
       .then( (response) => {    
           distpath(watch_state(response.data)) 
        } )
    }
} 
