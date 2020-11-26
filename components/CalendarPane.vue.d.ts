import { Vue } from 'vue-property-decorator';
import { CalendarType, DateRange } from '@/lib';
export default class CalendarPane extends Vue {
    year: number;
    month: number;
    type: CalendarType;
    previewRange: DateRange | null;
    locale: Locale;
    value: Date | Date[] | DateRange | null;
    get days(): Date[];
    getDisplayType(date: Date): 'selected' | 'start' | 'end' | 'between' | null;
    isOutsideMonth(date: Date): boolean;
    weekDayName(date: Date): string;
}
