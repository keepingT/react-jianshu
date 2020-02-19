import * as contants from './constants';
import { fromJS } from 'immutable';

// 转化为 immutable 对象
const defaultState = fromJS({
	focused: false,
	mouseIn: false,
	// list 将变为 immutable 的数组
	list: [],
	page: 1,
	totalPage: 1
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case contants.SEARCH_FOCUS:
			// immutable 对象的 set 方法，会结合之前 immutable 对象的值，
			// 与设置的值，返回一个新对象
			return state.set('focused', true);
		case contants.SEARCH_BLUR:
			return state.set('focused', false);
		case contants.CHANGE_LIST:
			return state.merge({
				list: action.data,
				totalPage: action.totalPage
			});
		case contants.MOUSE_ENTER:
			return state.set('mouseIn', true);
		case contants.MOUSE_LEAVE:
			return state.set('mouseIn', false);
		case contants.CHANGE_PAGE:
			return state.set('page', action.page);
		default:
			return state;
	}
}