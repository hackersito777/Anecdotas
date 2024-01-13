import React from "react";
import styles from "./Abnegacion.module.css"
const Abnegacion = () => {
  const anecdotas = [
    {
      titulo: "EL ENTUSIASMO DE GARIBALDI",
      cuerpo:
        "No estoy de acuerdo con las ideas de Garibaldi en todo, pero siempre admiré su entusiasmo. Recuerdo haber leído que cuando iba hacia Roma en 1867, fue encarcelado. Les escribió a sus compañeros lo siguiente: “Aunque cincuenta Garibaldis sean arrojados a la cárcel, Roma deberá ser liberada”. No le interesaba su comodidad personal, con tal que su patria fuese libertada. Si nosotros tenemos un amor parecido por nuestro Señor y por su causa, él ha de usarnos poderosamente en la edificación de su Reino. Por D.L. Moody.",
    },
    {
      titulo: "TRATABAN MAL AL PASTOR",
      cuerpo:
        "Un pastor se quejaba amargamente con un predicador visitante, contándole acerca de la forma en que era tratado por su congregación. Luego de escucharle durante un rato, el predicador le dijo: --¿Le han escupido en la cara alguna vez? --No, hasta ese punto no han llegado. --¿Le han azotado? --Tampoco --¿Le han coronado de espinas? Ya esta última pregunta el hombre no la contestó. Y su visitante prosiguió: --A su Señor y al mío lo trataron de esa manera, y sin embargo, “no abrió su boca”. Por D.L. Moody.",
    },
    {
      titulo: "LA DIFERENCIA",
      cuerpo:
        "Un hombre me preguntó, hace un tiempo: -¿Cómo explica usted el hecho de que Mahoma comenzara su labor seiscientos años después de Cristo y que ahora haya más mahometanos que cristianos?Le contestó: Un hombre puede ser discípulo de Mahoma sin tener que negarse, sin tener que llevar ninguna cruz. Puede vivir en el pecado más negro e inmundo. Pero si un hombre quiere ser discípulo de Jesucristo, debe dejar el mundo, tomar su cruz y seguir al Señor.Por D. L. Moody.",
    },
    // Puedes agregar más anécdotas si lo deseas
  ];

  return (
    <div className={styles.container}>
      <h1>Anécdotas sobre la Abnegación</h1>
      {anecdotas.map((anecdota, index) => (
        <div key={index}>
          <h2>{anecdota.titulo}</h2>
          <p>{anecdota.cuerpo}</p>
        </div>
      ))}
    </div>
  );
};

export default Abnegacion;
