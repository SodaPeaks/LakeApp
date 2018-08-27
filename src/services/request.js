import store from '../store/store';
import { getAdmin } from '../components/auth/reducers';

let token = '';

const key1 = 'admin';
const storage = window.localStorage;

store.subscribe(() => {
  const admin = getAdmin(store.getState());
  const nextToken = admin ? (admin.token || '') : '';
  if(nextToken === token) return;

  token = nextToken;
  token ? storage.setItem(key1, JSON.stringify(admin)) : clearStoredAdmin();
});

export const getStoredAdmin = () => {
  const json = storage.getItem(key1);
  try {
    return JSON.parse(json);
  }
  catch(err) {
    clearStoredAdmin();
  }
};

export const clearStoredAdmin = () => storage.removeItem(key1);

function request(url, options = {}, data) {
  if(data) options.body = JSON.stringify(data);
  if(token) {
    if(!options.headers) options.headers = {};
    options.headers.Authorization = token;
  }

  return fetch(url, options)
    .then(response => [response.ok, response.json()])
    .then(([ok, json]) => {
      if(ok) return json;
      throw json.message || json.error || json.errors || json;
    });
}

const headers = {
  'content-type': 'application/json'
};

export const get = (url, options = {}) => request(url, { method: 'GET', ...options });
export const post = (url, data) => request(url, { method: 'POST', headers }, data);
export const put = (url, data) => request(url, { method: 'PUT', headers }, data);
export const del = (url, data) => request(url, { method: 'DELETE' }, data);
