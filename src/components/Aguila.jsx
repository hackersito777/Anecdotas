import React from "react";

const Aguila = () => {
  const anecdotas = [
    {
      titulo: 'El Águila y la Tormenta',
      contenido: '¿Sabías que un águila sabe cuando una tormenta se acerca mucho antes de que empiece? El águila volará a un sitio alto para esperar los vientos que vendrán. Cuando pega la tormenta, coloca sus alas para que el viento las agarre y le lleve por encima de la tormenta. Mientras que la tormenta este destrozando abajo, el águila vuela por encima de ella. Las tormentas no tienen que pasar sobre nosotros. Podemos dejar que el poder de Dios nos levante por encima de ellas. Dios nos permite ir con el viento de la tormenta que trae enfermedad, tragedia, y demás cosas en nuestras vidas. Podemos volar sobre la tormenta. Recuerda, no son los pesos de la vida que nos lleva hacia abajo, sino el cómo los manejamos. La Biblia dice, Isaías 40:31 – "pero los que esperan a Jehová tendrán nuevas fuerzas; levantarán alas como las águilas; correrán, y no se cansarán; caminarán, y no se fatigarán."',
    },
    {
      titulo: 'La Sabiduría del Águila',
      contenido: 'El águila es el ave con mayor longevidad de esas especies. Llega a vivir 70 años, pero para llegar a esa edad, a los 40, debe tomar una seria y difícil decisión. A los 40 años, sus uñas están apretadas y flexibles y no consigue tomar a sus presas de las cuales se alimenta. Su pico largo y puntiagudo, se curva, apuntando contra el pecho. Sus alas están envejecidas y pesadas y sus plumas gruesas. Volar se hace ya tan difícil. Entonces, el águila tiene solamente dos alternativas: morir o enfrentar un dolorido proceso de renovación que durará 150 días. Ese proceso consiste en volar hacia lo alto de una montaña y quedarse ahí, en un nido cercano a un paredón, en donde no tenga la necesidad de volar. Después de encontrar ese lugar, el águila comienza a golpear su pico en la pared hasta conseguir arrancarlo. Luego debe esperar el crecimiento de uno nuevo con el que desprenderá una a una sus uñas. Cuando las nuevas uñas comienzan a nacer, comenzará a desplumar sus plumas viejas. Después de cinco meses, sale para su vuelo de renovación y a vivir 30 años más. En nuestras vidas, muchas veces tenemos que resguardarnos por algún tiempo y comenzar un proceso de renovación para continuar un vuelo de victoria, debemos desprendernos de costumbres, tradiciones y recuerdos que nos causaron dolor. Solamente libres del peso del pasado podremos aprovechar el resultado valioso que una renovación siempre trae.',
    },
  ];

  return (
    <div>
      {anecdotas.map((anecdota, index) => (
        <div key={index}>
          <h2>{anecdota.titulo}</h2>
          <p>{anecdota.contenido}</p>
        </div>
      ))}
    </div>
  );
};

export default Aguila;
