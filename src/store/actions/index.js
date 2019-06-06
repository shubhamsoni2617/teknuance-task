import axios from 'axios';

export const fetchPersons=()=>async (dispatch)=>{
    const response= await axios.get('https://teknuance-f1dc8.firebaseio.com/People.json');
    let arr=[];
    for(let prop in response.data){
        arr.push({...response.data[prop], id:prop})
    }
    dispatch({
        type:'FETCH_PERSONS',
        payload: arr
    })  
}

export const singlePerson=(person)=>{
    return {
        type:'SINGLE_PERSON',
        payload: person
    }
}

export const addPerson= async personData =>await axios.post('https://teknuance-f1dc8.firebaseio.com/People.json', personData);

export const deletePerson=async deletePersonArr=>{

    if(deletePersonArr.length>0){
        for(let key in deletePersonArr){
           await axios.delete(`https://teknuance-f1dc8.firebaseio.com/People/${deletePersonArr[key]}.json`)
        }
        
    }
    //Temporary, just to avoid a lot of dependencies
    window.location.reload();
}