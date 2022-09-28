import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CreditCard } from '@Types/credit-card/credit-card';
import { Transaction } from '@Types/transaction/transaction';
import { RmUnderscorePipe } from 'src/app/pipes/rm-underscore.pipe';
@Component({
    standalone: true,
    imports: [CommonModule, RmUnderscorePipe, FormsModule],
    selector: 'app-transaction-list',
    templateUrl: './transaction-list.component.html',
    styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionListComponent implements OnChanges {
    @Input() transactions?: Transaction[];

    search: string = '';

    filters = [
        {
            name: 'Last 10 days',
            filter: (t: Transaction): boolean => {
                return 864000000 > new Date().getTime() - t.date.getTime();
            },
        },
        {
            name: 'Amount over 100',
            filter: (t: Transaction): boolean => {
                return t.amount > 100;
            },
        },
    ];
    selectedFilter: (arg0: Transaction) => boolean = this.filters[1].filter;
    selectedSort: (arg0: Transaction, arg1: Transaction) => number = (
        t1,
        t2
    ) => {
        return new Date(t2.date).getTime() - new Date(t1.date).getTime();
    };
    //this.sorts[2].sorter;

    constructor() {}

    ngOnChanges(sChanges: SimpleChanges): void {
        if (sChanges['transactions'] || sChanges['search']) {
            this.transactions = sChanges['transactions'].currentValue
                .sort(this.selectedSort)
                .filter(this.selectedFilter)
                .filter((t: Transaction) =>
                    this.search
                        ? new RegExp(this.search, 'i').test(
                              t.credit_card.card_number
                          )
                        : true
                );
        }
    }

    debounceTimeout?: NodeJS.Timeout;
    searchChange(search: string) {
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
            this.debounceTimeout = setTimeout(() => {
                this.search = search;
            }, 500);
        }
    }
}
