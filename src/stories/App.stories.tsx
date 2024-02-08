import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { App } from '../App';


export default {
  title: 'Example/Button',
  component: App,
  } as ComponentMeta<typeof App>

  const Template: ComponentStory<typeof App> =  () => <App/>

  export const Primary = Template.bind({})