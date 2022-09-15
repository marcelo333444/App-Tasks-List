import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Task } from '../../Task';
import { TASKS } from '../../mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent implements OnInit {
@Input() task: Task = TASKS[0];
@Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
@Output() onTogglerReminder: EventEmitter<Task> = new EventEmitter();
faTimes = faTimes;
  taskService: any;
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task:Task){
    this.onDeleteTask.emit(task);   
    } 
    onToggle(task:Task){
      this.onTogglerReminder.emit(task);   
      }
 }

