export class TodoList {

    constructor() {
        this.todos = [];
    }

    nuevoTodo(todo) {
        this.todos.push(todo);
    }

    eliminarTodo(id) {
        this.todos = this.todos.filter(todo => todo.id != id);
    }

    marcarCompletado(id) {

        // varriendo cada arreglo mediante un ciclo
        for (const todo of this.todos) {

            console.log(id, todo.id);
            // si es id del todo es igual al de la funcion, ese cambia
            if (todo.id == id) {
                todo.completado = !todo.completado;
                break;
            }
        }
    }

    eliminarCompletados() {

    }
}