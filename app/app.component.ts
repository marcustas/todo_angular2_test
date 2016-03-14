

import {Component} from 'angular2/core';
import {TodoListComponent} from './todo-list.component'

@Component({
    selector: 'a2todo',
    template: '<h1>My Todo List</h1><todo-list></todo-list>',
    directives: [TodoListComponent]
})
export class AppComponent {

}

