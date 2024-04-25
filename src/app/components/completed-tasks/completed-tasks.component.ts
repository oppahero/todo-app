import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListTaskComponent } from '../list-task/list-task.component';
import { Task } from '../../models/task';
import confetti from 'canvas-confetti'
@Component({
  selector: 'app-completed-tasks',
  standalone: true,
  imports: [ListTaskComponent],
  template: `
    @if (completedTasks.length > 0) {
      <div class="info">
        <h2>Already done</h2>
        <p>{{ completedTasks.length }}/{{ tasksList }}</p>
      </div>
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
  tasksList: number = 0

  @Output() changeEvent = new EventEmitter()
  @Output() deleteTaskEvent = new EventEmitter<string>()

  @Input() set tasks(tasks: Task[]) {
    this.tasksList = tasks?.length
    this.completedTasks = tasks.filter((task) => task.completed)

    if( this.tasksList > 0 && this.tasksList === this.completedTasks.length)
      this.celebrate()
  }

  emitChange() {
    this.changeEvent.emit()
  }

  deleteTask(id: string){
    this.deleteTaskEvent.emit(id)
  }

  celebrate() {
    const duration = 3000;

    confetti({
      particleCount: 100,
      spread: 160,
      origin: { y: 0.6 },
    });

    // Clear confetti after a certain duration
    setTimeout(() => confetti.reset(), duration);
  }
}
