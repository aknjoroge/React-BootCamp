import { appActions } from "./store";

export let createAccount = function (credentials) {
  return async function (dispatch) {
    try {
      let responce = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${credentials.key}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
            returnSecureToken: true,
          }),
        }
      );

      let data = await responce.json();

      if (data.error) {
        throw new Error(data.error.message);
        return false;
      }

      dispatch(appActions.login(data.idToken));

      return { status: "success" };
    } catch (error) {
      console.log("TC-92", error);
      return { status: "failed", message: error.message };
    }
  };
};

export let logout = function () {
  return function (dispatch) {
    dispatch(appActions.logout());
  };
};

export let loginAction = function (credentials) {
  return async function (dispatch) {
    try {
      let responce = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${credentials.key}`,
        {
          method: "POST",
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
            returnSecureToken: true,
          }),
        }
      );

      let data = await responce.json();

      if (data.error) {
        throw new Error(data.error.message);
        return false;
      }

      dispatch(appActions.login(data.idToken));

      return { status: "success" };
    } catch (error) {
      console.log("TC-92", error);
      return { status: "failed", message: error.message };
    }
  };
};

export let autoLogin = function (token) {
  return function (dispatch) {
    dispatch(appActions.restoreToken(token));
  };
};

export let updatePassword = function (credentials) {
  return async function (dispatch) {
    try {
      let responce = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${credentials.key}`,
        {
          method: "POST",
          body: JSON.stringify({
            idToken: credentials.token,
            password: credentials.password,
            returnSecureToken: true,
          }),
        }
      );

      let data = await responce.json();

      if (data.error) {
        throw new Error(data.error.message);
        return false;
      }

      dispatch(appActions.login(data.idToken));

      return { status: "success" };
    } catch (error) {
      console.log("TC-92", error);
      return { status: "failed", message: error.message };
    }
  };
};
