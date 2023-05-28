//the is main file for front end for application like remitly.com or transferwise.com

import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from './Routes';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';
import { setAuthToken } from './utils/setAuthToken';
import { setCurrentUser } from './actions/authActions';
import { setAlert } from './actions/alertActions';
import { loadUser } from './actions/authActions';
import { loadProfile } from './actions/profileActions';
import { loadPosts } from './actions/postActions';
import { loadProfiles } from './actions/profileActions';
import { loadPostsByUser } from './actions/postActions';
import { loadPostsByTag } from './actions/postActions';
import { loadPostsByCategory } from './actions/postActions';
import { loadPostsBySearch } from './actions/postActions';
import { loadPostsByDate } from './actions/postActions';
import { loadPostsByLikes } from './actions/postActions';
import { loadPostsByComments } from './actions/postActions';
import { loadPostsByViews } from './actions/postActions';
import { loadPostsByBookmarks } from './actions/postActions';
import { loadPostsByFollows } from './actions/postActions';
import { loadPostsByUpvotes } from './actions/postActions';
import { loadPostsByDownvotes } from './actions/postActions';
import { loadPostsByShares } from './actions/postActions';
import { loadPostsByReports } from './actions/postActions';
import { loadPostsByMutes } from './actions/postActions';
import { loadPostsByHides } from './actions/postActions';
import { loadPostsByUnhides } from './actions/postActions';
import { loadPostsByUnmutes } from './actions/postActions';
import { loadPostsByUnbookmarks } from './actions/postActions';
import { loadPostsByUnfollows } from './actions/postActions';
import { loadPostsByUnupvotes } from './actions/postActions';
import { loadPostsByUndownvotes } from './actions/postActions';
import App from './App'
import './index.css';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
//     reducers,
//     composeEnhancers(applyMiddleware(reduxThunk))
// );
// if (localStorage.token) {
//     setAuthToken(localStorage.token);
// }
// const token = localStorage.getItem('token');

// if (token) {


//     setAuthToken(token);
//     store.dispatch(loadUser());
//     store.dispatch(loadProfile());
//     store.dispatch(loadPosts());
//     store.dispatch(loadProfiles());
//     store.dispatch(loadPostsByUser());
//     store.dispatch(loadPostsByTag());
//     store.dispatch(loadPostsByCategory());
//     store.dispatch(loadPostsBySearch());
//     store.dispatch(loadPostsByDate());
//     store.dispatch(loadPostsByLikes());
//     store.dispatch(loadPostsByComments());
//     store.dispatch(loadPostsByViews());



//     store.dispatch(loadPostsByBookmarks());
//     store.dispatch(loadPostsByFollows());
//     store.dispatch(loadPostsByUpvotes());
//     store.dispatch(loadPostsByDownvotes());
//     store.dispatch(loadPostsByShares());
//     store.dispatch(loadPostsByReports());
//     store.dispatch(loadPostsByMutes());


//     store.dispatch(loadPostsByHides());

//     store.dispatch(loadPostsByUnhides());
//     store.dispatch(loadPostsByUnmutes());

//     store.dispatch(loadPostsByUnbookmarks());

//     store.dispatch(loadPostsByUnfollows());

//     store.dispatch(loadPostsByUnupvotes());

//     store.dispatch(loadPostsByUndownvotes());

//     store.dispatch(loadPostsByUnhides());

//     store.dispatch(loadPostsByUnmutes());

//     store.dispatch(loadPostsByUnbookmarks());

//     store.dispatch(loadPostsByUnfollows());

//     store.dispatch(loadPostsByUnupvotes());


//     store.dispatch(loadPostsByUndownvotes());

//     store.dispatch(loadPostsByShares());

//     store.dispatch(loadPostsByReports());

//     store.dispatch(loadPostsByMutes());

//     store.dispatch(loadPostsByHides());

//     store.dispatch(loadPostsByUnhides());

//     store.dispatch(loadPostsByUnmutes());

//     store.dispatch(loadPostsByUnbookmarks());

//     store.dispatch(loadPostsByUnfollows());



//     store.dispatch(loadPostsByUnupvotes());

//     store.dispatch(loadPostsByUndownvotes());

//     store.dispatch(loadPostsByShares());


//     store.dispatch(loadPostsByReports());

//     store.dispatch(loadPostsByMutes());



//     store.dispatch(loadPostsByHides());

//     store.dispatch(loadPostsByUnhides());

//     store.dispatch(loadPostsByUnmutes());

//     store.dispatch(loadPostsByUnbookmarks());

//     store.dispatch(loadPostsByUnfollows());

//     store.dispatch(loadPostsByUnupvotes());


//     store.dispatch(loadPostsByUndownvotes());

//     store.dispatch(loadPostsByShares());

//     store.dispatch(loadPostsByReports());



//     store.dispatch(loadPostsByMutes());



//     store.dispatch(loadPostsByHides());

//     store.dispatch(loadPostsByUnhides());


//     store.dispatch(loadPostsByUnmutes());


//     store.dispatch(loadPostsByUnbookmarks());

//     store.dispatch(loadPostsByUnfollows());





