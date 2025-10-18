/* 
EJERCICIO 8:
Dado un año como parámetro (número), devuelve el número del siglo al que pertenece.
Nota: los siglos comienzan el 1 de enero de un año terminado en 1 y finalizan el 31 de diciembre de un año terminado en 0. 
*/
export function exercise08(year) {
  // Escribe tu solución aquí
  //Esto funciona, pero no se si es la respuesta deseada
  let century = 0
  if (year % 100 === 0){
    century = year / 100;
  } else {
    century = (year / 100)+1
  }
  century = Math.trunc(century)
  return `The year ${year} belongs to the ${century}st/nd/rd/th century`;
}
