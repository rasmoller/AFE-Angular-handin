import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardAddComponent } from './components/credit-card-add/credit-card-add.component';
import { CreditCardListComponent } from './components/credit-card-list/credit-card-list.component';
import { CreditCardListItemComponent } from './components/credit-card-list-item/credit-card-list-item.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: CreditCardListComponent,
    },
    {
        path: 'add',
        component: CreditCardAddComponent,
    },
];

@NgModule({
    declarations: [
        CreditCardAddComponent,
        CreditCardListComponent,
        CreditCardListItemComponent,
    ],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class CreditCardModule {}
