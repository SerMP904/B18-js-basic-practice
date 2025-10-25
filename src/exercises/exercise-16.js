/* 
EJERCICIO 16:
Escribe una función que devuelva un array que solo incluya el titulo de la pelicula mejor valorada de cada uno de estos actores: 
- Leonardo Dicaprio
- Robert De Niro
- Tom Hanks

Nota: asegurate que no hay titulos duplicados
*/
export function exercise16(movies) {
  //Este código funciona, pero estoy seguro de que se puede optimizar mucho. El mayor fallo que tiene es que declara un montón de variables que fácilmente pueden quedar obsoletas.
  const actors = ["Leonardo DiCaprio", "Robert De Niro", "Tom Hanks"];
  let LeoMovies = [];
  let RobertMovies = [];
  let TomMovies = [];
  let resultado = [];
  for (let i = 0; i < actors.length; i++) {
    for (let j = 0; j < movies.length; j++) {
        if (movies[j].actors.includes(actors[i])) {
           if (i===0){
            LeoMovies.push(movies[j]); 
           } else if (i === 1){
            RobertMovies.push(movies[j]);
           } else {
            TomMovies.push(movies[j]);
           }

        } else {
        }
    }
  }
  LeoMovies = LeoMovies.sort((a, b) => b.rating - a.rating);
  RobertMovies = RobertMovies.sort((a, b) => b.rating - a.rating);
  TomMovies = TomMovies.sort((a, b) => b.rating - a.rating);
  resultado.push(LeoMovies[0]);
  resultado.push(RobertMovies[0]);
  resultado.push(TomMovies[0]);
  return resultado;
}
