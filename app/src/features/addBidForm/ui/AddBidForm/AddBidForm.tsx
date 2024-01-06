/* eslint-disable no-restricted-syntax */
/* eslint-disable i18next/no-literal-string */
import { format } from 'date-fns';
import { memo, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { Bid, BidSelectType } from '@/entities/BidSelect';
import { City } from '@/shared/types';
import { Card } from '@/shared/ui/Card/Card';
import CustomDatePicker from '@/shared/ui/CustomDatePicker/CustomDatePicker';
import { MyCheckBox } from '@/shared/ui/MyCheckBox/MyCheckBox';
import { MyInput } from '@/shared/ui/MyInput/MyInput';
import { MyInputNumber } from '@/shared/ui/MyInputNumber/MyInputNumber';
import { MyPhoneNumber } from '@/shared/ui/MyPhoneNumber/MyPhoneNumber';
import MyRadio from '@/shared/ui/MyRadio/MyRadio';
import { ListBox } from '@/shared/ui/Popups';
import { HStack, VStack } from '@/shared/ui/Stack';
import { useAddBidsMutation } from '../../../../entities/BidSelect/model/api/bidApi';
import cls from './AddBidForm.module.scss';
import { Button, ButtonSize, ButtonTheme } from '@/shared/ui/Button/Button';

interface AddBidFormProps {
    className?: string;
}

const optionsBid = [
    {
        value: BidSelectType.CLASSIC,
        content: BidSelectType.CLASSIC,
    },
    {
        value: BidSelectType.NEW,
        content: BidSelectType.NEW,
    },
];

const optionsCity = [
    {
        value: City.ALMATA,
        content: City.ALMATA,
    },
    {
        value: City.ASTANA,
        content: City.ASTANA,
    },
    {
        value: City.AKTAU,
        content: City.AKTAU,
    },
    {
        value: City.AKTOBE,
        content: City.AKTOBE,
    },
    {
        value: City.ATIRAY,
        content: City.ATIRAY,
    },
    {
        value: City.KARAGANDA,
        content: City.KARAGANDA,
    },
    {
        value: City.KOKSHETAU,
        content: City.KOKSHETAU,
    },
    {
        value: City.KYZYLORDA,
        content: City.KYZYLORDA,
    },
];

export const AddBidForm = memo((props: AddBidFormProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const [addBid] = useAddBidsMutation();
    const closeAfter15 = () => toast.success('Заявка успешно создано', {
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
    });

    const {
        register, handleSubmit, setValue, watch, reset, formState: { errors }, setError,
    } = useForm<Bid>();
    const isChecked = (value: string | boolean | undefined) => watch('confirmation') === value;

    const onSubmit: SubmitHandler<Bid> = (data) => {
        addBid({ ...data, id: Date.now() });
        closeAfter15();
        reset();
    };
    const [dis, setDis] = useState(false);

    const allSettled = watch();
    function checkValues(obj: { [key: string]: any }): boolean {
        for (const key of Object.keys(obj)) {
            if (obj[key] !== false && obj[key] !== undefined && obj[key] !== '') {
                return true; // If any value is not false, undefined, or "", return true
            }
        }
        return false;
    }
    useEffect(() => {
        setDis(checkValues(allSettled));
    }, [allSettled]);
    return (
        <Card>
            <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
                <HStack max gap="40" align="start">
                    <VStack max gap="40">
                        <VStack max gap="8">
                            <MyInput
                                label="Название заявки*"
                                {...register('name', {
                                    required: true,
                                    minLength: 1,
                                })}
                                id="name"
                                placeholder="Напишите название заявки"
                                autoComplete="off"
                            />
                            {errors?.name?.type === 'required' && <p className={cls.red}> обязательные поля</p>}
                        </VStack>

                        <HStack justify="between" max gap="70">
                            <MyInput
                                label="Сумма заявки"
                                {...register('price')}
                                id="name"
                                placeholder="Сумма"
                                autoComplete="off"
                                svg
                                type="number"
                            />
                            <VStack max gap="8">
                                <ListBox
                                    {...register('type', {
                                        required: true,
                                        minLength: 1,
                                    })}
                                    onChange={(value) => setValue('type', value as BidSelectType)}
                                    items={optionsBid}
                                    value={watch('type') as BidSelectType}
                                    label="Тип заявки*"
                                    readonly={false}
                                />
                                {errors?.type?.type === 'required' && <p className={cls.red}> обязательные поля</p>}
                            </VStack>
                        </HStack>

                        <VStack max gap="40">
                            <VStack max gap="10">
                                <label className={cls.label}> Позвонить для подтверждения</label>
                                <HStack max gap="16" align="center">
                                    <MyRadio
                                        id="yes"
                                        name="yes   "
                                        value="true"
                                        text="Да"
                                        onChange={(e) => setValue('confirmation', true)}
                                        checked={isChecked(true)}
                                    />
                                    <MyRadio
                                        id="no"
                                        name="no"
                                        value="false"
                                        text="Нет"
                                        onChange={(e) => setValue('confirmation', false)}
                                        checked={isChecked(false)}
                                    />
                                </HStack>
                            </VStack>
                            <VStack max gap="10">
                                <label className={cls.label}> Получать дополнительную информацию</label>
                                <VStack max gap="10">
                                    <MyCheckBox label="Письма на почту" {...register('mail')} />
                                    <MyCheckBox label="СМС на телефон" {...register('sms')} />
                                </VStack>
                            </VStack>
                        </VStack>

                        <label className={cls.label}>* - обязательные поля</label>
                    </VStack>

                    <VStack max gap="40">
                        <MyInputNumber
                            label="Количество заявителей"
                            {...register('amount')}
                            id="name"
                            placeholder="Напишите название заявки"
                            autoComplete="off"
                            onCLickDown={() => setValue('amount', Number(watch('amount')) - 1)}
                            onClickUp={() => setValue('amount', Number(watch('amount')) + 1)}
                        />
                        <ListBox
                            onChange={(value) => setValue('city', value as BidSelectType)}
                            items={optionsCity}
                            value={watch('city') as BidSelectType}
                            label="Город"
                            readonly={false}
                        />

                    </VStack>

                    <VStack max gap="40">
                        <MyPhoneNumber
                            required
                            label="Номер телефона*"
                            {...register('phone')}
                            placeholder="+7 (___) ___-__-__"
                        />
                        <CustomDatePicker
                            onChange={(value) => { setValue('dateTime', format(new Date(value), 'Pp')); }}
                        />
                    </VStack>

                </HStack>
                <HStack max gap="70" className={cls.mt}>
                    <Button type="submit" size={ButtonSize.M}>
                        Отправить
                    </Button>
                    {
                        dis && (
                            <Button theme={ButtonTheme.ALINA} size={ButtonSize.M}>
                                Очистить
                            </Button>
                        )
                    }
                </HStack>

            </form>
        </Card>
    );
});
