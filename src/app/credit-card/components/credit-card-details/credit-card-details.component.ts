import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreditCard } from '@Types/credit-card/credit-card';
import { switchMap, Observable, of } from 'rxjs';
import { CreditCardService } from '../../credit-card.service';

@Component({
    selector: 'app-credit-card-details',
    templateUrl: './credit-card-details.component.html',
    styleUrls: ['./credit-card-details.component.scss']
})
export class CreditCardDetailsComponent implements OnInit {
    card$: Observable<CreditCard> | undefined;

    constructor(private creditcardService: CreditCardService, private route: ActivatedRoute) {
        this.route.paramMap.subscribe(p => {
            const cardNumber = p.get('card_number');
            this.card$ = this.creditcardService.getCreditCardByCardNumber(cardNumber);
        })
    }

    ngOnInit(): void { }

}
