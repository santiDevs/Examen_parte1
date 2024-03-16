//No modificar el nombre de la función
function mostrarInformacion(cb, persona) {
  /* 
    Esta función "mostrarInformacion" recibe como parametro un callBack (cb) y un objeto (persona)
    con sus atributos nombre y edad. la función callback recibe 2 argumentos "nombre" y "edad".
    y retorna una cadena de caracteres en la que describe la persona y es lo que debe de retornar la función 
    mostrarInformación.
  */
  //Codigo debajo de esta linea --------
  return cb(persona.nombre, persona.edad)
}

module.exports = { mostrarInformacion }
