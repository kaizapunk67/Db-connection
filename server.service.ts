import { Injectable } from '@angular/core';
import {HttpClient,HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http:Http) { }
  storeServers(details:string){
   return this.http.post('https://push-b90d1.firebaseio.com/data.json',details);  
  }
}
