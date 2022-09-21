import { Component, OnInit } from '@angular/core';
import { CreditCard } from '@Types/credit-card/credit-card';
import { Observable } from 'rxjs';
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    ValidationErrors,
    Validators,
} from '@angular/forms';
@Component({
    selector: 'app-credit-card-add',
    templateUrl: './credit-card-add.component.html',
    styleUrls: ['./credit-card-add.component.scss'],
})
export class CreditCardAddComponent implements OnInit {
    creditCardForm = this.formBuilder.group({
        card_number: ['', [this.cardValidation, Validators.required]],
        cardholder_name: ['', Validators.required],
        csc_code: ['', [this.cscCodeValidation, Validators.required]],
        expiration: this.formBuilder.group({
            expiration_date_month: [
                '',
                [this.expirationMonthValidation, Validators.required],
            ],
            expiration_date_year: ['', Validators.required],
        }),
        issuer: [''],
    });

    month: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
    year: number[] = Array.from(
        { length: 12 },
        (_, i) => i + new Date().getFullYear()
    );

    constructor(private formBuilder: FormBuilder) {}

    ngOnInit(): void {}

    onSubmit() {
        console.log(this.creditCardForm.value);
    }

    cardValidation(group: AbstractControl): ValidationErrors | null {
        return new RegExp(/[0-9]{7,16}/).test(group.get('card_number')?.value)
            ? null
            : {
                  card_number_errors:
                      'Must be a number with a lentgth between 7-16.',
              };
    }

    cscCodeValidation(group: AbstractControl): ValidationErrors | null {
        return new RegExp(/[0-9]{3}/).test(group.get('csc_code')?.value)
            ? null
            : {
                  card_number_errors: 'Must be a number with a length of 3.',
              };
    }

    expirationMonthValidation(group: AbstractControl): ValidationErrors | null {
        //Tjekker om man er i en valid måned i dette år
        const currentDate = new Date();
        if (
            group.get('expiration_date_year')?.value &&
            currentDate.getFullYear() ===
                group.get('expiration_date_year')?.value
        ) {
            if (
                group.get('expiration_date_month')?.value &&
                currentDate.getMonth() >
                    group.get('expiration_date_month')?.value
            ) {
                return {
                    expiration_month_error:
                        'Must be equal or after the current month.',
                };
            }
        }
        return null;
    }

    get cardNumber(): FormControl {
        return this.creditCardForm.get('card_number') as FormControl;
    }
}
