import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addTodo} from '../Actions/action';
import Todos from '../Components/Todo';
import {reset} from 'redux-form'
import SimpleReactValidator from 'simple-react-validator';
class AddList extends Component{
     constructor(){
         super();
         this.validator=new SimpleReactValidator();
         
     }
    state={
        todo:'',
        date:'',
        editing:false
       
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
      
    }
   /* deleteTodo=(id)=>{
       this.props.deleteTodo(id);
       console.log(id);
   }*/
    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.validator.allValid()){
            this.props.addTodo(this.state.todo,this.state.date)
        
        
        }
        else{
            this.validator.showMessages();
            this.forceUpdate();
        }
      
        //this.setState({[this.state.todo]:''})
    }
   
    render(){
        return(
             <div className="container">
                 <h1 style={{backgroundColor:'skyblue'}}>Todo Application</h1>
            <form name="toggle" onSubmit={this.handleSubmit}>
                <label>
                   Enter Task todo <input type="text" id="todo"  onChange={this.handleChange}/>
                   <span className="text-danger">
                        {this.validator.message('todo',this.state.todo,'alpha')}
                    </span>
                </label>
                <br/>
                <label>
                   Enter Task date <input type="date" id="date"  onChange={this.handleChange}/>
                </label>
                <br/>
                <button className="btn green" onClick={this.handleSubmit}>Add todo</button>
            </form>
            <Todos todos={this.props.todos} deleteTodo={this.deleteTodo}/>
            

            </div>
        )   
       
    }

}


const mapStateToProps=(state)=>{
    console.log('state',state);
   // console.log(deleteTodo)
    return{
        todos:state
    }
}
export default connect(mapStateToProps,{addTodo})(AddList);
