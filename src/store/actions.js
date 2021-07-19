import mutationTypes from '@/store/mutationTypes';
import api from '@/api';

export default {
  async getProfiles({ commit }) {
    const profiles = await api.profiles.getProfiles();
    commit(mutationTypes.SET_PROFILES, profiles);
  },
  setActiveProfile({ commit }, profile) {
    commit(mutationTypes.SET_ACTIVE_PROFILE, profile);
  },
  saveFirstReview({ commit }, profile) {
    commit(mutationTypes.SAVE_FIRST_REVIEW, profile);
  },
  saveNote({ commit }, note) {
    commit(mutationTypes.SAVE_NOTE, note);
  },
  saveNewSession({ commit }, session) {
    commit(mutationTypes.SAVE_NEW_SESSION, session);
  },
  async getBillings({ commit }) {
    const billings = await api.billings.getBillings();
    commit(mutationTypes.SET_BILLINGS, billings);
  },
};
