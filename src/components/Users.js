import React, { Component } from "react";
import { connect } from "react-redux";
import * as userAction from "../redux/actions/userAction";
import FormUser from "./FormUser";

class Users extends Component {
  state = {
    flagUsers: false,
    users: [],
    user: [],
    message: "",
    textButtonShow: "Mostrar Colaboradores",
    textButtonHazard: "Mostrar Riesgos",
    flagHazard: false,
    flagSave: false,
  };

  componentDidMount() {
    this.props.allUsers();
  }

  /* componentDidUpdate() {
    this.props.allUsers()
  } */

  showData() {
    this.setState({
      flagUsers: !this.state.flagUsers,
    });
  }

  messageWarning(age) {
    if (age >= 18 && age <= 25) {
      return <td>FUERA DE PELIGRO</td>;
    } else if (age >= 26 && age <= 50) {
      return <td>TENGA CUIDADO, TOME TODAS LAS MEDIDAS DE PREVENSION</td>;
    } else {
      return <td>POR FAVOR QUEDARSE EN CASA</td>;
    }
  }

  showWarning() {
    this.setState({
      flagHazard: !this.state.flagHazard,
    });
  }

  formSave() {
    this.setState({
      flagSave: !this.state.flagSave,
    });
  }

  deleteUser = async (id) => {
    //console.log(id);

    await this.props.userDelete(id);
    await this.props.allUsers();
  };

  render() {
    //console.log("reducer", this.props);
    //console.log("flag", this.state.flagUsers);

    return (
      <div className="container">
        <div className="form-group">
          <button
            className="btn btn-primary btn-sm mt-2"
            onClick={() => this.showData()}
          >
            {this.state.textButtonShow}
          </button>

          <button
            className="btn btn-success btn-sm mt-2"
            onClick={() => this.formSave()}
          >
            Crear Colaborador
          </button>
          <button
            className="btn btn-warning btn-sm mt-2"
            onClick={() => this.showWarning()}
          >
            NIVEL RIESGO
          </button>
        </div>

        <div className="container mt-3 mb-3">
          {this.state.flagSave && <FormUser />}
        </div>

        <table className="table table-hover mt-4">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Direccion</th>
              <th scope="col">Estado Civil</th>
              <th scope="col">Profesion</th>
              <th scope="col">Edad</th>
              <th scope="col">Riego</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.state.flagUsers &&
              this.props.UserReducer.users.map((user) => {
                return (
                  <tr className="table-primary" key={user.IDCOLABORADOR}>
                    <th scope="row">{user.IDCOLABORADOR}</th>
                    <td>{user.NOMBRE}</td>
                    <td>{user.APELLIDO}</td>
                    <td>{user.DIRECCION}</td>
                    <td>{user.ESTADOCIVIL}</td>
                    <td>{user.PROFESION}</td>
                    <td>{user.EDAD}</td>
                    {this.state.flagHazard ? (
                      this.messageWarning(user.EDAD)
                    ) : (
                      <td>N/A</td>
                    )}

                    <td>
                      <div className="form-group">
                        <button
                          className="btn btn-danger btn-sm ml-3"
                          onClick={() => this.deleteUser(user.IDCOLABORADOR)}
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({ UserReducer }) => {
  return { UserReducer };
};

const mapDispatchProps = {
  ...userAction,
};

export default connect(mapStateToProps, mapDispatchProps)(Users);
