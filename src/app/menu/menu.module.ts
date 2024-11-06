import {NgModule} from "@angular/core";
import {MenuComponent} from "./menu.component";
import {TuiTabsModule} from "@taiga-ui/kit";
import {CommonModule} from "@angular/common";
import {TuiButtonModule, TuiDialogModule} from "@taiga-ui/core";
import {ProfileModule} from "./profile/profile.module";
import {AboutModule} from "./about/about.module";
import {HomeModule} from "./home/home.module";
import {StreamModule} from "./stream/stream.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        MenuComponent,
    ],
    bootstrap: [],
    providers: [],
    imports: [
        ProfileModule,
        HomeModule,
        AboutModule,
        StreamModule,
        CommonModule,
        TuiTabsModule,
        TuiDialogModule,
        TuiButtonModule,
        ReactiveFormsModule,
        FormsModule,
    ]
})
export class MenuModule {
}
