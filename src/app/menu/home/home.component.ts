import {Component, Inject, Injector, OnInit} from '@angular/core';
import {TuiDialogService} from "@taiga-ui/core";
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {FileInputDialogComponent} from "./file-input-dialog/file-input-dialog.component";
import {VideoService} from "../../services/video.service";
import {AuthService} from "../../services/auth.service";
import {Video} from "../../models/video.model";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.less'
})
export class HomeComponent implements OnInit {
    public videos: Video[] = [];

    public username = '';

    private readonly dialog = this.dialogs.open<number>(
        new PolymorpheusComponent(FileInputDialogComponent, this.injector),
        {
            dismissible: true,
            label: 'Add Video',
        },
    );

    constructor(
        @Inject(TuiDialogService) private readonly dialogs: TuiDialogService,
        @Inject(Injector) private readonly injector: Injector,
        private videoService: VideoService,
        private authService: AuthService,
    ) {}

    ngOnInit() {
        this.loadVideos();
    }

    onAddVideoButtonClick() {
        this.dialog.subscribe({});
    }

    private loadVideos(): void {
        this.authService.getAuthInfo().subscribe(authInfo => {
            this.username = authInfo.username ? authInfo.username : ''
            this.videoService.getVideos(this.username).subscribe(videos => {
                this.videos = videos;
            });
        });
    }
}
