import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class DashBoard extends Component {
  render() {
    return (
      <Link to="/dash" style={{textDecoration: 'none'}}>
        <div className="dash-container">
          <img
            src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg?t=st=1722429916~exp=1722433516~hmac=dda34131ee5e8b0a8d310f2dd4fdb3a3f5cab36721d1fd686e0b2f4f920c7493&w=740"
            alt="profile"
          />
          <h1>WelCome Jhon</h1>
        </div>
      </Link>
    )
  }
}

export default DashBoard
