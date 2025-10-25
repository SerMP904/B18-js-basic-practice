/* 
EJERCICIO 18:
Dada una cadena de texto, crea una función que devuelva un objeto donde
las claves (keys) son cada una de las letras de la cadena y el valor el
número de veces que se repite en el string cada una de ellas.
Ejemplo: "Hello world"
{
    h: 1,
    e: 1,
    l: 3,
    o: 2,
    r: 1,
    d: 1,
}

Nota: siempre letras minúsculas y sin tildes (para simplificar)
*/
export function exercise18(string) {
  //Esto me costó mucho, pero al final lo saqué. letras genera keys con todas las letras del string y contadorLetras añade +1 a la key correspondiente cuando hay una coincidencia entre string in letras.
  string = string.replace(/\s/g, '');
  string = string.toLowerCase();
  let letras = {
  };
  let contadorLetras = [];
  for (let i = 0; i<string.length; i++){
    contadorLetras.push(string[i]);
    letras[string[i]] = 0
    for (let j = 0; j<contadorLetras.length; j++){
    if (string[i] === contadorLetras[j]){
      letras[string[i]] += 1
    }
    }
  }
  return letras;
  }

  
