import { createStore } from 'redux';
import reducer from './modules/Calendar';

const configure = () => {
    const store = createStore(reducer);
    return store;
}

export default configure;