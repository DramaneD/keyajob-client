import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './AuthForm.css';

class AuthForm extends Component {
  static defaultProps = {
    heading: "Welcome back.",
    buttonText: "Log in",
    signIn: true
  }

  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    const {signIn, heading, buttonText} = this.props;
    if(signIn) {
      return (
        <div className="container">
          <div className="auth-form">
            <div className="row d-flex justify-content-center">
              <div className="col-sm-12 col-xs-12 col-md-5">
                <form>
                  <h2 className="text-center">{heading}</h2>
                  <h4 className="text-center">Login to your account</h4>
                  <div className="form-group">
                    <input type="text" className="" />
                    <label className="control-label" for="input"><i className="fa fa-envelope"></i> johndoe@mail.com</label>
                    <i className="bar"></i>
                  </div>
                  <div className="form-group">
                    <input type="text" className="" />
                    <label className="control-label" for="input"> <i className="fa fa-lock"></i>Password</label>
                    <i className="bar"></i>
                  </div>
                  <div className="button-container d-flex justify-content-center">
                    <button type="submit" className="button"><span>{buttonText}</span></button>
                  </div>
                  <div className="form-group">
                    <p className="text-center">Don't have an account? <Link to="/signup"><a>Sign Up</a></Link></p>
                    <p className="text-center"><Link to=""><a>Forgot your password?</a></Link></p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <div className="auth-form">
            <div className="row d-flex justify-content-center">
              <div className="col-sm-12 col-xs-12 col-md-5">
                <form>
                  <h2 className="text-center">{heading}</h2>
                  <h4 className="text-center">Sign up instantly</h4>
                  <div className="form-group">
                    <input type="text" className="" />
                    <label className="control-label" for="input"><i className="fa fa-envelope"></i> johndoe@mail.com</label>
                    <i className="bar"></i>
                  </div>
                  <div className="form-group">
                    <input type="text" className="" />
                    <label className="control-label" for="input"> <i className="fa fa-lock"></i>Enter your password</label>
                    <i className="bar"></i>
                  </div>
                  <div className="form-group">
                    <input type="text" className="" />
                    <label className="control-label" for="input"> <i className="fa fa-lock"></i>Renter your password</label>
                    <i className="bar"></i>
                  </div>
                  <div class="checkbox">
                    <label>
                      <input type="checkbox"/><i class="helper"></i>I wish to receive bi-monthly newsletter emails on remote work tips.           
                    </label>
                  </div>
                  <div className="button-container d-flex justify-content-center">
                    <button type="submit" className="button"><span>{buttonText}</span></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default AuthForm;