import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {TuiRootModule} from "@taiga-ui/core";
import {AppRoutingModule} from "./app-routing.module";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {MenuModule} from "./menu/menu.module";
import {LoginModule} from "./login/login.module";
import {RegistrationModule} from "./registration/registration.module";
import {JwtInterceptor} from "./interceptors/jwt.interceptor";

@NgModule({
    declarations: [
        AppComponent,
        PageNotFoundComponent
    ],
    bootstrap: [AppComponent],
    providers: [HttpClientModule, {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true}],
    imports: [
        BrowserModule,
        TuiRootModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        LoginModule,
        RegistrationModule,
        MenuModule
    ]
})
export class AppModule {}
