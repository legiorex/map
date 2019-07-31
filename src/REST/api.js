// Instruments
import { MAIN_URL, groupId } from './config';

const url = 'http://poll-dev.dev.finch.fm';
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export const api = {
  // get token () {
  //   return localStorage.getItem('token');
  // },
  auth: {
    authenticate (token) {
      return fetch(`${url}/api/v1/authentication`, {
        method:  'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });
    },

    // headers: {
    //     "Content-type": "application/x-www-form-urlencoded",
    // },

    login (userLogin) {

      return fetch(`${MAIN_URL}/user/login`, {
        method:  'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userLogin),
      });
    },

    logout () {

      return fetch(`${MAIN_URL}/user/logout`, {
        method:  'GET',
        headers: {
          Authorization: this.token,
        },
      });
    },
  },
  posts: {
    fetch () {
      return fetch(`${MAIN_URL}/feed`, {
        method:  'GET',
        headers: {
          Authorization: this.token,
        },
      });
    },
    create (comment) {
      return fetch(`${MAIN_URL}/feed`, {
        method:  'POST',
        headers: {
          Authorization:  this.token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ comment }),
      });
    },
    remove (postID) {
      return fetch(`${MAIN_URL}/feed/${postID}`, {
        method:  'DELETE',
        headers: {
          Authorization: this.token,
        },
      });
    },
    like (postID) {
      return fetch(`${MAIN_URL}/feed/like/${postID}`, {
        method:  'PUT',
        headers: {
          Authorization: this.token,
        },

      });
    },
  },
  users: {
    fetch () {
      return fetch(`${MAIN_URL}/user/all`, {
        method:  'GET',
        headers: {
          Authorization: this.token,
        },
      });
    },
  },
  profile: {
    updateProfile (profileInfo) {
      return fetch(`${MAIN_URL}/user`, {
        method:  'PUT',
        headers: {
          Authorization:  this.token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profileInfo),
      });
    },
    updateAvatar (avatarFormData) {
      return fetch(`${MAIN_URL}/image`, {
        method:  'POST',
        headers: {
          Authorization: this.token,
        },
        body: avatarFormData,
      });
    },
  },
};
