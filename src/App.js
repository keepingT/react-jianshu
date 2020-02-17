import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyled } from './style.js';
import { GlobalIconFontStyled } from './statics/iconfont/iconfont';
import Header from './common/header'
import store from './store';
import Home from './pages/home';
import Detail from './pages/detail';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyled/>
      <GlobalIconFontStyled/>
      <Header />
      <BrowserRouter>
      	<Route path="/" exact component={Home}></Route>
      	<Route path="/detail" exact component={Detail}></Route>
      </BrowserRouter>
    </Provider>
  );
}



export default App;