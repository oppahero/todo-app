import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InputTaskComponent } from './components/input-task/input-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, InputTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
