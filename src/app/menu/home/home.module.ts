import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {VideoComponent} from "./video/video.component";
import {FileInputDialogComponent} from "./file-input-dialog/file-input-dialog.component";
import {TuiButtonModule, TuiScrollbarModule} from "@taiga-ui/core";
import {TuiInputFilesModule, TuiInputModule} from "@taiga-ui/kit";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [
        HomeComponent,
        VideoComponent,
        FileInputDialogComponent,
    ],
    bootstrap: [],
    providers: [],
    exports: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        TuiScrollbarModule,
        TuiInputFilesModule,
        TuiButtonModule,
        TuiInputModule,
        ReactiveFormsModule,
        FormsModule,
    ]
})
export class HomeModule {}
