// Instruments
import { MAIN_URL, groupId } from "./config";

const url = 'https://accounts.google.com/o/oauth2/v2/auth?';
const clientId = '57988416429-vd352bs6afv97ieu6uaol9424i8l79bk.apps.googleusercontent.com';

const responseType = 'code';

const scope = 'https://www.google.com/m8/feed';

const redirectUri = 'http://localhost';

const accessType = 'offline';

// https://accounts.google.com/o/oauth2/v2/auth?client_id=187637922392-nm8r2q89o9gub1ftmuos32coutiumkt1.apps.googleusercontent.com&response_type=code&scope=https://www.googleapis.com/auth/gmail.send&redirect_uri=http://localhost&access_type=offline

export const api = {
    get token () {
        return localStorage.getItem('token');
    },
    auth: {
        getToken () {
            return fetch(`${url}client_id=${clientId}&response_type=${responseType}&scope=${scope}&redirect_uri=${redirectUri}&access_type=${accessType}`, {
                method:  "GET",
               
            });
        },

        // headers: {
        //     "Content-type": "application/x-www-form-urlencoded",
        // },

        login (userLogin) {

            return fetch(`${MAIN_URL}/user/login`, {
                method:  "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userLogin),
            });
        },
        authenticate () {

            return fetch(`${MAIN_URL}/user/login`, {
                method:  "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ token: this.token }),
            });
        },
        logout () {

            return fetch(`${MAIN_URL}/user/logout`, {
                method:  "GET",
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
                method:  "POST",
                headers: {
                    Authorization:  this.token,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ comment }),
            });
        },
        remove (postID) {
            return fetch(`${MAIN_URL}/feed/${postID}`, {
                method:  "DELETE",
                headers: {
                    Authorization: this.token,
                },
            });
        },
        like (postID) {
            return fetch(`${MAIN_URL}/feed/like/${postID}`, {
                method:  "PUT",
                headers: {
                    Authorization: this.token,
                },

            });
        },
    },
    users: {
        fetch () {
            return fetch(`${MAIN_URL}/user/all`, {
                method:  "GET",
                headers: {
                    Authorization: this.token,
                },
            });
        },
    },
    profile: {
        updateProfile (profileInfo) {
            return fetch(`${MAIN_URL}/user`, {
                method:  "PUT",
                headers: {
                    Authorization:  this.token,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(profileInfo),
            });
        },
        updateAvatar (avatarFormData) {
            return fetch(`${MAIN_URL}/image`, {
                method:  "POST",
                headers: {
                    Authorization: this.token,
                },
                body: avatarFormData,
            });
        },
    },
};
