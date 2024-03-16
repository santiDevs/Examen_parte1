//No modificar el nombre de la función
function verificarContraseña(contraseña) {
  /* 
    Esta función "verificarContraseña" recibe como parametro un string llamado contraseña y 
    su deber es validar la contraseña que sea valida ( para hacer valida la contraseña debe de contener
    minimo 8 caracteres, minimo 1 mayuscula, minimo un caracter especial y minimo un carcater especial )
    si es valida dvuelve un true si no un false
    */
  //Codigo debajo de esta linea --------
  const regexMayuscula = /[A-Z]/
  const regexMinuscula = /[a-z]/
  const regexNumero = /[0-9]/ 
  const regexEspecial = /[$&+,:;=?@#|'<>.^*()%!-]/ 
  const longitudMinima = 8
  
  if (contraseña.length < longitudMinima) {
    return false
  }
  
  if (!regexMayuscula.test(contraseña)) {
    return false
  }
  
  if (!regexMinuscula.test(contraseña)) {
    return false
  }
  
  if (!regexNumero.test(contraseña)) {
    return false
  }

  if (!regexEspecial.test(contraseña)) {
    return false
  }
  
  return true
  
}

module.exports = { verificarContraseña }
