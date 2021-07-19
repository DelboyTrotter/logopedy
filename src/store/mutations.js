/* eslint no-param-reassign: ["error", { "props": false }] */
import types from './mutationTypes';

export default {
  [types.SET_PROFILES](state, profiles) {
    state.profiles = profiles;
  },
};
