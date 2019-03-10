import React from "react";
import { shallow } from "enzyme";
import UserDetails from "../containers/UserDetails";

it("renders without crashing", () => {
  shallow(<UserDetails match={{ params: { id: "Bechrissed" } }} />);
});
