import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      Page One
      <a href="/2">Navigate to pg.2</a> BAD!
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      Page Two
      <button>Click me!</button>
      <a href="/">Navigate to pg.1</a> BAD!!
    </div>
  );
};

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/2" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
