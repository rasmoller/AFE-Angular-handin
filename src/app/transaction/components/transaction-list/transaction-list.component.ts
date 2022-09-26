import { CommonModule } from '@angular/common';
import {
    Component,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import { Transaction } from '@Types/transaction/transaction';
import { AppModule } from 'src/app/app.module';
import { RmUnderscorePipe } from 'src/app/pipes/rm-underscore.pipe';
@Component({
    standalone: true,
    imports: [CommonModule, RmUnderscorePipe],
    selector: 'app-transaction-list',
    templateUrl: './transaction-list.component.html',
    styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionListComponent implements OnChanges {
    @Input() transactions?: Transaction[];

    //TODO ADD Correct sorting methods
    sorts = [
        {
            name: 'Highest first',
            sorter: (t: Transaction, t2: Transaction): number => {
                return 1;
            },
        },
        {
            name: 'Lowest first',
            sorter: (t: Transaction, t2: Transaction): number => {
                return 0;
            },
        },
        {
            name: 'Date added',
            sorter: (t: Transaction, t2: Transaction): number => {
                return -1;
            },
        },
    ];
    selectedSort: (arg0: Transaction, arg1: Transaction) => number =
        this.sorts[2].sorter;

    constructor() {}

    ngOnChanges(sChanges: SimpleChanges): void {
        if (sChanges['transactions']) {
            this.transactions = sChanges['transactions'].currentValue.sort(
                this.selectedSort
            );
        }
    }
}
