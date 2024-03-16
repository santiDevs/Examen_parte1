function palabraPalindromo(palabra) {
  /* 
    Esta función "palabraPalindromo" recibe como parametro un string llamado palabra y 
    su deber es validar la palabra que sea palindromo ( se lee
    de igual manera de izquierda a derecha y de dercha a izquierda).
    esta función debe retornar true si la plabra es palindromo y false si no lo es
    */
  // Codigo debajo de esta linea --------
  palabra = palabra.toLowerCase(); 

  let arrayStringPalabra = []
  let esPalindroma = null

  for (let i = 0; i < palabra.length; i++) {
    arrayStringPalabra[i] = palabra[i]
  }

  let ejemplo = arrayStringPalabra.join("") 

  if (palabra === ejemplo.split("").reverse().join("")) {
    esPalindroma = true
  } else {
    esPalindroma = false
  }

  return esPalindroma
}

module.exports = { palabraPalindromo }
