import type { ComponentMeta, ComponentStory } from "@storybook/react";

import React from "react";
import { MenuList } from "./menu-list.components";


export default {
  title: "Menu/Menu List",
  component: MenuList,
} as ComponentMeta<typeof MenuList>;

const Template: ComponentStory<typeof MenuList> = () => <MenuList />;

export const View = Template.bind({});

