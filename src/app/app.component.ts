import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTaskComponent } from './components/input-task/input-task.component';
import { Task } from './models/task';
import { PendingTasksComponent } from './components/pending-tasks/pending-tasks.component';
import { CompletedTasksComponent } from './components/completed-tasks/completed-tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputTaskComponent, PendingTasksComponent, CompletedTasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tasks: Task[] = [
    {
      id: '1',
      description: 'Buy milk',
      completed: false
    },
    {
      id: '2',
      description: 'Read the Angular documentation',
      completed: true
    }
  ]

  addTask(task: Task) {
    this.tasks = [ ...this.tasks, task]
  }

}
