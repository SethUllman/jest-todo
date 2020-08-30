import React from "react";
import { shallow, mount } from "enzyme";
import Account from "./Account";
import App from "./App";
import toJson from "enzyme-to-json";
import { isMainThread } from "worker_threads";

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders correctly with no error message", () => {
    const wrapper = mount(<App />);
    expect(wrapper.state("error")).toEqual(null);
});

it("renders Account header", () => {
  const wrapper = shallow(<App />);
  const welcome = <h1>Display Active Users Account Details</h1>;
  expect(wrapper.contains(welcome)).toEqual(true);
});


const user = {
  name: 'Emerald Hart',
  email: 'emeraldhart@outlook.com',
  username: 'Maverick2018',
}

describe("<Account />", () => {
  it("accepts user account props", () => {
    const wrapper = mount(<Account user={user} />);
    expect(wrapper.props().user).toEqual(user);
  });
  it("contains users account email", () => {
    const wrapper = mount(<Account user={user} />);
    const value = wrapper.find("p").text();
    expect(value).toEqual("emeraldhart@outlook.com");
  });
  
})