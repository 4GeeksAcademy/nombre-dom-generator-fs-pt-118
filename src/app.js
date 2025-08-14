import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronombres = ['el', 'nuetro'];
  let adjetivos = ['gran', 'super'];
  let sustantivos = ['dragon', 'mapache'];

  //Generador de nombres
  function generadorDominios(pronombres,adjetivos,sustantivos){
    const combinaciones = [];

    pronombres.forEach(pronombre => {
      adjetivos.forEach(adjetivo => {
        sustantivos.forEach(sustantivo =>{
          const dominio = `${pronombre}${adjetivo}${sustantivo}.com`;
          combinaciones.push(dominio);
        });
      });
    });
    return combinaciones;
  }
  //Funcion para mostrar por consola
  function mostrarDominios(dominios){
    console.log("Dominios:");
    dominios.forEach(dominio => console.log(dominio));
  }

 //Función para ejecutar el generador
  function ejecutarGenerador() {
  const dominios = generadorDominios(pronombres, adjetivos, sustantivos);
  mostrarDominios(dominios);
}
ejecutarGenerador();
};
