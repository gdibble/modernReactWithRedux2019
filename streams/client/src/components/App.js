import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
  return (
    <div>
      Page One
      <Link to="/2">Navigate to pg.2</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      Page Two
      <button>Click me!</button>
      <Link to="/">Navigate to pg.1</Link>
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
