//No modificar el nombre de la función
function crearPromesa(numero) {
  /* 
    Esta función "resolverPromesa" recibe un parametro "numero". tiene como objetivo retornar 
    una funcion promesa en la que debe de comparar si ese numero es mayor que 50 o menor, si es mayor 
    la promesa debe ser resuelta y devolver  "Es mayor a 50", si es menor a 5 debe de retornar 
    la promesa rechazada devolviendo "Es menor a 50".
  */
  //Codigo debajo de esta linea --------
  return new Promise((resolve, reject) => {
    if (numero > 50) {
      resolve("Es mayor a 50")
    } else if (numero < 50) {
      reject("Es menor a 50")
    } else {
      // Si el número es exactamente 50, podríamos manejarlo de una manera específica si se desea
      reject("El número es igual a 50")
    }
  })
}

module.exports = { crearPromesa }
