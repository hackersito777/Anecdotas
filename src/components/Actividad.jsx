import React from "react";

const Actividad = () => {
  const anecdotas = [
    {
      cita: 'Es un hábito irónico del ser humano el correr más rápido cuando hemos perdido nuestro camino.',
      autor: 'Rollo May',
    },
    {
      cita: 'Lo importante es llegar. Es más importante el saber donde vas que el llegar rápido. No confundas la actividad con el logro.',
      autor: 'Mable Newcomber',
    },
  ];

  return (
    <div>
      <h1>Anécdotas sobre Actividad</h1>
      {anecdotas.map((anecdota, index) => (
        <div key={index}>
          <p>"{anecdota.cita}"</p>
          <p>- {anecdota.autor}</p>
        </div>
      ))}
    </div>
  );
};

export default Actividad;
