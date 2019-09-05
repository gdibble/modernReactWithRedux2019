import React from 'react';
import ReactDOM from 'react-dom'
import Faker from 'faker'

const App = () => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a className="avatar" href="/">
          <img src={Faker.image.avatar()} alt="Avatar" />
        </a>
        <div className="content">
          <a className="author" href="/">
            Sam
          </a>
        </div>
        <div className="metadata">
          <span className="date">
            Today at 6:00 PM
          </span>
        </div>
        <div className="text">
          Nice blog post!
        </div>
      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'))
