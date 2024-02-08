import type { ComponentMeta, ComponentStory } from "@storybook/react";

import React from "react";
import { FooterLink } from "./footer-link.components";

export default {
  title: "Footer-Link/Footer-Link",
  component: FooterLink,
} as ComponentMeta<typeof FooterLink>;

const Template: ComponentStory<typeof FooterLink> = (args) => (
  <ul>
    <FooterLink {...args}/>
  </ul>
);

export const View = Template.bind({});
View.args = {
    href:"tel:+380508331679",
    children:"05083331679"
}
