import { createSelector } from '@reduxjs/toolkit';
import { getUserAuthData } from '@/entities/User';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import DashboardIcon from '@/shared/assets/icons/dashboard.svg';
import MyBidIcon from '@/shared/assets/icons/my_bid.svg';
import NewBidIcon from '@/shared/assets/icons/newbid.svg';
import ApprovedBidIcon from '@/shared/assets/icons/approved.svg';
import RejectedBidIcon from '@/shared/assets/icons/rejectedbid.svg';
import { SidebarItemType } from '../types/sidebar';

export const getSidebarItems = createSelector(
    getUserAuthData,
    (userData) => {
        const sidebarItemsList: SidebarItemType[] = [
            {
                path: RoutePath.dashboard,
                Icon: DashboardIcon,
                text: 'Дашборд',
            },
            {
                path: RoutePath.my_bid,
                Icon: MyBidIcon,
                text: 'Мои заявки',
            },
            {
                path: RoutePath.new_bid,
                Icon: NewBidIcon,
                text: 'Новая заявка',
            },
            {
                path: RoutePath.approve_bid,
                Icon: ApprovedBidIcon,
                text: 'Согласованные заявки',
            },
            {
                path: RoutePath.rejected_bid,
                Icon: RejectedBidIcon,
                text: 'Отклоненные заявки',
            },
            // {
            //     path: RoutePath.main,
            //     Icon: MainIcon,
            //     text: 'Главная',
            // },
            // {
            //     path: RoutePath.about,
            //     Icon: AboutIcon,
            //     text: 'О сайте',
            // },
        ];

        if (userData) {
            // sidebarItemsList.push(
            //     {
            //         path: RoutePath.profile + userData.id,
            //         Icon: ProfileIcon,
            //         text: 'Профиль',
            //         authOnly: true,
            //     },
            //     {
            //         path: RoutePath.articles,
            //         Icon: ArticleIcon,
            //         text: 'Статьи',
            //         authOnly: true,
            //     },
            // );
        }

        return sidebarItemsList;
    },
);
