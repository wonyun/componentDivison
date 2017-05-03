import React from 'react';

export default class TodoItem extends React.PureComponent{
  componentDidUpdate(){
    console.log('did update')
  }
  render(){
    return (
      <div>
        <button style={{width: 30}} onClick={this.props.deleteItem}>x</button>
        <span>{this.props.item.text}</span>
        {this.props.tags.map((tag) => {
          return <span key={tag} className="tag"> {tag}</span>;
        })}
      </div>
    )
  }
}
