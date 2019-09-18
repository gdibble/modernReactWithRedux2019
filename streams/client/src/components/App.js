import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const PageOne = () => {
  return <div>Page One</div>;
};

const PageTwo = () => {
  return <div>Page Two <button>Click me!</button></div>;
};

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <div>
          <Route path="/" exact component={PageOne} />
          <Route path="/" exact component={PageOne} />
          <Route path="/2" component={PageTwo} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
