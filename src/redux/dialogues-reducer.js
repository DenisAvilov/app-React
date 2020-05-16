import { usersApi } from "../api/Api";
import { usersFollow } from "../untils/object-helpers";


const FOLLOW = 'FIRST-APP/APP-REDUCER/FOLLOW';
const UNFOLLOW = 'FIRST-APP/APP-REDUCER/UNFOLLOW';
const SET_STATE = 'FIRST-APP/APP-REDUCER/SET-STATE';
const PAGINATI_ON = 'FIRST-APP/APP-REDUCER/PAGINATION';
const PAGINATION_NEXT = 'FIRST-APP/APP-REDUCER/PAGINATION-NEXT';
const LOADING = 'FIRST-APP/APP-REDUCER/LOADING';
const LOADING_STATE_BUTTON = 'FIRST-APP/APP-REDUCER/LOADING-STATE-BUTTON';

let initialState = {
    users: [
    ],
    totalCount: 19,
    pageSize: 5,
    currentPage: 1,
    isLoading: false,
    followButton: []
}
const dialogues = (state = initialState, action) => {
    switch (action.type) {
        case PAGINATI_ON: {
            return {
                ...state,
                currentPage: action.numberPage
            }
        }
        case FOLLOW: {
            return {
                ...state,
                users: usersFollow(state.users, action.userId, "id", { followed: true })
            }
        };
        case UNFOLLOW: {
            return {
                ...state,
                users: usersFollow(state.users, action.userId, "id", { followed: false })
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
    return async (distpach) => {
        distpach(is_Loading_Button(true, user))
        let resultCode = await usersApi.postUsers(user)
        if (resultCode == 0) { distpach(follow(user)) }
        distpach(is_Loading_Button(false, user))
    }

}
export const un_is_follow_nuw_user = (user) => {
    return async (distpach) => {
        distpach(is_Loading_Button(true, user))
        let resultCode = await usersApi.deleteUsers(user)
        if (resultCode == 0) { distpach(unfollow(user)) }
        distpach(is_Loading_Button(false, user))
    }

}
export const is_on_pagination = (pageNumber, pageSize) => {
    return async (distpach) => {
        distpach(is_Loading(true));
        distpach(pagination(pageNumber));

        let data = await usersApi.getUsers(pageNumber, pageSize)
        distpach(setUsers(data))
        distpach(is_Loading(false))

    }

}


