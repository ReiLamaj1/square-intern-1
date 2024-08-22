import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from './models/job';
@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get<Job[]>("http://localhost:3000/list");
  }
}
