/**
 * Uso de 'esto' en las funciones de flecha: Crear una clase de persona que tenga
 * una propiedad de nombre y una función de saludo que use una función de flecha.
 * La función debe imprimir un saludo que incluya el nombre de la persona. Por ejemplo:
 * console.log(Hola, ${this.name});.
 */

class Persona {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludo = () => {
    console.log(`Hola ${this.nombre}`);
  };
}

const persona = new Persona("Henry");
persona.saludo();
