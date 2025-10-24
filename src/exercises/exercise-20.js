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
  // Escribe tu solución aquí
  return n
}

export function exercise20Iterative(n) {
  // Escribe tu solución aquí
  let Fib = [2,3];
  let num = Number(n)
  if (num<2){
    if (num===0){
      Fib = [0];
    } else {
      Fib = [1]
    }
  } else for (let i = 1; i < num; i++){
    Fib.push(Fib[i]+Fib[i-1])
  }
  return Fib[Fib.length-1];
}
