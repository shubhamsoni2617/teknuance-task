import React, { Component} from 'react';
import { connect } from 'react-redux';

import { fetchPersons } from '../store/actions';
import PersonList from './PersonList';
import PersonData from '../component/PersonData';
import Modal from '../component/UI/Modal';
import AddPerson from './AddPerson'


class App extends Component{
        state={
            showForm: false
        }

    componentDidMount(){
        this.props.fetchPersons()
    }

    toggleModal=()=>{
        let showForm=this.state.showForm;
        this.setState({
            showForm:!showForm
        })
    }

    render(){
       
       return (   
           <div className="ui two column grid" >
               <div className="four wide column" >
                  <div className="ui segment">
                      <PersonList persons={this.props.persons}/>
                  </div>
               </div>
               <div className="ten wide column">
                  <div className="ui segment">
                      <PersonData /> 
                  </div>
               </div>

                <i className="large plus square icon" 
                style={{cursor:'pointer', marginTop: '20px'}}
                onClick={this.toggleModal}/>

                <Modal showForm={this.state.showForm} 
                    toggleModal={this.toggleModal}>
                    <AddPerson />
                </Modal>
           </div>
       )
    }
}


const mapStateToProps=(state)=>{
     
    return {persons: state.persons,
            singlePerson: state.singlePerson
    }
}

export default connect(mapStateToProps, { fetchPersons })(App);