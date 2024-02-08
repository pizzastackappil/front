import type { ComponentMeta, ComponentStory } from '@storybook/react';


import React from 'react';
import { Footer } from './footer.components';



export default {
  title: 'Footer/Footer',
  component: Footer,
  } as ComponentMeta<typeof Footer >

  const Template: ComponentStory<typeof Footer> =  () => <Footer/>

  export const View = Template.bind({})