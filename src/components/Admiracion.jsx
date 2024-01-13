import React from "react";

const Admiracion = () => {
  const anecdota = {
    titulo: 'EL AUTÓGRAFO',
    contenido: 'Una pareja joven terminó de ver a Bill Cosby en vivo y fueron atrás del teatro deseando un autógrafo del comediante en un libro para su bebé recién nacido. Un ayudante llevó el libro a Cosby, y cuando lo regresó, la pareja buscaba ansiosamente la firma. No lo encontraban y se fueron del teatro decepcionados. Días después, sin embargo, la madre la encontró en una de las páginas del libro de bebé. La página tenía un título llamado "El Primer Enunciado del Bebé." En dicha página Cosby había firmado "Me gusta Bill Cosby."',
    fuente: 'Bits & Pieces, April 28, 1994, pp. 19-20.',
  };

  return (
    <div>
      <h1>{anecdota.titulo}</h1>
      <p>{anecdota.contenido}</p>
      <p>Fuente: {anecdota.fuente}</p>
    </div>
  );
};

export default Admiracion;
