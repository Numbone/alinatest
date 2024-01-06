/* eslint-disable i18next/no-literal-string */
import { getMonth, getYear } from 'date-fns';
import ru from 'date-fns/locale/ru';
import DatePicker from 'react-datepicker';
import { MutableRefObject } from 'react';
import { Button, ButtonSize, ButtonTheme } from '../Button/Button';
import { HStack } from '../Stack';
import cls from './CustomDatePicker.module.scss';

interface CustomDatePickerProps {
    onChange: (date: any) => void;
}
const CustomDatePicker = (props:CustomDatePickerProps) => {
    const { onChange } = props;

    const months = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
    ];
    return (
        <DatePicker
            locale={ru}
            onChange={onChange}
            inline
            dateFormat="yyyy-MM-dd"
            renderCustomHeader={({
                date,
                decreaseMonth,
                increaseMonth,
                prevMonthButtonDisabled,
                nextMonthButtonDisabled,
            }) => (
                <div
                    className={cls.wrapper}
                >
                    <div>
                        {getYear(date)}
                        {' '}
                        {months[getMonth(date)]}
                    </div>
                    <HStack gap="16">
                        <Button
                            theme={ButtonTheme.CLEAR}
                            size={ButtonSize.M}
                            onClick={decreaseMonth}
                            disabled={prevMonthButtonDisabled}
                        >
                            {'<'}
                        </Button>
                        <Button theme={ButtonTheme.CLEAR} onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                            {'>'}
                        </Button>
                    </HStack>

                </div>
            )}
        />
    );
};

export default CustomDatePicker;
