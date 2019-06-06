import React from 'react';
import { connect } from 'react-redux';
 

const PersonData=(props)=>{

let likes=[props.singlePerson.Likes].join(',  ')

let dislikes=[props.singlePerson.Dislikes].join(',  ')

// console.log(props.singlePerson.Likes)

let personDetails=null;

if(props.singlePerson.name){
    personDetails= (
      <div>
        <div className="ui segments">
        <div className="ui segment">
        <img className="ui avatar image" alt="User" src={props.singlePerson.img} />
        </div>
        <div className="ui segments">
          <div className="ui segment">
            <p>Name: {props.singlePerson.name}</p>
          </div>
          <div className="ui segment">
            <p>Description: {props.singlePerson.Description}</p>
          </div>
          <div className="ui segment">
            <p>Likes: {likes}</p>
          </div>
          <div className="ui segment">
            <p>Dislikes: {dislikes}</p>
          </div>
          <div className="ui segment">
            <p>Rating: {props.singlePerson.rating}</p>
          </div>
        </div>
        </div>
        </div>
    )
}

    return (
        <div>
            {personDetails}
        </div>
    )
}

const mapStateToProps=(state)=>{ 
    return {
        singlePerson: state.singlePerson
    }
}

export default connect(mapStateToProps)(PersonData);