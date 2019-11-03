import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';

import store from './redux/store';

import 'bootswatch/dist/sketchy/bootstrap.min.css';
import './index.css';

import App from './App';

//Instead of passing the store to the app like below:
//ReactDOM.render(<App store={store} />, document.getElementById('root'));
//Use the 'Provider' component provided by 'react-redux' package,
//to take care of the passing down the store to all components down the component tree
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
