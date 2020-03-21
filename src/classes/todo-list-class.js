import { Todo } from "./todo.class";

export class TodoList {

    constructor() {
        // this.todos = [];
        this.cargarLocalStorage();
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
        this.guardarLocalStorage();
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
        this.guardarLocalStorage();
    }

    marcarCompletado(id) {

        // varriendo cada arreglo mediante un ciclo
        for (const todo of this.todos) {

            console.log(id, todo.id);
            // si es id del todo es igual al de la funcion, ese cambia
            if (todo.id == id) {
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados() {
        this.todos = this.todos.filter(todo => !todo.completado);
        this.guardarLocalStorage();
    }

    guardarLocalStorage() {
        localStorage.setItem('todo', JSON.stringify(this.todos));
    }

    cargarLocalStorage() {

        this.todos = (localStorage.getItem('todo')) ?
            JSON.parse(localStorage.getItem('todo')) : [];

        // if (localStorage.getItem('todo')) {

        //     this.todos = JSON.parse(localStorage.getItem('todo'));
        //     console.log("Cargar todos", this.todos);
        // } else {
        //     // no hay nada en el storage
        //     this.todos = [];
        // }

        this.todos = this.todos.map(Todo.fromJson);
    }
}