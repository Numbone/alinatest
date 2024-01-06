import { lazy } from 'react';

export const MyBidPageAsync = lazy(
    () => import('./MyBidPage'),
);
