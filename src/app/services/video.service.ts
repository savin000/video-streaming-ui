import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {AuthInfo} from "../models/auth-info.model";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Video} from "../models/video.model";
import {TuiFileLike} from "@taiga-ui/kit";

@Injectable({
    providedIn: 'root'
})
export class VideoService {

    constructor(private router: Router,
                private http: HttpClient
    ) {}

    public getVideos(username: string): Observable<Video[]> {
        return this.http.get<Video[]>(`http://localhost:8080/api/video-streaming-service/videos/${username}`);
    }

    public addVideo(title: string, username: string, file: any) {
        let formData:FormData = new FormData();
        formData.append('file', file);
        formData.append('username', username);
        formData.append('title', title);
        return this.http.post('http://localhost:8080/api/video-streaming-service/videos', formData);
    }
}
