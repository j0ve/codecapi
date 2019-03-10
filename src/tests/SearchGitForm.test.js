import React from "react";
import { mount } from "enzyme";
import SearchGitForm from "../components/SearchGitForm";

it("renders without crashing", () => {
  mount(<SearchGitForm onChange={function() {}} onSubmit={function() {}} searchString={"test"} />);
});
