import { Component, OnInit } from '@angular/core';
import { CreditCard } from '@Types/credit-card/credit-card';
import { Observable } from 'rxjs';
import { CreditCardService } from '../../credit-card.service';

@Component({
    selector: 'app-credit-card-list',
    templateUrl: './credit-card-list.component.html',
    styleUrls: ['./credit-card-list.component.scss'],
})
export class CreditCardListComponent implements OnInit {
    cards$: Observable<CreditCard[]>;

    constructor(private creditCardService: CreditCardService) {
        this.cards$ = creditCardService.getCreditCards();
    }

    ngOnInit(): void {}
}
