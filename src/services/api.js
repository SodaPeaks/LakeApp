import { get, post } from './request';

const AUTH_URL = `${URL}/auth`;

// export const getAllEvents = () => get(EVENTS_URL);
// export const getEventById = id => get(`${EVENTS_URL}/${id}`);
// export const postEvent = event => post(EVENTS_URL, event);
// export const getEventByGroup = id => get(`${EVENTS_URL}?group=${id}`);
// export const putEvent = event => put(`${EVENTS_URL}/${event._id}`, event);
// export const deleteEvent = id => del(`${EVENTS_URL}/${id}`);
// export const putEventAttendants = event => put(`${EVENTS_URL}/${event._id}/att`, event);


export const signin = credentials => post(`${AUTH_URL}/signin`, credentials);
export const signup = credentials => post(`${AUTH_URL}/signup`, credentials);

export const verifyUser = token => get(`${AUTH_URL}/verify`, { 
  headers: {
    Authorization: token
  }
});

