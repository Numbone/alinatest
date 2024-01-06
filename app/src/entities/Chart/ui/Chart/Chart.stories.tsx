import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Chart } from './Chart';

export default {
    title: 'entities/Chart',
    component: Chart,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Chart>;

const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   
};