import React from 'react';
import PropTypes from 'prop-types';
import { FloatingActionButton } from 'material-ui';
import ContentAdd from 'material-ui/svg-icons/content/add';

export default class AddMenteeBtn extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.addMentee();
  }

  render() {
    return (
      <FloatingActionButton
        mini
        onClick={this.handleClick}
        style={{
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <ContentAdd />
      </FloatingActionButton>
    );
  }
}

AddMenteeBtn.propTypes = {
  addMentee: PropTypes.func.isRequired,
};

