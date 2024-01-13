import React from "react";
import ListadoAnecdotas from "./ListadoAnecdotas";
import styles from "./Anecdotas.module.css"
import { Helmet } from 'react-helmet';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Anecdotas = () => {
 
    const anecdotas = [
      { tema: "Abandono" },
      { tema: "Abnegacion" },
      { tema: "Aborto" },
      { tema: "Abuso" },
      { tema: "Accidente" },
      { tema: "Aceptacion" },
      { tema: "Actitud" },
      { tema: "Actividad" },
      { tema: "Acusacion" },
      { tema: "Admiracion" },
      { tema: "Adopcion" },
      { tema: "Adulacion" },
      { tema: "Adversario" },
      { tema: "Adversidad" },
      { tema: "Advertencia" },
      { tema: "Agradecimiento" },
      { tema: "Agua-Inagotable" },
      { tema: "Aguila" },
      { tema: "Ajustamiento" },
      { tema: "Alabanza" },
      { tema: "Alcohol" },
      // ... más anécdotas
    ];








  const anecdotasPorTemas = anecdotas.reduce((temas, anecdota) => {
    const tema = anecdota.tema || "Sin Tema"; // Si no hay tema, se asigna "Sin Tema"
    temas[tema] = temas[tema] || [];
    temas[tema].push(anecdota);
    return temas;
  }, {});






  return (
    <div className={styles.container} >


<Helmet>
  <title>Anécdotas - Anecdotas de la vida - Anécdotas cristianas - Anécdotas de famosos - Anécdotas graciosas - Anécdotas inspiradoras - Anécdotas históricas - Anécdotas de animales</title>
  <meta name="description" content="Explora y comparte anécdotas extraordinarias en nuestro sitio web. Sumérgete en historias fascinantes y encuentra inspiración en las experiencias de los demás." />
  <meta name="keywords" content="Anécdotas, Historias, Inspiración, Experiencias, Compartir, Emociones, Conexión" />
  <meta name="author" content="Yefer Sorners Boom" />
  <link rel="canonical" href="https://tusitioanecdotas.com/" />
</Helmet>
      
      
      
      
      <Link to="/inicio">Inicio</Link>
      <Link to="/acerca-de">Acerca de</Link>

      <h1 className={styles.elh1}>Lista De Anecdotas</h1>
      <ListadoAnecdotas anecdotas={anecdotas} />






      {Object.entries(anecdotasPorTemas).map(([tema, anecdotasDelTema]) => (
  <section key={tema}>
    <h2>{tema}</h2>
    <Link to={`/tema/${tema}`}>Ver todas las anécdotas de {tema}</Link>
    <ListadoAnecdotas anecdotas={anecdotasDelTema} />
  </section>
))}


    </div>
  );
};

export default Anecdotas;
