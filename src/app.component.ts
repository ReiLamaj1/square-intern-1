import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TestComponent } from './app/test/test.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TestComponent],
  templateUrl:'./app/app.component.html',
  styleUrl: './app/app.component.css'
})
export class AppComponent  implements OnInit{
  title: string = "Test";
  ngOnInit(): void {
      console.log("OnInit");
  }
}
