//No modificar el nombre de la función
function multiplicaciónArrays(array) {
  /* 
    Esta función "multiplicacionArrays" recibe como parametro un array de numero enteros
    Esta función debe de retornar la multiplicación de todos sus numeros ejemplo:
    [1,2,3,4]  retorna 24
    */
  //Codigo debajo de esta linea --------
  let resultado = 1

  for (let i = 0; i < array.length; i++) { 
      resultado *= array[i]
  }

  return resultado
}

module.exports = { multiplicaciónArrays };
