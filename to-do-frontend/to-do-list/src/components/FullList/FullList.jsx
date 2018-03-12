import React, { Component } from 'react';
import '../../App.css';
import ListItem from '../ListItem'

//FullList Component that receives an array of toDoList objects
//and uses map to create a list of children listItem components
class FullList extends Component {
  render() {
    let filteredToDoList = this.props.toDoList.filter((toDo) => {
      if (this.props.filter === 'active') {
        return toDo.complete === false
      } else if (this.props.filter === 'complete') {
        return toDo.complete === true
      } else {
        return true
      }
    })
    
    //Take the array of toDoList and map each item into a listItem component
    let toDos = filteredToDoList.map((toDo, i) => {
      return (
        <ListItem toDo={toDo}
          key={i}
          id={i}
          complete={this.props.complete}
          completeCheck={this.props.completeCheck}
          clearList={this.props.clearList} />
      )
    })

    //Output the array of listItem components in cardsJSX
    return (
      <div className="row">
        <table>
        <tbody>
          <tr>
          
            <th>
              Complete
            </th>
            
          
            <th>
              Title
            </th>
            
          
            <th>
              Task
            </th>
            
          </tr>
          {toDos}
        </tbody>
        </table>
      </div>
    )
  }
}



export default FullList;
