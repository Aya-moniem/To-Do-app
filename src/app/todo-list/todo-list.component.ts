import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule,NgClass,NgStyle],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  title:string = 'To-Do App';
  toDoList:{name: string, completed: boolean,isEidt:boolean}[] = [];
  newTask:string = '';
  checked:boolean = false;
  editTaskvalue : string='';


//add task
addTask(){
  if(this.newTask !== ''){
    this.toDoList.push({name:this.newTask,completed:false,isEidt:false});
    this.newTask = '';
   
  }
}

//complete task
completeTask(index:number){
    if( this.toDoList[index].completed === true){
      console.log(this.toDoList[index].completed)
      console.log('completed')
  }
  else{
    console.log(this.toDoList[index].completed)
    console.log('not completed')
  }
  
}

//edit and update
editTask(index:number){
  this.toDoList[index].isEidt = true
  this.editTaskvalue = this.toDoList[index].name.trim();
}
updateTask(index:number,newValue:string){
  let  newEditTask = newValue.trim();
  if(newEditTask !== ""){
    this.toDoList[index].name=  newEditTask
    this.toDoList[index].isEidt = false
  }
  else{
    newValue = this.toDoList[index].name
    this.toDoList[index].isEidt = false
  }
  console.log(this.toDoList);
  
}


//remove task
removeTask(index:number){
  this.toDoList.splice(index,1)
}
}
