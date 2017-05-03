import React from 'react';
import TodoItem from './TodoItem.js';

export default class TodosBeforeDivision extends React.Component {
  constructor(props){
    super();
    this.state = {
      items: props.initailItems,
      text: ''
    }
    this.ID = props.initailItems.length;
  }

  componentDidUpdate(){
    console.log('TodosBeforeDivision updated')
  }
  addTodo(e){
    e.preventDefault()

    this.setState({
      items: [{id: this.ID++, text: this.state.text}].concat(this.state.items),
      text: ''
    });
  }
  inputChange(e){
    e.preventDefault();
    this.setState({
      text: e.target.value
    })
  }
  deleteItem(id){
    this.setState({
      items: this.state.items.filter(el=>el.id!==id)
    })
  }
  render() {

    return (
      <div>
        <h1>TODO-ITEMS</h1>
        <p>
          <input value={this.state.value} onChange={this.inputChange.bind(this)}/>
          <button onClick={this.addTodo.bind(this)}>add todo</button>
        </p>
        {
          this.state.items.map(el=>{
            return (
              <TodoItem key={el.id} item={el} tags={['important', 'starred']}
                deleteItem={this.deleteItem.bind(this, el.id)}/>
            )
          })
        }
      </div>
    )
  }
}
