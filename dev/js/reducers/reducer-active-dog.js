
export default function(state=null, action){
    switch(action.type) {
        case "DOG_SELECTED":
            return action.payload;
        default:
            break;
    }
    return state;
}