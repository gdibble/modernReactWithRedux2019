import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header.js';
import StreamCreate from './streams/StreamCreate.js';
import StreamEdit from './streams/StreamEdit.js';
import StreamDelete from './streams/StreamDelete.js';
import StreamList from './streams/StreamList.js';
import StreamShow from './streams/StreamShow.js';
import history from '../history.js';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
