import React from "react";

const Aborto = () => {
  const anecdotas = [
    {
      titulo: "LA VIDA DE BEETHOVEN",
      cuerpo:
        'El profesor de una escuela de medicina conocido mundialmente les puso a sus estudiantes esta situación médica: "Aquí esta la historia de la familia: El padre tiene sífilis. La madre tiene tuberculosis. Juntos ya han tenido cuatro hijos. El primero es ciego. El segundo ya murió. El tercero es sordo. El cuarto tiene tuberculosis. Ahora la madre esta embarazada de nuevo. Los padres vienen contigo para que los aconsejes. Están dispuestos a tener un aborto, si tu decides que eso es lo necesario. ¿Qué les recomiendas? Los estudiantes dieron varias opiniones individualmente, y luego el profesor les pidió que se separasen en grupos para "consultar." Todos los grupos regresaron para reportar que recomendarían un aborto. "¡Felicidades!" les dice su profesor, "¡Acabas de tomar la vida de Beethoven!" Creemos que fue reportado primero en una columna de Ann Landers.',
    },
    {
      titulo: "UNA ENCUESTA SOBRE EL ABORTO",
      cuerpo:
        'Una encuesta reciente de parejas en Inglaterra reveló que, si eran capaces de saber las siguientes cosas por adelantado, 1% de ellos abortaría el hijo en base del sexo, 6% abortaría un niño con la posibilidad de la enfermedad "Alzheimer," y un increíble 11% abortarían si el niño estaba predispuesto a obesidad. The Utne Reader, citado en los Signos de los Tiempos, Enero, 1993, p. 6.',
    },
    {
      titulo: "LA FUERTE PROMESA",
      cuerpo:
        'Algunos a lo mejor recuerdan al hombre que ganó el caso en la Corte Suprema de los EEUU sobre el derecho de aborto para su esposa con una situación comatosa. Argumentó en ese tiempo que un aborto le daría ayuda para un posible rescate para la vida de su esposa, Nancy, quien obtuvo comatosa a resultado de un accidente de carro en 1988. El aborto fue un éxito, y ahora Martin Klein planea el divorcio con su esposa. Comentó, "La vida cambia, una tragedia pasa. Todo es muy complicado." También dijo "mi promesa a Nancy continúa manteniéndose más fuerte que nunca antes." Todos estamos de acuerdo. La promesa de él a su esposa es más fuerte ahora que lo era antes. Eso es decir, no mucho. Credenda, Agenda, Volume 4/Number 3, p. 15.',
    },
    // Puedes agregar más anécdotas si lo deseas
  ];

  return (
    <div>
      <h1>Anécdotas sobre el Aborto</h1>
      {anecdotas.map((anecdota, index) => (
        <div key={index}>
          <h2>{anecdota.titulo}</h2>
          <p>{anecdota.cuerpo}</p>
        </div>
      ))}
    </div>
  );
};

export default Aborto;
