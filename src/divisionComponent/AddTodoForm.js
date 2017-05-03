import React from 'react';

export default class AddTodoForm extends React.PureComponent{
  constructor(props){
    super();
    this.state = {
      text: props.text || ''
    }
  }
  addTodo = (e)=>{
    e.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState({text: ''});
  }
  inputChange = (e)=>{
    this.setState({
      text: e.target.value
    })
  }
  render(){
    return (
      <form>
        <input value={this.state.value} onChange={this.inputChange}/>
        <button onClick={this.addTodo}>add todo</button>
      </form>
    )
  }
}
