import React from 'react';

class ClubAdmins extends React.Component {
  constructor(props) {
    super(props);

    this.handleRevokeAdmin = this.handleRevokeAdmin.bind(this);
  }

  handleRevokeAdmin(adminId) {
    this.props.destroyAdmin(adminId);
  }

  render() {
    const { admins, owner, userStatus } = this.props;
    const { isAdmin, currentUser } = userStatus;
    const adminsList = (admins) => (
      admins.map(admin => (
        <div key={admin.id}>
          <ul>
            <li>Email: {admin.email} </li>
          </ul>
          {currentUser && isAdmin &&
            <button
              className="delete-button"
              onClick={() => this.handleRevokeAdmin(admin.id)}>
              Revoke Admin
            </button>
          }
        </div>
      ))
    );


    return (
      <div className="admins">
        <h3>Club Admins</h3>
        {owner &&
          <ul>
            <li>Email: {owner.email} (owner)</li>
          </ul>
        }
        {adminsList(admins)}
      </div>
    );
  }
};

export default ClubAdmins;
