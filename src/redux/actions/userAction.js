import {
  getUsers,
  getUser,
  saveUser,
  updateUser,
  deleteUser,
  loading,
  error,
} from "../types/userType";

const ApiUrl = {
  url: "http://localhost:4000/api",
};

export const allUsers = () => async (dispatch) => {
  dispatch({
    type: loading,
  });

  try {
    const response = await fetch(`${ApiUrl.url}/users`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
    });

    const data = await response.json();
    //console.log("esto trae data desde el action", data, response);

    if (response.ok) {
      dispatch({
        type: getUsers,
        users: data.data,
        loadin: false,
      });
    }
  } catch (err) {
    dispatch({
      type: error,
      error: err.message,
      loading: false,
    });
  }
};

export const oneUser = (id) => async (dispatch) => {
  dispatch({
    type: loading,
  });

  try {
    const response = await fetch(`${ApiUrl.url}/users/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
    });

    const data = await response.json();
    console.log("data", data);

    if (response.ok) {
      dispatch({
        type: getUser,
        user: data.data,
        loadin: false,
      });
    }
  } catch (err) {
    dispatch({
      type: error,
      error: err.message,
      loading: false,
    });
  }
};

export const userSave = (object) => async (dispatch) => {

    const newUser = {
        name: object.name,
        lastname: object.lastname,
        address: object.address,
        civilStatus: object.civilStatus,
        age: object.age,
        profession: object.profession
    }

  dispatch({
    type: loading,
  });

  try {
    const response = await fetch(`${ApiUrl.url}/users`, {
      method: "POST",
      body: `${newUser}`,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      }
    });

    const data = await response.json();
    console.log("data", data);

    if (response.ok) {
      dispatch({
        type: saveUser,
        message: data.message,
        loadin: false,
      });
    }
  } catch (err) {
    dispatch({
      type: error,
      error: err.message,
      loading: false,
    });
  }
};

export const userUpdate = (object, id) => async (dispatch) => {
  dispatch({
    type: loading,
  });

  try {
    const response = await fetch(`${ApiUrl.url}/users/${id}`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
      },
      body: `${object}`,
    });

    const data = await response.json();
    console.log("data", data);

    if (response.ok) {
      dispatch({
        type: updateUser,
        message: data.message,
        loadin: false,
      });
    }
  } catch (err) {
    dispatch({
      type: error,
      error: err.message,
      loading: false,
    });
  }
};

export const userDelete = (id) => async (dispatch) => {
  dispatch({
    type: loading,
  });

  try {
    const response = await fetch(`${ApiUrl.url}/users/${id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        params: id
      },
    });

    const data = await response.json();
    console.log("data", data);

    if (response.ok) {
      dispatch({
        type: deleteUser,
        message: data.message,
        loadin: false,
      });
    }
  } catch (err) {
    dispatch({
      type: error,
      error: err.message,
      loading: false,
    });
  }
};
