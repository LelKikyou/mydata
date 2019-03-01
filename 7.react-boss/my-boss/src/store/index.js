export const ADD_JGQ = "加机关枪";
export const REMOVE_JGQ = "减机关枪";
export const counter = function (state = 0, action) {
    switch (action.type) {
        case ADD_JGQ:
            return state + 1;
        case REMOVE_JGQ:
            return state - 1;
        default:
            return 100
    }
};
export const addJgq = () => {
    return {
        type: ADD_JGQ
    }
};
export const removeJgq = () => {
    return {
        type: REMOVE_JGQ
    }
};
export const asyncAdd = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(addJgq())
        }, 2000)
    }
};