import React from "react";

const Agradecimiento = () => {
  const anecdota = {
    titulo: 'Mateo Henry Asaltado',
    contenido: 'Mateo Henry, el famoso autor del comentario que lleva su nombre, fue asaltado por unos ladrones que le robaron su cartera. Entonces él escribió lo siguiente en su diario: "Señor, ayúdame a estar agradecido; primero, porque nunca antes he sido robado; segundo, porque aunque se llevaron la cartera, no me quitaron la vida; tercero, por que aunque se llevaron todo lo que tenía yo, no era mucho; y cuarto, por que fui yo quien fue robado y no quien robó." ---Tribuna Evangelica.',
  };

  return (
    <div>
      <h1>{anecdota.titulo}</h1>
      <p>{anecdota.contenido}</p>
    </div>
  );
};

export default Agradecimiento;
