import { Component, Input, OnInit } from '@angular/core';
import { CreditCard } from '@Types/credit-card/credit-card';

@Component({
    selector: 'app-credit-card-list-item',
    templateUrl: './credit-card-list-item.component.html',
    styleUrls: ['./credit-card-list-item.component.scss'],
})
export class CreditCardListItemComponent implements OnInit {
    @Input() card!: CreditCard;
    constructor() {
    }

    ngOnInit(): void { }
}
