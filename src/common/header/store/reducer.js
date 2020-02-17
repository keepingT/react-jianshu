import * as contants from './constants';
import { fromJS } from 'immutable';

// 转化为 immutable 对象
const defaultState = fromJS({
	focused: false
});

export default (state = defaultState, action) => {
	if (action.type === contants.SEARCH_FOCUS) {
		// immutable 对象的 set 方法，会结合之前 immutable 对象的值，
		// 与设置的值，返回一个新对象
		return state.set('focused', true);
	}

	if (action.type === contants.SEARCH_BLUR) {
		return state.set('focused', false);
	}
	return state;
}