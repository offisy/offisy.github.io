import DatePicker from '@/components/DatePicker.vue';
import { PluginObject } from 'vue';
export declare type CalendarType = 'single' | 'multi' | 'range';
export interface DateRange {
    startDate: Date;
    endDate: Date;
}
export interface PluginOptions {
    locale?: Locale;
    okText?: string;
    discardText?: string;
    okClass?: string | string[];
    discardClass?: string | string[];
    presets?: {
        range?: {
            [key: string]: {
                title: string;
                value: (() => DateRange);
            };
        };
        single?: {
            [key: string]: {
                title: string;
                value: (() => Date);
            };
        };
        multi?: {
            [key: string]: {
                title: string;
                value: (() => Date);
            };
        };
    };
}
export declare const components: {
    DatePicker: typeof DatePicker;
};
export declare const OffisyDatePicker: PluginObject<PluginOptions>;
export default OffisyDatePicker;
