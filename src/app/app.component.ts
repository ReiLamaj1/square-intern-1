import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsernameComponent } from './username/username.component';
import { SurnameComponent } from './surname/surname.component';
import { DescribeComponent } from './describe/describe.component';
import { ImageComponentComponent } from './image-component/image-component.component';
import { SubmitButtonComponent } from './submit-button/submit-button.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,UsernameComponent,SurnameComponent,DescribeComponent,ImageComponentComponent,SubmitButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit{
  title: string = "Test";
  constructor(){
    console.log("Konstruktori");
  }
  ngOnInit(): void {
      console.log("OnInit");
  }
}
