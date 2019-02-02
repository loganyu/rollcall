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
    const { admins } = this.props;
    const adminsList = (admins) => (
      admins.map(admin => (
        <div key={admin.id}>
          <ul>
            <li>Email: {admin.email} </li>
          </ul>
          <button
            className="delete-button"
            onClick={() => this.handleRevokeAdmin(admin.id)}>
            Revoke Admin
          </button>
        </div>
      ))
    );


    return (
      <div className="admins">
        <h3>Club Admins</h3>
        {adminsList(admins)}
      </div>
    );
  }
};

export default ClubAdmins;
