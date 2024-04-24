import { Component, Input } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [],
  template: `
    <ul>
      @for( task of tasks; track task.id){
      <li>
        <input type="checkbox" />
        {{ task.description }}
        <input type="button" value="❌" />
      </li>
      }
    </ul>
  `,
  styleUrl: './list-task.component.css',
})
export class ListTaskComponent {
  @Input() tasks: Task[] = [];
}
