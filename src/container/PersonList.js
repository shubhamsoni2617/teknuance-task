import React, { Component } from 'react';
import { connect } from 'react-redux';
import { singlePerson, deletePerson } from '../store/actions'

class PersonList extends Component{
      state={
        deletedProfile:[]
      }

deleteProfile=(e,id)=>{
    let deletedProfile=[...this.state.deletedProfile];

    if(e.target.checked){
      deletedProfile[deletedProfile.length]=id
    }
    else if(deletedProfile.indexOf(id!==-1)){
        let key=deletedProfile.indexOf(id)
        deletedProfile.splice(key, 1)
    }

    this.setState({
    deletedProfile:deletedProfile
    })
}

deleteProfileAction=()=>{
  deletePerson(this.state.deletedProfile)
}

render(){   
   let Persons=this.props.persons.map(person=>{
                      return (
                         <div key={person.id} className="ui container">
                             <div className="ui checkbox">
                                <input type="checkbox" name="User-profile" 
                                onChange={(e)=>this.deleteProfile(e, person.id)}/>
                                <label><img className="ui avatar image"
                                        alt="User" src={person.img} />
                                </label>
                             </div>
                             <a href={person}  onClick={(event)=>{
                                 event.preventDefault()
                                 return  this.props.singlePerson(person)}}>
                                 {person.name}<br/>
                             </a> 
                         </div>
                     )
    })
    return (

        <div>
          <i className="trash alternate icon" 
             onClick={this.deleteProfileAction}
             style={{cursor:'pointer', position: 'absolute',
                  right:'0', top:'0',}}/>

          {Persons}
        </div>
    )
  }
}    



export default connect(null, { singlePerson })(PersonList);