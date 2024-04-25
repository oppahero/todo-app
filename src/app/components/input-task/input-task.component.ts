import { Component, EventEmitter, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { Task } from '../../models/task'

@Component({
  selector: 'app-input-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-task.component.html',
  styleUrl: './input-task.component.css'
})
export class InputTaskComponent {

  @Output() addTaskEvent = new EventEmitter<Task>()
  task!: string | undefined;

  addTask() {
    if (this.task){
      let task : Task = {
        id: Date.now().toString(),
        description: this.task.trim(),
        completed: false
      }
      this.task = undefined
      this.addTaskEvent.emit(task)
    }
  }

}
