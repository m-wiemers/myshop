import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import LoginButton, { LoginButtonProps } from "./Button";

export default {
  title: "Common/LoginButton",
  component: LoginButton,
} as Meta;

const Template: Story<LoginButtonProps> = (args) => <LoginButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  clickable: true,
  label: "Login",
};
