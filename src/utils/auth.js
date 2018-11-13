// @flow

/**
 * Login user from app
 * @returns {Promise} boolean based on auth status
 */
export function login() {
  // Implement DB call and other login code
  fetch('/api/data')
    .then(response => response.json())
    .then(res => console.log(res))
    .catch((error) => {
      console.log(error);
    });

  return Promise.resolve(true);
}

/**
 * Logout user from app
 * @returns {void}
 */
export function logout() {
  // Implement DB call and other login code
  return Promise.resolve(true);
}
