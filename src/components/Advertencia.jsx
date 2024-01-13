import React from "react";

const Advertencia = () => {
  const anecdota = {
    titulo: 'La Mano de la Advertencia',
    contenido: 'Hay un escrito de advertencias y destrucción en la pared de cada pecador. Por algún tiempo, este escrito puede ser invisible, como la escritura llamada "simpática", que no se puede ver hasta poner el papel en contacto con el fuego o con ciertas substancias químicas; pero ese escrito está grabado en donde los ojos del pecador lo verán algún día, y está allí como otra amonestación para el arrepentimiento. Las leyes eternas de Dios, y su providencia, son como una mano gigante que escribe el desastre de cada nación que no quiere ser justa. Sería muy bueno que esas naciones pudieran ver el manuscrito antes que estuviera terminado.',
  };

  return (
    <div>
      <h1>{anecdota.titulo}</h1>
      <p>{anecdota.contenido}</p>
    </div>
  );
};

export default Advertencia;
