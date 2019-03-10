import React from "react";
import { mount } from "enzyme";
import SearchGitFResultList from "../components/SearchGitFResultList";

it("renders without crashing", () => {
  mount(<SearchGitFResultList />);
});
