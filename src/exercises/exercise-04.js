/* 
EJERCICIO 4:
Muestra el resultado de quitar las vocales a un string que pasamos como parámetro:
Pasándole el string “Hi, I am learning Javascript” la función debe devolver “H,I m lrnng Jvscrpt”
Nota: vowels = "aeiouAEIOU" (no incluyas los acentos)
Atención: cuidado con vocales aisladas y con espacios en blanco dobles
*/
export function exercise04(string) {
  const vowels = "aeiouAEIOU";
  let result = string;
  for(let v = 0; v < string.length; v++){
    if (vowels.includes(string[v])){
      result = result.replace(string[v], "");
    }
  }
  return result;
}
