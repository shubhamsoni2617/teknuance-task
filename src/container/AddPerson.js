import React, { Component} from 'react';
import { addPerson } from '../store/actions'

class AddPerson extends Component{

    state={
        personForm:{
            name:'',
            Likes:'',
            Dislikes:'',
            Description:'',
            rating: '',
            img:'http://www.fillmurray.com/200/200'

        }
    }

    clickHandler=(event)=>{
        addPerson(this.state.personForm);
    }

    onChangeHandler=(event,id)=>{
        const copyForm={...this.state.personForm};  
        copyForm[id]=event.target.value;
       
        this.setState({
            personForm:copyForm
        })

    }
    render(){
        let formElementArray=[];
        for(let key in this.state.personForm){
            if(key==='img'){
                key='Image-Link'
            }
            formElementArray.push(key)
        }

   
        let formData=formElementArray.map(label=>{
             return (
                    <div className="field" key={label}>
                            <label>{label.toUpperCase()}</label>
                            <input value={label==='Image-Link'?this.state.personForm.img:this.state.personForm[label]} 
                            type="text" name={label}
                            placeholder={label.toUpperCase()}
                            onChange={event=>this.onChangeHandler(event, label)} />
                    </div>
                )
        })

        return (
            <div>
                <form onSubmit={this.clickHandler} className="ui form">
                {formData}
                <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddPerson; 