import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    ValidationErrors,
    Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { CreditCardService } from 'src/app/credit-card/credit-card.service';
import { CreditCard } from '@Types/credit-card/credit-card';

@Component({
    selector: 'app-transaction-add',
    templateUrl: './transaction-add.component.html',
    styleUrls: ['./transaction-add.component.scss'],
})
export class TransactionAddComponent implements OnInit {
    cards$: Observable<CreditCard[]>;

    transactionForm = this.formBuilder.group({
        credit_card: ['', Validators.required], //vælg fra liste + req
        amount: ['', [this.amountValidation]], //must be number + req + positive
        currency: ['', Validators.required], //req
        comment: [''], //not req
        date: ['', Validators.required], //req
    });

    constructor(
        private formBuilder: FormBuilder,
        private creditCardService: CreditCardService
    ) {
        this.cards$ = creditCardService.getCreditCards();
    }

    ngOnInit(): void {}

    onSubmit() {
        console.log(this.transactionForm.value);
    }

    amountValidation(group: FormControl): ValidationErrors | null {
        const numbers = new RegExp(/^[0-9]*$/).test(group.value)
            ? null
            : {
                  numbers: 'Must only be numbers',
              };
        const positiveNumbers =
            Number(group.value) > 0
                ? null
                : {
                      positiveNumbers: 'Must be larger than 0',
                  };
        const required =
            group.value && (group.value as string).length > 0
                ? null
                : {
                      required: 'Field is required',
                  };
        if (!numbers && !positiveNumbers && !required) {
            return null;
        }
        return { ...numbers, ...positiveNumbers, ...required };
    }

    get amount(): FormControl {
        return this.transactionForm.get('amount') as FormControl;
    }
    get amountErrors(): ValidationErrors {
        return this.transactionForm.get('amount')?.errors ?? {};
    }
}
