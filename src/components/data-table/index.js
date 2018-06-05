import React, { Component } from 'react';

import Axios from 'axios';


class DataTable extends Component {

  state = {
    page: 0,
    totalPages: 0,
    search: null,
    data: []
  }

  componentDidMount() {
    this.fetchData();
  }

  componentWillReceiveProps(objNextProps) {
    if (this.props.search !== objNextProps.search) {
      this.setState({ search: objNextProps.search }, this.fetchData);
    }
  }

  fetchData = () => {
    const objPayload = {
      Category: this.props.category,
      page: this.state.page,
      q: this.state.search,
      limit: this.props.limit
    };

    Axios.post('http://localhost:3000/searchJobByCategory', objPayload).then((objResponse) => {
      this.setState({ data: objResponse.data.data, q: this.state.search, totalPages: Math.ceil(objResponse.data.total / this.props.limit) });
    });
  }


  handleRowPress = (objJob) => {
    this.props.history.push('/jobdetail', objJob);
  }

  
  renderRows = () => {
    return this.state.data.map((objJob) => {
      return (
        <tr>
          <td>{ objJob.location || "-" }</td>
          <td>{ objJob.position || "-" }</td>
          <td>{ objJob.company || "-" }</td>
          <td>
            <div className="ui floated pagination menu">
              <a onClick={() => this.handleRowPress(objJob) } className="icon item"> View </a>
            </div>
          </td>
        </tr>
      );
    });
  }


  renderPagination = () => {
    return Array.from(Array(this.state.totalPages).keys()).map((a, index) => {
      return (
        <a onClick={ () => { this.setState({ page: index }, this.fetchData)} } className="item">{ index + 1 }</a>
      );
    });
  }


  renderPage = () => {
    if (this.props.hasPagination && this.state.totalPages > 0) {
      return (
        <tr>
          <th colspan="4">
            <div className="ui right floated pagination menu">
              <a className="icon item">
                <i className="left chevron icon"></i>
              </a>
              { this.renderPagination() }
              <a className="icon item">
                <i className="right chevron icon"></i>
              </a>
            </div>
          </th>
        </tr>
      );
    }
  }


  renderShowMore = () => {
    if (this.props.hasShowMore) {
      return (
        <tr>
          <th colspan="4">
            <div className="ui right floated pagination menu">
              <a href={ `/category/${this.props.category}` } className="icon item"> Show More </a>
            </div>
          </th>
        </tr>
      );
    }
  }

  render() {
    return (
      <React.Fragment>
        <h4 className="ui horizontal divider header">
          <i className="tint icon"></i>
          { this.props.category }
        </h4>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Location</th>
              <th>Position</th>
              <th>Company</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.renderRows() }
          </tbody>
          <tfoot>
            { this.renderShowMore() }
            { this.renderPage() }
          </tfoot>
        </table>
      </React.Fragment>
    );
  }
}


export default DataTable;
