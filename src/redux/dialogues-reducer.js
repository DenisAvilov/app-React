export let CHANGE__DIALOGUES = (text)=> ({type : 'CHANGESTATE-DIALOGUES', text : text}); //ActionCreator
export let ADD__DIALOG = () =>({type: 'ADD-DIALOGUES'});
const CHANGESTATE_DIALOGUES = 'CHANGESTATE-DIALOGUES';
const ADD_DIALOGUES = 'ADD-DIALOGUES';

const dialogues = (state ,action )=>{  
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