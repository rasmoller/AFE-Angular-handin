import { Injectable } from '@angular/core';
import { CreditCard } from '@Types/credit-card/credit-card';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CreditCardModule } from './credit-card.module';

@Injectable({
    providedIn: CreditCardModule,
})
export class CreditCardService {
    constructor(private http: HttpClient) {}

    getCreditCards(): Observable<CreditCard[]> {
        return this.http.get<CreditCard[]>('localhost:3000/credit_cards');
    }

    addCreditCard(newCC: CreditCard): Observable<CreditCard> {
        return this.http.post<CreditCard>('localhost:3000/credit_cards', newCC);
    }

    removeCreditCard(cardNumber: CreditCard['card_number']) {
        return this.http.delete('localhost:3000/credit_cards/' + cardNumber);
    }
}
