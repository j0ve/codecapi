import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "./SearchGitForm.css";

class SearchGitForm extends Component {
  render() {
    return (
      <div className="searchGitFormMain">
        <Form onSubmit={this.props.onSubmit}>
          <FormGroup row>
            <Label>Search:</Label>
            <Input type="text" name="searchString" onChange={this.props.onChange} />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="searchIn" value="" onChange={this.props.onChange} defaultChecked={true} /> All
            </Label>
          </FormGroup>
          <FormGroup tag="fieldset">
            <FormGroup check>
              <Label check>
                <Input type="radio" name="searchIn" value="+in:login" onChange={this.props.onChange} /> Usernames
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="searchIn" value="+in:fullname" onChange={this.props.onChange} /> Full name
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="searchIn" value="+in:email" onChange={this.props.onChange} /> Email
              </Label>
            </FormGroup>
          </FormGroup>
          <FormGroup row>
            <Button type="submit" color="primary" className="pull-right" disabled={!this.props.searchString.length > 0}>
              Submit
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
export default SearchGitForm;
