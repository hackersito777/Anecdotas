import React from "react";

const Accidente = () => {
  const anecdotas = [
    {
      titulo: "EN LA VIDA DE UN CRISTIANO",
      cuerpo:
        'Rowland V. Bingham, fundador de la Misión Interior de Sudan, fue herido seriamente una vez en un accidente de auto. Fue llevado con prisa al hospital en condición critica. El día siguiente, cuando estuvo consiente, le preguntó a la enfermera la razón del porque estaba ahí. "No trates de hablar ahora, simplemente descansa," ella le dijo. "Has estado en un accidente." "¿Accidente? ¡Accidente!" exclamó Dr. Bingham. "No hay accidentes en la vida de un Cristiano. Esto es solamente un incidente en la perfecta dirección de Dios." Fuente No Conocido.',
    },
    {
      titulo: "LA MALA SUERTE DE TRABAJAR SOLO",
      cuerpo:
        'Les estoy escribiendo en respuesta a su petición de información adicional. En la línea #3 de la forma del accidente, yo puse "tratando de hacer el trabajo solo" como causa de mi accidente. Ustedes dijeron en la carta que debería de explicarme completamente, y yo confío que los siguientes detalles serán suficientes. Soy un ladrillero...',
    },
    // Puedes agregar más anécdotas si lo deseas
  ];

  return (
    <div>
      <h1>Anécdotas sobre Accidentes</h1>
      {anecdotas.map((anecdota, index) => (
        <div key={index}>
          <h2>{anecdota.titulo}</h2>
          <p>{anecdota.cuerpo}</p>
        </div>
      ))}
    </div>
  );
};

export default Accidente;
