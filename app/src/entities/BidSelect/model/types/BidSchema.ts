import { ValidateProfileError } from '@/features/editableProfileCard/model/consts/consts';

export enum BidSelectType {
    CLASSIC='Классический',
    NEW='Новый'
}

export interface Bid{
        name?:string;
        price?:number;
        type?:BidSelectType;
        confirmation?:boolean;
        amount?:number;
        city?:string;
        phone?:string;
        dateTime?:string;
        mail?:boolean;
        sms?:boolean;
        id?:number;
}

export interface BidSchema {
    form?: Bid;
    isLoading: boolean;
    error?: string;
    validateErrors?: ValidateProfileError[];
}
