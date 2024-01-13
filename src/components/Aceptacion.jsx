import React from "react";

const Aceptacion = () => {
  const anecdota = {
    titulo: "NUNCA ES SUFICIENTE",
    cuerpo:
      'Keith Hernandez es uno de los mejores jugadores de beisbol. Es un bateador de 300 de por vida quien ha ganado numerosos reconocimientos del Guante de Oro por su excelencia de jugador de campo. Ha ganado un campeonato de batear por tener el más alto de promedio, el reconocimiento del Jugador Más Valioso en su liga, y hasta el Serie Mundial. Sin embargo, a pesar de sus logros, no tiene algo que le es crucialmente importante – la aceptación por parte de su padre que lo que ha logrado es valioso. Escucha lo que el tenía para decir en una entrevista en vista de su relación con su padre: "Un día Keith le preguntó a su padre, "Papa, tengo un promedio de ser un bateador de 300 de por vida. ¿Qué más quieres?" Su padre le respondió, "Pero un día verás tu vida y dirás, ’pude haber hecho más.’" Gary Smalley & John Trent, Ph.D., El Regalo de Honor, p. 116.',
  };

  return (
    <div>
      <h1>Anécdota sobre Aceptación</h1>
      <h2>{anecdota.titulo}</h2>
      <p>{anecdota.cuerpo}</p>
    </div>
  );
};

export default Aceptacion;
