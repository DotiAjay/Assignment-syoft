import {Component} from 'react'
import {IoEye} from 'react-icons/io5'
import './index.css'

class Signup extends Component {
  state = {mail: '', pass: '', name: '', company: ''}

  getSignUp = async event => {
    const {mail, pass, name} = this.state
    console.log('sign')
    event.preventDefault()
    const url =
      'https://syoft.dev/Api/user_registeration/api/user_registeration'
    const userData = {
      user_firstname: name,
      user_email: mail,
      user_password: pass,
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userData),
    }
    const Response = await fetch(url, options)

    if (Response.ok === true) {
      localStorage.setItem('user_name', name)
      localStorage.setItem('user_email', mail)
      localStorage.setItem('user_password', pass)
    }
    this.setState({mail: '', pass: ''})
  }

  Email = event => {
    this.setState({mail: event.target.value})
  }

  getPass = event => {
    this.setState({pass: event.target.value})
  }

  getName = event => {
    this.setState({name: event.target.value})
  }

  getComapany = event => {
    this.setState({company: event.target.value})
  }

  render() {
    const {mail, pass, name, company} = this.state

    return (
      <div>
        <form className="form-container" onSubmit={this.getSignUp}>
          <div>
            <label htmlFor="name">Full Name*</label>
            <br />
            <input
              type="text"
              id="name"
              className="email-feild"
              onChange={this.getName}
              value={name}
              name="full name"
              autoComplete="on"
            />{' '}
            <br />
            <label htmlFor="emailSign">Email address*</label> <br />
            <input
              type="input"
              id="emailSign"
              className="email-feild"
              onChange={this.Email}
              value={mail}
              name="email"
              autoComplete="on"
            />{' '}
            <br />
          </div>
          <div>
            <label htmlFor="passSign">PassWord*</label> <br />
            <div className="password-container">
              <input
                type="Password"
                id="passSign"
                className="Password-feild"
                onChange={this.getPass}
                value={pass}
                autoComplete="on"
              />
              <IoEye className="eyeSymbol" />
            </div>
            <label htmlFor="company">Company</label>
            <br />
            <input
              type="text"
              id="company"
              className="email-feild"
              onChange={this.getComapany}
              value={company}
              autoComplete="on"
            />
          </div>

          <button className="SignUp-button" type="submit">
            Create Your free account
          </button>
        </form>
      </div>
    )
  }
}
export default Signup
