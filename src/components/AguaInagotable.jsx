import React from "react";

const AguaInagotable = () => {
  const anecdotas = [
    {
      titulo: 'Buenas Noticias',
      contenido: 'Se dice que el poeta Tennyson le preguntó una vez a una anciana cristiana si tenía alguna noticia. "Pero, señor Tennyson, hay una sola noticia que yo conozco y es que Cristo murió por los pecadores." "Esa es noticia vieja, noticia nueva, y buena noticia", respondió el poeta. Por D.L. Moody',
    },
    {
      titulo: 'Cristo Quiere Ver Brillar Nuestra Luz',
      contenido: 'Dios quiere que brillemos. No todos podemos ser faros, pero cualquiera de nosotros puede ser una velita de sebo. Una lamparita a veces puede hacer mucho. El incendio de Chicago se debió a que una vaca, de una patada, volteó una lámpara. Cien mil personas, como resultado, perdieron sus casas y sus posesiones. Que no te haga creer Satanás que porque no puedes hacer grandes cosas, no puedes hacer nada. Por D.L. Moody',
    },
    {
      titulo: 'Lleva Tiempo',
      contenido: 'Imaginémonos que yo enviase a mi hijito de cinco años al colegio mañana por la mañana, y cuando estuviese de vuelta a la tarde le dijese: "Guillermo, ¿sabes leer? ¿sabes escribir? ¿conoces la ortografía? ¿entiendes el álgebra, la geometría, el hebreo, el latín y el griego?". Por D.L. Moody',
    },
    {
      titulo: 'Moody Predicaba sobre "Textos Viejos"',
      contenido: 'Pero quizá digas: “Espero que Moody no vaya a predicar sobre ese viejo texto”. Voy a predicar sobre él. Cuando me pongo a mirar fotografías, no exijo que todas sean fotografías nuevas; si reconozco alguna cara, me detengo inmediatamente. Así sucede con estos viejos textos. Han saciado en otras ocasiones nuestra sed, pero el agua sigue brotando. Son inagotables. Por D.L. Moody',
    },
    {
      titulo: 'Nunca Se Agota',
      contenido: 'Recuerdo que visité una ciudad en donde la gente iba a sacar agua de un pozo favorito situado en uno de los parques. Un día le pregunté a un hombre si el pozo se secaba. El hombre estaba tomando agua, y luego de terminar su trago me dijo: "Nunca han podido agotar este pozo. Procuraron hacerlo hace algunos años. Pusieron en funcionamiento las bombas del Cuerpo de Bomberos, sin resultados alguno. Encontraron que hay un caudaloso río que corre por debajo de la ciudad. ¡Gracias a Dios, así es el pozo de la salvación! ¡Nunca puede agotarse! Por D.L. Moody',
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

export default AguaInagotable;
