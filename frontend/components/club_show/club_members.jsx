import React from 'react';

class ClubMembers extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemoveMember = this.handleRemoveMember.bind(this);
  }

  handleRemoveMember(memberId) {
    this.props.destroyMember(memberId);
  }

  handleMakeAdmin(memberId) {
    const formData = new FormData();
    formData.append('id', memberId);

    this.props.createAdmin(formData);
  }

  render() {
    const { members, userStatus } = this.props;
    const { isAdmin, currentUser } = userStatus;
    const membersList = (members) => (
      members.map(member => (
        <div key={member.id}>
          <ul>
            <li>Email: {member.email} </li>
          </ul>
          { currentUser && isAdmin &&
            <div>
              <button
                className="delete-button"
                onClick={() => this.handleRemoveMember(member.id)}>
                Remove Member
              </button>
              <button
                className="delete-button"
                onClick={() => this.handleMakeAdmin(member.id)}>
                Make Admin
              </button>
            </div>
          }
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
