import { BidSelectType } from '@/entities/BidSelect';

export interface NewBidPageSchema {
    name?:string;
    price?:number;
    type?:BidSelectType;
    confirmation?:boolean;
    amount?:number;
    city:string;
    phone?:string;
    dateTime:string;
}
