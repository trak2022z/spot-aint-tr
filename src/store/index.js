import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import player from './modules/player';
import toast from './modules/toast';
import spotify from './modules/spotify';
import loader from './modules/loader';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { user, player, toast, spotify, loader },
  plugins: [createPersistedState({ paths: ['user', 'spotify'] })],
});
