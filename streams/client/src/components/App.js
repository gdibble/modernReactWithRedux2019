import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header.js';
import StreamCreate from './streams/StreamCreate.js';
import StreamEdit from './streams/StreamEdit.js';
import StreamDelete from './streams/StreamDelete.js';
import StreamList from './streams/StreamList.js';
import StreamShow from './streams/StreamShow.js';

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Header />
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
