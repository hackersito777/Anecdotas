import React from "react";

const Adversidad = () => {
  const anecdota1 = {
    titulo: 'Lord Nelson',
    contenido: 'Justo antes de la batalla de Trafalgar en 1805, el héroe de la armada Británico, Lord Nelson, se dio cuenta de que un almirante y un capitán de su flota estaban peleando. Citó a los dos hombres, tomó las manos de los dos y puso en uno sobre el otro y luego, mirándolos directamente en sus caras les dijo, “Mira – por allá está el enemigo.”',
  };

  const anecdota2 = {
    titulo: 'Zanahoria, Huevo o Café',
    contenido: 'Una hija se quejaba con su padre acerca de su vida y cómo las cosas le resultaban tan difíciles. No sabía cómo hacer para seguir adelante y creía que se daría por vencida. Estaba cansada de luchar. Parecía que cuando solucionaba un problema, aparecía otro. Su padre, un chef de cocina, la llevó a su lugar de trabajo. Allí llenó tres ollas con agua y las colocó sobre fuego fuerte...',
  };

  return (
    <div>
      <h1>{anecdota1.titulo}</h1>
      <p>{anecdota1.contenido}</p>
      <h1>{anecdota2.titulo}</h1>
      <p>{anecdota2.contenido}</p>
    </div>
  );
};

export default Adversidad;
