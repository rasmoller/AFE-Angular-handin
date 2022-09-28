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
        if (sChanges['transactions'] || sChanges['search']) {
            this.transactions = sChanges['transactions'].currentValue.filter(
                (t: Transaction) => {
                    if (this.search) {
                        return new RegExp(this.search, 'i').test(
                            t.credit_card.card_number
                        );
                    } else {
                        return true;
                    }
                }
            );
            if (sChanges['transactions']) {
                this.transactions = sChanges['transactions'].currentValue.sort(
                    this.selectedSort
                );
            }
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
