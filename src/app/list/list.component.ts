import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ItemComponent } from "../item/item.component";
import { NgFor } from '@angular/common';
import { ListServiceService } from '../list-service.service';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent,NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{
/*url='http://localhost:3000/list';
constructor(private http:HttpClient){}
getItems():void{
this.http.get<any[]>(this.url).subscribe(data => {
  console.log(data);
  this.items = data;
});
}*/
items:any[]=[];
ngOnInit():void{
  this.getItems();
}
http=inject(HttpClient);
constructor(private listserver:ListServiceService){
}
getItems(){
this.listserver.getData().subscribe((result:any)=>{
  this.items=result;
})
}}
