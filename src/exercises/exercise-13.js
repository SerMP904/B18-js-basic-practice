/* 
EJERCICIO 13:
Escribe una función que, pasándole como parámetro el array de películas 'movies'
exportado en el archivo "data.js", devuelva un array con el título y la descripción 
de las mejores peliculas ordenadas de mejor a peor, siendo las mejores aquellas cuya 
valoración es superior a la valoración media de todas las películas
*/
export function exercise13(movies) {
  //Hacemos un sort por rating y luego lo añadimos a un array.
  let resultado = [];
  let moviesOrdenadas = movies.sort((a, b) => b.rating - a.rating);
  moviesOrdenadas.forEach(element => {
    resultado.push(element.title, element.description);
  
  });
  return resultado;
}
