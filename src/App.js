import React from 'react';
import TodosBeforeDivision from './initComponent/TodosBeforeDivision.jsx';
import TodosAfterDivision from './divisionComponent/TodosAfterDivision.jsx';
import './App.css';


export default class App extends React.Component{

  state= {
      value: "0"
    }


  changeValue(e){
    this.setState({
      value: e.target.value
    })
  }
  render(){
    return (
      <div>
        <p>
          <input type="radio" name="division" value="0" defaultChecked onChange={this.changeValue.bind(this)}/>拆分前
          <input type="radio" name="division" value="1" onChange={this.changeValue.bind(this)}/>拆分后
        </p>
        {
          this.state.value == 0 ?
            <TodosBeforeDivision initailItems={this.props.initailItems}/> :
              <TodosAfterDivision initailItems={this.props.initailItems}/>
        }

      </div>
    )
  }
};
