import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class ListsService {
  constructor(private http: HttpClient) {}
  

  getAllData(searchQuery:any ) {
   
    return this.http.get(environment.baseApi+`/WeatherForecast?requestNumber=${searchQuery}`);

  }
}
