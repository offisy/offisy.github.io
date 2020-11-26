import { CalendarType, DateRange } from '@/lib.ts';
import { Vue } from 'vue-property-decorator';
export default class Calendar extends Vue {
    type: CalendarType;
    value: Date | Date[] | DateRange | null;
    year: number;
    month: number;
    locale: Locale;
    presets?: {
        [key: string]: {
            title: string;
            value: (() => (Date | DateRange));
        };
    };
    calendarWidth: number;
    calendarHeight: number;
    selectionValue: Date | null;
    hoveringValue: Date | null;
    mode: 'selecting' | null;
    get selectionRange(): DateRange | null;
    onDayClicked(day: Date): void;
    get formattedMonth(): string;
    addMonths(months: number): void;
    get datePresets(): {
        name: string;
        value: Date | DateRange;
        id: string;
    }[];
    selectValue(value: Date | DateRange): void;
    isPresetSelected(value: Date | DateRange): boolean;
}
