import {Component, OnInit, Input,  Output,EventEmitter,} from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @Input() i: number;
  @Output() todoDelete: EventEmitter<Todo>=new EventEmitter<Todo>();
  @Output() todoCheck: EventEmitter<Todo>=new EventEmitter<Todo>();
  constructor(){}
ngOnInit(): void {}

  onClick(todo: Todo){
this.todoDelete.emit(todo);
console.log("onClick Triggered");
  }
  onCheckBoxClick(todo:Todo){
    this.todoCheck.emit(todo);
todo.active=false;
  }
}

