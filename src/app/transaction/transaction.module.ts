import { NgModule } from '@angular/core';
import { TransactionOverviewComponent } from './components/transaction-overview/transaction-overview.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionAddComponent } from './components/transaction-add/transaction-add.component';
import { RouterModule, Routes } from '@angular/router';
import { RmUnderscorePipe } from '../pipes/rm-underscore.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { TransactionListItemComponent } from './components/transaction-list-item/transaction-list-item.component';

const routes: Routes = [
    {
        path: '',
        component: TransactionOverviewComponent,
    },
    {
        path: 'add',
        component: TransactionAddComponent,
    },
];

@NgModule({
    declarations: [TransactionOverviewComponent, TransactionAddComponent],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
        TransactionListItemComponent,
        RmUnderscorePipe,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
        TransactionListComponent,
    ],
    exports: [RouterModule],
})
export class TransactionModule {}
