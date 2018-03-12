import React, { Component } from 'react';
import '../../App.css';

// ClearList component will evaluate which ListItems have a complete status===true, and remove them from the ToDo list
class ClearList extends Component {
  
  render() {
    let { id } = this.props
    return (
      <button onClick={ 
        () => { 
          this.props.clearList(id) 
        }
      }> Clear Complete Tasks </button>
    )
  }
}


export default ClearList;
