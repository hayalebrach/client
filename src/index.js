import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware ,compose} from 'redux';
import  postReducer  from "./store/Reducers";
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 const store=createStore(postReducer,composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(<React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App/>
    </Provider>
    </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

reportWebVitals();

