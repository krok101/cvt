import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import Modal from '../components/modal'
import Channels from './channels'
import Movies from './movies'
import localCache from '../utils/localCache'
import { setUserName, setAuth } from '../store/actioncCreators'

class App extends Component{
  constructor(){
    super()
  }

  componentDidMount(){
    this.getDataFromLocalStorage();
  }
  
  getDataFromLocalStorage(){
    let userName = localCache.userName
    if(userName){
      this.props.setUserName(userName)
      this.props.setAuth(true)
    }
  }

  render(){
    return(
      <Router>
        <Modal/>
        <Switch>
          <Route path="/" exact component={Movies} />
          <Route path="/channels" exact component={Channels} />
        </Switch>
      </Router>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUserName: (data) => dispatch(setUserName(data)),
    setAuth: (data) => dispatch(setAuth(data))
  }
}

export default connect(null, mapDispatchToProps)(App)