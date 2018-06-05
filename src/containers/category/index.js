import React, { Component } from 'react';
import DataTable from '../../components/data-table';
import Lodash from 'lodash';


class ForgotPassword extends Component {

  constructor(props) {
    super(props);

    this.state = {
      category: this.props.match.params.name,
      search: null,
      value: null
    }
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


        <DataTable history={this.props.history} category={ this.state.category } search={ this.state.value } limit={ 2 } hasPagination={ true } />
        
      </React.Fragment>
    );
  }
}

export default ForgotPassword;
