import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { MenuItem } from "./menu-items.components";
import React from "react";

export default {
  title: "Menu/Menu item",
  component: MenuItem,
} as ComponentMeta<typeof MenuItem>;

const Template: ComponentStory<typeof MenuItem> = (args) => <MenuItem{...args} />;

export const View = Template.bind({});
View.args ={imagePath:"/assets/pizza/manhattan.jpeg",
weight:555,
title:'Pizza Manhattan',
ingredients:'(подвійна порція грибів), Гриби, Моцарела, Пепероні, Соус Альфредо',
price:215}
