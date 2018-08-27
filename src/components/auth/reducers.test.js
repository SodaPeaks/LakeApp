import {  admin, getAdmin, ADMIN_AUTH, LOGOUT, ADMIN_LOAD } from './reducers';

describe('admin reducer', () => {

  it('initializers to null', () => {
    const state = admin(undefined, {});
    expect(state).toBe(null);
  });

  it('loads admin', () => {
    const data = { name: 'admin' };
    const state = admin(null, { type: ADMIN_AUTH, payload: data });
    expect(state).toEqual(data);
  });

  it('loads admin with profile', () => {
    const data = { name: 'admin', email: 'email', profile: [{ _id: '1' }] };
    const state = admin(null, { type: ADMIN_LOAD, payload: data });
    expect(state).toEqual(data);
  });

  it('clears admin on logout', () => {
    const state = admin({}, { type: LOGOUT });
    expect(state).toBe(null);
  });

  it('gets admin from state', () => {
    const admin = {};
    expect(getAdmin({ admin })).toBe(admin);
  });


});

