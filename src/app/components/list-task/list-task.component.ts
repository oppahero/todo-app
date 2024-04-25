import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-task',
  standalone: true,
  imports: [FormsModule],
  template: `
    <ul>
      @for( task of tasks; track task.id){
      <li class="li-task">
        <input
          type="checkbox"
          [(ngModel)]="task.completed"
          (ngModelChange)="onCheckboxChange()"
          (click)="onCheckboxChange()"
        />
        <p>{{ task.description }}</p>
        <input class="remove-bottom" type="button" value="❌" />
      </li>
      }
    </ul>
  `,
  styleUrl: './list-task.component.css',
})
export class ListTaskComponent {

  @Output() noCompletedEvent = new EventEmitter();

  @Input() tasks: Task[] = [];

  onCheckboxChange(){
    this.noCompletedEvent.emit()
  }

}
