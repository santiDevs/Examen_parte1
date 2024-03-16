//No modificar el nombre de la función
async function resolverPromesa(promesa) {
  /* 
    Esta función "resolverPromesa" recibe por parametros una promesa (promesa).
    si la promesa se resuelve entonces la función debe devolver un string "Promesa resuelta",
    si es rechazada debe devolver "Promesa no resuelta".
    NOTA: la promesa es una función promesa por lo tanto para llamarla la defines "promesa()"
  */
  //Codigo debajo de esta linea --------
  try {
    await promesa() // Esperamos a que la promesa se resuelva
    return "Promesa resuelta"
  } catch (error) {
    return "Promesa no resuelta"
  }
}

module.exports = { resolverPromesa }
