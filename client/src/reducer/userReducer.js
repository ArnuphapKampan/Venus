export function userReducer(state = null, action){
    switch(action.type) {
        case 'LOG_IN_USER':
            return action.payload;
        case 'LOG_OUT_USER':
            localStorage.clear();
            return action.payload;
        default:
            return state;
    }
}