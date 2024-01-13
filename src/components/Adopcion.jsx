import React from "react";

const Adopcion = () => {
  const anecdota1 = {
    titulo: 'MI PADRE ME ESCOGIÓ A MÍ',
    contenido: 'Una vez escuché a un grupo de chamacos que se estaban burlando de un niño de la escuela que era hijo adoptivo. Le dijeron a él, "Tu no eres el verdadero hijo de tu papá." El se aguantó lo más que pudo, pero al final les contestó, "Lo único que les puedo decir es que mi padre me escogió a mí, pero sus padres no pudieron hacer otra cosa que aceptarlos a ustedes."',
    fuente: '1200 More Notes, Quotes and Anecdotes. A. Naismith, M. A. London Pickering & Inglis Ltd. 1975',
  };

  const anecdota2 = {
    titulo: 'POEMA',
    contenido: 'Una vez había dos mujeres\nQue nunca se conocieron.\nUna a la que no recuerdas\nY a la otra la llamas Madre.\nUna fue tu estrella guiadora,\nLa otra fue tu sol.\nLa primera te dio vida\nY la segunda te enseñó a vivirla.\nLa primera te dio necesidad de amor\nY la segunda estaba ahí para dártelo.\nUna te dio nacionalidad,\nLa otra te dio un nombre,\nUna te dio la semilla de talento\nLa otra te guió en la manera de usarlo.\nUna te dio emociones,\nY la otra calmó tus temores.\nUna te vio la primera sonrisa,\nY la otra secó tus lágrimas.\nUna te dio—Era lo único que podía hacer,\nLa otra oró por un hijo\nY dios la guió directamente a ti.\nY ahora me preguntas con lágrimas,\nLas preguntas viejas de la edad durante los años,\nHereditario o Ambiente—De cuál eres producto de?\nNinguno mi amor-ninguno\nSolamente de dos diferentes tipos de amor.\nAnónimo',
    fuente: 'Anónimo',
  };

  return (
    <div>
      <h1>{anecdota1.titulo}</h1>
      <p>{anecdota1.contenido}</p>
      <p>Fuente: {anecdota1.fuente}</p>

      <h1>{anecdota2.titulo}</h1>
      <p>{anecdota2.contenido}</p>
      <p>Fuente: {anecdota2.fuente}</p>
    </div>
  );
};

export default Adopcion;
