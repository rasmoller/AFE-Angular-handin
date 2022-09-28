import { Component, OnInit } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    ValidationErrors,
    Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { CreditCardService } from '../../credit-card.service';
@Component({
    selector: 'app-credit-card-add',
    templateUrl: './credit-card-add.component.html',
    styleUrls: ['./credit-card-add.component.scss'],
})
export class CreditCardAddComponent implements OnInit {
    creditCardForm = this.formBuilder.group({
        card_number: ['', [this.cardValidation]],
        cardholder_name: ['', Validators.required],
        csc_code: ['', [this.cscCodeValidation]],
        expiration: this.formBuilder.group(
            {
                expiration_date_month: [''],
                expiration_date_year: [''],
            },
            {
                validators: [
                    this.expirationMonthValidation,
                    Validators.required,
                ],
            }
        ),
        issuer: [''],
    });

    month: number[] = Array.from({ length: 12 }, (_, i) => i + 1);
    year: number[] = Array.from(
        { length: 12 },
        (_, i) => i + new Date().getFullYear()
    );

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private creditCardService: CreditCardService
    ) {}

    ngOnInit(): void {}

    onSubmit(form: FormGroup) {
        // console.log(form.errors);
        // console.log(form.value);
        this.creditCardService.addCreditCard(form.value).subscribe((res) => {
            if (res) {
                this.router.navigate(['/']);
            }
        }); //Routes to credit card list
    }

    cardValidation(group: FormControl): ValidationErrors | null {
        const numbers = new RegExp(/^[0-9]*$/).test(group.value)
            ? null
            : {
                  numbers: 'Must only be numbers',
              };
        const length = new RegExp(/^[\S]{7,16}$/).test(group.value)
            ? null
            : {
                  length: 'Must have a length between 7-16.',
              };
        const required =
            group.value && (group.value as string).length > 0
                ? null
                : {
                      required: 'Field is required',
                  };
        if (!numbers && !length && !required) {
            return null;
        }
        return { ...numbers, ...length, ...required };
    }

    cscCodeValidation(group: FormControl): ValidationErrors | null {
        const required =
            group.value && (group.value as string).length > 0
                ? null
                : {
                      required: 'Field is required',
                  };
        const length = new RegExp(/^[0-9]{3}$/).test(group.value)
            ? null
            : {
                  length: 'Must be a number with a length of 3.',
              };
        if (!length && !required) {
            return null;
        }
        return { ...length, ...required };
    }

    expirationMonthValidation(group: AbstractControl): ValidationErrors | null {
        //Tjekker om man er i en valid måned i dette år
        const currentDate = new Date();
        const exp_year = group.get('expiration_date_year')?.value;
        const exp_month = group.get('expiration_date_month')?.value;

        if (exp_year && exp_month) {
            if (
                currentDate.getFullYear() === exp_year &&
                currentDate.getMonth() > exp_month
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
    get cardNumberErrors(): ValidationErrors {
        return this.creditCardForm.get('card_number')?.errors ?? {};
    }
    get expiration(): FormControl {
        return this.creditCardForm.get('expiration') as FormControl;
    }
    get expirationErrors(): ValidationErrors {
        return this.creditCardForm.get('expiration')?.errors ?? {};
    }
    get cardholderName(): FormControl {
        return this.creditCardForm.get('cardholder_name') as FormControl;
    }
    get cscCode(): FormControl {
        return this.creditCardForm.get('csc_code') as FormControl;
    }
    get cscCodeErrors(): ValidationErrors {
        return this.creditCardForm.get('csc_code')?.errors ?? {};
    }
}
