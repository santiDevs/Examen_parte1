const { multiplicaciónArrays } = require("./01");
const { palabraPalindromo } = require("./02");
const { verificarContraseña } = require("./03");
const { mostrarInformacion } = require("./04");
const { resolverPromesa } = require("./05");
const { crearPromesa } = require("./06");
//Aquí puedes puedes probar todo el codigo que retornes las funciones de cada ejercicio
//IMPORTANTE: no alterar nada de este documento.
//UTILS
function cb(nombre, edad) {
  return `¡Hola!, mi nombre es ${nombre}, y tengo ${edad} años`;
}

const persona = {
  nombre: "Juanito",
  edad: 15,
};

const promesa1 = () =>
  new Promise(function (resolve, reject) {
    resolve("Promesa resuelta");
  });

const promesa2 = () =>
  new Promise(function (resolve, reject) {
    if (true) reject("Promesa no resuelta");
  });

//------------------------------------------------------------------------------------------------
async function init() {
  try {
    console.log("01 Responde: " + multiplicaciónArrays([1, 2, 3, 4, 5, 6]));
    console.log("02 Responde: " + palabraPalindromo("ana"));
    console.log("03 Responde: " + verificarContraseña("#Jedy1234"));
    console.log("04 Responde: " + mostrarInformacion(cb, persona));
    console.log("05 - 1 Responde: " + (await resolverPromesa(promesa1)));
    console.log("05 - 2 Responde: " + (await resolverPromesa(promesa2)));
    const promesa06 = crearPromesa(70);
    const promesa062 = crearPromesa(10);
    console.log("06 - 1 Responde: " + (await promesa06));
    try {
      await promesa062;
      console.log("06 - 2 Responde: undefined");
    } catch (error) {
      console.log("06 - 2 Responde: " + error);
    }
  } catch (error) {
    throw new Error("ERROR!!!!");
  }
}

init();
