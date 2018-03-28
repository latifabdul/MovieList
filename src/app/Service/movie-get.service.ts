import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()

export class MovieGetService{
constructor(private Http: Http){}
private APIUrl="https://api.themoviedb.org/3/movie/popular?api_key=a9ac4ca682f94fd003eb30f71d7c04c3&language=en-US&page=1";

gemovielist(): Observable<any>{

    return this.Http.get(this.APIUrl, {}).map((response: any) =>  response.json());
}

}