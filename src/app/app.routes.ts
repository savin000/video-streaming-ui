import {Routes} from "@angular/router";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {MenuComponent} from "./menu/menu.component";
import {LoginComponent} from "./login/login.component";
import {authGuard} from "./guards/auth.guard";
import {RegistrationComponent} from "./registration/registration.component";

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: 'login'},
    {path: 'login', component: LoginComponent},
    {path: 'registration', component: RegistrationComponent},
    {path: 'menu', component: MenuComponent, canActivate: [authGuard]},
    {path: '**', component: PageNotFoundComponent, canActivate: [authGuard]}
];
