import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo, listTodos, deleteTodo, updateTodo } from '../actions/index';

class ToDo extends Component {
   constructor(props){
     super(props);
     this.state = { list: [] };
   };
   componentDidMount(){
     this.getAList();
   };
   // componentDidUpdate(prevProps, prevState){
   //    console.log(this.state.list);
   // };
   handleKeyPress = (e) => {
     if( e.key === 'Enter' && e.target.value !== '' ) {
         this.props.addTodo({ 'task' : e.target.value });
         this.getAList();
         e.target.value = '';
         e.preventDefault();
     }
   };
   async getAList() {
     let results = await this.props.listTodos();
     this.setState({ list: results.payload.data });
   };
   DeleteTodo = (e) => {
      this.props.deleteTodo(e.target.id);
      this.getAList();
   };
   completeTask = (e) => {
      this.props.updateTodo(e.target.id, true);
      this.getAList();
   };
   displayList = (list) => {
      if( list.length > 0 ) {
          const todo = list.map( ( item, i ) => {
             return (
               <li key={i} className={`list-group-item ${ item.status ? 'strike-through' : '' } todo-item`}><span onClick={this.completeTask} className={`fa ${ item.status ? 'fa-check-circle' : 'fa-circle-o' } clickable`} id={item._id}></span>&nbsp;<span className={`${ item.status ? 'strike-through' : '' }`}><span></span>{item.task}</span><span className="badge my-badge"><span onClick={this.DeleteTodo} className="fa fa-trash-o trash clickable" id={item._id}></span></span></li>
             )
          });
          return todo;
      } else {
          return <p id="todos-not-found">There are no tasks at the moment.</p>
      }
   }
   render(){
      return(
         <div className="col-md-12">
            <form id="todoFrm">
              <div className="form-group">
                 <input type="text" id="todoText" onKeyPress={this.handleKeyPress} className="form-control" placeholder="What's your todo?" />
              </div>
            </form>
            <ul className="list-group">
              { this.displayList(this.state.list) }
            </ul>
         </div>
      );
   }
}

const mapStateToDispatch = (dispatch) => {
    return bindActionCreators({ addTodo, listTodos, deleteTodo, updateTodo }, dispatch);
};

export default connect(null, mapStateToDispatch)(ToDo);