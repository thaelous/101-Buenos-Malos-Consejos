export interface Consejo {
  id: number;
  title: string;
  category: 'caracter' | 'dinero' | 'relaciones' | 'mentalidad' | 'vida';
  shortText: string;
  fullText?: string;
  isViral?: boolean;
}

export const CONSEJOS_DATA: Consejo[] = [
  {
    id: 1,
    title: "HAZ LO QUE QUIERAS",
    category: "vida",
    shortText: "Haz lo que quieras en medida de tus posibilidades, pero no te limites. Si teniendo en cuenta las consecuencias estás dispuesto a asumirlas y te sientes bien con ello, haz lo que quieras. Uno se arrepiente más de lo que no hizo que de lo que sí.",
    fullText: "Haz lo que quieras, siempre haz lo que quieras.\n\nEsto es muy importante porque es la clave de estar bien contigo mismo y ser feliz. Haz lo que quieras, siempre haz lo que quieras en medida de tus posibilidades, pero no te limites, si es lo que quieres; hazlo.\n\nSin embargo, ten en cuenta las consecuencias que puede tener esa acción.\n\nSi, teniendo en cuenta las consecuencias, estás dispuesto a asumirlas y te sientes bien con ello, haz lo que quieras. Porque conforme pasan los años y evalúas tu vida, uno se arrepiente más de lo que no bailó que de los ridículos que hiciste cuando bailaste. Uno se arrepiente mucho más de lo que no hizo que de lo que sí.\n\nHaz lo que quieras, hijo mío, y busca ser feliz.",
    isViral: true
  },
  {
    id: 2,
    title: "NUNCA HIERAS",
    category: "caracter",
    shortText: "Nunca hieras a conciencia. La defensa no es ofensa: nunca tires el primer golpe, mas asegúrate de tirar el último. Y emocionalmente: tú eres responsable de lo que dices, los demás de cómo lo toman.",
    fullText: "Nunca hieras. Nunca a conciencia.\n\nEsto lo dividimos en dos:\n\nFísicamente, nunca lastimes, nunca golpees, nunca inicies una pelea. Más si ellos te hieren, te atacan y te lastiman, recuerda bien que es tu derecho el defenderte. Porque la defensa no es ofensa, es un derecho que tienes. De la misma manera, si tú lastimas o atacas a alguien, ellos tendrán todo el derecho de defenderse. La defensa no es ofensa, y recuérdalo muy bien, nunca tires el primer golpe, más asegúrate de tirar el último.\n\nEmocionalmente, nunca hieras o, por lo menos, procura herir lo menos posible. Procura ser cordial con la gente, háblales bien, pero no te limites en tus dichos, porque tú eres responsable de lo que dices, los demás son responsables de cómo lo toman. Si alguien se ofende por lo que tú dijiste, recuerda que tú no eres responsable de sus emociones y si ellos lloriquean, se enojan o se ofenden, es asunto de ellos, no tuyo.",
    isViral: true
  },
  {
    id: 3,
    title: "EL SENTIDO DE LA VIDA",
    category: "mentalidad",
    shortText: "La vida no tiene sentido. Pero eso no quiere decir que tú no puedas darle ese sentido y hacer que tu vida valga algo para ti y para los demás.",
    fullText: "Este va a estar muy rudo, pero entre más pronto lo comprendas, mucho mejor:\n\nLa vida no tiene sentido.\n\nNo existe un sentido, no existe un destino, no existe un por qué te están pasando las cosas, ni hay un universo que quiera que aprendas algo para seguir adelante.\n\nLa vida no tiene un sentido y entre más pronto lo comprendas, vas a ser más feliz y vas a estar mejor, porque muchas personas pierden muchísimo tiempo tratando de encontrarle un sentido a las cosas que les están pasando, un sentido a la vida, pero la vida carece de ello.\n\nLa vida no tiene un sentido en sí, pero eso no quiere decir que tú no puedas darle ese sentido y hacer que tu vida valga algo para ti y para los demás.",
    isViral: true
  },
  {
    id: 4,
    title: "LADRÓN DE CULPAS",
    category: "mentalidad",
    shortText: "No tomes cosas que no te pertenezcan y eso incluye las culpas: no cargues con culpas ajenas ni te disculpes jamás por algo que no lamentes. No seas un ladrón de culpas.",
    fullText: "No tomes cosas que no te pertenezcan. No tomes cosas que no sean para ti, que no sean tuyas. Desde pequeño te he enseñado que aquella persona que toma cosas que no le pertenecen es un ladrón.\n\nPor lo tanto, no tomes cosas que no sean para ti y eso incluye las culpas; no tomes culpas que no te pertenezcan, no cargues con culpas que no sean para ti. Nunca te disculpes por algo que no lamentes…\n\nNo seas un ladrón de culpas.",
    isViral: true
  },
  {
    id: 5,
    title: "ANÉCDOTA DE LOS ERRORES",
    category: "vida",
    shortText: "Los accidentes pasan y los errores se cometen, pero existen consecuencias. Porque las cosas tienen consecuencias, las hayamos querido cometer o no.",
    fullText: "El día de ayer ibas caminando con tu teléfono en la mano, tropezaste y caíste. Afortunadamente, a ti no te pasó mayor cosa; pero tu teléfono se rompió. Recuerdo que inmediatamente volteaste a verme para ver si me había enojado, después viste tu teléfono y te pusiste muy triste al notar que lo habías roto, porque tú quieres mucho a tu teléfono, porque te gusta tomar fotos y vídeos con él.\n\nYo no me enojé contigo, porque entiendo que los accidentes ocurren y que tú no querías romperlo. Sin embargo, debes comprender una cosa, mi muchacho, los accidentes pasan, los errores los cometemos y a pesar de que no hayamos querido cometerlos o no hayamos querido tener el accidente; existen consecuencias.\n\nNo te voy a castigar por ello, pero debes comprender las consecuencias de ese accidente que tuviste, ese error que cometiste. Yo no voy a poder comprarte un teléfono en varias semanas y tendrás que aceptarlo también. Porque las cosas tienen consecuencias, las hayamos querido cometer o no."
  },
  {
    id: 6,
    title: "LA ESCUELA Y LA VIDA",
    category: "vida",
    shortText: "La escuela te enseña una lección y luego te pone a prueba; pero la vida primero te pone a prueba y luego de ello… aprenderás una lección.",
    fullText: "A pesar de lo doloroso, desagradable o frustrante que pudo haber sido una situación en la cual estuviste, lo mejor nunca será olvidarlo.\n\nNo deseches las vivencias que has tenido, aprende de ellas. Aprende de cada situación, aún más si fue en tu contra.\n\nPorque de eso se trata la vida.\n\nPorque la vida se diferencia de la escuela precisamente por eso, porque la escuela te enseña una lección y luego te pone a prueba; pero la vida primero te pone a prueba y luego de ello… aprenderás una lección."
  },
  {
    id: 7,
    title: "LA VIDA Y LA PUERTA",
    category: "mentalidad",
    shortText: "Cuando la vida te cierre una puerta, intenta abrirla otra vez; tal vez ya no tenga seguro o busca otra puerta abierta. Para eso están las puertas: para abrirse y cerrarse.",
    fullText: "Cuando la vida te cierre una puerta, intenta abrirla otra vez; tal vez ya no tenga seguro o busca otra puerta que esté abierta.\n\nPorque al final de cuentas para eso están las puertas: para abrirse, para cerrarse.\n\nPorque finalmente así funcionan las puertas… …y así funciona la vida.",
    isViral: true
  },
  {
    id: 8,
    title: "PERTENECER A UN GRUPO",
    category: "relaciones",
    shortText: "Querer pertenecer a un grupo es normal, pero que nunca sea a costa tuya ni de lo que eres. No ocultes tu persona, o quienes valen la pena no podrán encontrarte.",
    fullText: "Si basas tus opiniones, tus ideas, tus valores y tu personalidad en lo que le guste y acepte cierto grupo social, es muy probable que logres encajar en él; pero estarás viviendo una vida que no es tuya.\n\nConforme vayas creciendo, será normal querer pertenecer a un grupo, pero que nunca sea a costa tuya ni de lo que tú eres.\n\nNo ocultes la maravillosa persona que eres, pues si lo haces, las personas que realmente valen la pena no podrán encontrarte… …y tan solo serás una sombra de ti mismo."
  },
  {
    id: 9,
    title: "LO QUE POSEES TE POSEE",
    category: "dinero",
    shortText: "Toda cosa que obtengas también te hará responsable de ella. Por lo tanto, debes entenderlo bien: todo aquello que tienes también, a final de cuentas, te tiene a ti.",
    fullText: "Tus posesiones, tus pertenencias y todo lo que tienes implicarán en ti una responsabilidad.\n\nEstá bien querer tener cosas y está bien querer tener más. Pero recuerda que toda cosa que obtengas también te hará responsable de ella. Si tienes una mascota, deberás alimentarla. Si tienes una pareja, deberás cuidar la relación. Si tienes un hijo, te convertirás en padre y todo aquello implica responsabilidad para ti.\n\nPor lo tanto, debes entenderlo bien: todo aquello que tienes también, a final de cuentas, te tiene a ti.",
    isViral: true
  },
  {
    id: 10,
    title: "EL MUNDO NO ESTÁ DISEÑADO PARA TI",
    category: "vida",
    shortText: "El mundo no está diseñado para que seas feliz ni tiene tu misma noción de justicia. Cuando aceptes eso, podrás ver lo maravilloso que es el mundo, aunque no esté diseñado para ti.",
    fullText: "El mundo no está diseñado para ti. El mundo no está diseñado para que estés contento, te sientas seguro, te sientas sano y protegido. El mundo no está diseñado para que seas feliz.\n\nY a pesar de lo mucho que te amo y de la paciencia que tengo en tus berrinches, comprensión en tus dolores y aceptación de tus errores, debes saber que el mundo no va a actuar igual a la gente que te ama. El mundo no va a estar para que estés feliz.\n\nY entre más pronto aceptes que el mundo puede parecer cruel simplemente porque no tiene la misma noción de justicia que tú, entonces podrás ver más allá de eso y darte cuenta de lo maravilloso que es el mundo, aunque no esté diseñado para ti.",
    isViral: true
  },
  {
    id: 11,
    title: "SI PIDES, OFRECES",
    category: "dinero",
    shortText: "Siempre que solicites algo, debes estar dispuesto a ofrecer y aportar algo a cambio: tiempo, esfuerzo, dinero o conocimiento. Saca provecho de las situaciones, jamás de las personas.",
    fullText: "Siempre que solicites algo, debes estar dispuesto a ofrecer y aportar algo a cambio: tiempo, dinero, esfuerzo, conocimientos, habilidades, algo.\n\nNo importa la situación, cuando solicites algo, aporta algo a cambio. Y debes estar completamente seguro de que esa persona está de acuerdo con ese intercambio.\n\nRecuérdalo bien, siempre saca el mayor provecho de una situación, no de las personas."
  },
  {
    id: 12,
    title: "ALGO PARA TI",
    category: "caracter",
    shortText: "Da todo el amor, la confianza y la lealtad que puedas. Pero siempre guarda algo para ti: porque cuando se acaben, no quedará nada que repartir, ni siquiera para ti mismo.",
    fullText: "Da todo el amor que puedas, toda la confianza que puedas, toda la lealtad que puedas. Pero siempre, siempre, guarda algo para ti.\n\nPorque cuando se acabe ese amor, esa confianza y esa lealtad, no quedará nada que repartir… ni siquiera para ti mismo."
  },
  {
    id: 13,
    title: "EL SABOR DEL JARABE",
    category: "vida",
    shortText: "Ten cariño a quienes te den lo que quieres, pues buscan tu felicidad. Mas ten gran respeto y amor a quienes te den lo que necesitas, pues buscan tu bienestar.",
    fullText: "El jarabe sabe horrible, ¿verdad, mi muchacho? Pero te hará sentir mejor y es bueno que te des cuenta de lo importante que es tener cosas que quieras aunque no las necesites, como es importante aceptar tener cosas que necesites aunque no las quieras.\n\nPor ello, siente cariño y gratitud por aquellas personas que te den las cosas que quieres, pues buscan tu felicidad. Mas ten gran respeto y amor a aquellas personas que te den lo que necesitas pues buscan tu bienestar."
  },
  {
    id: 14,
    title: "LUCHANDO CONTRA LO INJUSTO",
    category: "caracter",
    shortText: "Si ante una situación que consideras injusta clamas '¡yo no merezco esto!', pero no haces nada por cambiarlo, detenerlo o salirte, entonces sí te lo mereces.",
    fullText: "Habrá momentos en los cuales estés en una situación que tú consideres injusta, que te lastime o te incomode y clamarás para ti o para los demás:\n\n'¡Yo no merezco esto!'\n\nY tal vez tengas razón, pero si no haces algo por cambiarlo, por detenerlo o por salir de allí y te quedas simplemente pasivo ante el hecho, entonces, hijo mío… …sí te lo mereces.",
    isViral: true
  },
  {
    id: 15,
    title: "COMO UN CABALLERO",
    category: "relaciones",
    shortText: "Todo acto de consideración, gentileza y caballerosidad debe ser recíproco o al menos agradecido. De lo contrario, no tienes por qué seguir haciéndolo con esa persona.",
    fullText: "Yo te educo así, como un caballero, pero recuerda también que todo acto de consideración, gentileza, amabilidad y caballerosidad ya sea hacia una mujer, un hombre, un niño o un anciano, debe ser recíproco o al menos agradecido. De lo contrario, no tienes por qué seguir haciéndolo con esa persona.\n\nHace muchos años invité a cenar a una chica; le cedí el paso y le acerqué la silla. Con desprecio me dijo: 'Gracias, pero no estoy inválida'. Le respondí con calma: 'Lo lamento, tienes razón. Es que me gusta sentir que soy un caballero y creí que eras una dama'.\n\nLos actos de caballerosidad, gentileza o consideración deben ser recíprocos, agradecidos o dejar de serlo con esa persona.",
    isViral: true
  },
  {
    id: 16,
    title: "AFILA TUS DIENTES",
    category: "caracter",
    shortText: "La paz debe ser en ti una opción y no ser pacifista por simple resignación. Es mejor aprender a ser violento y no tener necesidad de serlo, que necesitarlo y no estar preparado para luchar.",
    fullText: "Afila tus dientes, tensa tus músculos, aprieta los puños. Aprende a pelear, aprende a atacar, aprende a golpear, aprende a gritar, aprende a insultar, aprende a criticar. Aprende a golpear con puños y con palabras.\n\nAprende a recibir golpes en tu cuerpo, en tu alma, en tu corazón, aprende a recibir insultos, aprende a recibir críticas. Hazte más fuerte. Prepárate para las batallas, prepárate para las guerras.\n\nAprende a ser violento cuando sea necesario, porque llegará el momento en que necesitarás defenderte o defender lo que amas, defender a las personas que no pueden defenderse y tú deberás estar preparado para ello.\n\nPorque la paz debe de ser en ti tan solo una opción y no ser pacifista por simple resignación. Pues es mejor aprender a ser violento y no tener la necesidad de serlo, que necesitarlo y por no estar preparado para luchar.",
    isViral: true
  },
  {
    id: 17,
    title: "QUIEN NO PUEDE SER CRITICADO…",
    category: "mentalidad",
    shortText: "Aquella persona que no acepta ser criticada no puede ser ayudada. Acepta que te digan que te equivocaste y hazte responsable. Quien no acepte críticas, no gastes tu tiempo allí.",
    fullText: "Aquella persona que no acepta ser criticada no puede ser ayudada.\n\nCuando alguien necesita apoyo, cuando necesita ayuda también necesita escuchar en qué se equivocó, en qué está mal, qué debe hacer para mejorar. Más, aquella persona que no acepta la crítica pone enfrente de sí una barrera que no permite que se le acerquen, que no permite que cambie de opinión, que no permite que los demás puedan apoyarlo de alguna manera.\n\nNo actúes de esa manera, acepta que se te diga que estás equivocado, hazte responsable por tus errores y solo en ese momento podrás recibir apoyo y ayuda. Y cuando te encuentres a alguien que no acepte nada de ello, que no acepte su responsabilidad, que no le guste que lo critiques, simplemente no gastes tu tiempo allí."
  },
  {
    id: 18,
    title: "DATE A CONOCER",
    category: "relaciones",
    shortText: "Haz que la gente hable de ti, que te extrañen en tu ausencia y te quieran en tu presencia. Pero que hablen con cariño, admiración y alegría; si no es así, mejor no te des a conocer.",
    fullText: "Date a conocer.\n\nHaz que la gente hable de ti, que te extrañen en tu ausencia, que te quieran en tu presencia.\n\nPero eso sí, que hablen de ti cariño, con admiración, con gusto y alegría. Porque si no es así, mejor no te des a conocer."
  },
  {
    id: 19,
    title: "CUANDO ME ENOJO CONTIGO",
    category: "relaciones",
    shortText: "La gente que se quiere también se enoja entre sí. Dame tiempo y espacio, que haré lo mismo contigo: cuando me enojo contigo no significa de ninguna manera que te haya dejado de querer.",
    fullText: "Habrá un momento en que me enoje contigo por algo que digas, por algo que hagas o que no hagas. En ese momento, probablemente requiera tiempo para procesarlo y no quiero hablar contigo en ese momento.\n\nDame tiempo, dame espacio, que yo haré lo mismo contigo.\n\nRecuerda bien que la gente que se quiere también se enoja entre sí, pero no quiere decir que dejes de quererlo. Simplemente necesitamos espacio para procesar y asimilar lo que pasó.\n\nHabrá veces que me enoje contigo, pero no quiere decir de ninguna manera que te haya dejado de querer."
  },
  {
    id: 20,
    title: "EL UNICO RESPONSABLE",
    category: "mentalidad",
    shortText: "Nadie te hace enojar, nadie te pone triste. Si dices que otros te sacan de tus casillas, les das poder sobre ti. Tú eres el único responsable de cómo te sientes por lo que hagan los demás.",
    fullText: "Nadie te hace enojar. Nadie te pone triste. Nadie te desespera.\n\n¿Por qué? Porque la única persona responsable de sus emociones eres tú. Otras personas podrán hacer algo que tú evalúes mentalmente que es molesto para ti, pero nadie te hace enojar y nadie te pone triste, te desespera, etcétera.\n\nPorque tú eres el responsable de tus emociones y si tú consideras que hay gente que te hace enojar o que te saca de tus casillas o que te hace llorar y te pone triste es que tú les estás dando el poder de controlar tus propias emociones y nadie debe de tener ese tipo de poder sobre ti. Tú eres el único responsable de cómo te sientes por lo que hagan los demás.",
    isViral: true
  },
  {
    id: 21,
    title: "BUSCANDO SEÑALES",
    category: "vida",
    shortText: "Cuando alguien señala una estrella, muchas personas se pasan el tiempo observando el dedo. Las señales solo cobran importancia cuando haces algo con ellas: ponte en acción.",
    fullText: "Hay ocasiones en la vida en las que encontramos señales, señales que nos indican qué camino elegir o qué camino no tomar.\n\nEn ese momento, asegúrate de tomar acción y seguir o no el camino que se indica.\n\nPorque hay muchas personas que, cuando alguien les señala una estrella, se pasan mucho tiempo tan solo observando el dedo.\n\nLas señales solo cobran importancia cuando haces algo con ellas, ponte en acción."
  },
  {
    id: 22,
    title: "PERMITETE SER SUPERFICIAL",
    category: "vida",
    shortText: "De vez en cuando, y sobre todo en tu juventud, permítete ser superficial. Uno aprende a nadar en el chapoteadero antes de meterse a la alberca profunda: descansa en la superficie y diviértete.",
    fullText: "De vez en cuando, y sobre todo en tu juventud, permítete ser superficial. Anda con la chica bonita solamente porque está bonita, compra cosas que estén de moda, escucha música de moda, participa en pláticas banales, sé políticamente incorrecto, diviértete.\n\nPorque la vida no tiene que ser todo profundidad, pláticas intelectuales y estarte cuidando de lo que dices y lo que haces.\n\nPermítete ser superficial sobre todo en tu juventud, porque uno aprende a nadar en el chapoteadero y ya después se mete a nadar en la alberca más profunda que encuentre. Pero de vez en cuando debes regresar a la orilla, debes regresar a la superficie, debes descansar y está bien. Permítete ser superficial.",
    isViral: true
  },
  {
    id: 23,
    title: "AUNQUE NO LO DECIMOS",
    category: "relaciones",
    shortText: "Muchas veces los padres callamos cosas porque creemos que nuestros actos hablan. Si no te lo he dicho lo suficiente: quiero que sepas que te amo y que estoy muy orgulloso de ti.",
    fullText: "Muchas veces los padres, por la forma en la que fuimos educados, por nuestra personalidad, por la manera en la que vivimos tendemos a no decir cosas. Queremos demostrar ciertas cosas con nuestra forma de actuar, con la forma en la que proveemos, con los consejos que damos, con estar siempre presentes.\n\nSin embargo muchas veces fallamos en decir cosas que son importantes porque damos por hecho que nuestra acción también habla. Pero si es así, si no te he dicho cosas que tú necesites oír; quiero que sepas que te amo y que estoy muy orgulloso de ti."
  },
  {
    id: 24,
    title: "LA VERDADERA LEALTAD",
    category: "relaciones",
    shortText: "La lealtad no está en guardar todo tipo de secreto; está en ayudar a esa persona que no sabe ser amiga de sí misma, buscando a quien pueda intervenir para salvarla.",
    fullText: "Éste te servirá sobre todo en tu juventud. Aprende a ser realmente leal a aquellas personas que no saben ser leales a sí mismas.\n\nHabrá personas, amigos, conocidos, que te pedirán que guardes en confidencia algo. Pero ten cuidado con ese secreto. Si este secreto es acerca de algo que ellos estén haciendo que sea arriesgado o incluso que se estén lastimando, si ellos se están afectando a sí mismos, no tienes por qué guardar este secreto. Apóyalos, pero al mismo tiempo cuéntaselo a alguien que pueda ayudarles y que pueda apoyarlos.\n\nPorque la lealtad no está en guardar todo tipo de secreto; está en ayudarles y ser realmente amigo de esa persona, que no sabe ser amigo de sí misma."
  },
  {
    id: 25,
    title: "EL QUÉ Y EL PARA QUÉ",
    category: "mentalidad",
    shortText: "Por cada 'qué' debes tener un 'para qué'. Saber qué quieres es bueno, pero más importante es saber para qué lo quieres. Si no tiene un 'para qué', seguro no lo necesitas.",
    fullText: "Por cada 'qué' debes tener un 'para qué'.\n\nMuchas veces pensamos en lo que queremos, en lo que necesitamos, en lo que nos gusta. Pero por cada 'qué' debes tener un 'para qué'. 'Qué es lo que quieres' es importante, pero más importante es saber para qué lo quieres, para qué te hace falta, para qué necesitas.\n\nSi el 'qué' que tienes no tiene un 'para qué' es muy probable que en realidad no lo necesites."
  },
  {
    id: 26,
    title: "LA VOZ DE LA CONSCIENCIA",
    category: "mentalidad",
    shortText: "La voz de la conciencia es la voz de tus padres que se grabó en tu mente. Escúchala, pero evalúa por ti mismo: los padres también nos equivocamos; toma tu propia decisión.",
    fullText: "Te voy a decir un secreto, un pequeño truco que tenemos los padres: La voz de la conciencia es la voz de mamá y papá.\n\nTodos los consejos que te hemos dado, todas las vivencias que has tenido con nosotros se van grabando en tu mente y eso es algo que llamas conciencia. Cada vez que estás haciendo algo o estás a punto de hacer algo, esa vocecita es la voz de mamá y papá diciéndote que lo hagas o que no lo hagas.\n\nAprende a escuchar esa voz, pero también evalúa si vas a hacerle caso o no. Porque los padres a veces también nos equivocamos, escucha tu conciencia pero toma, en el momento, la decisión que tú consideres más adecuada."
  },
  {
    id: 27,
    title: "ELIJE TUS BATALLAS",
    category: "caracter",
    shortText: "No pelees por pelear. Con las personas que sabes que nunca cambiarán de opinión, simplemente dales por su lado: es muy probable que su lado sea lo único que tengan.",
    fullText: "Aprende a elegir tus batallas. No pelees por pelear, no discutas por discutir, porque eso solamente te puede desgastar.\n\nAprende a elegir tus batallas. ¿Qué pasa si las ganas? ¿Qué pasa si las pierdes? ¿Qué ganas en cualquiera de estas dos situaciones? ¿Qué pierdes en cualquiera de estas dos? ¿Realmente vale la pena discutir y pelear?\n\nAprende a elegir tus batallas y aquellas que no valgan la pena, simplemente declínalas, simplemente aléjate de ellas, aléjate de discusiones que no valgan la pena y de las personas que sabes que no las vas a hacer cambiar de opinión, simplemente darles por su lado porque es muy probable que su lado sea lo único que tengan.",
    isViral: true
  },
  {
    id: 28,
    title: "CRECER Y AMAR TU MOMENTO",
    category: "vida",
    shortText: "La nostalgia es un buen lugar al cual regresar, pero el mejor momento siempre será el que estás viviendo hoy. Haz momentos que puedas recordar con felicidad.",
    fullText: "La nostalgia vende porque es un buen lugar al cual regresar, porque te gusta recordar las cosas que te hicieron feliz. Nos juntamos con viejos amigos de la adolescencia y decimos '¡ah, qué buenos tiempos!'. Pero en general no cambiaría nada de mi pasado porque todos los aciertos y errores me trajeron a donde estoy ahora: con mi familia, con mi hijo y la gente que amo.\n\nPero el mejor momento siempre será el que estás viviendo. No lo pierdas de vista porque, en algunos años, este momento de tu vida también se llenará de nostalgia. Haz momentos que puedas recordar con felicidad y vive el presente con la mayor alegría."
  },
  {
    id: 29,
    title: "LOS AMIGOS Y LOS PRINCIPIOS",
    category: "caracter",
    shortText: "Nunca renuncies a tus principios y mucho menos por un amigo. Porque un verdadero amigo jamás te pediría que renunciaras a ellos; y si te lo pide, no es tu amigo.",
    fullText: "Nunca renuncies a tus principios y mucho menos por un amigo.\n\nPorque un amigo no te pediría que renunciaras a ellos; y si te lo pide, no es tu amigo."
  },
  {
    id: 30,
    title: "LA LUNA Y TU RODILLA",
    category: "vida",
    shortText: "Ibas caminando mirando embobado una luna hermosa, tropezaste y te raspaste la rodilla. Que te sirva de lección: no por estar siguiendo tus sueños, dejes de ver por dónde pisas.",
    fullText: "El día de ayer había una luna hermosa e ibas caminando, mirándola; por eso te tropezaste, caíste y te raspaste tu rodilla.\n\nQue eso te sirva para la vida, mi niño:\n\nNo por estar siguiendo tus sueños, dejes de ver por dónde pisas.",
    isViral: true
  },
  {
    id: 31,
    title: "NO CAMBIES POR UNA PAREJA",
    category: "relaciones",
    shortText: "Nunca cambies tu esencia solo para satisfacer a otra persona. Si lo haces, no eres tú quien está con ella, sino una máscara; y te estará engañando con alguien que no eres tú.",
    fullText: "Nunca cambies tan solo para conseguir una pareja.\n\nSi esa persona genera en ti los deseos de crecer, de cambiar, de evolucionar aspectos positivos para ti y que puedas conservarlos independientemente de si esta pareja está contigo o no. Entonces, hazlo. Porque simplemente es una motivación para crecer.\n\nSin embargo, si estos cambios solamente son para satisfacer a la otra persona y solamente estás cambiando lo que tú eres para quedar bien con la otra persona, entonces realmente no eres tú quien está con ella, sino la idea que tuviste tú de lo que ella quiere o lo que tú crees que ella necesita. Y aunque estés con ella, ella te estará engañando con otra versión de ti que no eres tú."
  },
  {
    id: 32,
    title: "DEFIENDE TUS IDEAS O CAMBIALAS",
    category: "mentalidad",
    shortText: "Defiende con argumentos y evidencias las ideas justas. Pero nunca las defiendas solo porque las dijo alguien a quien quieras: las ideas valen por sí mismas, no por quien las expresa.",
    fullText: "Defiende aquellas ideas que hayas analizado y consideres correctas, justas y verdaderas. Defiéndelas con argumentos, en calma y con evidencias.\n\nMás nunca las defiendas exclusivamente porque las dijo alguien a quien quieras, no importa que sea tu familia, no importa que sean tus amigos, no importa que sea alguien a quien admires: las ideas se defienden por el valor que tienen, no por quien las expresa."
  },
  {
    id: 33,
    title: "SÉ AUTÓNOMO",
    category: "vida",
    shortText: "No necesitas ser sastre, pero aprende a pegar un botón. No chef, pero prepara tu comida. No mecánico, pero cambia una llanta. No seas experto en todo, pero sé autosuficiente.",
    fullText: "No necesitas ser sastre, pero aprende a zurcir y pegar un botón.\nNo necesitas ser chef, pero aprende a preparar tu comida.\nNo necesitas ser mecánico, pero aprende cómo se cambia una llanta.\nNo necesitas ser experto en todo, pero aprende a ser autosuficiente.",
    isViral: true
  },
  {
    id: 34,
    title: "NO SIEMPRE COMO PLANEAS",
    category: "mentalidad",
    shortText: "Cuando los planes fallen, detente y observa: a veces ese desvío fortuito te lleva a algo mejor, aunque la frustración inicial no te deje apreciarlo.",
    fullText: "Hay veces en las que hacemos planes y las cosas no salen como nosotros las planeamos. En ese momento, probablemente te sientas frustrado, molesto, enojado porque no habías planeado las cosas así.\n\nPero si así resulta, en ese momento detente y observa, porque es muy probable que aquel error o aquello fortuito que hizo que los planes se alteraran, los alteraron para bien, pero la frustración no te permite notar que aquello que querías al salir diferente también tiene un valor en sí mismo.\n\nNo todas aquellas cosas van a salir como las planeas, pero no quiere decir que no puedas disfrutar los resultados."
  },
  {
    id: 35,
    title: "HACER COSAS DIFERENTES",
    category: "vida",
    shortText: "Experimenta y haz cosas nuevas, pero pon tus propios límites. No hagas algo solo por presión social: no comas estiércol creyendo que millones de moscas no pueden equivocarse.",
    fullText: "No temas hacer cosas diferentes. Experimenta. Está bien aprender a hacer cosas nuevas, de lo contrario podrías estarte perdiendo de experiencias interesantes, de conocimientos importantes, de grandes amistades. Sin embargo, ten en cuenta que tú pones el límite en ello.\n\nNo hagas cosas solamente por presión o porque todo el mundo lo esté haciendo. Si no quieres experimentar algo, simplemente no lo hagas. No porque todo el mundo lo haga tú también lo vas a hacer.\n\nNo comas estiércol solamente porque creas que millones de moscas no pueden estar equivocadas.",
    isViral: true
  },
  {
    id: 36,
    title: "LA GRATITUD",
    category: "relaciones",
    shortText: "La gratitud termina con el 'gracias'. Cuando hagas algo lindo por alguien, no esperes nada más: con el agradecimiento la deuda queda saldada.",
    fullText: "La gratitud termina con el 'gracias'. Procura ser una persona agradecida. Recuerda a aquellas personas que hacen algo lindo por ti. Sin embargo, cuando tú hagas algo lindo por alguien, recuerda que la gratitud termina con el 'gracias'.\n\nNo esperes nada más que el gracias, porque una vez se te agradece se elimina la deuda. Si en este caso tú haces algo esperando que la otra persona te retribuya de alguna manera, entonces haz un pacto con esa persona. Pero si lo haces simplemente porque quieres hacerlo y te lo agradecen, la gratitud termina con el gracias: no esperas más allá, porque vas a sentirte frustrado cuando no lo tengas."
  },
  {
    id: 37,
    title: "SÉ ATRACTIVO",
    category: "mentalidad",
    shortText: "Nosotros no 'tenemos un cuerpo', nosotros 'somos' ese cuerpo. Aprende a quererte y aceptarte tal como eres; una vez que lo hagas, harás que los demás te quieran.",
    fullText: "Hace tiempo, una amiga me dijo: 'Robert, tú no eres guapo pero eres atractivo'. Yo agradecí el cumplido sin entenderlo muy bien, pero tiempo después conocí a una chica que no era nada bonita, pero se sabía hermosa y ese era su secreto.\n\nEl ser atractivo tiene que ver con cómo te sientas y cuánto te quieras a ti mismo. Si hay algo en tu cuerpo que no te gusta y puedes cambiarlo, hazlo; si no puedes cambiarlo, acéptalo. Porque debes entender una cosa: nosotros no 'tenemos un cuerpo', nosotros 'somos' ese cuerpo. Aprende a quererte y una vez tú te aceptes y tú te quieras, vas a hacer que los demás te acepten y te quieran tal cual eres."
  },
  {
    id: 38,
    title: "NO CUIDES TUS PALABRAS",
    category: "caracter",
    shortText: "No necesitas andar cuidando tus palabras, solo asegúrate de que sean lo suficientemente grandecitas para cuidarse solas.",
    fullText: "No necesitas andar cuidando tus palabras, solo asegúrate de que sean lo suficientemente grandecitas para cuidarse solas.",
    isViral: true
  },
  {
    id: 39,
    title: "CONFESION DE UN PADRE",
    category: "relaciones",
    shortText: "A veces te he visto a punto de caer y lo he permitido para que sientas el dolor y aprendas a levantarte por ti mismo. Si te protejo en exceso, te haré frágil.",
    fullText: "Ha habido ocasiones en las que sé que estás a punto de caer y lo permito. Momentos en los que sé que estás a punto de golpearte o lastimarte y que yo podría evitar pero lo permito. Y no es porque me guste que te lastimes, es porque aquí en casa yo trataría de protegerte de todo, pero hay veces que prefiero que sientas el dolor para que aprendas a levantarte.\n\nPrefiero que te des cuenta de que puedes salir por tus propios medios y que no dependas de mí. Afuera de casa, el mundo no es justo. Si te protejo en exceso, te haré frágil. Aprende a caer y a levantarte, a luchar tus batallas. Te dirán cosas que no te gusten: haz una coraza, responde, sé fuerte, actúa con justicia pero no dependas de los demás para salir adelante, incluso de tu mismo padre.",
    isViral: true
  },
  {
    id: 40,
    title: "COSAS INELUDIBLES",
    category: "mentalidad",
    shortText: "Hay cosas en la vida que no puedes evitar y que no son tu decisión. Lo que sí puedes decidir siempre es la actitud con la cual las recibes y enfrentas.",
    fullText: "Hay cosas en la vida que son ineludibles, cosas que no puedes evitar y que no son tu decisión, pero debes aceptarlas.\n\nAhora que eres pequeño, no puedes decidir que no quieres ir al médico porque esa es decisión mía como padre. Lo que sí puedes decidir es la actitud con la cual aceptas o no las cosas. Si vamos de paseo, puedes ir enojado o puedes ir contento, puedes disfrutarlo o estar amargado durante el paseo. Esa es decisión tuya.\n\nCuando crezcas, muchas decisiones ineludibles son iguales. No puedes decidir aceptarlas o no, sino la actitud que tomas ante ellas."
  },
  {
    id: 41,
    title: "LA LLUVIA",
    category: "vida",
    shortText: "La vida no es justa; la sensación de justicia la inventamos los humanos. El cielo no llueve por ti: pon tus cubetas, sácale provecho a lo que hay y aprende a ser feliz.",
    fullText: "Llueve. Está lloviendo. Se está inundando la calle y hay lugares donde no ha llovido en mucho tiempo, donde se secan las cosechas, donde el suelo es simplemente tierras y esto es por una sencilla razón: que la vida no es justa. La sensación de justicia la ponemos los seres humanos.\n\nEl cielo no va a llover, ni dejar de llover porque a ti te convenga, sino porque las cosas suceden. Lo importante es que tú sepas sacarle provecho a lo que sucede, que tú sepas poner tus cubetas para ahorrar agua, que tú sepas entender que las cosas son de cierta manera independientemente de ti. Aceptarlo y saber ser feliz con ello."
  },
  {
    id: 42,
    title: "LA IGNORANCIA",
    category: "mentalidad",
    shortText: "La ignorancia no es pecado ni virtud, pero es bella cuando se acepta como punto de partida. Si ignoras algo, di con orgullo 'no lo sé' y disponte a aprender.",
    fullText: "La ignorancia no es un pecado, pero de ninguna manera es una virtud.\n\nLa ignorancia es algo bello cuando se acepta el tenerla como punto de partida. Cada sabio inició como ignorante.\n\nSi ignoras algo, di 'no lo sé' y, si es de tu interés, haz el compromiso de aprender."
  },
  {
    id: 43,
    title: "EL CONSEJO DE UN AMIGO",
    category: "mentalidad",
    shortText: "Cuando no sepas qué decisión tomar, pregúntate qué le recomendarías a tu mejor amigo si estuviera en tu lugar. Muchas de las respuestas ya viven en ti: confía en ti.",
    fullText: "Cuando debas tomar una decisión y no sepas qué opción tomar, imagínate que la decisión la debe tomar tu mejor amigo: ¿Qué le recomendarías?\n\nEn nuestra mente tenemos muchas de las respuestas que buscamos afuera.\n\nConfía en ti."
  },
  {
    id: 44,
    title: "NO ME MEREZCO ESTO",
    category: "caracter",
    shortText: "Ante una injusticia no basta con lamentarte '¡yo no me merezco esto!'. Si no actúas para cambiarlo, detenerlo o apartarte y te quedas pasivo, entonces sí te lo mereces.",
    fullText: "Habrá momentos en los cuales estés en una situación que tú consideres injusta, que te lastime o te incomode y clamarás para ti o para los demás “¡yo no me merezco esto!”; y tal vez tengas razón.\n\nMas si no haces algo por cambiarlo por detenerlo o por salir de allí y te quedas simplemente pasivo ante el hecho, entonces, hijo mío, si te lo mereces."
  },
  {
    id: 45,
    title: "USA PALABRAS SUAVES",
    category: "relaciones",
    shortText: "Critica situaciones y hechos, jamás a personas. Y si vas a hacer una crítica muy dura, usa palabras suaves y dulces, porque al final es probable que debas tragártelas.",
    fullText: "Tú eres responsable de tus palabras, de tus dichos. Cuando vayas a hablar, habla con respecto a situaciones, con respecto a hechos; no a personas, no ataques, no mientas, no difames a la gente.\n\nSi vas a hablar de algo que sean hechos y situaciones, no de personas, y si vas a hacer una crítica, que sea una crítica objetiva y basada en hechos. Debes tener mucho cuidado, porque cuando vayas a hacer una crítica muy dura, deberás utilizar palabras dulces, utilizar palabras suaves, porque es muy probable que al final, debas tragártelas."
  },
  {
    id: 46,
    title: "LIMITA TUS QUEJAS",
    category: "mentalidad",
    shortText: "Deja de quejarte: la queja no resuelve nada. Si puedes cambiarlo, muévete; si no puedes cambiarlo, adáptate. Reclama con quien corresponda, pero no vivas quejándote.",
    fullText: "Deja de quejarte. Quejarte de un lado para otro no te va a ayudar en nada.\n\nSi hay una situación que no te gusta y puedes cambiarla, no pierdas el tiempo quejándote de ella: empieza a cambiarla. Si hay una situación que no te gusta y no puedes cambiarla, no pierdas el tiempo quejándote de ella; haz algo para adaptarte a la situación.\n\nSi no tiene que ver directamente contigo, sino con una persona en particular, no pierdas el tiempo solo quejándote, ve y reclama, toma acción porque de lo contrario la queja solo se queda en ti. Pero la queja no resuelve nada. Reclama si se tiene que hacer, ponte a trabajar si puedes realizarlo. Y si no puedes hacer nada, adáptate pero no te quejes."
  },
  {
    id: 47,
    title: "DI QUE NO",
    category: "caracter",
    shortText: "Aprende a decir 'no' sin culpa. El primer acto de responsabilidad es saber negarse a una responsabilidad a tiempo. El 'no' es el primer acto de libertad de una persona.",
    fullText: "Aprende a decir que no; está bien, es correcto. Aprende a decir que no y no necesitarás justificarte de mil maneras. Aprende a decir que no y no solamente digas que sí, si al rato te vas a contradecir. Porque las personas no estamos acostumbradas a decirlo por una idea absurda de educación.\n\nDecir no está bien, que la gente sepa lo que realmente espera o lo que vas a dar y lo que no. Pero, de la misma manera, acepta los no de las demás personas.\n\nRecuerda que el primer acto de responsabilidad que existe es saber negarse a una responsabilidad a tiempo. El 'no' es el primer acto de libertad en la vida de una persona.",
    isViral: true
  },
  {
    id: 48,
    title: "PEREZA CREATIVA",
    category: "mentalidad",
    shortText: "Cultiva la pereza de forma inteligente. Haz las cosas bien desde la primera vez para no tener que repetirlas. No dejes que el trabajo se acumule: sé flojo pero listo.",
    fullText: "Cultiva la pereza. Aprende a ser flojo. Sé flojo, vive en la flojera si así lo deseas; está bien, y si sabes manejarlo será una virtud.\n\nSimplemente cultiva la pereza de forma inteligente, porque a una persona perezosa no le gusta trabajar de más, porque a una persona floja no le gusta hacer las cosas dos veces. Por lo tanto, sé inteligente.\n\nCuando hagas algo, sé perezoso y hazlo bien desde la primera vez para que no tengas que hacerlo constantemente. Haz tu tarea una sola vez, pero hazla bien para que no tengas que repetirla. Busca maneras nuevas y más eficientes de hacer las cosas. No dejes que se te acumulen las cosas, porque eres flojo pero listo.",
    isViral: true
  },
  {
    id: 49,
    title: "SÁLVATE TÚ PRIMERO",
    category: "vida",
    shortText: "Olvídate de los martirios. Si alguien se está ahogando y te lanzas sin base, se hundirán los dos: pisa suelo firme primero. Para ayudar a otros debes estar a salvo tú.",
    fullText: "Sálvate tú primero.\n\nAnte cualquier situación, sálvate tú primero. Olvídate de los actos heroicos de las películas, de la literatura y los martirios. Sálvate tú primero, piensa primero en ti ante cualquier situación, ya sea un riesgo, ya sea una situación que parezca que no es arriesgada pero que te está incomodando.\n\nSálvate tú primero, asegúrate de ello, porque si alguien se está ahogando y tú llegas a tratar de sacarlo desde el mismo lugar, se van a hundir los dos; pisa suelo firme primero. Porque debes estar desde afuera para poder ayudarlo a salir.\n\nSálvate tú primero, piensa primero en ti y después intenta ayudar a los demás, pero sálvate tú primero.",
    isViral: true
  },
  {
    id: 50,
    title: "LA FELICIDAD Y SU BÚSQUEDA",
    category: "vida",
    shortText: "Buscarás la felicidad como un espejismo creyendo que es una meta lejana. Pero cuando mires atrás y veas todo lo que caminaste, verás que la felicidad era el trayecto.",
    fullText: "Durante mucho tiempo en tu vida tratarás de encontrar la felicidad. Irás a buscarla en un lado y la buscarás en otro y creerás que está en algún lugar en particular, y caminarás hacia allá tan solo para darte cuenta de que era un espejismo: la felicidad no estaba allí y creerás que la encontrarás en otro lado y hacia allá avanzarás de nuevo, para darte cuenta de que la felicidad tampoco estaba allí.\n\nConforme vayas creciendo y viviendo algunas experiencias, pensarás que la felicidad es inalcanzable o que solamente dura un instante, pero cuando mires hacia atrás y veas todo lo que caminaste, por fin verás la felicidad verdadera porque la felicidad no era el destino en el trayecto."
  },
  {
    id: 51,
    title: "LA VIRTUD Y LA ADMIRACIÓN",
    category: "caracter",
    shortText: "No tengas ídolos ni intentes calcar vidas ajenas: imita solamente las virtudes, la disciplina y la bondad de quienes admires. Tómalo como modelo de virtud y nada más.",
    fullText: "A lo largo de tu vida, vas a conocer personas que sean admirables para ti. Y entonces, vas a tratar de ser como ellos. En un principio, seremos mamá y yo, y está bien. Pero conforme vayas creciendo, serán algunos amigos tuyos, profesores, personas de la televisión, artistas, deportistas, etcétera.\n\nVas a querer imitarlos porque vas a querer ser como ellos, pero ten cuidado porque vas a querer ser como ellos en su vida. No tengas ídolos, no imites su vida, imita solamente sus virtudes, el esfuerzo, la forma en la que tratan a los demás, las cosas positivas; mas no quieras 'ser como alguien', simplemente velos como modelo de virtud, si es que las tienen."
  },
  {
    id: 52,
    title: "ESCUCHA ACTIVAMENTE",
    category: "relaciones",
    shortText: "Cuando alguien te comparta un pesar, escúchalo primero y pregúntale si busca consuelo o soluciones. Entre lo que se dice y lo que se interpreta hay un mar de distancia.",
    fullText: "Cuando alguien llegue a contarte sus problemas o a decirte cómo se siente, escúchalo; primero escúchalo y luego pregúntale qué es lo que requiere de ti: si requiere apoyo, un consejo o si quiere que le ayudes a encontrar la solución.\n\nPorque muchas veces la gente lo único que requiere es que alguien la escuche, pero tendemos a intentar darle solución, sobre todo los hombres, porque los hombres procuramos ser más resolutivos; las mujeres procuran ser más empáticas.\n\nRecuerda también que debes ser lo más claro que puedas al expresar lo que quieres y aprende a escuchar de la manera más consciente. Porque entre lo que quieres, lo que crees que quieres, lo que dices, cómo lo dices, cómo lo escuchan, lo que creen que escuchan y lo que interpretan: hay mucho trecho."
  },
  {
    id: 53,
    title: "DE MAGIA Y FANTASÍA",
    category: "mentalidad",
    shortText: "La vida ya es bastante compleja para inventarse enemigos o soluciones mágicas. Aléjate de charlatanes: es como llegar a un hermoso bosque y perdértelo por estar buscando hadas.",
    fullText: "La vida es lo suficientemente compleja como para buscar enemigos y problemas imaginarios. Es lo suficientemente amplia como para buscar soluciones mágicas. Aléjate de las supersticiones y de la 'magia'. No habrá espíritus que te ataquen ni espíritus que te protejan. Los cuarzos no te darán suerte y el tarot no te leerá el futuro. La magia solo debe existir en la literatura y en los escenarios.\n\nMás allá de eso, aléjate de los charlatanes, de las personas que quieren mezclar superstición con conciencia o cuántica barata. Estudia, aprende. No te pierdas el mundo que tienes, no mezcles supersticiones con cosas reales. Es como llegar a un hermoso bosque y perdértelo por estar buscando hadas."
  },
  {
    id: 54,
    title: "ES NORMAL",
    category: "relaciones",
    shortText: "Es normal que cuestiones lo que pienso y descubras que me equivoco. Solo recuerda una cosa: pase lo que pase, también es normal que yo siempre esté a tu lado defendiéndote.",
    fullText: "Conforme vayas creciendo, querrás tener tus propias vivencias, tus propias experiencias, tus propias aventuras y tener tus propios errores. Y ¿sabes qué?, es normal.\n\nEs normal contradecir lo que pienso, es normal creer que me equivoco, es normal descubrir que me equivoco. Porque solamente te digo las cosas desde la vida que yo he tenido, desde mis propios errores y aciertos, desde lo que yo considero correcto.\n\nY el que tú me cuestiones o que hagas cosas que te digo que considero que está mal, es normal. Solamente quiero que recuerdes que también es normal que yo siempre estaré a tu lado, defendiéndote. Es normal."
  },
  {
    id: 55,
    title: "LA DECISIÓN FELIZ",
    category: "mentalidad",
    shortText: "Elige un camino y no mires atrás con reproches estériles. Decidiste con lo que sabías en ese instante: si el resultado no te agrada, cámbialo en tu presente. Toma la decisión feliz.",
    fullText: "Ya sea por sí o por no, por arriba o abajo, por negro o blanco, sea como sea, pero decídete. Aprende a tomar decisiones, porque si no las tomas, alguien más las tomará por ti y deberás estar conforme con ello.\n\nLa decisión correcta es: observa las opciones y toma una decisión. Y una vez que lo hagas, no mires atrás. No viajes al pasado diciendo 'es que si lo hubiera hecho de otra forma', porque no lo sabes.\n\nToma la decisión feliz, sea lo que sea que decidas. Siéntete bien con tu decisión, tal vez no con el resultado, pero sí con haberla tomado. Si el resultado no te gustó, haz algo en tu presente, pero deja de viajar al pasado. Toda decisión que tomes sea la decisión feliz.",
    isViral: true
  },
  {
    id: 56,
    title: "ROPERO DE EXPECTATIVAS",
    category: "vida",
    shortText: "De niños llenamos el ropero con disfraces de astronauta o médico. Con los años renunciamos a unos para abrazar lo que pudimos construir: madurar es saber renunciar con sabiduría.",
    fullText: "Cuando nacemos tenemos un ropero de expectativas, un ropero metafórico donde se van poniendo cosas que esperamos usar. Primero nuestros padres ponen uniformes, luego nosotros ponemos disfraces de superhéroe, batas de médico, guitarras...\n\nSin embargo, conforme vivimos, dependiendo de las posibilidades que tenemos, el lugar donde nacemos y la suerte, vamos renunciando al uniforme de astronauta, al de médico, al de arquitecto, hasta que finalmente nos quedamos con aquellas cosas que decidimos hacer y que pudimos lograr.\n\nEl madurar es simplemente saber renunciar a las cosas con sabiduría."
  },
  {
    id: 57,
    title: "ANÉCDOTA DE LA IGNORANCIA Y LA SOBERBIA",
    category: "caracter",
    shortText: "Sentí lástima por un hombre que no sabía leer mi libro favorito; minutos después vi a un joven llorar conmovido leyendo partituras musicales. Todos somos ignorantes en algo: la soberbia no sirve.",
    fullText: "Cuando yo era adolescente, era muy soberbio por lo que consideraba mi nivel cultural. Iba en el metro de la Ciudad de México leyendo '100 años de soledad', me carcajeé y noté que un pasajero no sabía leer; sentí lástima por él creyendo que se perdía un universo.\n\nBajé al microbús y a mi lado un joven lloraba emocionado viendo unas hojas. Le pregunté si era un libro y me dijo: 'Son partituras. Es una melodía bellísima y en mi mente escucho cada instrumento'. Sentí lástima por mí mismo. Todos somos ignorantes en algo y ahí me di cuenta de que la soberbia no vale la pena.",
    isViral: true
  },
  {
    id: 58,
    title: "¿SIN PEDIR NADA A CAMBIO?",
    category: "relaciones",
    shortText: "Desconfía de quien afirme hacer todo en tu beneficio 'sin pedir nada a cambio'. O te ve como un desvalido a quien rescatar para cobrarte luego el favor, o está sacando una ventaja encubierta.",
    fullText: "Cuídate de aquel familiar, amigo, compañero, colega o conocido que afirme que todo lo que hace es sin pedir nada a cambio, que todo lo hace en tu entero beneficio y que no está sacando nada de provecho de ello.\n\nCuídate de esa persona, porque puede ser que se esté poniendo la capa de héroe y que te esté viendo como una persona inferior que necesita ser rescatada. Al rato te lo va a querer cobrar, o puede ser que en realidad esté sacando un provecho excesivo de ti encubierto.\n\nEs cuestión de conveniencia mutua y estaría bien que ambos lo supieran."
  },
  {
    id: 59,
    title: "EL HUMOR ES HUMOR",
    category: "mentalidad",
    shortText: "Ríete de ti mismo, de tus convicciones y de tus penas. El humor es catarsis y bálsamo contra la amargura. Si te ofendes por un chiste, el problema es tuyo: aprende a reír.",
    fullText: "Aprende a reírte de ti mismo, de lo que crees, de lo que piensas, de lo que te gusta, de lo que sientes, de tus situaciones, de tus dolores.\n\nEl humor te permite contemplar desde otra perspectiva todo tu cúmulo de creencias. Sirve de catalizador, te sirve de catarsis e incluso de ungüento ante el dolor.\n\nAprende a reírte de ti mismo y de todo lo que quieres y crees. El humor es humor y si tú te ofendes por el humor, esa es decisión y responsabilidad tuya. Aprende a reír."
  },
  {
    id: 60,
    title: "APRENDE A NEGOCIAR",
    category: "dinero",
    shortText: "Negociar bien es lograr que ambos queden contentos y deseen seguir colaborando. Pide un poco más para tener margen, pero ten clarísimo tu límite no negociable.",
    fullText: "Aprende a negociar, y no me refiero solo a cuestiones económicas. Aprende a entablar y llegar a acuerdos con los demás. Para esto, es muy importante que tengas en cuenta que una buena negociación no es aquella en la que uno pierde y el otro gana. Trata de hacer que la otra persona se sienta satisfecha con el resultado, de manera que quiera seguir llegando a acuerdos contigo.\n\nPara lograr esto: Primero, cuando vayas a llegar a un acuerdo, trata de pedir más de lo que realmente necesitas, para tener margen de maniobra. Segundo, debes saber exactamente hasta dónde estás dispuesto a llegar, sin pasar ese límite bajo ninguna circunstancia."
  },
  {
    id: 61,
    title: "EL TRINOMIO CUADRADO PERFECTO",
    category: "mentalidad",
    shortText: "Aprender matemáticas, ciencia o historia amplía las dimensiones de tu universo mental y te protege de ser engañado. Aprende cosas aunque no las apliques hoy, o creerás que la Tierra es plana.",
    fullText: "En algún momento aprenderás el trinomio cuadrado perfecto o la caída libre, y te preguntarás para qué te sirvió si no lo usas en el supermercado. La respuesta es simple: porque es real y es verdad.\n\nEntre más aprendas, tu universo será del tamaño de tus conocimientos. Entre más aprendas cultura y cómo funciona el mundo, será más difícil que la gente te engañe en trampas. Es bueno que aprendas cosas aunque después no las utilices, porque si no lo haces o si las olvidas, vas a terminar creyendo que vivimos en la Tierra Plana.",
    isViral: true
  },
  {
    id: 62,
    title: "INVIERTIENDO EN TU FELICIDAD",
    category: "relaciones",
    shortText: "Un padre no se sacrifica por sus hijos: invierte en su felicidad y su futuro. No me debes nada; algún día tú pagarás las pizzas y los suéteres a tus propios hijos con orgullo.",
    fullText: "¿Sabes? Hay veces que queda una última rebanada de pizza y la quiero para mí, pero está bien, tómala tú. Hay veces que quiero un suéter nuevo, pero prefiero comprarte unos zapatos.\n\nPero no te equivoques, mi muchacho, no me estoy sacrificando por ti, porque tu abuelo me enseñó que un padre no se sacrifica por los hijos, un padre invierte en los hijos, invierte en su felicidad, invierte en su futuro. En algún tiempo tal vez pienses que me debes algo, pero no me debes nada, mi muchacho.\n\nVa a llegar el momento en el cual pagues las pizzas, los parques y los suéteres, pero no a mí, sino a un hijo tuyo en el cual tú estarás orgulloso de invertir en su felicidad."
  },
  {
    id: 63,
    title: "CONTIGO",
    category: "relaciones",
    shortText: "Quien no comparta mis gustos pero te ame y sea bueno para ti, tendrá un lugar en mi corazón. Pero quien te trate mal se habrá ganado mi desprecio para siempre.",
    fullText: "Y esto lo vas a entender mejor cuando llegues a ser padre.\n\nHabrá personas que no me agraden, personas que no comulguen con mis ideas, incluso personas que me sean desagradables, pero si estas personas te quieren, son buenas contigo y son buenas para ti, tendrán un lugar en mi corazón para siempre.\n\nSin embargo, habrá personas que, incluso yo haya llegado a querer, si te tratan mal y te generan problemas, no solamente dejarán de agradarme, sino que se habrán ganado mi desprecio para siempre."
  },
  {
    id: 64,
    title: "LAS GROSERÍAS",
    category: "caracter",
    shortText: "Las groserías alivian el dolor físico y dan fuerza cuando se requiere. Como decía Freud: quien insultó a su vecino en vez de arrojarle una piedra fue el que fundó la civilización.",
    fullText: "Aprende a usar las groserías y no temas hacerlo. El lenguaje malsonante está mal visto, sin embargo ayuda bastante: cuando sientes un dolor físico y las usas, el dolor aminora; cuando necesitas fuerza física, te da empuje; y te ayuda a poner límites ante agresiones.\n\nUtiliza las groserías siempre y cuando el ambiente sea propicio, pero no temas usarlas porque bien lo decía Freud: 'aquella persona que insultó a su vecino en vez de arrojarle una piedra fue la que fundó la civilización'.",
    isViral: true
  },
  {
    id: 65,
    title: "APRENDE REALMENTE A RESPETAR",
    category: "caracter",
    shortText: "Respeta la integridad y derechos de las personas, pero las ideas y creencias no merecen respeto ciego: es tu deber criticar y refutar aquellas ideas que sean dañinas o falsas.",
    fullText: "El respeto es aceptar y valorar la existencia de algo sin querer cambiarlo. Por lo tanto, respeta la integridad física de las personas, respeta sus posesiones, sus derechos y acuerdos.\n\nSin embargo, las ideas, opiniones y creencias no son sujetas de respeto obligatorio. Hay ideas equivocadas y dañinas que es indispensable refutar y juzgar para ayudar a la gente a crecer. Lo que sí debes respetar es el derecho de expresarse mientras no dañen a nadie. Respeta lo que es respetable, pero ante lo que no lo es, lucha en su contra."
  },
  {
    id: 66,
    title: "EL PERDÓN POR ACERTAR",
    category: "relaciones",
    shortText: "Prepárate: a la gente le cuesta mucho más perdonarte cuando tuviste la razón que cuando te equivocaste. A nadie le gusta admitir su error frente a tu acierto.",
    fullText: "Debes estar preparado para entender que es más fácil que alguien te perdone cuando te equivocaste que cuando tenías razón.\n\nA las personas no les gusta equivocarse, y mucho menos aceptar que ellos estaban en un error y tú no.\n\nEsto no significa que tú debas esconderte o no debas mostrar que estás en lo correcto, mas debes estar preparado para esta reacción de los demás."
  },
  {
    id: 67,
    title: "NO TODO TIENE QUE VER CONTIGO",
    category: "mentalidad",
    shortText: "El mundo no gira en torno a tu ombligo. La gente no vive lanzándote indirectas; cada quien vive su vida. No te desgastes luchando contra todo: la vida no se trata solo de ti.",
    fullText: "No todo tiene que ver contigo. El mundo no es un espectáculo para tu vida. La gente no nada más se expresa en indirectas en contra tuya. Hay veces que la gente dice las cosas simplemente porque las quiere decir y actúa de cierta forma simplemente porque es su vida.\n\nNo trates de encasillar todo lo que ocurre en tu propia ideología o filosofía. Hay veces que las cosas son así y no tienen que ver contigo: no tienes que estar luchando contra todo, porque la vida no exclusivamente se trata de ti."
  },
  {
    id: 68,
    title: "NO NEGOCIAMOS CON TERRORISTAS",
    category: "caracter",
    shortText: "En esta familia no negociamos con manipuladores. Si te retan para obligarte a hacer algo que no deseas, responde sereno: 'No es que no pueda, es que no quiero'.",
    fullText: "En esta familia, no negociamos con terroristas y es algo que tú debes aprender. No aceptes que las personas te manipulen o chantajeen con revelar algún error tuyo: que digan lo que quieran, tú asume tus actos pero jamás cedas al chantaje.\n\nY ante quienes te provoquen diciendo en burla 'que no puedes o que te da miedo', diles con firmeza: 'No es que no pueda, no quiero'. Y no por presión vas a ceder. Recuérdalo bien: no negociamos con terroristas.",
    isViral: true
  },
  {
    id: 69,
    title: "DE TU MADRE Y DE TU PADRE",
    category: "relaciones",
    shortText: "Tendrás la sonrisa de tu padre y los ojos de tu madre, pero no eres ninguno de los dos. Tu destino y tus decisiones te pertenecen: es un orgullo verte forjar tu propio camino.",
    fullText: "Tal vez tengas los ojos de tu madre y la sonrisa de tu padre, la estatura de uno y la inteligencia del otro, mas no eres ni tu madre ni tu padre. Has visto nuestras virtudes y nuestros defectos, pero tu vida es enteramente tuya.\n\nHa sido un gusto caminar en tu vida, pero tus decisiones, tus posibilidades y tu suerte son tu vida. No eres ni tu madre ni tu padre, pero es un gusto verte crecer, acompañarte y estar contigo mientras lo haces, mi amado muchacho."
  },
  {
    id: 70,
    title: "UN NUEVO HERMANO MAYOR",
    category: "relaciones",
    shortText: "Cuando nazca un hermanito en una familia, saluda y juega primero con el hermano mayor: reconócelo como el guardián más fuerte para que lo reciba con amor y sin celos.",
    fullText: "Cuando en una familia que ya tiene un hijo nace un nuevo bebé, al visitarlos no vayas inmediatamente con el recién nacido. Muy por el contrario, llega y saluda primero al que ahora es hermano mayor, juega con él y dile: '¡Ahora eres el hermano grande, el más inteligente y fuerte, le vas a enseñar a caminar y vivir aventuras!'.\n\nMuchos niños resienten dejar de ser el foco de atención. De esta forma lo empoderas y él mismo te llevará orgulloso a conocer a su nuevo hermanito."
  },
  {
    id: 71,
    title: "LA AUTOCRÍTICA",
    category: "caracter",
    shortText: "Sé tu crítico más implacable, pero nunca cruel: criticar es reconocer con rigor los errores tanto como los aciertos. El crítico justo termina siendo tu mayor admirador.",
    fullText: "Sé tu crítico más grande. Sé implacable, sé rudo. Critica cada detalle de tu vida en el más mínimo aspecto.\n\nSin embargo, no te equivoques: criticar no es solo señalar los errores, sino también los aciertos. Sé implacable, sé perseverante, sé rudo con tus críticas, pero no seas cruel con ellas. Porque un crítico que ve el más mínimo detalle, tanto en errores como en aciertos, se convierte también en tu más grande admirador."
  },
  {
    id: 72,
    title: "LA DISCULPA Y EL PERDÓN",
    category: "caracter",
    shortText: "Una disculpa expresa que lamentas el agravio, pero no te pone a mano: si derramas un vaso con agua, no basta con pedir disculpas, tomas el trapo y te pones a limpiar.",
    fullText: "Cuando hayas agraviado a alguien, ya sea de forma consciente o inconsciente, pero te sientas responsable por ello, ofrece una disculpa.\n\nNo pidas perdón ni hagas que la otra persona tenga la obligación de dártelo. La disculpa solo indica que te sientes mal por haberla agraviado, pero eso no te pone a mano. No solamente se ofrece una disculpa, sino que se busca la manera de compensar lo que se ha hecho mal. Si tú tiras un vaso con agua, me ofreces una disculpa, pero también te pones a limpiar."
  },
  {
    id: 73,
    title: "VERDADES Y MENTIRAS",
    category: "relaciones",
    shortText: "Si hablan verdades de ti, acéptalas y mejóralas. Si son mentiras, que no te quiten el sueño. Y recuerda: la misma distancia hay de aquí para allá que de allá para acá.",
    fullText: "No importando si es familia o no, la gente siempre va a hablar. Las cosas que digan se dividen en dos: son verdades o son mentiras.\n\nSi son verdades, supéralo: si es verdad pero no te gusta, cámbialo; si no puedes cambiarlo, acéptalo. Si son mentiras, no te debe afectar porque sabes que son falsas. Y si dañan una relación, háblalo de frente: si se marchan, nada ganabas con ellos. Porque recuerda, como decía mi abuelo, que la misma distancia está de aquí para allá y de allá para acá, en geometría y en relaciones humanas."
  },
  {
    id: 74,
    title: "LAS PERSONAS NO SON IGUALES",
    category: "vida",
    shortText: "Las personas no somos iguales, y eso es lo hermoso: festeja la diferencia. El único motivo para apartar a alguien de tu vida es que sea una persona dañina.",
    fullText: "Decir que todos somos iguales es una mentira bien intencionada. Las personas no somos iguales: tenemos orígenes, gustos, capacidades y formas de pensar distintas, y eso es perfectamente normal y enriquecedor.\n\nEl hecho de ser diferente no te hace superior ni inferior a nadie: festeja la diferencia. Aprende a convivir con quienes no son como tú. Recuerda que el único motivo por el cual vas a rechazar a alguien es porque sea una persona dañina, para ti o para otros. Fuera de eso, entiende que no somos iguales, y eso está bien."
  },
  {
    id: 75,
    title: "APRENDE A GANAR Y APRENDE A PERDER",
    category: "caracter",
    shortText: "Cuando ganes, celebra sin humillar a tu rival y dale las gracias. Cuando pierdas, felicita al ganador con la frente en alto y aprende de la lección para volver más fuerte.",
    fullText: "Cuando estés en alguna competencia aprende a ganar y sé un buen ganador. Cuando ganes es bueno festejar, pero no busques humillar a tu oponente; felicítalo y agradécele por haber participado.\n\nCuando pierdas, aprende a ser un buen perdedor: acepta la derrota, aprende de ella, felicita y agradece al ganador. Eso hará que la gente te vea como alguien que sabe competir y que se esmera por crecer en lugar de reprochar a quien fue mejor de momento."
  },
  {
    id: 76,
    title: "ESCUCHA MÁS ALLÁ DE TU VOZ",
    category: "relaciones",
    shortText: "Calla la voz en tu mente que ya está preparando réplicas mientras el otro habla: esa voz solo hace ruido. Para escuchar de verdad, deja que la otra persona guarde silencio primero.",
    fullText: "Aprende a escuchar: la mayoría está programada no para comprender, sino para responder. La fórmula para escuchar se basa en no relacionar de inmediato todo lo que te cuentan con tus propias anécdotas.\n\nCalla esa voz en la cabeza que te está diciendo qué responder: esa voz solamente hace ruido. Si quieres dar respuesta o aconsejar de corazón, permite que la otra persona termine y guarde silencio primero."
  },
  {
    id: 77,
    title: "PENSAMIENTO NEGATIVO",
    category: "mentalidad",
    shortText: "En un mundo que exige optimismo ciego, permítete ser pesimista de vez en cuando: recuerda que fue el pensamiento negativo el que inventó los cinturones de seguridad.",
    fullText: "En este mundo que fomenta una y otra vez los pensamientos positivos, permítete ser pesimista de vez en cuando, ya que fue el pensamiento negativo el que inventó los cinturones de seguridad.\n\nLas cosas no siempre van a salir como nosotros queremos, hay que estar preparados para las cosas que no.",
    isViral: true
  },
  {
    id: 78,
    title: "SÉ UN CONVENENCIERO",
    category: "vida",
    shortText: "Actúa a tu entera conveniencia y saca el mejor partido, pero jamás pisoteando o traicionando. Beneficiarte haciendo el bien a los demás es sabiduría pura.",
    fullText: "Aprende a actuar a tu entera conveniencia, haz lo que tú quieras, lo que tú necesites y saca el mejor partido de la situación.\n\nSin embargo, no te equivoques: actuar a tu conveniencia no quiere decir que pisotees, traiciones o engañes. Si logras hacer las cosas que tú quieres y que te convengan sin afectar negativamente a terceros, entonces vas por el camino correcto.\n\nAprende a ser un convenenciero de la mejor manera. Recuerda que tanto en la geometría como en las relaciones humanas, la misma distancia hay de aquí para allá que de acá para allá."
  },
  {
    id: 79,
    title: "EL PROBLEMA DE LA INMEDIATEZ",
    category: "mentalidad",
    shortText: "Mi generación erró al creer que si no costaba sufrimiento, no valía; la tuya sufre al querer todo en segundos. La sabiduría es esforzarse con inteligencia y sencillez.",
    fullText: "Cada generación tiene su sesgo. Mi generación cometió el error de pensar que algo no valía la pena si no se había trabajado duro por ello, confundiendo sufrimiento con virtud. La generación actual tiene el problema de la inmediatez: si no obtienen algo al instante, se desaniman y abandonan.\n\nYo considero que la verdadera sabiduría está en saber esforzarse adecuadamente y obtener las cosas de la forma más sencilla y efectiva posible."
  },
  {
    id: 80,
    title: "MIRAR, ESCUCHAR Y HABLAR",
    category: "vida",
    shortText: "Tenemos dos ojos, dos orejas y una sola voz. La sabiduría de la naturaleza nos enseña que debemos observar y escuchar el doble de lo que hablamos.",
    fullText: "Los seres humanos tenemos dos ojos, dos orejas y una sola voz. Aprendemos de la sabiduría de la naturaleza, que nos dice que debemos observar y escuchar el doble de lo que hablamos.",
    isViral: true
  },
  {
    id: 81,
    title: "APUESTA CORRECTAMENTE",
    category: "vida",
    shortText: "Cuando tomes una gran decisión, no apuestes tu felicidad a lo que otros hagan; apuesta a dar lo mejor de ti, amar y ser noble. Así pase lo que pase, habrás ganado la apuesta.",
    fullText: "Aprende a apostar correctamente en la vida. Si cuando te casas apuestas a ser feliz solo si la otra persona se queda contigo, vendrá la infelicidad si se marcha.\n\nCuando me casé con tu madre, no aposté a ser feliz para siempre: aposté a dar lo mejor de mí, amarla mucho, admirarla y quererla. Así que pase lo que pase, esa es para mí una apuesta ganada."
  },
  {
    id: 82,
    title: "NO ES SU OBLIGACIÓN",
    category: "relaciones",
    shortText: "Nadie está obligado a quererte, escucharte ni cuidarte. Por eso, cuando alguien lo hace de corazón sin tener obligación alguna, valóralo: te has ganado ese amor con creces.",
    fullText: "La gente no está obligada a ser buena contigo. La gente no tiene la obligación de creerte ni de comprenderte. No está obligada siquiera a escucharte. Las personas no están obligadas a nada con respecto a ti.\n\nTal vez esto se escuche desolador, mas no lo es: si tienes en cuenta que nadie está obligado a quererte, comprenderte ni ayudarte, sabrás que cuando alguien lo hace, lo hace de corazón por ser tú quien eres. No tienen obligación de cuidarte ni amarte; si lo hacen es porque te has ganado ese derecho, mi muchacho.",
    isViral: true
  },
  {
    id: 83,
    title: "MI SEGUNDA PERSONA FAVORITA",
    category: "relaciones",
    shortText: "Tú eres mi segunda persona favorita en el mundo: la primera siempre será tu madre. Tú harás tu vida, y tu pareja elegida deberá ser siempre tu mayor prioridad.",
    fullText: "Quiero que sepas y comprendas que tú eres mi segunda persona favorita en el mundo, porque la primera es y siempre será tu madre, y eso está bien.\n\nPorque finalmente, tú harás tu vida en algún momento, pero tu madre estará junto a mí y yo estaré junto a ella, porque nos elegimos mutuamente, y está bien. Tu pareja debe ser la persona a la que más ames y respetes, porque fue elección tuya. Tus hijos harán su vida: tu madre y yo te amamos, pero ella siempre será mi persona favorita.",
    isViral: true
  },
  {
    id: 84,
    title: "NO SOY TU GUIA",
    category: "vida",
    shortText: "No puedo ser tu guía porque tú recorrerás tus propias montañas y veredas, distintas a las mías. Seré tu acompañante fiel para compartirte mis vivencias y sostenerte.",
    fullText: "Yo soy tu padre mas no puedo ser tu guía en el camino de la vida. Porque aunque quisiera hacerlo, en mi vida he recorrido montañas y valles y ciudades y playas; mas en el camino de tu vida tú recorrerás tus propias veredas, tus propias montañas y ciudades.\n\nYo en tu vida cuando mucho seré un acompañante y te hablaré de mis experiencias, pero no puedo guiarte porque mi vida fue diferente. Siempre estaré para acompañarte y apoyarte en tu vida que es la tuya."
  },
  {
    id: 85,
    title: "INTELIGENCIA Y EXPERIENCIA",
    category: "mentalidad",
    shortText: "Haber nacido antes no me hace más inteligente que tú; me da experiencia y cicatrices. Escucha lo que te comparto: tal vez me equivoque, pero te doy la mirada de mi camino.",
    fullText: "El haber nacido varios años antes que tú no me vuelve más inteligente que tú, al contrario, me encantaría pensar que en algún momento tú vas a ser más inteligente de lo que yo pude haber sido.\n\nPero el haber nacido antes me da experiencia, y esa experiencia me permite ver cosas muy diferentes. En mi paciencia, escucha los consejos que te doy con el corazón, desde lo que he vivido y mis dolores. Tal vez me equivoque, pero te permite ver las cosas como las veo yo."
  },
  {
    id: 86,
    title: "DOS TIPOS DE PROBLEMAS",
    category: "mentalidad",
    shortText: "Hay dos tipos de problemas: los que podemos resolver y los que no. Con los primeros, ponte a actuar; con los segundos no te angusties. La sabiduría es distinguir la diferencia.",
    fullText: "La vida está llena de problemas, pero los problemas no son algo de lo que debamos preocuparnos.\n\nHay dos tipos de problemas: aquellos que podemos resolver y aquellos que no podemos resolver.\n\nLos problemas que podemos resolver no deben ser motivo de preocupación, debes ocuparte de ellos y pensar en cómo resolverlos. Los problemas que no podemos resolver no son motivo de preocupación, porque no importa lo que hagas, no podrás resolverlos. La sabiduría está en saber distinguir la diferencia."
  },
  {
    id: 87,
    title: "APRENDE A HUIR",
    category: "vida",
    shortText: "Ubica siempre la salida de emergencia en un cine, en un trabajo o en una relación que te lastime. Aprende a huir y a renunciar: nunca olvides que siempre puedes regresar a casa.",
    fullText: "Siempre ubica la salida de emergencia en el cine, en un concierto, en la escuela, en el trabajo, pero no solo una salida de emergencia física, sino también una salida de emergencia en tu trabajo, en una relación, en un grupo.\n\nDebes saber cómo escapar de allí y, sobre todo, cómo regresar a casa o a un lugar seguro, sin importar la situación peligrosa en la que te encuentres, física o emocional. Aprende a huir, aprende a renunciar. No te aferres a algo que te lastima. Ubica la salida de emergencia y recuerda que siempre puedes regresar a casa."
  },
  {
    id: 88,
    title: "LAS GALLETAS",
    category: "mentalidad",
    shortText: "Si esperas galletas sencillas y te tocan de chocolate, la alegría será enorme; si esperas las de chocolate y recibes simples, sufrirás. De la vida y de los demás, espera lo simple.",
    fullText: "Si para tu cumpleaños sabes que te voy a regalar una caja con galletas, espera las más simples. No pienses en galletas con chocolate: si recibes las simples estarás satisfecho, y si te doy de chocolate serás doblemente feliz. Pero si esperabas las de chocolate y recibes simples, te sentirás defraudado.\n\nDe la vida y de los demás, espera lo simple y lo más sencillo. Si recibes más, alégrate; pero no pongas expectativas irreales en los demás. Esfuérzate para ti mismo, pero en los demás, piensa en las galletas más sencillas que haya.",
    isViral: true
  },
  {
    id: 89,
    title: "LAGRIMAS Y DIAMANTES",
    category: "caracter",
    shortText: "Siente tus emociones pero sé prudente: las minas no sueltan todos sus diamantes para no devaluar su precio. Que tus lágrimas y tu enojo sean diamantes escasos y valiosos.",
    fullText: "No temas a las emociones. Aprende a sentirlas, aprende a aceptarlas y aprende a manejarlas. No temas expresar tus emociones, pero sé prudente a la hora de hacerlo.\n\nEn Sudáfrica hay enormes minas de diamantes y si se explotaran todas juntas, el precio bajaría; por eso lo hacen poco a poco. Que tus lágrimas y tu enojo al expresarlo sean como diamantes. Muéstralos poco y sólo en aquellos casos en que valga la pena, para que se les dé el valor que realmente tienen."
  },
  {
    id: 90,
    title: "TRABAJO BAJO PRESIÓN",
    category: "vida",
    shortText: "Trabajar bajo presión no es una virtud para presumir; es el síntoma de una pésima planeación. Quien deja todo al último momento vive prisionero de la prisa.",
    fullText: "Recuerda que saber trabajar bajo presión no es una virtud.\n\nTrabajar bajo presión es solamente un síntoma de una persona o un lugar que no sabe realizar una correcta planeación para las cosas.\n\nSi dejas todo al último momento te sentirás presionado por terminarlo. Aprende a planificar adecuadamente todas tus actividades."
  },
  {
    id: 91,
    title: "LO QUE SUCEDE",
    category: "vida",
    shortText: "La vida es aquello que sucede mientras te estás lamentando de lo que no sucedió. No pierdas tiempo llorando por lo que no fue: mira a tu alrededor y agradece tu fortuna.",
    fullText: "La vida es aquello que sucede mientras te estás lamentando de lo que no sucedió. No pierdas más el tiempo en lamentaciones, mi muchacho. Aprende de los errores, aprende de las pérdidas y sigue adelante, porque la vida no se detiene.\n\nY en muchas ocasiones dejamos de ver la fortuna y la suerte que tenemos por voltear a ver algo que nunca tuvimos. Pon atención a lo que te rodea y aprende a sentirte afortunado."
  },
  {
    id: 92,
    title: "CUANDO NO LO LOGRAS",
    category: "mentalidad",
    shortText: "Habrá veces que pondrás todo tu corazón y fallarás, sintiendo que no eres suficiente. Tal vez hoy no lo fuiste y está bien: date permiso de descansar y retomar fuerzas.",
    fullText: "En algún momento intentarás lograr algo con todas tus ganas, con todo tu esfuerzo, con todo tu enfoque y todo tu corazón, y no lo conseguirás. Te sentirás defraudado y frustrado, pensando que no eres suficiente.\n\nSentirás un peso terrible, y sabes qué, tal vez tengas razón: tal vez no eres lo suficientemente bueno en este instante, y está bien. Descansa, tómate el tiempo, deja eso de lado un rato. Tal vez en algún momento lo seas, tal vez no, pero tendrás ese descanso hoy."
  },
  {
    id: 93,
    title: "POR RESPETO",
    category: "relaciones",
    shortText: "De niño le hablé de usted a mi padre por 'respeto'; él me dijo: 'Háblame de tú y trátame de usted. Con confianza y respeto'. Esa misma regla vive entre nosotros.",
    fullText: "Yo siempre tuteé a tu abuelo. Pero una vez de niño oí a otros hablarle de usted a sus padres por 'respeto' y quise imitarlo. Cuando me escuchó tan distante, me miró y me dijo con ternura:\n\n'Vamos a hacer una cosa: ¿qué te parece si me hablas de tú y me tratas de usted? Háblame con confianza y trátame con respeto, que yo haré lo mismo contigo'.\n\nDesde entonces y hasta hoy le hablé de 'tú' a mi padre y lo traté de 'usted', como él hizo conmigo y como yo hago contigo.",
    isViral: true
  },
  {
    id: 94,
    title: "LA LEY DEL 8",
    category: "vida",
    shortText: "Si para sacar un 10 tienes que desangrarte la salud y la paz, mejor opta por el 8. Calibra tus esfuerzos: da el máximo en lo trascendente y en lo demás no te desgastes.",
    fullText: "Si en la escuela, o en la vida, esforzándote mucho, mucho, mucho logras sacarte un diez; mejor opta por el 8.\n\nEn esta vida nos acostumbran a pensar que la excelencia absoluta es lo mejor, pero a veces esa excelencia nos exige demasiado y nos quita la vida. Aprende a elegir tus batallas: invierte tu esfuerzo donde realmente valga la pena y en lo que no, da lo necesario. Recuerda bien la ley del 8 y sé feliz.",
    isViral: true
  },
  {
    id: 95,
    title: "EL DÍA EN QUE TÚ NACISTE",
    category: "caracter",
    shortText: "Cuando naciste no se detuvo el mundo ni hubo profecías: eras solo otro niño con el amor de sus padres. No naciste especial, pero puedes llegar a serlo si te esfuerzas por ello.",
    fullText: "El día en que tú naciste, no nacieron todas las flores, no cantaron ruiseñores, no hubo grandes banquetes conmemorando tu llegada. Las estrellas no lo predijeron, el mundo no estaba esperando tu llegada.\n\nEres solo otro niño más, no eres especial de origen porque todos los niños nacen igual. Lo único que tenías de capital es el amor de tus padres. Aquello que logres será un poco por tus condiciones, pero sobre todo por lo que te esfuerces y decidas hacer. No naciste especial, pero podrías llegar a serlo si así lo decides."
  },
  {
    id: 96,
    title: "SIN HACER PREGUNTAS",
    category: "relaciones",
    shortText: "Si estás en peligro o en apuros y temes un regaño, llámame y dime: 'Papá, sin hacer preguntas'. Iré por ti donde estés, te pondré a salvo y jamás te recriminaré nada.",
    fullText: "Este es un obsequio sagrado: cuando estés en una fiesta o en un sitio peligroso, en estado inconveniente o con miedo a que te regañe, solo márcame y di la frase: 'Papá, ven por mí sin hacer preguntas'.\n\nNo importará dónde estés: iré por ti, no preguntaré nada ni te recriminaré nada. Lo único que me importará es tu seguridad. Y al día siguiente no te interrogaré: haberme llamado demuestra que reconociste tu riesgo y con eso me basta. Tu padre siempre estará para ayudarte.",
    isViral: true
  },
  {
    id: 97,
    title: "ELIJE TU DIFICULTAD",
    category: "vida",
    shortText: "El matrimonio es difícil y el divorcio es difícil. Estar sano cuesta y estar enfermo cuesta. Ser honesto cuesta y mentir cuesta. La vida no es sencilla: elige qué dificultad enfrentar.",
    fullText: "El matrimonio es difícil, el divorcio es difícil: elige tu dificultad.\nEl llevar una vida sana es difícil, el estar enfermo constantemente por no cuidarse es difícil: elige tu dificultad.\nEl ahorrar es difícil, el estar endeudado es difícil: elige tu dificultad.\nEl ser honesto es difícil, el cargar con las consecuencias de la deshonestidad es difícil: elige tu dificultad.\n\nLa vida no es sencilla ni fácil: siempre habrá problemas. El secreto está en elegir con madurez qué tipo de dificultad quieres confrontar.",
    isViral: true
  },
  {
    id: 98,
    title: "SÉ INVULNERABLE A LAS PALABRAS",
    category: "caracter",
    shortText: "Las palabras solo tienen filo si tú les das permiso. Sé invulnerable ante insultos y apodos: si no les otorgas poder, se quedarán ahogadas en la garganta de quien las dijo.",
    fullText: "Sé invulnerable a las palabras. Las palabras pueden pretender ser incendiarias, afiladas y cortantes, pero solo si tú lo permites.\n\nLas palabras no tienen peso alguno sobre ti si no lo autorizas. No importa lo que te digan, cómo te lo digan o cuántas veces intenten herirte: si tú no lo permites, no pueden hacer nada contra ti. Que digan lo que quieran: sus palabras se quedarán en su propia boca y garganta. Ser invulnerable a las palabras es el primer paso para ser indestructible.",
    isViral: true
  },
  {
    id: 99,
    title: "AUTOCONCEPTO",
    category: "mentalidad",
    shortText: "Para tus padres eres y serás el más hermoso e inteligente, pero afuera habrá personas más capaces. Mantén la autoestima alta para valorarte, y el autoconcepto razonable para no desilusionarte.",
    fullText: "Yo siempre te digo que eres hermoso, inteligente y valiente. Sin embargo, debes entender la diferencia entre autoestima y autoconcepto. Yo quiero que tu autoestima sea alta para que sepas que eres valioso y amado.\n\nSin embargo, debes entender también el autoconcepto: para mí siempre serás el niño más hermoso del mundo, pero eso no significa que el mundo entero deba tratarte como tal. Si sales creyendo que todos te venerarán, sufrirás desilusión. Autoestima alta y autoconcepto razonable. (Aunque para mamá y papá siempre serás el más hermoso)."
  },
  {
    id: 100,
    title: "NO LE TEMO A LA MUERTE",
    category: "vida",
    shortText: "No le temo a la muerte porque es parte natural de la vida, pero todavía no: quiero acompañarte hasta verte convertido en un hombre pleno que camine con paso firme sin mi mano.",
    fullText: "Sabes, mi muchachito, yo no le temo a la muerte. No lo digo con vanidad de creerme muy valiente; no le temo porque sé que es parte de la vida y que todos partiremos algún día. Y no le temo a la muerte, más aún, todavía no.\n\nTodavía no, porque quiero ver cómo creces y te desarrollas, estar allí apoyándote en cada momento hasta verte convertido en todo un hombre que no necesite de mi mano para caminar y avance solo por la vida. Solo cuando te vea moverte por ti mismo y tal vez conozca a mis nietos, estaré en paz y listo para decir adiós. En este momento, no le temo a la muerte, pero todavía no, todavía no.",
    isViral: true
  },
  {
    id: 101,
    title: "ALGÚN DÍA MORIRE",
    category: "vida",
    shortText: "Algún día moriré, pero la muerte no es lo contrario de la vida: es parte de ella. Estaré en cada consejo que te di, en cada recuerdo y en cada célula de tu cuerpo. Fue un honor compartir mi vida contigo. Te amo.",
    fullText: "Algún día moriré, algún día morirá mamá y los abuelos, y tus mascotas e incluso tú. Nunca se está preparado para ello porque no sabemos cuándo ocurrirá, pero debes saberlo y estar en paz consigo.\n\nDebes entender que la muerte no es lo contrario de la vida, es parte de ella. Lo contrario a la muerte es el nacimiento, lo contrario a morir es nacer. La muerte es parte de la vida y cuando yo muera, me vas a extrañar y vas a sentirte triste porque ya no voy a estar, pero estaré en cada consejo que te he dado, en cada vivencia que tenemos e incluso en cada célula de tu cuerpo. Ahí estará tu padre, ahí estará tu madre, y fue un honor y un orgullo haber compartido mi vida contigo.\n\nTe amo.",
    isViral: true
  }
];

export const TESTIMONIOS_INICIALES = [
  {
    id: 1,
    author: "Carlos Méndez",
    role: "Padre de 2 adolescentes",
    handle: "@carlosm_dad",
    platform: "TikTok",
    rating: 5,
    text: "Empecé a ver los videos de Robert en TikTok y compré el libro de inmediato. No tiene pelos en la lengua. El consejo #2 ('Nunca hieras'), #96 ('Sin hacer preguntas') y el #101 me hicieron llorar.",
    date: "Hace 2 días"
  },
  {
    id: 2,
    author: "Mateo Valenzuela",
    role: "Lector de 24 años",
    handle: "@mateov_real",
    platform: "Instagram",
    rating: 5,
    text: "Mi papá nunca me dio estos consejos. Escuchar el audiolibro de Robert Pacheco mientras manejo me abrió los ojos sobre el consejo #14 y la ley del 8 (#94). Un libro indispensable.",
    date: "Hace 5 días"
  },
  {
    id: 3,
    author: "Sofía Herrera",
    role: "Madre y Emprendedora",
    handle: "@sofi_herrera",
    platform: "Facebook",
    rating: 5,
    text: "Directo a la yugular. Sin rodeos de autoayuda barata. El consejo #72 sobre la disculpa y limpiar el vaso derramado se convirtió en la regla número uno en mi casa.",
    date: "Hace 1 semana"
  }
];
