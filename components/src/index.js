import React from 'react';
import ReactDOM from 'react-dom';
import ApprovalCard from './ApprovalCard';
import CommentDetail from './CommentDetail';
import Faker from 'faker'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author={Faker.name.firstName()}
          timeAgo="Today at 4:45 AM"
          text={Faker.lorem.sentence()}
          avatarSrc={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={Faker.name.firstName()}
          timeAgo="Today at 2:00 AM"
          text={Faker.lorem.sentence()}
          avatarSrc={Faker.image.avatar()}
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={Faker.name.firstName()}
          timeAgo="Yesterday at 5:00 PM"
          text={Faker.lorem.sentence()}
          avatarSrc={Faker.image.avatar()}
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'))
