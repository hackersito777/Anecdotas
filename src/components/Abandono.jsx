import React from "react";
import styles from "./Abandono.module.css"

const Abandono = () => {
  const anecdotas = [
    {
      titulo: "LA LUZ NO PRENDIDA",
      cuerpo:
        "Durante la Segunda Guerra Mundial seis pilotos de la marina dejaron el porta aviones a realizar una misión. Después de investigar el océano buscando a los submarinos del enemigo, trataron de regresar al porta aviones de noche. Más el capitán había ordenado apagar las luces del porta aviones. Una y otra vez los pilotos nerviosos se comunicaban por el radio, pidiendo que se prendiera una sola luz para poder ver el piso de aterrizaje. Más se le dijo a los pilotos que el orden de apagar las luces no se podía remover en ese momento. Después de muchas peticiones por parte de los pilotos, el operador del porta aviones apagó el contacto de radio donde se comunicaban con los aviones—y los pilotos fueron forzados a caer al océano. El Día de Hoy en la Palabra, MBI, Octubre, 1991, p. 12.",
    },
    // Puedes agregar más anécdotas si lo deseas
  ];

  return (
    <div className={styles.container}>
      <h1>Anécdotas sobre el Abandono</h1>
      {anecdotas.map((anecdota, index) => (
        <div key={index}>
          <h2>{anecdota.titulo}</h2>
          <p>{anecdota.cuerpo}</p>
        </div>
      ))}
    </div>
  );
};

export default Abandono;
