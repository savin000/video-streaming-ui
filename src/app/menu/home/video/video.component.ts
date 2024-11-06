import {Component, Inject, Injector, Input, OnInit} from '@angular/core';
import {TuiDialogService} from "@taiga-ui/core";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrl: './video.component.less'
})
export class VideoComponent implements OnInit {
    public readonly sourceLink = "http://localhost:8080/api/video-streaming-service/video-streaming/";

    @Input()
    title: string = '';

    @Input()
    username: string = '';

    constructor() {}

    ngOnInit(): void {
    }
}
