/* 
EJERCICIO 14:
Escribe una función que pasándole "movies" y "categories" del archivo data.js
como parámetros filtra las películas que pertenezcan a la categoria "Drama" 
e incluye solo el título y la descripción.
*/
export function exercise14(movies, categories) {
  //Este código es excesivamente complicado, un If (element.category === "drama") sería suficiente, pero al menos da juego si queremos cambiar la categoria
  let resultado = [];
  movies.forEach(element => {
    Object.values(categories).forEach(cat => {
      //Este If sirve para saber si la categoría de la pelicula se encuentra en categories
      if (element.category === cat) {
        //Este If para saber si es drama (asumiendo que 'drama' contenga  como value "drama")
        if (element.category === categories.drama){
        resultado.push({ title: element.title, description: element.description, category: element.category});
        }
    } 
  })});
  return resultado;
}
