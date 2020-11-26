import { Vue } from 'vue-property-decorator';
export default class CalendarDay extends Vue {
    date: Date;
    displayType: 'selected' | null;
    outsideRange: boolean;
    get classes(): string[];
}
