// @flow

/**
 * Login user from app
 * @param {string} token jwt token
 * @returns {Promise} boolean based on auth status
 */
export function login(token: string) {
  return window.fetch('/api/users/me')
    .then(response => response.json())
    .then((response) => {
      window.localStorage.setItem('jwt', token);
      return response;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
}

/**
 * Logout user from app
 * @returns {void}
 */
export function logout() {
  return window.fetch('/api/auth/logout')
    .then(response => response.json())
    .then((response) => {
      window.localStorage.removeItem('jwt');
      return response;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
}
