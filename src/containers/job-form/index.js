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
    categories: [],
    form: {}
  }


  componentDidMount() {
    this.fetchData();
  }


  fetchData = () => {
    Axios.get('http://localhost:3000/getCategory').then((objResponse) => {
      this.setState({ categories: objResponse.data });
    });
  }

  handleChangeImage = (evt) => {
    var reader = new FileReader();
    var file = evt.target.files[0];

    reader.onload = (upload) => {
      const objForm = { ...this.state.form, picture: upload.target.result };
      this.setState({ form: objForm });
    };

    reader.readAsDataURL(file);
  }


  createJob = () => {
    Axios.post('http://localhost:3000/createJob', this.state.form).then(() => {
      this.props.history.replace('/home');
    });
  }

  showPreview = () => {
    this.props.history.push('/jobdetail', this.state.form);
  }


  handleChange = path => event => {
    const objForm = { ...this.state.form, [path]: event.target.value };
    this.setState({ form: objForm });
  };


  renderCategories = () => {
    return this.state.categories.map((objCategory) => {
      return (
        <option value={ objCategory._name }>{ objCategory._name }</option>
      );
    });
  }


  render() {
    return (
      <form className="ui form">
        <div className="field">
          <label>Compañía</label>
          <input value={ this.state.form.company } onChange={ this.handleChange('company') } type="text" name="company" placeholder="Compañía" />
        </div>
        <div className="field">
          <label>Tipo</label>
          <select value={ this.state.form.type } onChange={ this.handleChange('type') } className="ui fluid dropdown">
            <option value>--</option>
            <option value="FullTime">FullTime</option>
            <option value="PartTime">PartTime</option>
            <option value="Freelance">Freelance</option>
          </select>
        </div>
        <div className="field">
          <label>Logo</label>
          <input onChange={ this.handleChangeImage } type="file" name="logo" placeholder="Logo" />
        </div>
        <div className="field">
          <label>URL</label>
          <input value={ this.state.form.url } onChange={ this.handleChange('url') } type="text" name="url" placeholder="URL" />
        </div>
        <div className="field">
          <label>Posición</label>
          <input value={ this.state.form.position } onChange={ this.handleChange('position') } type="text" name="posicion" placeholder="Posición" />
        </div>
        <div className="field">
          <label>Ubicación</label>
          <input value={ this.state.form.location } onChange={ this.handleChange('location') } type="text" name="ubicacion" placeholder="Ubicación" />
        </div>
        <div className="field">
          <label>Categoria</label>
          <select value={ this.state.form.Category } onChange={ this.handleChange('Category') } className="ui fluid dropdown">
            <option value>--</option>
            { this.renderCategories() }
          </select>
        </div>
        <div className="field">
          <label>Descripción</label>
          <textarea value={ this.state.form.description } onChange={ this.handleChange('description') }></textarea>
        </div>
        <div className="field">
          <label>Cómo aplicar</label>
          <textarea value={ this.state.form.instruction } onChange={ this.handleChange('instruction') }></textarea>
        </div>
        <div className="field">
          <label>Email</label>
          <input value={ this.state.form.email } onChange={ this.handleChange('email') } type="email" name="email" placeholder="Email" />
        </div>
        <button onClick={ this.createJob } type="button" className="ui button">Submit</button>
        <button onClick={ this.showPreview } type="button" className="ui button">Preview</button>
      </form>
    );
  }
}

export default ForgotPassword;
