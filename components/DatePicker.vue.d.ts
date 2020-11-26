/// <reference types="node" />
import { Vue } from 'vue-property-decorator';
import { CalendarType, DateRange } from '@/lib';
export default class DatePicker extends Vue {
    textValue: string;
    value: Date | Date[] | DateRange | null;
    type: CalendarType;
    okClass: string;
    discardClass: string;
    calendarWidth: number;
    calendarHeight: number;
    localValue: Date | Date[] | DateRange | null;
    input: HTMLElement;
    popover: HTMLElement;
    mounted(): void;
    onValueChanged(): void;
    month: number;
    year: number;
    popoverShowing: boolean;
    closeTimeout: number | NodeJS.Timeout | null;
    openModal(): void;
    closeModal(): void;
    formatValue(): void;
    onTextInput(): void;
    submit(): void;
    discard(): void;
}
