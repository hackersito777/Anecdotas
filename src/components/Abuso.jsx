import React from "react";

const Abuso = () => {
  const anecdotas = [
    {
      titulo: "ABUSO MATRIMONIAL",
      cuerpo:
        'Una encuesta actual de violencia matrimonial reporta aproximadamente uno de cada siete parejas Americanas ha usado una forma de abuso físico durante un argumento durante el pasado año. Instituto Nacional de Salud Mental, en Homemade, Junio, 1990.',
    },
    {
      titulo: "ABUSO SEXUAL DE NIÑOS",
      cuerpo:
        'Abuso sexual de niños es más esparcido de lo visto previamente, de acuerdo a un estudio hecho recientemente. ¿Quiénes son las víctimas? Entre 15% y 34% de todas las niñas de los EEUU; entre 3% y 9% de todos los niños. Más de 90% de los abusadores eran adultos masculinos. University of New Hampshire, en Homemade, Agosto, 1985.',
    },
    {
      titulo: "TENDENCIAS FUTURAS",
      cuerpo:
        'Niños que ven violencia física entre sus padres son seis veces más capaces de abusar a su propia pareja después de casarse. Si los niños también fueron golpeados por sus padres en su juventud, son 12 veces más capaces de abusar a su pareja. Bottom Line, en Homemade, Nov, 1985.',
    },
    // Puedes agregar más anécdotas si lo deseas
  ];

  return (
    <div>
      <h1>Anécdotas sobre el Abuso</h1>
      {anecdotas.map((anecdota, index) => (
        <div key={index}>
          <h2>{anecdota.titulo}</h2>
          <p>{anecdota.cuerpo}</p>
        </div>
      ))}
    </div>
  );
};

export default Abuso;
