import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore,applyMiddleware } from "redux";
import {allReducers} from './Reducers/index';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import reduxPromiseMiddleware from 'redux-promise-middleware';

//local
import App from './App';
 

const store = createStore(
    allReducers,
    composeWithDevTools(applyMiddleware(thunk,logger,reduxPromiseMiddleware))
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);