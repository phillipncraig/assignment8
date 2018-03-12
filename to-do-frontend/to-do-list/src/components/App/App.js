import React, { Component } from 'react';
import logo from './hourglass.svg.png';
import '../../App.css';
import FullList from '../FullList'
import UpdateList from '../UpdateList'
import ClearList from '../ClearList'
import Filter from '../Filter'
import axios from 'axios'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toDoList: [],
      filter: 'all',
      form: {
        title: "",
        text: "",
      }
    }
    //binding is best practice to make sure changes in the DOM doesn't impact state, 
    //although I'm not fully sure what the effect is here.. nothing noticeable? Need to test more 
    this.addToDo = this.addToDo.bind(this)
    this.completeCheck = this.completeCheck.bind(this)
  }

  componentDidMount() {
    let promise = axios.get(`http://localhost:8080/`)
    promise.then((response) => {
      this.setState({
        toDoList: response.data
      })
    })
  }

  contentUpdater = (event) => {
    event.preventDefault()
    let { form } = this.state
    console.log(form)
    form[event.target.name] = event.target.value
    this.setState({
      form
    })
  }

  addNew = (title, text) => {
    this.addToDo(title, text)

    //this.state.form.title.value = ""
    //this.state.form.text.value = ""
  }

  addToDo = (title, text) => {
    console.log(this.state.form.title)
    axios.post("http://localhost:8080/add", {
      title: this.state.form.title,
      //text: this.state.form.text,
      complete: false
    })
      .then((response) => {
        this.setState({
          toDoList: {
            title: this.state.toDoList.title,
            //task: this.state.toDoList.task,
            complete: this.state.toDoList.complete
          }
        })
      })
  }

  clearList = (id) => {
    axios.get(`http://localhost:8080/clear`)
      .then((response) => {
        console.log(response)
        this.setState({
          toDoList: response.data
        })
      })

    // let inComplete = this.state.toDoList.filter(toDoList => toDoList.complete === false)
    // this.setState({
    //   toDoList: inComplete,
    // })
  }

  //filtering
  changeFilter = (filter) => {
    this.setState({
      filter: filter
    })
  }

  completeCheck = (id) => {
    axios.post(`http://localhost:8080/:id`, {
      id: this.state.toDoList[id].id,
      complete: !this.state.toDoList[id].complete
    })
      .then((response) => {
        this.setState({
          toDoList: response.data
        })
      })
  }

  render() {
    return (

      <div className="App">
        <Filter changeFilter={this.changeFilter} />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">To-Do List</h1>

        </header>

        <main className="container">
          <div className="row">

            <UpdateList addToDo={this.addToDo}
              form={this.state.form}
              contentUpdater={this.contentUpdater}
              addNew={this.addNew} />

          </div>

          <FullList toDoList={this.state.toDoList}
            filter={this.state.filter}
            completeCheck={this.completeCheck}
            changeFilter={this.changeFilter}
          />
          <div className="row">

            <ClearList clearList={this.clearList} />
          </div>
        </main>
      </div>

    );
  }
}


export default App;
