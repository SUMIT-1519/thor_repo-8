
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Task8Modal from '../components/task8-modal/task8-modal.jsx';
import { closeTask8Modal } from '../reducers/task8-modal';

const mapStateToProps = state => ({
  isOpen: state.scratchGui.task8Modal.isOpen
});

const mapDispatchToProps = dispatch => ({
  onRequestClose: () => dispatch(closeTask8Modal())
});

const Task8ModalWrapper = props => {
  const { isOpen, onRequestClose, ...rest } = props;
  return <Task8Modal isOpen={isOpen} onRequestClose={onRequestClose} {...rest} />;
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Task8ModalWrapper);
