import React from 'react';
import styles from "./Inicio.module.css"

const Inicio = () => {
  return (
    <div className={styles.container}>
      <h1>Bienvenido a la Colección de Anécdotas</h1>
      <p>Explora nuestras conmovedoras anécdotas, cada una clasificada cuidadosamente por temas que tocan el corazón y alimentan el alma.</p>
      
      <section>
        <h2>Anécdotas de Amor 💖</h2>
        <div>
          {/* Lista de anécdotas de amor */}
          <p>¡Descubre historias de amor que te harán sonreír y creer en la magia del corazón!</p>
        </div>
      </section>

      <section>
        <h2>Anécdotas de Bondad 🌟</h2>
        <div>
          {/* Lista de anécdotas de bondad */}
          <p>¡Sumérgete en relatos que destacan la bondad humana y la luz que cada pequeño acto de generosidad puede llevar al mundo!</p>
        </div>
      </section>

      <section>
        <h2>Anécdotas de Paciencia ⏳</h2>
        <div>
          {/* Lista de anécdotas de paciencia */}
          <p>¡Explora narrativas que celebran la virtud de la paciencia y la fortaleza que proviene de enfrentar desafíos con calma!</p>
        </div>
      </section>

      <section>
        <h2>Anécdotas de Paz ☮️</h2>
        <div>
          {/* Lista de anécdotas de paz */}
          <p>¡Encuentra serenidad en nuestras historias que inspiran la paz interior y la armonía en medio del caos!</p>
        </div>
      </section>

      <section>
        <h2>Anécdotas de Consolación 🌈</h2>
        <div>
          {/* Lista de anécdotas de consolación */}
          <p>¡Descubre relatos que ofrecen consuelo y esperanza en momentos difíciles, recordándote que siempre hay luz al final del túnel!</p>
        </div>
      </section>

      {/* Puedes seguir agregando más secciones y temas según sea necesario */}

    </div>
  );
};

export default Inicio;
