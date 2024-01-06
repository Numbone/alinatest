import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import CloseIcon from '@/shared/assets/icons/close.svg';
import EditIcon from '@/shared/assets/icons/edit.svg';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';
import { MyInputNumber } from '@/shared/ui/MyInputNumber/MyInputNumber';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Page } from '@/widgets/Page/Page';
import cls from './MyBidPage.module.scss';
import { MyInput } from '@/shared/ui/MyInput/MyInput';
import LeftIcon from '@/shared/assets/icons/left.svg';
import RightIcon from '@/shared/assets/icons/right.svg';
import FilterIcon from '@/shared/assets/icons/filter.svg';
import SortIcon from '@/shared/assets/icons/sort.svg';
import SearchIcon from '@/shared/assets/icons/search.svg';
import { useDeleteBidsMutation, useGetBidsQuery } from '@/entities/BidSelect/model/api/bidApi';

interface MyBidPageProps {
    className?: string;
}

const MyBidPage = (props: MyBidPageProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const [page, setPage] = useState(1);
    const [pageBtn, setPageBtn] = useState(0);
    const { data, isLoading } = useGetBidsQuery(page);
    const [deleteId] = useDeleteBidsMutation();
    const closeAfter15 = () => toast.success('Заявка успешно удалено', {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
    });
    if (isLoading && data === undefined) {
        return null;
    }
    return (
        <Page className={classNames(cls.MyBidPage, {}, [className])}>
            <Card>
                <VStack max gap="32" className={cls.mb}>
                    <HStack max gap="70">
                        <div className={cls.input_wrapper}>
                            <input placeholder="Поиск" className={cls.input} type="text" />
                            <SearchIcon />
                        </div>
                        <HStack gap="70">
                            <SortIcon />
                            <FilterIcon />
                        </HStack>
                    </HStack>
                    <table className={cls.table}>
                        <thead>
                            <tr className={cls.head}>
                                <th>ID</th>
                                <th>ФИО</th>
                                <th>Номер телефона</th>
                                <th>Тип заявки</th>
                                <th>Дата</th>
                                <th>Кол-во</th>
                                <th>Город</th>
                                <th>Звонок</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                data?.map((item) => (
                                    <tr className={cls.row}>
                                        <td>{item?.id}</td>
                                        <td>{item?.name}</td>
                                        <td>{item?.phone}</td>
                                        <td>{item?.type}</td>
                                        <td>{item?.dateTime}</td>
                                        <td>{item?.amount}</td>
                                        <td>{item?.city}</td>
                                        <td>{item?.sms ? 'Да' : 'Нет' }</td>
                                        <td className={cls.icon}>
                                            <div className={cls.icon}>
                                                <EditIcon />
                                            </div>
                                            <div onClick={() => {
                                                deleteId(item?.id ?? 0);
                                                closeAfter15();
                                            }}
                                            >
                                                <CloseIcon />
                                            </div>

                                        </td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </VStack>

                <HStack max justify="between" align="center">
                    <HStack gap="16">
                        <div onClick={() => page > 0 && setPage(page - 1)} className={cls.page_icon}>
                            <LeftIcon />
                        </div>
                        <div className={cls.page_text}>
                            {page}
                            /100
                        </div>

                        <div onClick={() => setPage(page + 1)} className={cls.page_icon}>
                            <RightIcon />
                        </div>
                    </HStack>
                    <HStack gap="16">
                        <div className={cls.page_text}>
                            Перейти на страницу
                        </div>
                        <MyInput type="number" onChange={(e) => setPageBtn(Number(e.target.value))} width={56} />
                        <Button onClick={() => setPage(pageBtn)}>
                            Перейти
                        </Button>
                    </HStack>
                </HStack>
            </Card>
        </Page>
    );
};

export default memo(MyBidPage);
