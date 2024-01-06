import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RejectedBidPage } from './RejectedBidPage';

export default {
    title: 'pages/RejectedBidPage',
    component: RejectedBidPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof RejectedBidPage>;

const Template: ComponentStory<typeof RejectedBidPage> = (args) => <RejectedBidPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   
};