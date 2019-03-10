import React, { Component } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

class PageNav extends Component {
  render() {
    const lastPage = Math.ceil(this.props.itemCount / this.props.itemsPerPage);
    var i = 0,
      spread = Math.floor(this.props.numberOfButtons / 2),
      nr = Math.min(Math.max(this.props.currentPage - spread, 1),lastPage-this.props.numberOfButtons+1),
      items = [];
    while (++i <= this.props.numberOfButtons && i < lastPage) {
      items[i] = (
        <PaginationItem key={i} onClick={this.props.changeResultPage.bind(this, nr)} active={nr === this.props.currentPage}>
          <PaginationLink>{nr}</PaginationLink>
        </PaginationItem>
      );
      nr++;
    }
    return (
      <Pagination>
        <PaginationItem onClick={this.props.changeResultPage.bind(this, 1)} disabled={!(this.props.currentPage > 1)}>
          <PaginationLink>{"<<"}</PaginationLink>
        </PaginationItem>
        <PaginationItem onClick={this.props.changeResultPage.bind(this, this.props.currentPage - 1)} disabled={!(this.props.currentPage > 1)}>
          <PaginationLink>{"<"}</PaginationLink>
        </PaginationItem>
        {items.map(c => c)}
        <PaginationItem onClick={this.props.changeResultPage.bind(this, this.props.currentPage + 1)} disabled={!(this.props.currentPage < lastPage)}>
          <PaginationLink>{">"}</PaginationLink>
        </PaginationItem>
        <PaginationItem onClick={this.props.changeResultPage.bind(this, lastPage)} disabled={!(this.props.currentPage < lastPage)}>
          <PaginationLink>{">>"}</PaginationLink>
        </PaginationItem>
      </Pagination>
    );
  }
}
export default PageNav;
