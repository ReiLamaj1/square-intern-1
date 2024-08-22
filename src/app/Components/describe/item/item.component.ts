import { Component,Input } from '@angular/core';
import { Job } from '../../../models/job';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input() item:Job={} as Job;
}