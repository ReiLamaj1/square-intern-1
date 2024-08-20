import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ItemComponent } from "../item/item.component";
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent,NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
url='http://localhost:3000/list';
items:any[]=[];
constructor(private http:HttpClient){}
ngOnInit():void{
  this.getItems();
}
getItems():void{
this.http.get<any[]>(this.url).subscribe(data => {
  console.log(data);
  this.items = data;
});
}}
