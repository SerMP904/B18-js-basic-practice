/* 
EJERCICIO 5:
Escribe una función que recibe de entrada una cadena de texto y 
devuelve otra cadena con cada letra repetida tantas veces como la posición que ocupa 
empezando la primera repetición en mayúscula y el resto en minúscula

Ejemplos:
  exercise05('code') // result: "COoDddEeee"
  exercise05('list') // result: "LIiSssTttt"
  exercise05('function') // result: "FUuNnnCcccTttttIiiiiiOooooooNnnnnnnn"
*/
export function exercise05(string) {
  // Escribe tu solución aquí
  // ESTA SOLUCIÓN ESTÁ MAL, result TIENE QUE SER UNA CONST
  let result = "";
  for(let l = 1; l < string.length+1; l++){
      for(let r = 0; r < l; r++ ){
        result = result.concat(string[l-1])
      }
    }
  return result;
}