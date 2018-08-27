export const ADMIN_AUTH = 'ADMIN_AUTH';
export const LOGOUT = 'LOGOUT';
export const CHECKED_AUTH = 'CHECKED_AUTH';
export const ADMIN_LOAD = 'ADMIN_LOAD';

export const getAdmin = state => state.admin;
export const getCheckedAuth = state => state.checkedAuth;

export function admin(state = null, { type, payload }) {
  switch(type) {
    case ADMIN_AUTH:
      return payload;
    case ADMIN_LOAD:
      return payload;    
    case LOGOUT:
      return null;
    default:
      return state;
  }
}

export function checkedAuth(state = false, { type }) {
  switch(type) {
    case CHECKED_AUTH:
      return true;
    default:
      return state;
  }
}