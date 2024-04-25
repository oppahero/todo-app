import { Component } from '@angular/core';
import { InputTaskComponent } from './components/input-task/input-task.component';
import { PendingTasksComponent } from './components/pending-tasks/pending-tasks.component';
import { CompletedTasksComponent } from './components/completed-tasks/completed-tasks.component';
import { Task } from './models/task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [InputTaskComponent, PendingTasksComponent, CompletedTasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',  
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
    },
    {
      id: '3',
      description: 'Read a book',
       completed: true
    }
  ]

  addTask(task: Task) {
    this.tasks = [ ...this.tasks, task]
  }

  updateTasks(){
    this.tasks = [...this.tasks]
  }
}
