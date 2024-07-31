import {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import DashBoard from './components/DashBoard'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dash" component={DashBoard} />
        </Switch>
      </div>
    )
  }
}

export default App
