import { rerenderEntireTree } from "../render";

let state = {
    dialogues: {
        users: [
            { id: 0, name: 'Denis' },
            { id: 1, name: 'Julia' },
            { id: 2, name: 'Ilya' },
            { id: 3, name: 'Nikita' }
        ],
        messages: [
            { id: 0, message: 'Привет я твой новый взгляд на обычные вещи' },
            { id: 1, message: 'Ты слышал обо мне, но не доверял себе, что ты справишся' },
            { id: 2, message: 'Тот кто ищет вынужден блуждать' },
            { id: 3, message: 'Никита Денисович' }
        ]
    },
    profile: {
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
        ]
    }
}


export let addPost = (message)=>{
    debugger;
    let newObj = {
        id: 4,
        massedge: message,
        like: 90
    }

    state.profile.posts.push(newObj);
    
    rerenderEntireTree(state); 
}

export default state;

// callback функция корорая добавит в обект в масив, корорую
// передаю в UI через props и которая вызовится в callback функции 
// на стороне UI  
// let addPost =  (userName)=> {
// state.users.push(userName);
// }