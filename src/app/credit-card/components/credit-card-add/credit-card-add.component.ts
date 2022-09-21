import { Component, OnInit } from '@angular/core';
import { CreditCard } from '@Types/credit-card/credit-card';
import { Observable } from 'rxjs';
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    ValidationErrors,
} from '@angular/forms';
@Component({
    selector: 'app-credit-card-add',
    templateUrl: './credit-card-add.component.html',
    styleUrls: ['./credit-card-add.component.scss'],
})
export class CreditCardAddComponent implements OnInit {
    creditCardForm = this.formBuilder.group({
        card_number: [''],
        cardholder_name: [''],
        csc_code: [''],
        expiration: this.formBuilder.group({
            expiration_date_month: [''],
            expiration_date_year: [''],
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
}
