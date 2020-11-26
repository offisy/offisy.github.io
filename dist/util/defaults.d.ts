import { DateRange, PluginOptions } from '@/lib';
interface Defaults {
    locale: Locale;
    okText: string;
    discardText: string;
    okClass: string | string[];
    discardClass: string | string[];
    presets: {
        range: {
            [key: string]: {
                title: string;
                value: (() => DateRange);
            };
        };
        single: {
            [key: string]: {
                title: string;
                value: (() => Date);
            };
        };
        multi: {
            [key: string]: {
                title: string;
                value: (() => Date);
            };
        };
    };
}
declare const defaults: Defaults;
export declare function setupDefaults(opts?: PluginOptions): Defaults;
export default defaults;
