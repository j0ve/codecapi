import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Table, Label } from "reactstrap";
import PageNav from "./PageNav";
import "./SearchGitResultList.css";

class SearchGitResultList extends Component {
  render() {
    return (
      <div className="searchGitResultListMain">
        <Label>Results:</Label>
        <Table striped>
          <thead>
            <tr>
              <th>id</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody>
            {this.props.searchResults.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>
                    <Link to={`/userdetails/${item.login}`}>{item.login}</Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        <PageNav
          itemCount={this.props.searchResultCount}
          currentPage={this.props.searchResultPage}
          itemsPerPage={this.props.resultsPerPage}
          numberOfButtons={5}
          changeResultPage={this.props.changeResultPage}
        />
      </div>
    );
  }
}
export default SearchGitResultList;
