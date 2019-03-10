import { getUserDetails, getSearchUsers } from "../libs/api";

describe("get async data from github apis", () => {
  it("should load user data", () => {
    return getUserDetails("Bechrissed").then(data => {
      expect(data).toBeDefined();
    });
  });
  it("should load search results", () => {
    return getSearchUsers("Chris").then(data => {
      expect(data).toBeDefined();
    });
  });
});
