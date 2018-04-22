
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import other from './other';
import buycar from './buycar';

const store = new Vuex.Store({
	modules: {
		other,buycar
	}
});

export default store;