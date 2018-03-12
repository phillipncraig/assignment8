import React, { Component } from 'react';
import '../../App.css';

class UpdateList extends Component {
 

  render() {
    return (
      <div className="row">
        <div className="col-xs-3 col-md-3 col-lg-3">
        </div>
        <div className="col-xs-6 col-md-6 col-lg-6 form">

          {/* REF below is used to create an temporary form within the React DOM, so that we can reset it after posting. 
        Seems wierd, and using an input rather than a form should be workable with setState but this simply didnt. 
        Ask big J about it. */}
          <form ref={self => this.props.form.text = self}>
            <h3> Add a new task!</h3>
            <input type="text"
              className="title titleInput"
              name="title"
              placeholder="title"
              onKeyUp={this.props.contentUpdater}
            />
            <br />
            <textarea type="textbox"
              className="text formInput"
              name="text"
              placeholder="task"
              onKeyUp={this.props.contentUpdater}
            />
            <br />
            <input type="button"
              value="Submit"
              onClick={
                () => {
                  if (this.props.form.title === "" || this.props.form.text === "") {
                    alert("Whoops! You forgot to add a new task")
                    return
                  } else {
                    this.props.addNew(
                      this.props.form.title,
                      this.props.form.text,
                    )
                  }
                }
              } />
          </form>
        </div>
        <div className="col-xs-3 col-md-3 col-lg-3">
        </div>
      </div>
    )
  }
}


export default UpdateList;
