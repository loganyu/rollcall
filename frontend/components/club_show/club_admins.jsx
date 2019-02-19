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
        <ul key={admin.id} className="member-item">
          <li>{admin.email} </li>
          {currentUser && isAdmin &&
            <li>
              <button
                className="gray-button"
                onClick={() => this.handleRevokeAdmin(admin.id)}>
                Revoke Admin
              </button>
            </li>
          }
        </ul>
      ))
    );


    return (
      <div>
        <h2>Club Admins</h2>
        <div className="member-list">
          {owner &&
            <ul>
              <li>{owner.email} (owner)</li>
            </ul>
          }
          {adminsList(admins)}
        </div>
      </div>
    );
  }
};

export default ClubAdmins;
