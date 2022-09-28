import { Component, OnInit } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    ValidationErrors,
    Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { CreditCardService } from 'src/app/credit-card/credit-card.service';
import { CreditCard } from '@Types/credit-card/credit-card';
import { CURRENCIES, Transaction } from '@Types/transaction/transaction';
import { TransactionService } from '../../transaction.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-transaction-add',
    templateUrl: './transaction-add.component.html',
    styleUrls: ['./transaction-add.component.scss'],
})
export class TransactionAddComponent implements OnInit {
    cards$: Observable<CreditCard[]>;
    todaysDate: Date;
    currencies: String[] = CURRENCIES;

    transactionForm = this.formBuilder.group({
        credit_card: ['', Validators.required], //vælg fra liste + req
        amount: ['', [this.amountValidation]], //must be number + req + positive
        currencies: ['', Validators.required], //req
        comment: [''], //not req
        date: ['', Validators.required], //req
    });

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private creditCardService: CreditCardService,
        private transactionService: TransactionService
    ) {
        this.cards$ = creditCardService.getCreditCards();
        this.cards$.subscribe((t) => console.log(t));
        console.log(this.cards$);
        this.todaysDate = new Date();
    }

    ngOnInit(): void {}

    onSubmit(form: FormGroup) {
        // console.log(this.transactionForm.value);
        const formValueWithCorrectDate: Transaction = {
            ...form.value,
            date: new Date(form.value.date).getTime(),
        };
        console.log(formValueWithCorrectDate);

        this.transactionService
            .createTransaction(formValueWithCorrectDate)
            .subscribe((res) => {
                if (res) {
                    this.router.navigate(['/']);
                }
            });
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

    dateChangeHandler(date: Date) {
        const stringDate: string = `${
            date.getMonth() + 1
        }/${date.getDate()}/${date.getFullYear()}`;
        //this.transactionForm.get('date').setValue(stringDate);
    }

    dateValidator(group: FormControl): ValidationErrors | null {
        return null;
    }

    get date(): FormControl {
        return this.transactionForm.get('date') as FormControl;
    }

    get dateErrors(): ValidationErrors {
        return this.transactionForm.get('date')?.errors ?? {};
    }
}
