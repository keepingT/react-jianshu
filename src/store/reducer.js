// 使用 redux-immutable，使 state 变成 immutable 对象
import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from './../common/header/store';
import { reducer as homeReducer } from './../pages/home/store';

const reducer = combineReducers({
	header: headerReducer,
	home: homeReducer,
});

export default reducer;