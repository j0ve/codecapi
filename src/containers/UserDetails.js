import React, { Component } from "react";
import { Table } from "reactstrap";
import Moment from "react-moment";
import { getUserDetails } from "../libs/api";
import "./UserDetails.css";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { userDetails: {} };
  }
  async componentDidMount() {
    const userDetails = await getUserDetails(this.props.match.params.id);
    this.setState({ userDetails: userDetails });
  }
  render() {
    return (
      <div className="userDetailsMain">
        <Table striped>
          <tbody>
            {Object.keys(this.state.userDetails).map((key, index) => {
              return (
                Object.keys(this.state.userDetails).length > 0 && (
                  <tr key={index}>
                    <th>{key}</th>
                    <td>{key.indexOf("_at") > 0 ? <Moment>{this.state.userDetails[key]}</Moment> : this.state.userDetails[key]}</td>
                  </tr>
                )
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default UserDetails;
