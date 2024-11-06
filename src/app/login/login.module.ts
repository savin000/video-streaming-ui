import {NgModule} from "@angular/core";
import {LoginComponent} from "./login.component";
import {TuiInputModule, TuiInputPasswordModule} from "@taiga-ui/kit";
import {TuiButtonModule} from "@taiga-ui/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [LoginComponent],
    bootstrap: [],
    providers: [],
    imports: [
        ReactiveFormsModule,
        FormsModule,
        TuiInputModule,
        TuiInputPasswordModule,
        TuiButtonModule
    ]
})
export class LoginModule {}
