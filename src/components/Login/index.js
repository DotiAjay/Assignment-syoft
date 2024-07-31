import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {IoEye} from 'react-icons/io5'
import DashBoard from '../DashBoard'

import './index.css'

class Login extends Component {
  state = {email: '', password: ''}

  getLogin = async event => {
    const {email, password} = this.state
    event.preventDefault()
    console.log('called login')
    const url = 'https://syoft.dev/Api/userlogin/api/userlogin'
    const userData = {user_email: email, user_password: password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }
    const Response = await fetch(url, options)
    console.log(Response)
    if (Response.ok === true) {
      const {history} = this.props
      localStorage.setItem('user_email', email)
      localStorage.setItem('user_password', password)
      history.replace('/dash')
    }

    this.setState({email: '', password: ''})
  }

  getEmail = event => {
    this.setState({email: event.target.value})
  }

  getPassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {email, password} = this.state

    return (
      <div>
        <form
          className="form-container"
          onSubmit={this.getLogin}
          autoComplete="on"
        >
          <div>
            <label htmlFor="email">Email address</label> <br />
            <input
              type="input"
              id="email"
              className="email-feild"
              onChange={this.getEmail}
              value={email}
              autoComplete="on"
            />{' '}
            <br />
          </div>
          <div>
            <label htmlFor="pass">PassWord</label> <br />
            <div className="password-container">
              <input
                type="Password"
                id="pass"
                className="Password-feild"
                onChange={this.getPassword}
                value={password}
                autoComplete="on"
              />
              <IoEye className="eyeSymbol" />
            </div>
          </div>

          <button className="Login-buuton" type="Submit">
            Login
          </button>
        </form>
      </div>
    )
  }
}
export default withRouter(Login)
