import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
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
export class TransactionListComponent implements OnInit {
    @Input() transactions?: Transaction[];
    constructor() {}

    ngOnInit(): void {}
}
