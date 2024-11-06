import {NgModule} from "@angular/core";

import {TuiAvatarModule, TuiInputFilesModule, TuiTabsModule} from "@taiga-ui/kit";
import {ProfileComponent} from "./profile.component";
import {TuiButtonModule} from "@taiga-ui/core";


@NgModule({
    declarations: [
        ProfileComponent,
    ],
    bootstrap: [],
    providers: [],
    exports: [
        ProfileComponent
    ],
    imports: [
        TuiAvatarModule,
        TuiButtonModule,
    ]
})
export class ProfileModule {}
