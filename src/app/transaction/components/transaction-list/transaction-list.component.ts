import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Transaction } from '@Types/transaction/transaction';
import { TransactionService } from '../../transaction.service';
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
            name: 'Upcoming',
            filter: (t: Transaction): boolean => {
                return new Date().getTime() < new Date(t.date).getTime();
            },
        },
        {
            name: 'Amount over 100',
            filter: (t: Transaction): boolean => {
                return t.amount > 100;
            },
        },
    ];
    selectedFilter?: {
        filter: (arg0: Transaction) => boolean;
        name: string;
    } = this.filters[1];
    selectedSort: (arg0: Transaction, arg1: Transaction) => number = (
        t1,
        t2
    ) => {
        return new Date(t2.date).getTime() - new Date(t1.date).getTime();
    };
    //this.sorts[2].sorter;

    constructor(private transactionsService: TransactionService) {}

    updateTransactions() {
        this.shownTransactions = this.transactions
            .sort(this.selectedSort)
            .filter(this.selectedFilter?.filter ?? (() => true))
            .filter((t: Transaction) =>
                this.search
                    ? new RegExp(this.search, 'i').test(
                          t.credit_card.card_number
                      )
                    : true
            );
    }

    onFilterChange(filter: {
        filter: (arg0: Transaction) => boolean;
        name: string;
    }) {
        this.selectedFilter = filter;
        this.updateTransactions();
    }

    ngOnChanges(sChanges: SimpleChanges): void {
        if (sChanges['transactions']) {
            this.updateTransactions();
        }
    }

    onDelete(transaction_uid: string) {
        this.transactionsService
            .removeTransaction(transaction_uid)
            .subscribe(() => {
                this.transactions = this.transactions.filter(
                    (t) => t.transaction_uid !== transaction_uid
                );
                this.updateTransactions();
            });
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
