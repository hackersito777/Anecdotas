import React from "react";

const Adulacion = () => {
  const anecdota = {
    titulo: 'DIONISIO, DAMOCLES Y LA ESPADA',
    contenido: 'Reinaba en Siracusa Dionisio, quien tenía un vasallo y cortesano adulador que se llamaba Damocles. Se dedicaba particularmente Damocles a pronunciar delante de Dionisio largos discursos acerca de la felicidad de los monarcas. Cansado ya Dionisio, y deseando corregir a su cortesano, hizo un gran banquete y ordenó a Damocles que ocupara el lugar del rey, vestido con ropas reales como si fuera el verdadero rey. Damocles estaba orgulloso de tanto honor. Pero en lo mejor del banquete, el rey lo interrumpió ordenándole que levantara la vista sobre su cabeza. ¡Y lo que vio Damocles! Una espada filosa y aguda pendía precisamente sobre su cabeza, sostenida apenas por un hilo bastante débil que de un momento a otro podía reventarse. Damocles se llenó de terror, y suplicó al rey que lo librara de semejante peligro. El rey lo hizo con la condición de que Damocles de allí en adelante no volviera a importunarlo con sus adulaciones.',
  };

  return (
    <div>
      <h1>{anecdota.titulo}</h1>
      <p>{anecdota.contenido}</p>
    </div>
  );
};

export default Adulacion;
