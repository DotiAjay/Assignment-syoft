import {Component} from 'react'
import {Link} from 'react-router-dom'
import Login from '../Login'
import Signup from '../SignUp'
import './index.css'

class Home extends Component {
  state = {islogin: false}

  move = () => {
    this.setState(preState => ({
      islogin: !preState.islogin,
    }))
  }

  render() {
    const {islogin} = this.state
    return (
      <div>
        <Link to="/" style={{textDecoration: 'none'}} className="link">
          <div className="contanier">
            <div className="bg">
              <h1 className="heading">Welcome to our community </h1>
              <p className="description">
                Fuse helps developer to build organized and well coded dashboard
                full of beautiful and rich modules, Join us and start building
                your application today
              </p>
              <div className="images-Container">
                <div>
                  <img
                    src="https://media.istockphoto.com/id/1330084984/photo/portrait-of-indian-male-teacher-outside-of-library.jpg?s=2048x2048&w=is&k=20&c=-iHuLJcWK16WWD406lOG8SZnrdHaYcv7VYEe99cDclw="
                    alt="peopl1"
                    className="profile-image"
                  />
                  <img
                    src="https://media.istockphoto.com/id/1171698091/photo/a-man-holding-his-diary.jpg?s=2048x2048&w=is&k=20&c=X62kuOmD6bng0Cl21YWkwe7jj3j-WHsPhDsrl-Uwn6A="
                    alt="peopl2"
                    className="profile-image"
                  />
                  <img
                    src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=2048x2048&w=is&k=20&c=8QovDK9XochFpaIC-N3pn5EEaRSVuE1SKpQDVUxLSUk="
                    alt="peopl3"
                    className="profile-image"
                  />
                  <img
                    src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?s=2048x2048&w=is&k=20&c=DIrQNh74utZ0e_1sqZ-M47jIqXc34ThnswFTm1dNiUI="
                    alt="peopl4"
                    className="profile-image"
                  />
                </div>
                <p className="description">
                  More than 17k people join us, its your turn
                </p>
              </div>
            </div>
            {islogin ? (
              <Login />
            ) : (
              <div>
                <h1>Sign Up</h1>
                <p>
                  Already have an account?{' '}
                  <button
                    className="signIn-button"
                    type="button"
                    onClick={this.move}
                  >
                    Sign in
                  </button>
                </p>
                <Signup />
              </div>
            )}
          </div>
        </Link>
      </div>
    )
  }
}

export default Home
