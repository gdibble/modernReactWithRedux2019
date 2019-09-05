import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import Faker from 'faker'

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author={Faker.name.firstName()} timeAgo="Today at 4:45 AM" text="Comment 1" avatarSrc={Faker.image.avatar()} />
      <CommentDetail author={Faker.name.firstName()} timeAgo="Today at 2:00 AM" text=" Comment 2" avatarSrc={Faker.image.avatar()} />
      <CommentDetail author={Faker.name.firstName()} timeAgo="Yesterday at 5:00 PM" text="Comment 3" avatarSrc={Faker.image.avatar()} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'))
