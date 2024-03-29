import {loadDataWithPost} from 'src/rest/utils';
import endpoints from 'src/rest/endpoints';

const login = ({ login, password }) => {
  return loadDataWithPost(endpoints.login, {
    username: login,
    password: password
  }).then(response => {
    if (response.token) {
      localStorage.setItem('user', JSON.stringify(response));
      return response;
    }
  });
}

const register = ({ login, email, password, firstName, lastName }) => {
  return loadDataWithPost(endpoints.register, {
    username: login,
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName
  });
}

const refreshToken = (refreshToken) => {
  return loadDataWithPost(endpoints.refreshToken, {
    refreshToken: refreshToken
  }).then(response => {
    if (response.refreshToken) {
      localStorage.setItem('user', JSON.stringify(response));
      return response;
    }
  });
}

const logout = () => {
  // userStore.logout();
  return Promise.resolve();
}

export default { login, logout, register, refreshToken };
