import React, { Component } from "react";
import { getSearchUsers } from "../libs/api";
import SearchGitForm from "../components/SearchGitForm";
import SearchGitResultList from "../components/SearchGitResultList";
import "./SearchGit.css";

class SearchGit extends Component {
  constructor(props) {
    super(props);
    this.state = { searchString: "", searchIn: "", searchResults: [], searchResultPage: 1, searchResultCount: 0 };
  }
  resultsPerPage = 10;

  constructRequest() {
    return "https://api.github.com/search/users?q=" + this.state.searchString + this.state.searchIn + "&page=" + this.state.searchResultPage + "&per_page=" + this.resultsPerPage;
  }
  async getResults() {
    const result = await getSearchUsers(this.state.searchString, this.state.searchIn, this.state.searchResultPage, this.resultsPerPage);
    this.setState({ searchResults: result.items, searchResultCount: Math.min(1000, result.total_count) });
  }
  changeResultPage(i) {
    this.setState({ searchResultPage: i }, this.getResults);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.getResults();
  }
  render() {
    return (
      <div className="searchGitMain">
        <SearchGitForm onChange={this.handleChange.bind(this)} onSubmit={this.handleSubmit.bind(this)} searchString={this.state.searchString} />
        {this.state.searchResults.length > 0 && (
          <SearchGitResultList
            searchResults={this.state.searchResults}
            searchResultCount={this.state.searchResultCount}
            searchResultPage={this.state.searchResultPage}
            resultsPerPage={this.resultsPerPage}
            changeResultPage={this.changeResultPage.bind(this)}
          />
        )}
      </div>
    );
  }
}

export default SearchGit;
