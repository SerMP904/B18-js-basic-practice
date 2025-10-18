/* 
EJERCICIO 9:
Genera un array de un determinado tamaño con números aleatorios entre dos valores
y calcula el menor y el mayor de estos números.
Pista: Usar Math.round() y  Math.random() viendo documentación

Ejemplo: 
  exercise09(5, 0, 100) 
  devuelve "The minimum number is 0 and the maximum number is 100 in [0,50,99,49,100]"
*/
export function exercise09(length, start, end) {
  // Escribe tu solución aquí
  let arrayOfRandomNumbers = [];
  let arrayOrg = [];
  let random = 0;
  for (let i = 0; i < length; i++){
    random = Math.random()* (end-start)+ start;
    random = Math.round(random)
    arrayOfRandomNumbers.push(random)
    arrayOrg.push(random)
  }
  let min = arrayOrg.sort(function(a, b){return a-b})[0];
  let max = arrayOrg.sort(function(a, b){return a-b})[length-1];

  return `The minimum number is ${min} and the maximum number is ${max} in ${arrayOfRandomNumbers}`;
}
