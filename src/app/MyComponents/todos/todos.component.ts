import { Component, OnInit } from '@angular/core';
import {Todo} from "../../Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[];
constructor(){
  this.todos=[
    {
    sno:1,
    title:"Item 1",
    desc:"Description for item 1" ,
    active:true
  },
  {
    sno:2,
    title:"Item 2",
    desc:"Description for item 2" ,
    active:true
  },
  {
    sno:3,
    title:"Item 3",
    desc:"Description for item 3" ,
    active:false
  },
  ]
}
ngOnInit(): void {

}
deleteTodo(todo:Todo){

 const index=this.todos.indexOf(todo);
 this.todos.splice(index,1);
}
  addTodo(todo:Todo){
console.log(todo);
this.todos.push(todo);
  }
}
