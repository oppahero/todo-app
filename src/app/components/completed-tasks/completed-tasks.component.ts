import { Component, Input } from '@angular/core';
import { ListTaskComponent } from '../list-task/list-task.component';
import { Task } from '../../models/task';

@Component({
  selector: 'app-completed-tasks',
  standalone: true,
  imports: [ListTaskComponent],
  template: `
    @if (completedTasks) {
    <h2>Already done </h2>
    <app-list-task [tasks]="completedTasks" />
    }
  `,
  styleUrl: './completed-tasks.component.css',
})
export class CompletedTasksComponent {
  completedTasks: Task[] = [];

  @Input() set tasks(tasks: Task[]) {
    this.completedTasks = tasks.filter((task) => task.completed);
  }
}
