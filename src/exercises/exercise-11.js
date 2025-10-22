/* 
EJERCICIO 11:
Escribe una función que, pasándole como parámetro el array de películas 'movies'
exportado en el archivo "data.js", devuelva un array con las peliculas ordenadas 
por valoracion (propiedad "rating") de mayor a menor  
*/

export function exercise11(movies) {
  // Escribe tu solución aquí
  //Demasiados parámetros pero ok
  let resultado = [];
  let moviesOrdenadas = movies.sort((a, b) => b.rating - a.rating);
  moviesOrdenadas.forEach(element => {
    resultado.push(element.title);
  });
  return resultado;
}
