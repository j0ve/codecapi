import React from "react";
import { mount } from "enzyme";
import SearchGit from "../containers/SearchGit";
it("renders without crashing", () => {
  mount(<SearchGit />);
});
it("renders form component", () => {
  const wrapper = mount(<SearchGit />);
  expect(wrapper.find("SearchGitForm").exists()).toBe(true);
});
it("call parent method getResults() after child component Button clicked", () => {
  const func = jest.spyOn(SearchGit.prototype, "handleSubmit");
  const wrapper = mount(<SearchGit />);
  wrapper.update();
  wrapper
    .find("SearchGitForm")
    .find("Button")
    .first()
    .simulate("submit");
  expect(func).toHaveBeenCalled();
});
