import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { ButtonComponent as Button } from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: "Button",
  color: "primary",
  disabled: false,
  loading: false,
  size: "large",
  fullWidth: false,
};

export const Secondary = Template.bind({});

Secondary.args = {
  label: "Button",
  color: "secondary",
  disabled: false,
  loading: false,
  size: "large",
  fullWidth: false,
};
