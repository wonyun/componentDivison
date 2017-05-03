import React from 'react';
import TodoItem from './TodoItem.jsx';

export default class TodoList extends React.PureComponent{
  render(){
    return (
      <div>
        {this.props.initailItems.map(el=>{
          return <TodoItem key={el.id} item={el} tags={this.props.tags} deleteItem={this.props.deleteItem}/>
        })}
      </div>
    )
  }
}
