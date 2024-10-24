/**
 * Uso de una promesa: Utilice la promesa creada en el año anterior.
 * Cree un .then que imprima el resultado en la consola.
 */

const newPrimiew = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Hola, Mundo");
  }, 2000);
});

newPrimiew.then((msg) => console.log(msg));
