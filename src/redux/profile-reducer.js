 const ADD_POST = 'ADD-POST'; 
 const CHANGE_STATE = 'CHANGE-STATE';  
 export let CHANGE__STATE = (text) => ({ type: 'CHANGE-STATE', text: text })
 export let ADD__POST = ()=>({ type: 'ADD-POST' }) 
let initialState = {
           avatar: [
            {
                id: 0,
                backgroundImg: "https://cdn.pixabay.com/photo/2016/11/21/15/38/beach-1846009_960_720.jpg",
                backgroundAlt: 'foto',
                name: 'Денис',
                secondName: 'Авилов',
                day: 13,
                month: 0o1,
                year: 1985,
                education: 'ХИРЭ',
                city: 'Харьков',
                site: 'avlovdenis.pp.ua',
                avatar: "https://help-odnoklassniki.ru/wp-content/uploads/2019/01/framed-portrait.png",
                avatarAlt: "фото профиля"
            }

        ],
        posts: [
            { id: 0, massedge: 'Денис привет это первое сообщение', like: '21', img: "https://www.w3schools.com/howto/img_avatar.png", alt: "user name" },
            { id: 1, massedge: 'Julia привет это первое сообщение', like: '22', img: "https://static.knigavuhe.org/poster.jpg", alt: "user name" },
            { id: 2, massedge: 'Привет', like: '32', img: "https://img.7dach.ru/image/600/03/69/46/2018/05/15/d5a8ac-nomark.jpg", alt: "user name" },
            { id: 3, massedge: 'Julia привет это сообщение', like: '32', img: "https://static.knigavuhe.org/poster.jpg", alt: "user ne" },
        ],
        placeholder: 'Nova kraina'
    }
 const profile = (state = initialState, action )=>{            
           switch(action.type){
            case CHANGE_STATE:
                state.placeholder = action.text;
                return state;
            case ADD_POST:
                let obj = {
                    id: 0,
                    massedge: state.placeholder, 
                    like: '21',
                    img: "https://static6.depositphotos.com/1000422/567/i/450/depositphotos_5675738-stock-photo-emoticon.jpg",
                    alt: "New Name"
                } 
                state.posts.push(obj);
                state.placeholder = ''
                return state;
           }
            return state;
   
   
}

 export default profile;