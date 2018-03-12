import React, { Component } from 'react';
import '../../App.css';

class ListItem extends Component {

  render() {
    let { toDo } = this.props

    const styles = {
      finishedTask: {
        textDecorationLine: 'line-through'
      },
      notFinishedTask: {
        textDecorationLine: 'none'
      },
    }

    let strikeTernary = toDo.complete ? styles.finishedTask : styles.notFinishedTask

    return (

      <tr>
        <td>
          <span style={{
            ...styles.checkStyle,
            ...strikeTernary
          }}>
            
          </span>
          
          <input type="checkbox"
            checked={toDo.complete}
            onChange={
              () => {
                this.props.completeCheck(this.props.id)
              }
            } />
        </td>
        <td>
          <h4 style={strikeTernary}>{toDo.title}</h4>
        </td>
        <td>
          <p style={strikeTernary}>{toDo.text}</p>
        </td>
      </tr>

      /* Display the status, and a checkbox that updates the complete event handler*/


      //</div>
    )
  }
}



export default ListItem;
