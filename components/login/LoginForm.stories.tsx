import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import LoginForm from "./LoginForm";

export default {
  title: "Common/Login",
  component: LoginForm,
} as Meta;

const Template: Story = () => <LoginForm />;

export const Form = Template.bind({});
