import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import LoginForm, { LoginFormProps } from "./LoginForm";

export default {
  title: "Common/Login",
  component: LoginForm,
} as Meta;

const Template: Story<LoginFormProps> = (args) => <LoginForm {...args} />;

export const Form = Template.bind({});
Form.args = {
  onClick: console.log("clicked"),
  path: "#",
  passwordChange: console.log("password changed"),
  userNameChange: console.log("username changed"),
  clickable: true,
};
