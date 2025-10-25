/* 
EJERCICIO 17:
Dada una cadena de texto, crea una función que la recibe como argumento y 
devuelve dicha cadena transformada en hashtag, es decir, la cadena comenzando 
por almohadilla (#) y las palabras sin espacios comenzando la primera letra en mayúscula
Ejemplo: "This is a hashtag" se transforma en "#ThisIsAHashtag"
*/
export function exercise17(string) {
  // Modificar la string justo al comienzo está feo, por lo demás todo debería estar bien.
  string = "#"+string
  let hastag = ""
  for (let letra = 0; letra < string.length; letra++){
    if (string[letra-1] == " "){
      let mayus = string[letra].toUpperCase()
      console.log(string[letra-1])
      hastag = hastag+mayus
    } else {
  hastag = hastag+string[letra];}
  }
  hastag = hastag.replace(/\s/g, '')
  return hastag;
}
