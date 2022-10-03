import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Transaction } from '@Types/transaction/transaction';

@Component({
    standalone: true,
    imports: [CommonModule],
    selector: 'app-transaction-list-item',
    templateUrl: './transaction-list-item.component.html',
    styleUrls: ['./transaction-list-item.component.scss'],
})
export class TransactionListItemComponent implements OnInit {
    @Input() transaction?: Transaction;

    constructor() {}

    ngOnInit(): void {}
}
