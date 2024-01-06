import { CurrencyType } from '@/shared/types';
import { DataTime } from '@/shared/types/data';

export interface GraphMultiPartSchema {
    setGraphicLine:CurrencyType,
    setGraphicBar:DataTime,
    setGraphicMulti:DataTime,
    setGraphicPie:DataTime,
}
