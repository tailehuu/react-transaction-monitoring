import React, { Component } from "react"
import { connect } from "react-redux"
import { fetchAlerts } from "../redux"
import Layout from "./layouts/Layout"

class Alert extends Component {
  componentDidMount() {
    this.props.fetchAlerts()
  }

  render() {
    const userData = this.props.userData

    return (
      <Layout>
        <div>
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3">
            <h1>Alert</h1>
          </div>

          {userData.loading ? (
            <div>loading...</div>
          ) : (userData.error ? (
            <div>{userData.error}</div>
          ) : (
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Company</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.users.map(user =>
                    <tr key={user.id}>
                      <td>{user.id}</td>
                      <td>{user.name}</td>
                      <td>{user.username}</td>
                      <td>{user.address.street}</td>
                      <td>{user.phone}</td>
                      <td>{user.website}</td>
                      <td>{user.company.name}</td>
                    </tr>
                  )}
                </tbody>
              </table>
            ))}
        </div>
      </Layout>
    )
  }
}

const mapStateToProps = state => {
  return {
    userData: state.alert
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAlerts: () => dispatch(fetchAlerts())
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Alert)