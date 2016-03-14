

import {Component} from 'angular2/core';
import {Todo} from './todo';
import {TodoInputComponent} from './todo-input.component';

@Component({
    selector: 'todo-list',
    templateUrl: 'app/templates/todo-list.html',
    directives: [TodoInputComponent]
})

export class TodoListComponent {

    todos: Todo[];

    constructor() {
        this.todos = [];
        let first = { text: 'My first todo', isDone: false };
        this.todos.push(first);

    
    }
    addTodo(todo: Todo) {
        console.log(todo);
        this.todos.push(todo);
    }



    removeTodo(index) {
        this.todos.splice(index, 1);
    }

    toggleTodo(todo: Todo) {
        if (todo.isDone) {
            todo.isDone = false;
        } else {
            todo.isDone = true;
        }
    }

    get remaining(): number {
        return this.todos.reduce((count, todo: Todo) => count + !todo.isDone, 0)
    }


}


