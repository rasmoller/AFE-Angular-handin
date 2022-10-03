import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Transaction } from '@Types/transaction/transaction';
import { TransactionListItemComponent } from '../transaction-list-item/transaction-list-item.component';

@Component({
    standalone: true,
    imports: [TransactionListItemComponent, CommonModule, FormsModule],
    selector: 'app-transaction-list',
    templateUrl: './transaction-list.component.html',
    styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionListComponent implements OnChanges {
    @Input() transactions: Transaction[] = [];
    @Input() showSearch: Boolean = true;

    shownTransactions: Transaction[] = [];
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
                return t.amount > 0;
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

    updateTransactions() {
        this.shownTransactions = this.transactions
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

    ngOnChanges(sChanges: SimpleChanges): void {
        if (sChanges['transactions']) {
            this.updateTransactions();
        }
    }

    debounceTimeout?: NodeJS.Timeout;
    searchChange(search: string) {
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
        }
        this.debounceTimeout = setTimeout(() => {
            this.search = search;
            this.updateTransactions();
        }, 500);
    }
}
