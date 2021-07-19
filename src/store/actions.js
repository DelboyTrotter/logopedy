import mutationTypes from '@/store/mutationTypes';
import api from '@/api';

export default {
  async getProfiles({ commit }) {
    const profiles = await api.profiles.getProfiles();
    commit(mutationTypes.SET_PROFILES, profiles);
  },
};
