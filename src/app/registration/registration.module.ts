import {NgModule} from "@angular/core";
import {RegistrationComponent} from "./registration.component";
import {TuiInputModule, TuiInputPasswordModule} from "@taiga-ui/kit";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TuiButtonModule} from "@taiga-ui/core";

@NgModule({
    declarations: [RegistrationComponent],
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
export class RegistrationModule {}
