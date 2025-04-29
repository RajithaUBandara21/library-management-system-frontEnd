import { Routes } from '@angular/router';
import { ViewAllBooksComponent } from './page/view-all-books/view-all-books.component';
import { LogInComponent } from './page/Auth/log-in/log-in.component';
import { SingUpComponent } from './page/Auth/sing-up/sing-up.component';

export const routes: Routes = [
{path : 'view-all-books', component: ViewAllBooksComponent},
{path : 'logIn', component: LogInComponent},
{path : 'singUp', component: SingUpComponent},

];
