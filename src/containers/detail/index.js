import React, { Component } from 'react';
import DataTable from '../../components/data-table';
import Lodash from 'lodash';


const objImageStyle = {
  objectFit: 'cover',
  width: '175px',
  height: '175px',
  background: 'black'
}

class ForgotPassword extends Component {

  state = {
    data: {}
  }

  constructor(props) {
    super(props);

    this.state = {
      data: props.history.location.state
    };
  }


  handleChange = path => event => {
    this.setState({
      [path]: event.target.value
    })
  };

  render() {
    return (
      <React.Fragment>
        <div style={{ height: 20, marginTop: 50 }}>
          <div style={{ float: 'left' }}>
            <div className="ui icon input">
              <input
                type="text"
                placeholder="Search..."
                value={this.state.search}
                onChange={this.handleChange('search')}
              />
              <i className="circular search link icon"></i>
            </div>
            <button  onClick={ () => { this.setState({ value: this.state.search }) } } className="ui primary button">
              Search
            </button>
          </div>

          <div style={{ float: 'right' }}>
            <a href="./jobform" className="ui green button">
              <i className="bullhorn icon"></i>
              Post a Job
            </a>
          </div>
        </div>

        <div>
          <img src={this.state.data.picture} style={objImageStyle} alt="Smiley face" height="175" width="175" align="right" />
          <h3 style={{ marginTop: "5%" }}>
            { this.state.data.company }
          </h3>
          <p>{ this.state.data.location }</p>
          <div class="ui divider" style={{ marginRight: '16% '}}></div>
            <p>{ this.state.data.position } - { this.state.data.type }</p>
          <div class="ui divider" style={{ marginRight: '16% '}}></div>
          <p>{ this.state.data.description }</p>
          <p style={{ marginTop: '8% '}}>How to Apply?</p>
          <p>Send your resume to { this.state.data.email }</p>
        </div>
      </React.Fragment>
    );
  }
}

export default ForgotPassword;
