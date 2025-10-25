/* 
EJERCICIO 19:
Un isograma es una palabra o frase en la que cada letra aparece el mismo número de veces.
Dado una cadena de texto, comprueba si es un isograma o no y devuelve un mensaje.

Ejemplos:
"the string 'Code deco' is an isogram"
"the string 'hello world' is not an isogram"
*/
export function exercise19(string) {
  // Este código parece que funciona pero es posible que falle en algún caso muy raro. Y si, es super enrevesado y recicla la función del ejercicio 18.
  let Isogram = lettersOcurrences(string);
  let sameNumber = []
  let isIsogram = ""
  let detectIsogram = 1
  Object.keys(Isogram).forEach(function(key){
    sameNumber.push(Isogram[key])
  })
  for (let i = 1; i < sameNumber.length; i++){
    if (sameNumber[i] === sameNumber[i-1]){
      detectIsogram += 1;
    }
  }

  if (detectIsogram === sameNumber.length){
    isIsogram = true
  } else {
    isIsogram = false
  }
  return `the string '${string}' is ${isIsogram ? "" : "not "}an isogram`;
}

function lettersOcurrences(string) {
  // Función ayudante sugerida que devuelve un objeto
  // donde las claves son las letras y los valores son
  // el número de veces que aparecen en la cadena (string)
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
