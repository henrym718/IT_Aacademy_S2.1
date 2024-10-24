/**
 * Prometido con rechazo: Crea una promesa que se resuelva después de 2 segundos si la entrada es
 * igual a 'phelloat, y que la rechazo si la entrada es otra cosa.
 */

const mifuncion = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (value === "phelloat") resolve(true);
      reject(false);
    }, 2000);
  });
};

mifuncion("phelloat")
  .then((boolean) => console.log(boolean))
  .catch((err) => console.log(err));
