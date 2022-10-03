import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreditCard } from '@Types/credit-card/credit-card';
import { Transaction } from '@Types/transaction/transaction';
import { switchMap, Observable, of, tap, filter, map } from 'rxjs';
import { TransactionService } from 'src/app/transaction/transaction.service';
import { CreditCardService } from '../../credit-card.service';

@Component({
    selector: 'app-credit-card-details',
    templateUrl: './credit-card-details.component.html',
    styleUrls: ['./credit-card-details.component.scss'],
})
export class CreditCardDetailsComponent implements OnInit {
    card$: Observable<CreditCard> | undefined;
    transactions$: Observable<Transaction[]> | undefined;

    constructor(
        private creditcardService: CreditCardService,
        private transactionService: TransactionService,
        private route: ActivatedRoute,
        private router: Router
    ) {
        this.route.paramMap.subscribe((p) => {
            const cardNumber = p.get('card_number');
            this.card$ =
                this.creditcardService.getCreditCardByCardNumber(cardNumber);

            this.transactions$ = this.transactionService
                .getTransactions()
                .pipe(
                    map((tArr) =>
                        tArr.filter(
                            (t) => t.credit_card.card_number === cardNumber
                        )
                    )
                );
        });
    }

    ngOnInit(): void {}

    onDelete(cardNumber: string) {
        this.creditcardService.removeCreditCard(cardNumber).subscribe(() => {
            console.log('Credit card removed');
            this.router.navigate(['/transaction']);
        });
    }
}
