import { ChangeEventHandler } from 'react';
import cls from './MyRadio.module.scss';

interface Props{
    id:string;
    text:string;
    name:string;
    onChange:ChangeEventHandler<HTMLInputElement>;
    checked:boolean;
    value?: string | number | readonly string[] | undefined
}
const MyRadio = ({
    id, text, name, onChange, checked, value,
}:Props) => {
    return (
        <label htmlFor={id} className={cls.radiobutton_label}>
            <input
                type="radio"
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                checked={checked}
            />
            <div className={cls.text}>
                {text}
            </div>

        </label>
    );
};

export default MyRadio;
