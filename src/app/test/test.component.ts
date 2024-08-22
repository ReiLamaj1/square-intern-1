import { Component } from '@angular/core';
import { UsernameComponent } from '../username/username.component';
import { SurnameComponent } from '../surname/surname.component';
import { DescribeComponent } from '../Components/describe/describe.component';
import { ImageComponentComponent } from '../image-component/image-component.component';
import { ListComponent } from '../list/list.component';
import { SubmitButtonComponent } from '../submit-button/submit-button.component';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [UsernameComponent,SurnameComponent,DescribeComponent,ImageComponentComponent,SubmitButtonComponent,ListComponent],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

}
