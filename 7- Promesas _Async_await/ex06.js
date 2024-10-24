/**
 * Promise.all: Crea dos promesas que se resuelven después de 2 y 3 segundos,
 * respectivamente. Use Promise.all para esperar a que se resuelvan ambas promesas
 * e imprima los resultados en la consola.
 */

const promise1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promesa 1");
  }, 2000);
});

const promise2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promesa 2");
  }, 3000);
});

const promisesall = Promise.all([promise1, promise2]);

//Usando Then sin catch
promisesall.then((resul) => console.log(resul));

//Usando Async/Await sin try/catch
const obtenerpromesas = async () => {
  const promisesall = await Promise.all([promise1, promise2]);
  console.log(promisesall);
};
obtenerpromesas();
