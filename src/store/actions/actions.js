import * as types from './actionTypes';

export const addEmailToList = (email) => {
    return {
        type: types.ADD_EMAIL_TO_LIST,
        payload: {
        	email: email,
        	checked: false
        }
    }
}

export const removeEmailFromList = (email) => {
    return {
        type: types.REMOVE_EMAIL_FROM_LIST,
        email
    }
}

export const updateChecked = (email, value) => {
	return {
		type: types.UPDATE_CHECKED,
		email,
		value
	}
}