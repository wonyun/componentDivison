import React from 'react';
import TodoList from './TodoList.jsx';
import AddTodoForm from './AddTodoForm.js';
export default class TodosAfterDivision extends React.PureComponent{
  constructor(props){
    super();
    this.state = {
      items: props.initailItems
    }
    this.ID = props.initailItems.length;
  }
  static tags = ['import', 'starred'];

  addTodo = (text)=>{
    this.setState({
      items: [{id: this.ID++,text}].concat(this.state.items)
    })
  }

  deleteItem = (id)=>{
    this.setState({
      items: this.state.items.filter(el=> el.id !== id)
    });
  }
  render(){
    return (
      <div>
        <h1>DIVISION-TODO-ITEMS</h1>
        <AddTodoForm addTodo={this.addTodo}/>
        <TodoList initailItems={this.state.items}
          tags={TodosAfterDivision.tags}
          deleteItem={this.deleteItem}/>
      </div>

    )
  }
}
