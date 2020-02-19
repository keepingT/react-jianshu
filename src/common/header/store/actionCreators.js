import * as contants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

// 在 reducer 中，已经将 list 转为 immutable 数组，因此将传递的js数组转为 immutable 类型
const changeList = (data) => ({
	type: contants.CHANGE_LIST,
	data: fromJS(data),
	totalPage: Math.ceil(data.length / 10)
});

export const searchFocus = () => ({
	type: contants.SEARCH_FOCUS
});

export const searchBlur = () => ({
	type: contants.SEARCH_BLUR
});

export const mouseEnter = () => ({
	type: contants.MOUSE_ENTER
});

export const mouseLeave = () => ({
	type: contants.MOUSE_LEAVE
});

export const changePage = (page) => ({
	type: contants.CHANGE_PAGE,
	page
});



export const getList = () => {
	return (dispatch) => {
		axios.get('/api/headertList.json').then(res => {
			const data = res.data;
			dispatch(changeList(data.data));
		}).catch(err => {

		})
	}
};