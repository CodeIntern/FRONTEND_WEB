import React, { Component } from 'react';
import DataTable from '../../components/data-table';
import Axios from 'axios';

class ForgotPassword extends Component {

  state = {
    categories: [],
    search: null,
    value: null
  }

  handleChange = path => event => {
    this.setState({
      [path]: event.target.value
    })
  };


  componentDidMount() {
    this.fetchData();
  }


  fetchData = () => {
    Axios.get('http://localhost:3000/getCategory').then((objResponse) => {
      this.setState({ categories: objResponse.data });
    });
  }


  renderCategories = () => {
    return this.state.categories.map((objCategory) => {
      return (
        <DataTable history={this.props.history} category={ objCategory._name } search={ this.state.value } limit={ 10 } hasShowMore={ true } />
      );
    });
  }

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
        { this.renderCategories() }
        
      </React.Fragment>
    );
    return (
      <div>
        <div style="height: 20; margin-top: 50">
          <div style="float: left">
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i className="circular search link icon"></i>
            </div>
            <button className="ui primary button">
              Search
            </button>
          </div>

          <div style="float: right">
            <a href="./jobform" className="ui green button">
              <i className="bullhorn icon"></i>
              Post a Job
            </a>
          </div>
        </div>

        <h4 className="ui horizontal divider header">
          <i className="tint icon"></i>
          Design
        </h4>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Location</th>
              <th>Position</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Santo Domingo</td>
              <td>Web Designer</td>
              <td>MercaSID</td>
            </tr>
          </tbody>
          <tfoot>
            <tr><th colspan="3">
              <div className="ui right floated pagination menu">
                <a className="icon item">
                  <i className="left chevron icon"></i>
                </a>
                <a className="item">1</a>
                <a className="item">2</a>
                <a className="item">3</a>
                <a className="item">4</a>
                <a className="icon item">
                  <i className="right chevron icon"></i>
                </a>
              </div>
            </th>
          </tr></tfoot>
        </table>

        <h4 className="ui horizontal divider header">
          <i className="node js icon"></i>
          Programming
        </h4>
        <table className="ui celled table">
          <thead>
            <tr><th>Location</th>
            <th>Position</th>
            <th>Company</th>
          </tr></thead>
          <tbody>
            <tr>
              <td>Santo Domingo</td>
              <td>Web Developer</td>
              <td>Claro RD</td>
            </tr>
            <tr>
              <td>Santiago</td>
              <td>Tester</td>
              <td>Intellisys Inc.</td>
            </tr>
            <tr>
              <td>Android Developer</td>
              <td>Web Developer</td>
              <td>Casa de Campo</td>
            </tr>
            <tr>
              <td>Punta Cana</td>
              <td>QA Engineer</td>
              <td>Confidencial</td>
            </tr>
          </tbody>
          <tfoot>
            <tr><th colspan="3">
              <div className="ui right floated pagination menu">
                <a className="icon item">
                  <i className="left chevron icon"></i>
                </a>
                <a className="item">1</a>
                <a className="item">2</a>
                <a className="item">3</a>
                <a className="item">4</a>
                <a className="icon item">
                  <i className="right chevron icon"></i>
                </a>
              </div>
            </th>
          </tr></tfoot>
        </table>
      </div>
    );
  }
}

export default ForgotPassword;
