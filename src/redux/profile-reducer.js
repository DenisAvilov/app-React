 const ADD_POST = 'ADD-POST'; 
 const CHANGE_STATE = 'CHANGE-STATE';  
 export let CHANGE__STATE = (text) => ({ type: 'CHANGE-STATE', text: text })
 export let ADD__POST = ()=>({ type: 'ADD-POST' }) 

 const profile = (state, action )=>{
            
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