/* 
EJERCICIO 10:
Escribe una o varias funciones para que, dado un string, devuelva un array que contenga la posición 
que ocupa cada carácter en el abecedario. Para que sea más sencillo, elimina los espacios y tildes 
(recuerda que puedes utilizar funciones auxiliares de ejercicios anteriores si las declaraste.
*/
export function exercise10(string) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  // Escribe tu solución aquí
  // Esta solución es un poco pobre, pero funciona
  let pos = [];
  let temporal = string;
  temporal = string.replace(/\s/g, '');
  temporal = temporal.toLowerCase();
  for (let x=0; x<string.length; x++){
    for (let i=0; i<alphabet.length; i++){
      if(temporal[x]===alphabet[i]){
        pos.push(i+1);
      }
    }
  }
  return pos
  
}
