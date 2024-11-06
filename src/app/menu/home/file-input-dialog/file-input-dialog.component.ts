import {Component, Input} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {tap} from "rxjs";
import {VideoService} from "../../../services/video.service";
import {AuthService} from "../../../services/auth.service";
import {HomeComponent} from "../home.component";

@Component({
    selector: 'app-file-input-dialog',
    templateUrl: './file-input-dialog.component.html',
    styleUrl: './file-input-dialog.component.less'
})
export class FileInputDialogComponent {
    public readonly control = new FormControl();
    public readonly inputControl = new FormControl();
    file: any;
    username: string = '';

    readonly inputForm = new FormGroup({
        inputControl: new FormControl(),
    });

    readonly loadedFiles$ = this.control.valueChanges.pipe(
        tap(file => {
            this.file = file;
        }),
    );

    constructor(private videoService: VideoService, private authService: AuthService) {}

    ngOnInit() {
        this.authService.getAuthInfo().subscribe(authInfo => {
            this.username = authInfo.username ? authInfo.username : '';
        });
    }

    onSubmitVideoButtonClick() {
        const customName = this.inputForm.get('inputControl')?.value;
        this.videoService.addVideo(customName, this.username, this.file).subscribe(() => {
            window.location.reload();
        });
    }
}
