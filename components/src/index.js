import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

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
          author="Sam"
          timeAgo="Today at 4:45PM"
          avatar={faker.image.avatar()}
          text={faker.lorem.sentence()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Alex"
          timeAgo="Yesterday at 8:50PM"
          avatar={faker.image.avatar()}
          text={faker.lorem.sentence()}
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Jane"
          timeAgo="2 days ago"
          avatar={faker.image.avatar()}
          text={faker.lorem.sentence()}
        />
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));
