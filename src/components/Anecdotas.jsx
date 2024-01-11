import React from "react";
import ListadoAnecdotas from "./ListadoAnecdotas";
import styles from "./Anecdotas.module.css"
import { Helmet } from 'react-helmet';

const Anecdotas = () => {
  const anecdotas = [
    {
        titulo: "LA VIDA DE BEETHOVEN. ",
        cuerpo:
          "El profesor de una escuela de medicina conocido mundialmente les puso a sus estudiantes esta situación médica: Aquí esta la historia de la familia: El padre tiene sífilis. La madre tiene tuberculosis. Juntos ya han tenido cuatro hijos. El primero es ciego. El segundo ya murió. El tercero es sordo. El cuarto tiene tuberculosis. Ahora la madre esta embarazada de nuevo. Los padres vienen contigo para que los aconsejes. Están dispuestos a tener un aborto, si tu decides que eso es lo necesario. ¿Qué les recomiendas?Los estudiantes dieron varias opiniones individualmente, y luego el profesor les pidió que se separasen en grupos para consultar. Todos los grupos regresaron para reportar que recomendarían un aborto.¡Felicidades!les dice su profesor, ¡Acabas de tomar la vida de Beethoven!Creemos que fue reportado primero en una columna de Ann Landers.",
      },
    {
      titulo: "LA LUZ NO PRENDIDA ",
      cuerpo:
        "Durante la Segunda Guerra Mundial seis pilotos de la marina dejaron el porta aviones a realizar una misión. Después de investigar el océano buscando a los submarinos del enemigo, trataron de regresar al porta aviones de noche. Más el capitán había ordenado apagar las luces del porta aviones. Una y otra vez los pilotos nerviosos se comunicaban por el radio, pidiendo que se prendiera una sola luz para poder ver el piso de aterrizaje. Más se le dijo a los pilotos que el orden de apagar las luces no se podía remover en ese momento. Después de muchas peticiones por parte de los pilotos, el operador del porta aviones apago el contacto de radio donde se comunicaban con los aviones—y los pilotos fueron forzados a caer al océano, a veces para creer en Dios no es necesario ver, sino creer. Reportado por:El Día de Hoy en la Palabra, MBI, Octubre, 1991, p. 12.",
    },
    {
      titulo: "EL ENTUSIASMO DE GARIBALDI ",
      cuerpo:
        "No estoy de acuerdo con las ideas de Garibaldi en todo, pero siempre admiré su entusiasmo. Recuerdo haber leído que cuando iba hacia Roma en 1867, fue encarcelado.  Les escribió a sus compañeros lo siguiente: “Aunque cincuenta Garibaldis sean arrojados a la cárcel, Roma deberá ser liberada”. No le interesaba su comodidad personal, con tal que su patria fuese libertada.  Si nosotros tenemos un amor parecido por nuestro Señor y por su causa, él ha de usarnos poderosamente en la edificación de su Reino. Por D.L. Moody.",
    },
    {
      titulo: "TRATABAN MAL AL PASTOR",
      cuerpo:
        "Un pastor se quejaba amargamente con un predicador visitante, contándole acerca de la forma en que era tratado por su congregación.  Luego de escucharle durante un rato, el predicador le dijo: --¿Le han escupido en la cara alguna vez? --No, hasta ese punto no han llegado. --¿Le han azotado? --Tampoco --¿Le han coronado de espinas? Ya esta última pregunta el hombre no la contestó.  Y su visitante prosiguió: --A su Señor y al mío lo trataron de esa manera, y sin embargo, “no abrió su boca”. Por D.L. Moody.",
    },
    {
        titulo: "LA DIFERENCIA ",
        cuerpo:
          "Un hombre me preguntó, hace un tiempo: -¿Cómo explica usted el hecho de que Mahoma comenzara su labor seiscientos años después de Cristo y que ahora haya más mahometanos que cristianos?Le contestó: Un hombre puede ser discípulo de Mahoma sin tener que negarse, sin tener que llevar ninguna cruz. Puede vivir en el pecado más negro e inmundo. Pero si un hombre quiere ser discípulo de Jesucristo, debe dejar el mundo, tomar su cruz y seguir al Señor.Por D. L. Moody.",
      },
      {
        titulo: "LA VIDA DE BEETHOVEN. ",
        cuerpo:
          "El profesor de una escuela de medicina conocido mundialmente les puso a sus estudiantes esta situación médica: Aquí esta la historia de la familia: El padre tiene sífilis. La madre tiene tuberculosis. Juntos ya han tenido cuatro hijos. El primero es ciego. El segundo ya murió. El tercero es sordo. El cuarto tiene tuberculosis. Ahora la madre esta embarazada de nuevo. Los padres vienen contigo para que los aconsejes. Están dispuestos a tener un aborto, si tu decides que eso es lo necesario. ¿Qué les recomiendas?Los estudiantes dieron varias opiniones individualmente, y luego el profesor les pidió que se separasen en grupos para consultar. Todos los grupos regresaron para reportar que recomendarían un aborto.¡Felicidades!les dice su profesor, ¡Acabas de tomar la vida de Beethoven!Creemos que fue reportado primero en una columna de Ann Landers.",
      },
      {
        titulo: "UNA ENCUESTA SOBRE EL ABORTO ",
        cuerpo:
          "Una encuesta reciente de parejas en Inglaterra reveló que, si eran capaces de saber las siguientes cosas por adelantado, 1% de ellos abortaría el hijo en base del sexo, 6% abortaría un niño con la posibilidad de la enfermedad Alzheimers, y un increíble 11% abortarían si el niño estaba predispuesto a obesidad.The Utne Reader, citado en los Signos de los Tiempos, Enero, 1993, p. 6.",
      },
      {
        titulo: "LA FUERTE PROMESA ",
        cuerpo:
          "Algunos a lo mejor recuerdan al hombre que ganó el caso en la Corte Suprema de los EEUU sobre el derecho de aborto para su esposa con una situación comatoso. Argumentó en ese tiempo que un aborto le daría ayuda para un posible rescate para la vida de su esposa, Nancy, quien obtuvo comatoso a resultado de un accidente de carro en 1988. El aborto fue un éxito, y ahora Martin Klein planea el divorcio con su esposa. Comentó, La vida cambia, una tragedia pasa. Todo es muy complicado. También dijo mi promesa a Nancy continúa manteniéndose más fuerte que nunca antes. Todos estamos de acuerdo. La promesa de él a su esposa es más fuerte ahora que lo era antes. Eso es decir, no mucho.Credenda, Agenda, Volume 4/Number 3, p. 15.",
      },
      {
        titulo: "ABUSO MATRIMONIAL",
        cuerpo:
          "Una encuesta actual de violencia matrimonial reporta aproximadamente uno de cada siete parejas Americanas ha usado una forma de abuso físico durante un argumento durante el pasado año.Instituto Nacional de Salud Mental, en Homemade, Junio, 1990.",
      },
      {
        titulo: "ABUSO SEXUAL DE NIÑOS",
        cuerpo:
          "Abuso sexual de niños es más esparcido de lo visto previamente, de acuerdo a un estudio hecho recientemente. ¿Quiénes son las victimas? Entre 15% y 34% de todas las niñas de los EEUU; entre 3% y 9% de todos los niños. Más de 90% de los abusadores eran adultos masculinos. University of New Hampshire, en Homemade, Agosto, 1985.",
      },
      {
        titulo: "TENDENCIAS FUTÚRICAS",
        cuerpo:
          "Niños que ven violencia física entre sus padres son seis veces más capaces de abusar a su propio pareja después de casarse. Si los niños también fueron golpeados por sus padres en su joventud, son 12 veces más capaces de abusar a su pareja.Bottom Line, en Homemade, Nov, 1985.",
      },
      {
        titulo: "EN LA VIDA DE UN CRISTIANO",
        cuerpo:
          "Rowland V. Bingham, fundador de la Misión Interior de Sudan, fue herido seriamente una vez en un accidente de auto. Fue llevado con prisa al hospital en condición critica. El día siguiente, cuando estuvo consiente, le preguntó a la enfermera la razón del porque estaba ahí. No trates de hablar ahora, simplemente descansa, ella le dijo. Has estado en un accidente.¿Accidente? ¡Accidente! exclamó Dr. Bingham. No hay accidentes en la vida de un Cristiano. Esto es solamente un incidente en la perfecta dirección de Dios.Fuente No Conocido. ",
      },
      {
        titulo: "LA MALA SUERTE DE TRABAJAR SOLO",
        cuerpo:
          "(En respuesta a una compañía de seguro) Les estoy escribiendo en respuesta a su petición de información adicional. En la línea #3 de la forma del accidente, yo puse tratando de hacer el trabajo solo como causa de mi accidente. Ustedes dijeron en la carta que debería de explicarme completamente, y yo confío que los siguientes detalles serán suficientes. Soy un ladrillero. En el día del accidente estaba trabajando solo en el techo de un edificio de seis pisos. Cuando completé mi trabajo, encontré que quedaron aproximadamente 500 libras de ladrillos. En vez de cargarlos a mano hasta abajo, decidí bajarlos con un barril usando un PULL que estaba conectado de buenas al sexto piso del edificio. Asegurando la cuerda en el primer piso, fuí al techo, llenando el barril de todos los ladrillos que quedaron. Luego bajé de nuevo al primer piso y deshice el nudo de la cuerda, agarrándolo fuertemente para asegurar que la descendencia de los 500 libras de ladrillos fuera muy lento.Notarás en la forma de accidente en la línea #11 que peso 135 libras. Pero para mi sorpresa el ser levantado del piso tan rápidamente, hizo que perdiera la consciencia y olvidé soltar la cuerda. Procedía a una velocidad veloz a un lado del edificio. En la vecindad del tercer piso, me encontré con el barril que bajaba. Esto explica la factura en el cráneo, y la fractura en el hueso de la collera. Continúa mi ascendencia, no deteniéndome hasta que dos nudillos de la mano derecha estaba atorados en el PULL. Afortunadamente, para este tiempo, tenía la consciencia de nuevo, y era capaz de agarrarme fuerte a la cuerda, a pesar del dolor.Al mismo tiempo aproximadamente, sin embargo, el barril lleno de ladrillos pegó al piso, y el fondo del barril se salió. Sin el peso de los ladrillos, el barril en ese momento pesaba 50 libras aproximadamente. De nuevo te pido que te fijes en mi peso en la línea #11.Como te imaginarás, empecé a descender rápidamente a un lado del edificio. En la vecindad del tercer piso, me encontré con el barril que subía. Esto explica las fracturas en los dos tobillos, y las desgarradas en las piernas, y en la parte baja de mi cuerpo. El encuentro con el barril me detuvo lo suficiente para disminuir los golpes cuando caí arriba del montón de ladrillos, y afortunadamente solo tres vértebras que fueron fracturados.Siento mucho el reportar, sin embargo, que al acostarme ahí en los ladrillos, en dolor…sin poderme levantar…viendo al barril vacío seis pisos arriba de mi…otra vez perdí la consciencia y solté la cuerda. Como pesaba el barril más que la cuerda, cayó encima de mí, y fracturó mis dos piernas.Creo que ya les he correspondido con toda la información que requieren.Fuente No Conocida.",
      },
      {
        titulo: "NUNCA ES SUFICIENTE",
        cuerpo:
          "Keith Hernandez es uno de los mejores jugadores de beisbol. Es un bateador de 300 de por vida quien ha ganado numerosos reconocimientos del Guante de Oro por su excelencia de jugador de campo. Ha ganado un campeonato de batear por tener el más alto de promedio, el reconocimiento del Jugador Más Valioso en su liga, y hasta el Serie Mundial. Sin embargo, a pesar de sus logros, no tiene algo que le es crucialmente importante – la aceptación por parte de su padre que lo que ha logrado es valioso. Escucha lo que el tenía para decir en una entrevista en vista de su relación con su padre: Un día Keith le preguntó a su padre, Papa, tengo un promedio de ser un bateador de 300 de por vida. ¿Qué más quieres? Su padre le respondió, Pero un día verás tu vida y dirás, ’pude haber hecho más.’Gary Smalley & John Trent, Ph.D., El Regalo de Honor, p. 116.",
      },
      {
        titulo: "EL PODER DE LA ACTITUD",
        cuerpo:
          "Lucas era el tipo de persona que te encantaría odiar. Siempre estaba de buen humor y siempre tenía algo positivo que decir. Cuando alguien le preguntaba cómo le iba, él respondía: Si pudiera estar mejor, tendría un gemelo. Era un gerente único porque tenía varias meseras que lo habían seguido de restaurante en restaurante. La razón por la que las meseras seguían a Lucas era por su actitud. Él era un motivador natural: Si un empleado tenía un mal día, Lucas estaba ahí para decirle al empleado cómo ver el lado positivo de la situación. Ver este estilo realmente me causó curiosidad, así que un día fui a buscar a Lucas y le pregunté: No lo entiendo... no es posible ser una persona positiva todo el tiempo, ¿cómo lo haces? Lucas respondió: Cada mañana me despierto y me digo a mí mismo, Lucas, tienes dos opciones hoy: Puedes escoger estar de buen humor o puedes escoger estar de malhumor. Escojo estar de buen humor. Cada vez que sucede algo malo puedo escoger entre ser una víctima o aprender de ello. Escojo aprender de ello. Cada vez que alguien viene a mí para quejarse, puedo aceptar su queja o puedo señalarle el lado positivo de la vida. Escojo enseñarle el lado positivo de la vida. Si claro pero no es tan fácil (proteste). Si lo es, dijo Lucas. Todo en la vida es acerca de elecciones. Cuando quitas todo lo demás, cada situación es una elección. Tu eliges cómo reaccionas a cada situación, tu eliges cómo la gente afectará tu estado de ánimo, tu eliges estar de buen humor o mal humor. En resumen: TU ELIGES COMO VIVIR LA VIDA. Reflexioné en lo que Lucas me dijo. Poco tiempo después, dejé la Industria de restaurantes para iniciar mi propio negocio. Perdimos contacto, pero con frecuencia pensaba en Lucas cuando tenía que hacer una elección en la vida en vez de reaccionar a ella. Varios años más tarde, me enteré que Lucas hizo algo que nunca debe hacerse en un negocio de restaurante: Dejó la puerta de atrás abierta una mañana y fue asaltado por 3 ladrones armados. Mientras trataba de abrir la caja fuerte, su mano temblando por el nerviosismo, resbaló de la perilla de combinación. Los asaltantes sintieron pánico y le dispararon. Con mucha suerte, Lucas fue encontrado relativamente pronto y llevado de emergencia a una clínica. Después de 18 horas de cirugía y semanas de terapia intensiva, Lucas fue dado de alta aún con fragmentos de bala en su cuerpo. Me encontré con Lucas seis meses después del accidente y cuando le pregunté cómo estaba, me respondió: Si pudiera estar mejor, tendría un gemelo. Le pregunté qué pasó por su mente en el momento del asalto. Contestó: Lo primero que vino a mi mente fue que debí haber cerrado con llave la puerta de atrás. Cuando estaba tirado en el piso recordé que tenía 2 opciones. Podía elegir vivir o podía elegir morir. Elegí vivir. ¿No, sentiste miedo?, le pregunté. Lucas continuó - Los médicos fueron geniales. No dejaban de decirme que iba a estar bien. Pero cuando me llevaron al quirófano y vi las expresiones de las caras de los médicos y enfermeras, realmente me asusté... podía leer en sus ojos: es hombre muerto. Supe entonces que debía tomar una decisión. ¿Qué hiciste?, pregunté. Bueno... uno de los médicos me preguntó si era alérgico a algo y respirando profundo grité: Sí, a las balas. Mientras reían les dije: Estoy escogiendo vivir... opérenme como si estuviera vivo, no muerto. Lucas vivió por la maestría de los médicos, pero sobre todo por su asombrosa actitud. Aprendí de que cada día tenemos la elección de vivir plenamente. La ACTITUD, al final, es TODO. Recuerda: Solo se frustran aquellos que dejan de ver la parte positiva de sus resultados. Anónimo",
      },
      {
        titulo: "PERDIDOS",
        cuerpo:
          "Es un hábito irónico del ser humano el correr más rápido cuando hemos perdido nuestro camino. Rollo May.  LO IMPORTANTE ES LLEGAR Es más importante el saber donde vas que el llegar rápido. No confundas la actividad con el logro. Mable Newcomber.",
      },
      {
        titulo: "UN PEQUEÑO DESCUIDO",
        cuerpo:
          "Juan estaba manejando tarde una noche cuando recogió a un muchacho que le pidió un aventón. Mientras iban en el camino, empezó a sospechar del pasajero. Juan revisó si su cartera estaba segura en el bolsillo de su abrigo que estaba en medio de los dos asientos, ¡pero no estaba ahí! Así que frenó rápidamente, y le ordenó al pasajero que saliera del carro, y dijo, ¡Dame la cartera inmediatamente! El pasajero lleno de miedo le dio la cartera, y Juan se fue. Cuando llego a casa, le empezó a contar a su esposa de su experiencia, pero ella le interrumpió, diciendo, Antes de que se me olvide, Juan, ¿sabías que dejaste tu cartera en casa esta mañana?Nuestro Pan de Cada Día, 2 de Octubre de 1992.",
      },
      {
        titulo: "EL AUTÓGRAFO ",
        cuerpo:
          "Una pareja joven terminó de ver a Bill Cosby en vivo y fueron atrás del teatro deseando un autógrafo del comediante en un libro para su bebe recién nacido. Un ayudante llevo el libro a Cosby, y cuando lo regresó la pareja buscaba ansiosamente la firma. No lo encontraban, y se fueron del teatro decepcionados. Días después, sin embargo, la madre la encontró en una de las páginas del libro de bebe. La página tenía un titulo llamado El Primer Enunciado del Bebe.En dicha página Cosby había firmado Me gusta Bill Cosby.Bits & Pieces, April 28, 1994, pp. 19-20.",
      },
      {
        titulo: "MI PADRE ME ESCOGIÓ A MÍ",
        cuerpo:
          "Una vez escuché a un grupo de chamacos que se estaban burlando de un niño de la escuela que era hijo adoptivo. Le dijeron a él, Tu no eres el verdadero hijo de tu papá.El se aguantó lo más que pudo, pero al final les contestó, Lo único que les puedo decir es que mi padre me escogió a mí, pero sus padres no pudieron hacer otra cosa que aceptarlos a ustedes. 1200 More Notes, Quotes and Anecdotes.A. Naismith, M. A. London Pickering & Inglis Ltd. 1975",
      },
  ];

  return (
    <div className={styles.container} >


<Helmet>
  <title>Anécdotas Extraordinarias - Descubre y Comparte Experiencias Únicas</title>
  <meta name="description" content="Explora y comparte anécdotas extraordinarias en nuestro sitio web. Sumérgete en historias fascinantes y encuentra inspiración en las experiencias de los demás." />
  <meta name="keywords" content="Anécdotas, Historias, Inspiración, Experiencias, Compartir, Emociones, Conexión" />
  <meta name="author" content="Yefer Sorners Boom" />
  <link rel="canonical" href="https://tusitioanecdotas.com/" />
</Helmet>


      <h1 className={styles.elh1}>Anecdotas</h1>
      <ListadoAnecdotas anecdotas={anecdotas} />
    </div>
  );
};

export default Anecdotas;
