export default (state=[], action)=>{
    switch(action.type){
        case 'FETCH_PERSONS':
             return action.payload

        default:
             return state
    }
}