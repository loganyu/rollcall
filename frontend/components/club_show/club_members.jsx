import React from 'react';

class ClubMembers extends React.Component {
  constructor(props) {
    super(props);

    this.handleDestroyMember = this.handleDestroyMember.bind(this);
  }

  handleDestroyMember(memberId) {
    this.props.destroyMember(memberId);
  }

  render() {
    const { members } = this.props;
    const membersList = (members) => (
      members.map(member => (
        <div key={member.id}>
          <ul>
            <li>Email: {member.email} </li>
          </ul>
          <button
            className="delete-button"
            onClick={() => this.handleDestroyMember(member.id)}>
            Delete
          </button>
        </div>
      ))
    );


    return (
      <div className="members">
        <h3>Club Members</h3>
        {membersList(members)}
      </div>
    );
  }
};

export default ClubMembers;
