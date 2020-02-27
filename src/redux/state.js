const ADD_DIALOGUES = 'ADD-DIALOGUES';
const ADD_POST = 'ADD-POST'; 
const CHANGE_STATE = 'CHANGE-STATE';  
const CHANGESTATE_DIALOGUES = 'CHANGESTATE-DIALOGUES';
export let CHANGE__DIALOGUES = (text)=> ({type : 'CHANGESTATE-DIALOGUES', text : text}); //ActionCreator
export let ADD__DIALOG = () =>({type: 'ADD-DIALOGUES'});
export let CHANGE__STATE = (text) => ({ type: 'CHANGE-STATE', text: text })
export let ADD__POST = ()=>({ type: 'ADD-POST' })    
let store = {
    _state: {
        dialogues: {
            users: [
                { id: 0, name: 'Denis' },
                { id: 0, name: 'Denis' },

            ],
            messages: [
                { id: 0, message: 'Привет я твой новый взгляд на обычные вещи' },
                { id: 1, message: 'Ты слышал обо мне, но не доверял себе, что ты справишся' },
                { id: 2, message: 'Тот кто ищет вынужден блуждать' },
                { id: 3, message: 'Никита Денисович' },
                { id: 3, message: 'Никита Денисович' }
            ],
            placeholder: 'Напиши что то!'

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
            ],
            placeholder: 'Nova kraina'
        }
    },
    _subscribe(observer) {
        this._callSubscriber = observer
    },
    _callSubscriber() {
    },
    getState() {

        return this._state;
    },
    dispatch(action) {
        if (action.type === ADD_DIALOGUES) {
            let nuwObj = {
                id: 0,
                message: this._state.dialogues.placeholder,
            }
            this._state.dialogues.messages.push(nuwObj)
            this._callSubscriber(this._state);
            this._state.dialogues.placeholder = 'Еще сообщение?';
        } else if (action.type === ADD_POST) {
            let newObj = {
                id: 4,
                massedge: this._state.profile.placeholder,
                like: 90
            }
            this._state.profile.posts.push(newObj);
            this._callSubscriber(this._state);
            this._state.profile.placeholder = '';
        } else if (action.type === CHANGE_STATE) {
            this._state.profile.placeholder = action.text;
            this._callSubscriber(this._state);
        } else if (action.type === CHANGESTATE_DIALOGUES) {
            this._state.dialogues.placeholder = action.text
            this._callSubscriber(this._state);
        }
    },
    // changestateDialogues(e){   
    //     this._state.dialogues.placeholder = e;  
    //      this._callSubscriber(this._state); 
    // },
    // addDialogues(){    

    //         let nuwObj = {
    //             id: 0,
    //              message: this._state.dialogues.placeholder,
    //          }
    //          this._state.dialogues.messages.push(nuwObj)
    //          this._callSubscriber(this._state);
    //          this._state.dialogues.placeholder = 'Еще сообщение?'; 

    // },
    // changestate(e) {           
    //     this._state.profile.placeholder = e;  
    //     this._callSubscriber(this._state); 
    // },
    // addPost() {         
    //     let newObj = {
    //         id: 4,
    //         massedge: this._state.profile.placeholder,
    //         like: 90
    //     }
    //     this._state.profile.posts.push(newObj);    
    //     this._callSubscriber(this._state); 
    //     this._state.profile.placeholder = '';
    // }


}

window.store = store;
export default store;

// callback функция корорая добавит в обект в масив, корорую
// передаю в UI через props и которая вызовится в callback функции 
// на стороне UI  
// let addPost =  (userName)=> {
// this._state.users.push(userName);
// }