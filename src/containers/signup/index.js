import React, { Component } from 'react';
import DataTable from '../../components/data-table';
import Lodash from 'lodash';
import Axios from 'axios';


const requiredFields = {
  company: true,
  type: true,
  position: true,
  location: true,
  Category: true,
  description: true,
  instruction: true,
  email: true,
}

class ForgotPassword extends Component {

  state = {
    form: {}
  }


  register = () => {
    Axios.post('http://localhost:3000/SignUp', this.state.form).then((objResponse) => {
      if (objResponse.data.code === 11000) {
        return alert('Already Registered!');
      }

      localStorage.setItem('user', JSON.stringify(objResponse.data));
      this.props.history.push('/home');
    }).catch((objError) => {
      // alert(objError.response.data.message);
      console.log(objError.response);
    });
  }


  handleChange = path => event => {
    const objForm = { ...this.state.form, [path]: event.target.value };
    this.setState({ form: objForm });
  };


  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="column">
          <h2 className="ui image header">
            <div className="content">
              Create Your Account
            </div>
          </h2>
          <form action="#" method="get" className="ui large form">
            <div className="ui stacked secondary  segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input value={ this.state.form.email } onChange={ this.handleChange('email') } type="text" name="email" placeholder="E-mail address" />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input value={ this.state.form.password } onChange={ this.handleChange('password') } type="password" name="password" placeholder="Password" />
                </div>
              </div>
              <div onClick={ this.register } className="ui fluid large teal submit button">Register</div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
