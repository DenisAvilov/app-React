import React from  'react'
import {createSelector} from 'reselect';


const Dialogues = (store) => {
return store.dialogues 
}

export const getCurrentPage = createSelector( Dialogues, ( dialogues ) => {   
    return dialogues.currentPage
})

export const getPageSize = createSelector( Dialogues, ( dialogues ) => {   
    return dialogues.pageSize
})
 
export const getUsers = createSelector( Dialogues, ( dialogues ) => {   
    return dialogues.users
})

export const getLoading = createSelector( Dialogues, ( dialogues ) => {   
    return dialogues.isLoading
})

export const getFollowButton = createSelector( Dialogues, ( dialogues ) => {   
    return dialogues.followButton
})


