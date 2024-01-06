import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ApprovedBidPage } from './ApprovedBidPage';

export default {
    title: 'pages/ApprovedBidPage',
    component: ApprovedBidPage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ApprovedBidPage>;

const Template: ComponentStory<typeof ApprovedBidPage> = (args) => <ApprovedBidPage {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   
};