import { usersApi } from "../api/Api";

//ActionCreator


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_STATE = 'SET-STATE';
const PAGINATI_ON = 'PAGINATION';
const PAGINATION_NEXT = 'PAGINATION-NEXT';
const LOADING = 'LOADING';
const LOADING_STATE_BUTTON = 'LOADING-STATE-BUTTON';

let initialState = {
    users: [
    ],
    totalCount: 19,
    pageSize: 5,
    currentPage: 1,
    isLoading: false,
    followButton: [],
    fake: 1
}
const dialogues = (state = initialState, action) => {

    switch (action.type) {
        // case "FAKE": return{  ...state, fake : state.fake  + 1 }
        case PAGINATI_ON: {
            return {
                ...state,
                currentPage: action.numberPage
            }
        }
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return { ...el, followed: true }
                    }
                    return el;
                })
            }
        };
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(el => {
                    if (el.id === action.userId) {
                        return { ...el, followed: false }
                    }
                    return el;
                })
            }
        };

        case SET_STATE: {

            return {
                ...state,
                users: action.usersData.items,
                totalCount: action.usersData.totalCount
            }
        };
        case LOADING: {

            return {
                ...state,
                isLoading: action.boolean
            }
        }
        case LOADING_STATE_BUTTON: {

            return {
                ...state,
                // указываю что в стайте мне нужен масив followButton, перезаписываю в него новое значение
                // взависимости от получаемого (булевого) состояния isLoading                                    
                followButton: action.isLoading
                    // возвращаю новый массив followButton с ID пользователем
                    ? [...state.followButton, action.userId]
                    // filter возвращает новый массив followButton возвращает false
                    : state.followButton.filter(id => id != action.userId)
            }
        }
        default:
            return state
    }
}

export default dialogues;

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (usersData) => ({ type: SET_STATE, usersData })
export const pagination = (numberPage) => ({ type: PAGINATI_ON, numberPage })
export const PAGINATION__NEXT = (numeric) => ({ type: PAGINATION_NEXT, numeric })
export const is_Loading = (boolean) => ({ type: LOADING, boolean })
export const is_Loading_Button = (isLoading, userId) => ({ type: LOADING_STATE_BUTTON, isLoading, userId })


export const is_follow_nuw_user = (user) => {
    return (distpach) => {
        distpach(is_Loading_Button(true, user))

        usersApi.postUsers(user)
            .then((resultCode) => {
                if (resultCode == 0) {
                    distpach(follow(user))
                }
                distpach(is_Loading_Button(false, user))
            });
    }

}
export const un_is_follow_nuw_user = (user) => {
    return (distpach) => {
        distpach(is_Loading_Button(true, user))

        usersApi.deleteUsers(user)
            .then((resultCode) => {
                if (resultCode == 0) {
                    distpach(unfollow(user))
                }
                distpach(is_Loading_Button(false, user))
            });
    }

}
export const is_on_pagination = (pageNumber, pageSize) => {
    return (distpach) => {  
        distpach(is_Loading(true)) ;           
        distpach(pagination(pageNumber));   
         
        usersApi.getUsers(pageNumber, pageSize)       
            .then(data => {
                distpach(setUsers(data))
                distpach(is_Loading(false))
            })
            
    }

}


