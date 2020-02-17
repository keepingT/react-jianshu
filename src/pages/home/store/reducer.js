import { fromJS } from 'immutable';

const defaultState = fromJS({
	topicList: [{
		id: 1,
		title: '社会热点',
		imgUrl: 'https://upload-images.jianshu.io/upload_images/16397523-20175890ff8ab265.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
	}, {
		id: 2,
		title: '手绘',
		imgUrl: 'https://upload-images.jianshu.io/upload_images/15331931-b3e1661ea76500cc?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
	}]
})

export default (state = defaultState, action ) => {
	return state;
}