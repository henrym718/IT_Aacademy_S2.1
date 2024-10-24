/**
 * Uso de async/awa: Escriba una función asíncrona que utilice la
 * función de espera para esperar el resultado de la promesa creada
 * en el ejercicio 1, y luego imprima este resultado en la consola.
 */

const newPrimiew = new Promise((resolve, _) => {
  setTimeout(() => {
    resolve("Hola, Mundo");
  }, 2000);
});

const mifuncion = async () => {
  const response = await newPrimiew;
  console.log(response);
};

mifuncion();
