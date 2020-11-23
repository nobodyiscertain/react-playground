import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';
import Modal from '../Modal';
import history from '../../history';

const StreamDelete = props => {
  const { stream } = props;
  const navigateHome = () => history.push('/');

  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, [fetchStream]);

  const actions = (
    <>
      <button
        className="ui button negative"
        onClick={() => props.deleteStream(props.match.params.id)}
      >
        Delete
      </button>
      <button
        className="ui button"
        onClick={navigateHome}
      >
        Cancel
      </button>
    </>
  );

  const renderBody = () => {
    if (!stream) {
      return 'Are you sure you want to delete this stream?';
    }

    return `Are you sure you want to delete this stream: ${stream.title}?`;
  };


  return (
    <div>
      <Modal
        title="Delete Stream"
        body={renderBody()}
        actions={actions}
        onDismiss={navigateHome}
      />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id]
  };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
