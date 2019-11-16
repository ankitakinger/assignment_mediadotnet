import * as types from '../actions/actionTypes';

const initialStore = {
    emailList: [],
    searchedList: []
}

const reducer = (state=initialStore, action) => {
    switch(action.type){
        case types.ADD_EMAIL_TO_LIST: 
            return {
                ...state,
                emailList: [
                    ...state.emailList,
                    action.payload
                ]
            };

        case types.REMOVE_EMAIL_FROM_LIST:
            return {
                ...state,
                emailList: state.emailList.filter((item) => {
                    if(item.email !== action.email){
                        return item
                    }
                })
            };

        case types.UPDATE_CHECKED:
            return {
                ...state,
                emailList: state.emailList.map((item) => {
                    if(item.email === action.email){
                        return {
                            ...item,
                            checked: action.value
                        }
                    }
                    return item
                })
            };
        
        default:
            return state;
    }
}

export default reducer;

