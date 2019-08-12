const url = 'https://pulseteam.io';

export const api = {
  get token () {
    return localStorage.getItem('token');
  },
  auth: {
    signup (jwt) {
      return fetch(`${url}/api/v1/authentication`, {
        method:  'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: jwt }),
      });
    },
  },
  profile: {
    getMe () {
      return fetch(`${url}/api/v1/users/me`, {
        method:  'GET',
        headers: {
          'Content-Type':  'application/json',
          'Authorization': this.token,
        },
      });
    },
  },
  workspaces: {
    getWorkSpaces () {
      return fetch(`${url}/api/v1/workspace`, {
        method:  'GET',
        headers: {
          'Content-Type':  'application/json',
          'Authorization': this.token,
        },
      });
    },
  },
  users: {
    getUsers (workspaceId) {
      return fetch(`${url}/api/v1/moderator/workspace/${workspaceId}/user`, {
        method:  'GET',
        headers: {
          'Content-Type':  'application/json',
          'Authorization': this.token,
        },
      });
    },
  },
  departments: {
    getDepartments (workspaceId) {
      return fetch(`${url}/api/v1/moderator/workspace/${workspaceId}/department`, {
        method:  'GET',
        headers: {
          'Content-Type':  'application/json',
          'Authorization': this.token,
        },
      });
    },
  },
  groups: {
    getGroups (workspaceId) {
      return fetch(`${url}/api/v1/moderator/workspace/${workspaceId}/group`, {
        method:  'GET',
        headers: {
          'Content-Type':  'application/json',
          'Authorization': this.token,
        },
      });
    },
  },
};
