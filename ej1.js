//Tienes un arreglo de objetos que representan tareas, cada una con un id, nombre, y completada (un booleano).
//Escribe una función que tome el id de una tarea y marque esa tarea como completada (es decir, completada debe ser true).

let tasks = [

    {id: 1, nombre: 'Hacer Aseo', estado: 'Completada'},
    {id: 2, nombre: 'Lavar los platos', estado: 'Completada'},
    {id: 3, nombre: 'Tarea 1', estado: 'Completada'},
    {id: 4, nombre: 'Tarea 2', estado: 'Completada'},

];

function tareacompletada (completada,id) {
    completada.forEach(element => {
        if (element.id === id) {
            element.estado = true
            
        }
    });
}
console.log(tareacompletada(tasks,id));


