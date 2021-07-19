/* eslint no-param-reassign: ["error", { "props": false }] */
import types from './mutationTypes';
import { findIndex } from 'lodash';
import { uuid } from 'vue-uuid';

export default {
  [types.SET_PROFILES](state, profiles) {
    state.profiles = profiles;
  },
  [types.SET_ACTIVE_PROFILE](state, profile) {
    state.activeProfile = profile;
  },
  [types.SAVE_FIRST_REVIEW](state, profile) {
    const index = findIndex(state.profiles, { id: profile.id });
    state.profiles[index] = profile;
  },
  [types.SAVE_NOTE](state, note) {
    const noteItem = note;
    if (!noteItem.id) {
      noteItem.id = uuid.v4();
      state.activeProfile.notes.push(note);
    } else {
      const index = findIndex(state.activeProfile.notes, { id: note.id });
      state.activeProfile.notes[index] = note;
    }
  },
  [types.SAVE_NEW_SESSION](state, session) {
    state.activeProfile.sessions.upcoming.push(session);
  },
};
