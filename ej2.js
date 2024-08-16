//Dado un arreglo de objetos que representan ciudades con su respectiva población, escribe una función que encuentre y 
//devuelva la ciudad con la mayor población

let cities = [

    {nombre: 'Londres', población: 1000000},
    {nombre: 'Medellin', población: 100000},
    {nombre: 'Berlin', población: 800000},
    {nombre: 'Cali', población: 200000},
    {nombre: 'Berlin', población: 9000000},

]

function mayorpoblacion (poblacion) {

    let max = poblacion[0]

    poblacion.forEach(element => {
        if (element.poblacion > max.poblacion) {
            console.log(element)

            max = element
            
        }
        
    });

    return max;
    
}

console.log(mayorpoblacion(cities));