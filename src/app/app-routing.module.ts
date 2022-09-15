import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
    {
        path: 'credit-card',
        loadChildren: () =>
            import('./credit-card/credit-card.module').then(
                (m) => m.CreditCardModule
            ),
    },
    {
        path: 'transaction',
        loadChildren: () =>
            import('./transaction/transaction.module').then(
                (m) => m.TransactionModule
            ),
    },
    {
        path: '',
        redirectTo: 'credit-card',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
