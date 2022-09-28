import { NgModule } from '@angular/core';
import { TransactionOverviewComponent } from './components/transaction-overview/transaction-overview.component';
import { TransactionListComponent } from './components/transaction-list/transaction-list.component';
import { TransactionAddComponent } from './components/transaction-add/transaction-add.component';
import { RouterModule, Routes } from '@angular/router';
import { RmUnderscorePipe } from '../pipes/rm-underscore.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

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
        RouterModule.forChild(routes),
        TransactionListComponent,
        RmUnderscorePipe,
        ReactiveFormsModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatFormFieldModule,
    ],
    exports: [RouterModule],
})
export class TransactionModule {}
