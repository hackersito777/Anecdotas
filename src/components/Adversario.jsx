import React from "react";

const Adversario = () => {
  const anecdota = {
    titulo: 'Las zorras, las águilas y las liebres',
    contenido: 'Cierto día las águilas se declararon en guerra contra las liebres. Fueron entonces éstas a pedirle ayuda a las zorras. Pero ellas les contestaron: -- Las hubiéramos ayudado si no supiéramos quienes son ustedes y si tampoco supiéramos contra quienes luchan. Antes de decidir unirte a una campaña, mide primero la capacidad de los posibles adversarios. Fábula de Esopo',
  };

  return (
    <div>
      <h1>{anecdota.titulo}</h1>
      <p>{anecdota.contenido}</p>
    </div>
  );
};

export default Adversario;
