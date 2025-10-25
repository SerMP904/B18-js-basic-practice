/* 
EJERCICIO 6:
Escribir una función que calcule si una cadena de texto es un palíndromo y
devuelva un mensaje con la cadena de texto y el resultado.

Ejemplos:
"The phrase 'Rats live on no evil star' is palindrome"
"The phrase 'Hello world' is NOT palindrome"

Nota: los signos de puntuación, mayúsculas y espacios deben ser ignorados (no incluyas los acentos). 
*/
export function exercise06(string) {
  //Este código detecta si las letras en posiciones opuestas son iguales. Antes de eso simplifica la string quitándole espacios y mayúsuculas.
  let palindromo = 0;
  let temporal = string.replace(/\s+/g, '');
  for (let letra = 0; letra < temporal.length; letra++){
    temporal = temporal.toLowerCase()
    if (temporal[letra].match(/^[a-z]+$/)){
      if (temporal[letra] === temporal[temporal.length - (letra+1)]){
        palindromo +=1  
  }}}
  // ESTA PARTE SE PUDE MEJORAR
  if (palindromo === temporal.length){
    return `The phrase '${string}' is a palindrome`;
  } else {
    return `The phrase '${string}' is NOT a palindrome`;
  }
  
  // return [condición]
  //   ? `The phrase '${string}' is a palindrome`
  //   : `The phrase '${string}' is NOT a palindrome`;

  //La idea es que if (string[l] === string[string.lenght -l]) => True/False
}


