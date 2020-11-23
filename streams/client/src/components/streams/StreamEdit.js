import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';

const StreamEdit = props => {
  const { stream } = props;

  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, [fetchStream]);

  const onSubmit = (formValues) => {
    props.editStream(props.match.params.id, formValues);
  }

  if (!stream) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h3>Edit a Stream</h3>
      <StreamForm
        initialValues={_.pick(stream, 'title', 'description')}
        onSubmit={onSubmit}
      />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
