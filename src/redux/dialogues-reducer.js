export let CHANGE__DIALOGUES = (text)=> ({type : 'CHANGESTATE-DIALOGUES', text : text}); //ActionCreator
export let ADD__DIALOG = () =>({type: 'ADD-DIALOGUES'});
const CHANGESTATE_DIALOGUES = 'CHANGESTATE-DIALOGUES';
const ADD_DIALOGUES = 'ADD-DIALOGUES';
let initialState = {
    users: [
        { id: 0, name: 'Denis' },
        { id: 0, name: 'Denis' },

    ],
    messages: [
        { id: 0, message: 'Привет я твой новый взгляд на обычные вещи' },
        { id: 1, message: 'Ты слышал обо мне, но не доверял себе, что ты справишся' },
        { id: 2, message: 'Тот кто ищет вынужден блуждать' },
        { id: 3, message: 'Никита Денисович' },
        { id: 4, message: 'Никита Никита' },
    ],
    placeholder: 'Напиши что то!'

} 
const dialogues = ( state = initialState, action )=>{  
    switch(action.type ) {
        case CHANGESTATE_DIALOGUES:
        state.placeholder = action.text       
        return state
        case ADD_DIALOGUES:
            let nuwObj = {
                id: 0,
                message: state.placeholder,
            }
            state.messages.push(nuwObj)        
           state.placeholder = 'Еще сообщение?';
           return state
         default:
             return state  
    }
}

export default dialogues;