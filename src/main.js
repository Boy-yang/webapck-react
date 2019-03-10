import React,{Component,Suspense,lazy} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Switch,Route} from 'react-router-dom';
import {routerReducer} from 'react-router-redux';
import {Provider} from 'react-redux';
import {createStore,compose,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {Spin} from 'antd';
import * as reducers from './reducers'

// import Home from './components/Home/Home';
const Home = lazy(() => import('./components/Home/Home.js'));
const Login = lazy(()=>import('./components/Login/Login.js'));
const Reg = lazy(()=>import('./components/Register/Reg.js'));
import './style/reset.scss';


const reducer = combineReducers({
        ...reducers,
        routing:routerReducer
});
const store = createStore(
    reducer,
    compose(applyMiddleware(thunk,promise))
);


class App extends Component {
  static get route(){
    return (
      <Suspense fallback={<Spin className='loading' size='large' tip="Loading..."/>}>        {
          [
            {path:'/',component:props=>(<Home {...props}/>)},
            {path:'/login',component:props=>(<Login {...props}/>)},
            {path:'/reg',component:props=>(<Reg {...props}/>)},
          ].map((item,index)=><Route exact key={index} {...item}/>)
        }
      </Suspense>
    );
  }
  render() {
    return(
      <HashRouter>
        <Switch>
          {App.route}
        </Switch>
      </HashRouter>
    );
  }
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);