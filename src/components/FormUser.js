import React, { Component } from "react";
import { connect } from "react-redux";
import * as userAction from "../redux/actions/userAction";

class FormUser extends Component {
    state = {
        name: '',
        lastname: '',
        address: '',
        statusCivil: '',
        profetion: '',
        age: ''
    }

    nameRef = React.createRef();
    lastnameRef = React.createRef();
    addressRef = React.createRef();
    statusCivilRef = React.createRef();
    profetionRef = React.createRef();
    ageRef = React.createRef();

    changeState = () => {
        this.setState({
            name: this.nameRef.current.value,
            lastname: this.lastnameRef.current.value,
            address: this.addressRef.current.value,
            statusCivil: this.statusCivilRef.current.value,
            profetion: this.profetionRef.current.value,
            age: this.ageRef.current.value,
        })
        //console.log(this.state);
        
        
    }

    userSave = async (e) => {
        e.preventDefault();
        const newUser = {
            name: this.nameRef.current.value,
            lastname: this.lastnameRef.current.value,
            address: this.addressRef.current.value,
            civilStatus: this.statusCivilRef.current.value,
            profession: this.profetionRef.current.value,
            age: this.ageRef.current.value
        };

        //console.log(newUser);
        
        
        await this.props.userSave(newUser)
        //await this.props.allUsers();
    }

  render() {
    return (
      <form onSubmit={this.userSave}>
        <fieldset>
          <legend>Crear Colaborador</legend>
          <div className="form-group row">
            <label htmlFor="staticName" className="col-sm-2 col-form-label">
              Nombre
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control-plaintext"
                id="staticName"
                ref={this.nameRef}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="staticlastname" className="col-sm-2 col-form-label">
              Apellido
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control-plaintext"
                id="staticlastname"
                ref={this.lastnameRef}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="staticAddress" className="col-sm-2 col-form-label">
              Direccion
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control-plaintext"
                id="staticAddress"
                ref={this.addressRef}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="stateStatusCivil" className="col-sm-2 col-form-label">
              Estado Civil
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control-plaintext"
                id="stateStatusCivil"
                ref={this.statusCivilRef}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="staticProfetion" className="col-sm-2 col-form-label">
              Profesion
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control-plaintext"
                id="staticProfetion"
                ref={this.profetionRef}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="staticAge" className="col-sm-2 col-form-label">
              Edad
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control-plaintext"
                id="staticAge"
                ref={this.ageRef}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Guardar</button>
        </fieldset>
      </form>
    );
  }
}

const mapStateToProps = ({ UserReducer }) => {
  return { UserReducer };
};

const mapDispatchProps = {
  ...userAction,
};

export default connect(mapStateToProps, mapDispatchProps)(FormUser);
