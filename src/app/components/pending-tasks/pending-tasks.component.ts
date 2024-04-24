import { Component, Input } from '@angular/core';
import { Task } from '../../models/task';
import { ListTaskComponent } from '../list-task/list-task.component';

@Component({
  selector: 'app-pending-tasks',
  standalone: true,
  imports: [ListTaskComponent],
  template: `
    @if (pendingTasks.length > 0) {
    <h2>To do</h2>
    <app-list-task [tasks]="pendingTasks" />
    }@else {
    <div>
      <h2>No pending tasks</h2>
    </div>
    }
  `,
  styleUrl: './pending-tasks.component.css',
})
export class PendingTasksComponent {
  pendingTasks: Task[] = [];

  @Input() set tasks(tasks: Task[]) {
    this.pendingTasks = tasks.filter((task) => !task.completed);
  }
}
