/**
 * Gestión de errores con async/awa: Modifica la función del ejercicio 4 para cualquier
 * posible error para capturar un bloque de prueba/captura.
 */

const newPrimiew = new Promise((resolve, _) => {
  setTimeout(() => {
    resolve("Hola, Mundo");
  }, 2000);
});

const mifuncion = async () => {
  try {
    const response = await newPrimiew;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

mifuncion();
