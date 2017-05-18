import React, { PropTypes } from 'react';
import { connect }  from 'react-redux';
import { callToAPI }  from '../actions';

class Users extends React.Component {
  componentWillMount() {
    callToAPI();
  }

  render() {
    return (
      <div>
        {this.props.users.map(({ name }) =>
          <p>{name}</p>
        )}
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

const mapStateToProps = ({ users }) => {
  return { users };
};

const UsersContainer = connect(mapStateToProps)(Users);

export default UsersContainer;
