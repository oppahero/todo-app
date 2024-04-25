import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListTaskComponent } from '../list-task/list-task.component';
import { Task } from '../../models/task';

@Component({
  selector: 'app-completed-tasks',
  standalone: true,
  imports: [ListTaskComponent],
  template: `
    @if (completedTasks.length > 0) {
    <h2>Already done</h2>
    <app-list-task
      [tasks]="completedTasks"
      (noCompletedEvent)="emitChange()"
      (deleteTaskEvent)="deleteTask($event)"
    />
    }
  `,
  styleUrl: './completed-tasks.component.css'

})
export class CompletedTasksComponent {
  
  completedTasks: Task[] = []

  @Output() changeEvent = new EventEmitter()
  @Output() deleteTaskEvent = new EventEmitter<string>()

  @Input() set tasks(tasks: Task[]) {    
    this.completedTasks = tasks.filter((task) => task.completed)    
  }

  emitChange() {    
    this.changeEvent.emit()
  }

  deleteTask(id: string){
    this.deleteTaskEvent.emit(id)
  }
}
