import React from "react";

const Acusacion = () => {
  const anecdota = {
    titulo: 'UN PEQUEÑO DESCUIDO',
    contenido: 'Juan estaba manejando tarde una noche cuando recogió a un muchacho que le pidió un aventón. Mientras iban en el camino, empezó a sospechar del pasajero. Juan revisó si su cartera estaba segura en el bolsillo de su abrigo que estaba en medio de los dos asientos, ¡pero no estaba ahí! Así que frenó rápidamente, y le ordenó al pasajero que saliera del carro, y dijo, "¡Dame la cartera inmediatamente!" El pasajero lleno de miedo le dio la cartera, y Juan se fue. Cuando llegó a casa, le empezó a contar a su esposa de su experiencia, pero ella le interrumpió, diciendo, "Antes de que se me olvide, Juan, ¿sabías que dejaste tu cartera en casa ésta mañana?"',
    fuente: 'Nuestro Pan de Cada Día, 2 de Octubre de 1992.',
  };

  return (
    <div>
      <h1>{anecdota.titulo}</h1>
      <p>{anecdota.contenido}</p>
      <p>Fuente: {anecdota.fuente}</p>
    </div>
  );
};

export default Acusacion;
