//give frontend/src/App.js file code which is similar to remitly.com or transferwise.com

// Path: frontend/src/App.js
// give frontend/src/App.js file code which is similar to remitly.com or transferwise.com
import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import { loadPostsByUnshares } from './actions/postActions';
import { loadPostsByUnreports } from './actions/postActions';
import { loadPostsByUnmutes } from './actions/postActions';
import { loadPostsByUnhides } from './actions/postActions';
import { loadPostsByUnlikes } from './actions/postActions';

import { loadPostsByUnviews } from './actions/postActions';


import { loadPostsByUnfollows } from './actions/postActions';
import { loadPostsByUnupvotes } from './actions/postActions';
import { loadPostsByUndownvotes } from './actions/postActions';
import { loadPostsByUnshares } from './actions/postActions';
import { loadPostsByUnreports } from './actions/postActions';
import { loadPostsByUnmutes } from './actions/postActions';
import { loadPostsByUnhides } from './actions/postActions';
import { loadPostsByUnlikes } from './actions/postActions';

import { loadPostsByUnviews } from './actions/postActions';

import { loadPostsByUnbookmarks } from './actions/postActions';
import { loadPostsByUnfollows } from './actions/postActions';
import { loadPostsByUnupvotes } from './actions/postActions';
import { loadPostsByUndownvotes } from './actions/postActions';
import { loadPostsByUnshares } from './actions/postActions';
import { loadPostsByUnreports } from './actions/postActions';
import { loadPostsByUnmutes } from './actions/postActions';
import { loadPostsByUnhides } from './actions/postActions';
import { loadPostsByUnlikes } from './actions/postActions';

import { loadPostsByUnviews } from './actions/postActions';

import { loadPostsByUnbookmarks } from './actions/postActions';
import { loadPostsByUnfollows } from './actions/postActions';
import { loadPostsByUnupvotes } from './actions/postActions';
import { loadPostsByUndownvotes } from './actions/postActions';
import { loadPostsByUnshares } from './actions/postActions';
import { loadPostsByUnreports } from './actions/postActions';
import { loadPostsByUnmutes } from './actions/postActions';
import { loadPostsByUnhides } from './actions/postActions';
import { loadPostsByUnlikes } from './actions/postActions';

import { loadPostsByUnviews } from './actions/postActions';

import { loadPostsByUnbookmarks } from './actions/postActions';
import { loadPostsByUnfollows } from './actions/postActions';
import { loadPostsByUnupvotes } from './actions/postActions';
import { loadPostsByUndownvotes } from './actions/postActions';
import { loadPostsByUnshares } from './actions/postActions';
import { loadPostsByUnreports } from './actions/postActions';
import { loadPostsByUnmutes } from './actions/postActions';
import { loadPostsByUnhides } from './actions/postActions';
import { loadPostsByUnlikes } from './actions/postActions';

import { loadPostsByUnviews } from './actions/postActions';

import { loadPostsByUnbookmarks } from './actions/postActions';
import { loadPostsByUnfollows } from './actions/postActions';
import { loadPostsByUnupvotes } from './actions/postActions';
import { loadPostsByUndownvotes } from './actions/postActions';
import { loadPostsByUnshares } from './actions/postActions';
import { loadPostsByUnreports } from './actions/postActions';
import { loadPostsByUnmutes } from './actions/postActions';
import { loadPostsByUnhides } from './actions/postActions';
import { loadPostsByUnlikes } from './actions/postActions';

import { loadPostsByUnviews } from './actions/postActions';

import { loadPostsByUnbookmarks } from './actions/postActions';
import { loadPostsByUnfollows } from './actions/postActions';
import { loadPostsByUnupvotes } from './actions/postActions';
import { loadPostsByUndownvotes } from './actions/postActions';
import { loadPostsByUnshares } from './actions/postActions';
import { loadPostsByUnreports } from './actions/postActions';
import { loadPostsByUnmutes } from './actions/postActions';
import { loadPostsByUnhides } from './actions/postActions';
import { loadPostsByUnlikes } from './actions/postActions';

import { loadPostsByUnviews } from './actions/postActions';

import { loadPostsByUnbookmarks } from './actions/postActions';
import { loadPostsByUnfollows } from './actions/postActions';
import { loadPostsByUnupvotes } from './actions/postActions';
import { loadPostsByUndownvotes } from './actions/postActions';
import { loadPostsByUnshares } from './actions/postActions';
import { loadPostsByUnreports } from './actions/postActions';
import { loadPostsByUnmutes } from './actions/postActions';
import { loadPostsByUnhides } from './actions/postActions';
import { loadPostsByUnlikes } from './actions/postActions';

function App() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/dashboard" component={DashboardPage} />
          </Switch>
        </div>
      </Router>
    );
  }
  
  export default App;