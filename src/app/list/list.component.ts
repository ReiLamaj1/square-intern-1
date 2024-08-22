import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { ItemComponent } from '../Components/describe/item/item.component';
import { NgFor } from '@angular/common';
import { ListServiceService } from '../list-service.service';
import { Job } from '../models/job';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ItemComponent,NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

  items:Job[]=[];
  private http = inject(HttpClient);
  private listServer = inject(ListServiceService);

  constructor(){
  }

/*url='http://localhost:3000/list';
constructor(private http:HttpClient){}
getItems():void{
this.http.get<any[]>(this.url).subscribe(data => {
  console.log(data);
  this.items = data;
});
}*/

  ngOnInit():void{
    this.getItems();
  }
  
  getItems():void{
    this.listServer.getData().subscribe((result:Job[])=>{
      this.items=result;
    })
  }
}
