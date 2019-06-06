export default (state=[], action)=>{
    switch(action.type){
        case 'SINGLE_PERSON':
             return action.payload

        default:
             return state
    }
}