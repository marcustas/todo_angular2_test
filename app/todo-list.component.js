System.register(['angular2/core', './todo-input.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_input_component_1;
    var TodoListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_input_component_1_1) {
                todo_input_component_1 = todo_input_component_1_1;
            }],
        execute: function() {
            TodoListComponent = (function () {
                function TodoListComponent() {
                    this.todos = [];
                    var first = { text: 'My first todo', isDone: false };
                    this.todos.push(first);
                }
                TodoListComponent.prototype.addTodo = function (todo) {
                    console.log(todo);
                    this.todos.push(todo);
                };
                TodoListComponent.prototype.removeTodo = function (index) {
                    this.todos.splice(index, 1);
                };
                TodoListComponent.prototype.toggleTodo = function (todo) {
                    if (todo.isDone) {
                        todo.isDone = false;
                    }
                    else {
                        todo.isDone = true;
                    }
                };
                Object.defineProperty(TodoListComponent.prototype, "remaining", {
                    get: function () {
                        return this.todos.reduce(function (count, todo) { return count + !todo.isDone; }, 0);
                    },
                    enumerable: true,
                    configurable: true
                });
                TodoListComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        templateUrl: 'app/templates/todo-list.html',
                        directives: [todo_input_component_1.TodoInputComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoListComponent);
                return TodoListComponent;
            }());
            exports_1("TodoListComponent", TodoListComponent);
        }
    }
});
//# sourceMappingURL=todo-list.component.js.map