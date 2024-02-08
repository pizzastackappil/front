import type { ComponentMeta, ComponentStory } from "@storybook/react";

import React from "react";
import { MenuList } from "./menu-list.components";
import pizzaMenu from "@app/mocks/pizza.json"


export default {
  title: "Menu/Menu List",
  component: MenuList,
} as ComponentMeta<typeof MenuList>;

const Template: ComponentStory<typeof MenuList> = (args) => <MenuList {...args} />;

export const View = Template.bind({});
View.args = {
  items:pizzaMenu, 
}

