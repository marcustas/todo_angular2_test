System.register(['angular2/core'], function(exports_1, context_1) {
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
    var core_1, core_2;
    var TodoInputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
            }],
        execute: function() {
            TodoInputComponent = (function () {
                function TodoInputComponent() {
                    this.newTodo = new core_2.EventEmitter();
                }
                TodoInputComponent.prototype.addTodo = function () {
                    console.log("Text value :" + this.title);
                    this.newTodo.next({ 'text': this.title, 'isDone': false });
                    this.title = '';
                };
                __decorate([
                    core_2.Output(), 
                    __metadata('design:type', Object)
                ], TodoInputComponent.prototype, "newTodo", void 0);
                TodoInputComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-input',
                        template: '<input [(ngModel)]="title"  (keyup.enter)="addTodo()" placeholder="New Todo">'
                    }), 
                    __metadata('design:paramtypes', [])
                ], TodoInputComponent);
                return TodoInputComponent;
            }());
            exports_1("TodoInputComponent", TodoInputComponent);
        }
    }
});
//# sourceMappingURL=todo-input.component.js.map