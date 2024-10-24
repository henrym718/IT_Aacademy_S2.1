/**
 * Creación de una promesa: Crea una promesa que se resuelva después
 * de 2 segundos y devuelva lacadena de texto "Hola, Mundo".
 */

const newPrimiew = new Promise((resolve, _) => {
  setTimeout(() => {
    resolve("Hola, Mundo");
  }, 2000);
});
