import React from 'react';
import Anecdota from './Anecdota';

const ListadoAnecdotas = ({ anecdotas }) => {
  return (
    <div>
      {anecdotas.map((anecdota) => (
        <Anecdota key={anecdota.titulo} titulo={anecdota.titulo} cuerpo={anecdota.cuerpo} />
      ))}
    </div>
  );
};

export default ListadoAnecdotas;
