/* 
EJERCICIO 20:
Los números de Fibonacci es una secuencia de números donde cada número se calcula en base a los dos anteriores:
Fib(n) = (n-2) + (n-1)

Excepto para cuando n > 2:
Fib(0) = 0
Fib(1) = 1

Crea 2 funcines que dado un número entero devuelva el Fibonacci de ese número como parámetro. 
La primera función debe ser recursiva y la segunda iterativa.

Ejemplo: Fibonacci(20) = 6765

Nota: evita llamar a la función con números altos en la versión recursiva.
*/

export function exercise20(n) {
  //Esto lo puse probando al azar y funcionó. Entiendo que es la formula de Fibonacci, lo que no tentiendo es como la ejecuta.
  n = Number(n)
  if (n===0) return n = 0;
  if (n===1) return n = 1;
  if (n===2) return n = 1;
  return exercise20(n - 1) + exercise20(n - 2)
}

export function exercise20Iterative(n) {
  //Este código convierte a número el string, hace un array que sigue la regla de Fibonacci y devuelve el numero deseado. He de admitir que el Return es feo, pero funciona.
  let Fib = [0,1];
  let num = Number(n);
  if (num <= 2){
    if (num===0){
      Fib = [0];
      return Fib[0];
    } else {
      Fib = [1]
      return Fib[0];
    }
  } else for (let i = 1; i < num; i++){
    Fib.push(Fib[i]+Fib[i-1])
  }
  return Fib[Fib.length-1];
}
