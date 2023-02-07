import comment from './modules/comment';
import { createStore } from 'vuex';

const store = createStore({
	modules: { comment },
});

export default store;
