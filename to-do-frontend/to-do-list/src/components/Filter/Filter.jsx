import React, { Component } from 'react';
import '../../App.css';

class Filter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toDoList: props.toDoList,
      filter: props.filter
    }
    this.changeFilter = this.changeFilter.bind(this)
  }


  changeFilter(e) {
    this.props.changeFilter(e.target.value)
    //console.log(this.props.filter)
  }

  render() {

    return (

      <div className="container filter">

        <div className="row">
          <div className="col-3">
            <h2 className="filterh2">Task List</h2>
          </div>
          <div className="col-9">
            
              <ul>
                <li>
                  <input
                    onClick={this.changeFilter}
                    type="radio"
                    id="all"
                    name="selector"
                    value="all" 
                    checked={this.props.filter}
                    />
                  <label htmlFor="all">All</label>
                  <div className="check"></div>
                </li>

                <li>
                  <input
                    onClick={this.changeFilter}
                    type="radio"
                    id="active"
                    name="selector"
                    value="active" 
                    checked={this.props.filter}
                    
                    />
                <label htmlFor="active">Active</label>
                  <div className="check"><div className="inside"></div></div>
                </li>
             

                <li>
                  <input
                    onClick={this.changeFilter}
                    type="radio"
                    id="complete"
                    name="selector"
                    value="complete" 
                    checked={this.props.filter}
                    />
                <label htmlFor="complete">Complete</label>
                  <div className="check"><div className="inside"></div></div>
                </li>
              </ul>

            
          </div>
        </div>
      </div>

      // Selector code is much more compact versus radio button, but I wanted the radio button look.
      
      // <select onChange={this.changeFilter} ref={(value) => { this.filter = value }} id="filter">
      //   <option value="all">All</option>
      //   <option value="active" >Active</option>
      //   <option value="complete" >Complete</option >
      // </select >

    )
  }
}

export default Filter;