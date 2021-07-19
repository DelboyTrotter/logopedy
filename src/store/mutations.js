/* eslint no-param-reassign: ["error", { "props": false }] */
import types from './mutationTypes';
import { findIndex } from 'lodash';

export default {
  [types.SET_PROFILES](state, profiles) {
    state.profiles = profiles;
  },
  [types.SAVE_FIRST_REVIEW](state, profile) {
    const index = findIndex(state.profiles, { id: profile.id });
    state.profiles[index] = profile;
  },
};
