import React from 'react';
import { MemoryRouter, Route, Link } from 'react-router-dom';

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
      <MemoryRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/2" component={PageTwo} />
        </div>
      </MemoryRouter>
    </div>
  );
};

export default App;
