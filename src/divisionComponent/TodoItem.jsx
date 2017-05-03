import React from 'react';

export default class TodoItem extends React.PureComponent{
  deleteItem = ()=>{
    this.props.deleteItem(this.props.item.id)
  }
  render(){
    return (
      <div>
        <button style={{width: 30}} onClick={this.deleteItem}>x</button>
        <span>{this.props.item.text}</span>
        {this.props.tags.map((tag) => {
          return <span key={tag} className="tag"> {tag}</span>;
        })}
      </div>
    )
  }
}
