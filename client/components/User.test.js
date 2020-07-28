import React from "react";
import { expect, enzyme, shallow } from "../lib/test-setup";
import User from "./User.jsx";

// name: claires-first-app
// link: https://claires-first-app.herokuapp.com/
// gitlink: https://git.heroku.com/claires-first-app.git
// console.log(shallow)
const fakeUser = {
  firstName: "Fake",
  lastName: "User",
  email: "fake.user@example.com",
};

describe("User Component", () => {
  it("should render firstName, lastName, email", () => {
    const user = shallow(<User {...fakeUser} />);
    expect(user.find(".user--first-name").text()).to.equal(fakeUser.firstName);
    expect(user.find(".user--last-name").text()).to.equal(fakeUser.lastName);
    expect(user.find(".user--email").text()).to.equal(fakeUser.email);
  });
});
