import React, {Component} from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	SearchWrapper,
	NavSearch,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoList,
	SearchInfoItem,
	Addition,
	Button,
} from './style'

class Header extends Component {

	getListArea() {
		const { focused, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage }  = this.props;
		if (focused || mouseIn) {

			let pageList = [], newList = list.toJS();
			if (newList.length) {
				for(let i = (page - 1) * 10; i < page * 10; i++) {
					if (i == newList.length - 1) {
						break;
					}
					pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
				}
			}

			return (
				<SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
					<i className="cor"></i>
					<SearchInfoTitle>
						搜索
						<SearchInfoSwitch onClick={() => handleChangePage(page, totalPage, this.spin)}>
							<i ref={icon => this.spin = icon} className="iconfont spin">&#xe600;</i>换一批
						</SearchInfoSwitch>
					</SearchInfoTitle>
					<SearchInfoList>
						{ pageList }
					</SearchInfoList>
				</SearchInfo>
			)
		} else {
			return null;
		}
	}

	render () {
		const {focused, list, handleInputFocus, handleInputBlur } = this.props;
		return (
			<HeaderWrapper>
				<Logo />
				<Nav>
					<NavItem className="left active">首页</NavItem>
					<NavItem className="left">下载App</NavItem>
					<NavItem className="right">登录</NavItem>
					<NavItem className="right">
						<i className="iconfont">&#xe636;</i>
					</NavItem>
					<SearchWrapper>
						<CSSTransition
							in={focused}
							timeout={200}
							classNames="slide"
						>
							<NavSearch
								className={focused ? 'focused' : ''}
								onFocus={() => handleInputFocus(list)}
								onBlur={handleInputBlur}
							/>
						</CSSTransition>
						<i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe6dd;</i>
						{this.getListArea()}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className="writting"><i className="iconfont">&#xe602;</i> 写文章</Button>
					<Button className="reg">注册</Button>
				</Addition>
			</HeaderWrapper>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		focused: state.getIn(['header','focused']),
		list: state.getIn(['header', 'list']),
		mouseIn: state.getIn(['header', 'mouseIn']),
		page: state.getIn(['header', 'page']), 
		totalPage: state.getIn(['header', 'totalPage']),
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		handleInputFocus(list) {
			(list.size === 0) && dispatch(actionCreators.getList());
			dispatch(actionCreators.searchFocus())
		},
		handleInputBlur() {
			dispatch(actionCreators.searchBlur())
		},
		handleMouseEnter() {
			dispatch(actionCreators.mouseEnter())
		},
		handleMouseLeave() {
			dispatch(actionCreators.mouseLeave())
		},
		handleChangePage(page, totalPage, spin) {
			let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
			// 如果不存在时，设置0
			originAngle = originAngle ? parseInt(originAngle, 10) : 0;
			spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';
			const nextPage = page < totalPage ? page + 1 : 1;
			dispatch(actionCreators.changePage(nextPage));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);