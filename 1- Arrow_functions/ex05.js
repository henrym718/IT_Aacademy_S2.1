/**
 * Función de flecha con itsetTimeoutout: Cree una función de flecha que
 * imprima un mensaje en la consola después de esperar 3 segundos.
 */

const printMsg = (msg) => {
  setTimeout(() => {
    console.log(msg);
  }, 3000);
};

printMsg("Hello world!");
