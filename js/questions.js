const questionsData = [
    {
        "id": 1,
        "tema": 5,
        "pregunta": "Según la definición del tema, la Ciencia de Datos integra principalmente:",
        "opciones": [
            "Solo computación y matemáticas",
            "Computación, matemáticas, estadística y conocimiento experto de un dominio",
            "Solo estadística y aprendizaje automático",
            "Solo conocimiento de negocio y visualización"
        ],
        "correcta": 1,
        "explicacion": "La definición del tema establece que la Ciencia de Datos integra computación, matemáticas, estadística y conocimiento experto de un dominio de aplicación.",
        "fuente": "teoria"
    },
    {
        "id": 2,
        "tema": 5,
        "pregunta": "¿Por qué la mera combinación de computación y conocimiento experto es peligrosa en Ciencia de Datos?",
        "opciones": [
            "Porque los ordenadores no son lo suficientemente rápidos",
            "Porque se necesita conocer los requisitos y condiciones previas de los algoritmos y modelos",
            "Porque el conocimiento experto nunca es relevante",
            "Porque los modelos siempre funcionan sin supervisión"
        ],
        "correcta": 1,
        "explicacion": "Es peligroso porque es imprescindible conocer los requisitos y condiciones previas de los algoritmos y modelos que se emplean.",
        "fuente": "teoria"
    },
    {
        "id": 3,
        "tema": 5,
        "pregunta": "En el caso de estudio Stitch Fix, ¿qué hace especial a su modelo de negocio?",
        "opciones": [
            "Utiliza únicamente algoritmos sin intervención humana",
            "Combina algoritmos de recomendación con estilistas y asesores humanos",
            "Vende ropa sin devolución posible",
            "No recopila datos de los clientes"
        ],
        "correcta": 1,
        "explicacion": "Stitch Fix es un sistema de recomendación híbrido: algoritmos + estilistas humanos que filtran y completan las recomendaciones.",
        "fuente": "teoria"
    },
    {
        "id": 4,
        "tema": 5,
        "pregunta": "Según el estudio de Territorio Creativo (2015), ¿qué porcentaje de empresas españolas había comenzado algún proceso de transformación digital?",
        "opciones": [
            "50%",
            "69%",
            "75%",
            "90%"
        ],
        "correcta": 1,
        "explicacion": "El 69% de las empresas españolas había comenzado algún tipo de proceso de transformación digital, aunque más táctico que estratégico.",
        "fuente": "teoria"
    },
    {
        "id": 5,
        "tema": 5,
        "pregunta": "Según el mismo estudio, ¿qué porcentaje de empresas y directores NO se consideraban preparados para la transformación digital?",
        "opciones": [
            "25%",
            "35%",
            "50%",
            "65%"
        ],
        "correcta": 2,
        "explicacion": "El 50% de empresas y directores no se consideraban suficientemente preparados para abordar la transformación digital.",
        "fuente": "teoria"
    },
    {
        "id": 6,
        "tema": 5,
        "pregunta": "¿Cuál era el único sector que se consideraba preparado para afrontar la transformación digital según el estudio citado?",
        "opciones": [
            "Banca y seguros",
            "Automoción",
            "Telecomunicaciones",
            "Energía y utilities"
        ],
        "correcta": 2,
        "explicacion": "El único sector que se consideraba preparado era el de Telecomunicaciones, por la convergencia de servicios y redes 5G.",
        "fuente": "teoria"
    },
    {
        "id": 7,
        "tema": 5,
        "pregunta": "¿Cuál de los siguientes sectores se consideraba MÁS ATRASADO en transformación digital?",
        "opciones": [
            "Banca y seguros",
            "Salud",
            "Automoción",
            "Moda y belleza"
        ],
        "correcta": 3,
        "explicacion": "Los sectores más atrasados incluyen Moda y Belleza, Servicios, Cultura/Ocio y Distribución y Retail.",
        "fuente": "teoria"
    },
    {
        "id": 8,
        "tema": 5,
        "pregunta": "Las palancas de activación de la ciencia de datos incluyen, EXCEPTO:",
        "opciones": [
            "Acciones basadas en evidencias empíricas y conocimiento de negocio",
            "Métricas que cuantifiquen resultados de negocio",
            "Crear una cultura del dato en la compañía",
            "Disponibilidad de plataformas hardware y software para Big Data"
        ],
        "correcta": 2,
        "explicacion": "Crear una cultura del dato es una palanca de DIRECCIÓN, no de activación.",
        "fuente": "teoria"
    },
    {
        "id": 9,
        "tema": 5,
        "pregunta": "La identificación y definición de métricas para evaluar el impacto de proyectos de ciencia de datos es un tipo de:",
        "opciones": [
            "Palanca de dirección",
            "Palanca de amplificación",
            "Palanca de activación",
            "Palanca de confianza"
        ],
        "correcta": 2,
        "explicacion": "Es una palanca de activación, ya que permite cuantificar resultados de negocio y medir mejoras.",
        "fuente": "examen"
    },
    {
        "id": 10,
        "tema": 5,
        "pregunta": "¿Cuál de las siguientes acciones corresponde a una palanca de DIRECCIÓN?",
        "opciones": [
            "Compartir una visión común sobre decisiones basadas en evidencias",
            "Crear una cultura del dato e implantar gobierno de datos",
            "Gestionar inversiones en big data y analytics",
            "Compartir conocimientos con socios y proveedores"
        ],
        "correcta": 1,
        "explicacion": "Crear cultura del dato e implantar estrategia y gobierno de datos son palancas de dirección.",
        "fuente": "teoria"
    },
    {
        "id": 11,
        "tema": 5,
        "pregunta": "Una organización data-driven se caracteriza porque:",
        "opciones": [
            "Toma decisiones únicamente con algoritmos automáticos",
            "Combina datos con experiencia e intuición humana",
            "No utiliza nunca la experiencia humana",
            "Rechaza cualquier indicador cualitativo"
        ],
        "correcta": 1,
        "explicacion": "Una organización data-driven usa datos como ventaja táctica y estratégica, pero combinándolos con conocimiento humano (IA + IH).",
        "fuente": "teoria"
    },
    {
        "id": 12,
        "tema": 5,
        "pregunta": "La frase 'Without data, you're just another person with an opinion' es de:",
        "opciones": [
            "Albert Einstein",
            "George E. P. Box",
            "William E. Deming",
            "Klaus Schwab"
        ],
        "correcta": 2,
        "explicacion": "La cita es de William E. Deming, experto en calidad y estadística.",
        "fuente": "teoria"
    },
    {
        "id": 13,
        "tema": 5,
        "pregunta": "¿Cuál es una desventaja de los datos en formato digital para las organizaciones?",
        "opciones": [
            "No se pueden reutilizar",
            "Pueden corromperse o perderse en las plataformas",
            "Siempre están actualizados",
            "No tienen valor estratégico"
        ],
        "correcta": 1,
        "explicacion": "Aunque los datos digitales no se degradan físicamente, pueden sufrir pérdidas o corrupción en las plataformas.",
        "fuente": "teoria"
    },
    {
        "id": 14,
        "tema": 5,
        "pregunta": "¿Cuál de los siguientes NO es un problema típico de los datos en una organización?",
        "opciones": [
            "Problemas de integridad (sesgos, errores, valores faltantes)",
            "Problemas de homogeneidad (duplicados, representaciones dispares)",
            "Problemas de vigencia (datos caducados)",
            "Problemas de degradación física por el paso del tiempo"
        ],
        "correcta": 3,
        "explicacion": "Los datos digitales no se degradan físicamente con el tiempo; su problema es la corrupción o pérdida en plataformas.",
        "fuente": "teoria"
    },
    {
        "id": 15,
        "tema": 5,
        "pregunta": "En el modelo operativo centralizado de ciencia de datos, el equipo actúa como:",
        "opciones": [
            "Una consultoría externa contratada puntualmente",
            "Una consultoría interna de la compañía",
            "Una unidad sin contacto con el negocio",
            "Un grupo descentralizado en cada departamento"
        ],
        "correcta": 1,
        "explicacion": "En el modelo centralizado el equipo unificado recibe peticiones de las unidades de negocio como una consultoría interna.",
        "fuente": "teoria"
    },
    {
        "id": 16,
        "tema": 5,
        "pregunta": "¿Cuál es el principal inconveniente del modelo operativo desplegado?",
        "opciones": [
            "Falta de coherencia metodológica",
            "Es difícil de implantar y requiere perfiles muy concretos",
            "Los equipos no conocen el negocio",
            "No se pueden factorizar problemas recurrentes"
        ],
        "correcta": 1,
        "explicacion": "El modelo desplegado es más difícil de implantar porque necesita perfiles capaces de encajar en las unidades de negocio y a la vez mantener la coherencia central.",
        "fuente": "teoria"
    },
    {
        "id": 17,
        "tema": 5,
        "pregunta": "El modelo operativo difuso de ciencia de datos presenta como principal riesgo:",
        "opciones": [
            "Que el equipo central tenga demasiado poder",
            "La repetición de esfuerzos y la dificultad para desarrollar una estrategia común",
            "Que no haya contacto con el negocio",
            "Que todos los proyectos sean a largo plazo"
        ],
        "correcta": 1,
        "explicacion": "En el modelo difuso cada unidad de negocio tiene su equipo, lo que genera riesgo de repetición y dificulta estrategia y metodología comunes.",
        "fuente": "teoria"
    },
    {
        "id": 18,
        "tema": 5,
        "pregunta": "En organizaciones de tamaño medio o grande, ¿qué modelo operativo funciona generalmente mejor?",
        "opciones": [
            "Centralizado",
            "Desplegado",
            "Difuso",
            "Ninguno, todos son iguales"
        ],
        "correcta": 1,
        "explicacion": "Casi siempre funciona mejor el modelo desplegado, siempre que se imponga cierta coherencia y se factoricen soluciones comunes.",
        "fuente": "teoria"
    },
    {
        "id": 19,
        "tema": 5,
        "pregunta": "¿Qué significa 'Anti-HiPPOs' en el contexto de la cultura del dato?",
        "opciones": [
            "Una herramienta de visualización",
            "Oposición a decisiones basadas únicamente en la opinión de la persona más alta jerárquicamente",
            "Un tipo de modelo de machine learning",
            "Un protocolo de seguridad de datos"
        ],
        "correcta": 1,
        "explicacion": "Anti-HiPPOs promueve decisiones basadas en datos frente a la mera opinión de la persona con mayor rango o salario.",
        "fuente": "teoria"
    },
    {
        "id": 20,
        "tema": 5,
        "pregunta": "El orden correcto del Data Science Maturity Model es:",
        "opciones": [
            "Collect → Discover → Describe → Predict → Advise",
            "Collect → Describe → Discover → Predict → Advise",
            "Describe → Collect → Predict → Discover → Advise",
            "Collect → Describe → Predict → Discover → Advise"
        ],
        "correcta": 1,
        "explicacion": "El orden es Collect (recolección) → Describe (descripción) → Discover (descubrimiento) → Predict (predicción) → Advise (consejo).",
        "fuente": "teoria"
    },
    {
        "id": 21,
        "tema": 5,
        "pregunta": "Dentro del Data Science Maturity Model, el nivel de predicción (predict) se considera:",
        "opciones": [
            "El más avanzado de todos",
            "Más avanzado que describe pero por debajo de collect",
            "Más avanzado que discover pero por debajo de advise",
            "Por debajo de discover"
        ],
        "correcta": 2,
        "explicacion": "El orden es Collect → Describe → Discover → Predict → Advise, por lo que predict está por encima de discover y por debajo de advise.",
        "fuente": "examen"
    },
    {
        "id": 22,
        "tema": 5,
        "pregunta": "¿Cuál es el nivel más avanzado del Data Science Maturity Model?",
        "opciones": [
            "Predict",
            "Discover",
            "Advise",
            "Collect"
        ],
        "correcta": 2,
        "explicacion": "El nivel más avanzado es Advise (consejo).",
        "fuente": "teoria"
    },
    {
        "id": 23,
        "tema": 5,
        "pregunta": "El enfoque Data Mesh se caracteriza porque:",
        "opciones": [
            "Centraliza todos los datos en un único data lake",
            "Considera el dato y el código software como una misma unidad y favorece la propiedad descentralizada",
            "Separa completamente datos y software",
            "Solo permite arquitecturas top-down"
        ],
        "correcta": 1,
        "explicacion": "Data Mesh une dato y código como una misma unidad y favorece esquemas descentralizados de propiedad de dominios de datos.",
        "fuente": "examen"
    },
    {
        "id": 24,
        "tema": 5,
        "pregunta": "¿Cuál de los siguientes NO es un principio de Data Mesh?",
        "opciones": [
            "Descentralización de la propiedad de datos",
            "Dato como producto",
            "Plataforma de datos autoservicio",
            "Centralización de todos los datos en un data warehouse"
        ],
        "correcta": 3,
        "explicacion": "Data Mesh se opone a la centralización en data warehouses; propone descentralización, dato como producto, autoservicio y gobernanza federada.",
        "fuente": "teoria"
    },
    {
        "id": 25,
        "tema": 5,
        "pregunta": "El Chief Data Officer (CDO) es:",
        "opciones": [
            "Un algoritmo de clasificación",
            "Un rol ejecutivo responsable de la estrategia y gobierno de datos",
            "Un tipo de sensor IoT",
            "Un protocolo de comunicación"
        ],
        "correcta": 1,
        "explicacion": "El CDO es un rol directivo relacionado con la estrategia, gobierno y gestión de datos en la organización.",
        "fuente": "teoria"
    },
    {
        "id": 26,
        "tema": 5,
        "pregunta": "¿Cuál de las siguientes es una buena práctica para una cultura basada en datos?",
        "opciones": [
            "Restringir el acceso a los datos solo al equipo directivo",
            "Favorecer la data literacy y formar a los responsables en interpretación de resultados",
            "Evitar definir objetivos estratégicos claros",
            "Tomar decisiones únicamente por intuición"
        ],
        "correcta": 1,
        "explicacion": "Una buena práctica es favorecer la alfabetización en datos y formar a directivos para interpretar análisis.",
        "fuente": "teoria"
    },
    {
        "id": 27,
        "tema": 5,
        "pregunta": "La toma de decisiones en una data-driven organization se basa en:",
        "opciones": [
            "Solo en datos, rechazando la experiencia humana",
            "Solo en la experiencia de los directivos",
            "La combinación de información de datos y conocimiento humano",
            "En sorteos aleatorios"
        ],
        "correcta": 2,
        "explicacion": "El verdadero valor reside en combinar información extraída de los datos con el conocimiento de personas con experiencia e intuición.",
        "fuente": "teoria"
    },
    {
        "id": 28,
        "tema": 5,
        "pregunta": "¿Qué porcentaje de empresas participantes identificaba la 'incorporación del big data en los procesos de negocio' como herramienta de transformación?",
        "opciones": [
            "50%",
            "65%",
            "69%",
            "80%"
        ],
        "correcta": 1,
        "explicacion": "El 65% de las empresas participantes identificaba la incorporación del big data como herramienta de transformación y mejora de competitividad.",
        "fuente": "teoria"
    },
    {
        "id": 29,
        "tema": 5,
        "pregunta": "Según el tema, ¿qué es esencial para crear valor añadido mediante ciencia de datos?",
        "opciones": [
            "Usar siempre software propietario",
            "Contar con equipos multidisciplinares",
            "Evitar métricas de negocio",
            "Centralizar todos los datos sin compartirlos"
        ],
        "correcta": 1,
        "explicacion": "La única alternativa para obtener conocimiento valioso y desarrollar productos basados en datos es contar con equipos multidisciplinares.",
        "fuente": "teoria"
    },
    {
        "id": 30,
        "tema": 5,
        "pregunta": "En el modelo operativo desplegado, los equipos avanzados en las unidades de negocio actúan como:",
        "opciones": [
            "Competidores del equipo central",
            "Puente entre negocio y el equipo de ciencia de datos",
            "Únicos responsables del despliegue",
            "Auditores externos"
        ],
        "correcta": 1,
        "explicacion": "Las unidades avanzadas actúan como puente entre negocio y el equipo central de ciencia de datos.",
        "fuente": "teoria"
    },
    {
        "id": 31,
        "tema": 6,
        "pregunta": "¿Cuántas fases tiene el modelo CRISP-DM?",
        "opciones": [
            "4",
            "5",
            "6",
            "7"
        ],
        "correcta": 2,
        "explicacion": "CRISP-DM tiene 6 fases: comprensión del negocio, comprensión de datos, preparación, modelado, evaluación y despliegue.",
        "fuente": "teoria"
    },
    {
        "id": 32,
        "tema": 6,
        "pregunta": "¿Cuál es la primera fase de CRISP-DM?",
        "opciones": [
            "Comprensión de los datos",
            "Preparación de los datos",
            "Comprensión del negocio",
            "Modelado"
        ],
        "correcta": 2,
        "explicacion": "La primera fase es la comprensión del negocio, donde se definen objetivos y requisitos desde la perspectiva del negocio.",
        "fuente": "teoria"
    },
    {
        "id": 33,
        "tema": 6,
        "pregunta": "En CRISP-DM, ¿en qué fase se realiza la limpieza de datos?",
        "opciones": [
            "Comprensión del negocio",
            "Comprensión de los datos",
            "Preparación de los datos",
            "Evaluación"
        ],
        "correcta": 2,
        "explicacion": "La limpieza de datos se realiza en la fase de preparación de los datos.",
        "fuente": "teoria"
    },
    {
        "id": 34,
        "tema": 6,
        "pregunta": "¿Qué significa EDA?",
        "opciones": [
            "Evaluación de Datos Avanzada",
            "Análisis Exploratorio de Datos",
            "Extracción de Datos Automática",
            "Entrenamiento de Datos Asistido"
        ],
        "correcta": 1,
        "explicacion": "EDA significa Exploratory Data Analysis (Análisis Exploratorio de Datos).",
        "fuente": "teoria"
    },
    {
        "id": 35,
        "tema": 6,
        "pregunta": "Un KPI es:",
        "opciones": [
            "Un algoritmo de clasificación",
            "Un indicador clave de rendimiento",
            "Un tipo de base de datos",
            "Un protocolo de red"
        ],
        "correcta": 1,
        "explicacion": "KPI = Key Performance Indicator. Indicador cuantificable del éxito de una organización.",
        "fuente": "teoria"
    },
    {
        "id": 36,
        "tema": 6,
        "pregunta": "Un KPI debe ser SIEMPRE:",
        "opciones": [
            "Cuantitativo",
            "Cualitativo",
            "Cuantificable",
            "Secreto"
        ],
        "correcta": 2,
        "explicacion": "Los KPI deben ser cuantificables, aunque pueden ser cuantitativos o cualitativos.",
        "fuente": "teoria"
    },
    {
        "id": 37,
        "tema": 6,
        "pregunta": "Un modelo descriptivo se caracteriza porque:",
        "opciones": [
            "Predice valores futuros",
            "Presenta resúmenes de los datos sin interpretación",
            "Comprueba causas entre variables",
            "Se aplica siempre a otros conjuntos de datos"
        ],
        "correcta": 1,
        "explicacion": "El análisis descriptivo presenta resúmenes de los datos sin interpretación de los mismos.",
        "fuente": "teoria"
    },
    {
        "id": 38,
        "tema": 6,
        "pregunta": "Un modelo inferencial:",
        "opciones": [
            "Predice nuevos valores sin explicar la influencia de las variables",
            "Comprueba si patrones observados se mantienen en otros datos sin hacer predicciones",
            "Presenta gráficos sin analizar otros datos",
            "Comprueba cómo cambios en un parámetro afectan a la salida en valores promedio"
        ],
        "correcta": 1,
        "explicacion": "El inferencial comprueba si conclusiones o patrones observados en un conjunto se mantienen para otros datos distintos, sin predicciones.",
        "fuente": "examen"
    },
    {
        "id": 39,
        "tema": 6,
        "pregunta": "¿Qué tipo de análisis responde a '¿Cuántas unidades venderemos el próximo mes?'",
        "opciones": [
            "Descriptivo",
            "Exploratorio",
            "Predictivo",
            "Causal"
        ],
        "correcta": 2,
        "explicacion": "Predecir valores futuros es un análisis predictivo.",
        "fuente": "teoria"
    },
    {
        "id": 40,
        "tema": 6,
        "pregunta": "¿Qué tipo de análisis determina si cambiar una variable causa cambios en otra?",
        "opciones": [
            "Predictivo",
            "Causal",
            "Inferencial",
            "Descriptivo"
        ],
        "correcta": 1,
        "explicacion": "El análisis causal determina si cambiar una variable causa cambios en otra.",
        "fuente": "teoria"
    },
    {
        "id": 41,
        "tema": 6,
        "pregunta": "Un modelo mecanístico explica:",
        "opciones": [
            "Solo correlaciones sin causas",
            "Exactamente cómo varía la salida en función de los parámetros de entrada",
            "Solo valores promedio",
            "Patrones que no se pueden generalizar"
        ],
        "correcta": 1,
        "explicacion": "El modelo mecanístico explica cómo varía exactamente la salida en función de los parámetros de entrada.",
        "fuente": "teoria"
    },
    {
        "id": 42,
        "tema": 6,
        "pregunta": "El sobreajuste (overfitting) en modelos de ciencia de datos consiste en:",
        "opciones": [
            "Crear un modelo que no se ajusta a los datos de entrenamiento",
            "Crear un modelo que se ajusta perfectamente a los datos de entrenamiento pero no generaliza bien",
            "Crear un modelo demasiado simple",
            "Crear un modelo que funciona peor con el tiempo por cambios en los datos"
        ],
        "correcta": 1,
        "explicacion": "El sobreajuste ajusta perfectamente los datos de entrenamiento pero no generaliza bien a otros datos nuevos.",
        "fuente": "examen"
    },
    {
        "id": 43,
        "tema": 6,
        "pregunta": "¿Cuál de las siguientes técnicas NO sirve para mitigar el sobreajuste?",
        "opciones": [
            "Validación cruzada",
            "Regularización",
            "Aumentar la complejidad del modelo",
            "Early stopping"
        ],
        "correcta": 2,
        "explicacion": "Aumentar la complejidad del modelo empeora el sobreajuste; las otras opciones son técnicas para mitigarlo.",
        "fuente": "teoria"
    },
    {
        "id": 44,
        "tema": 6,
        "pregunta": "MLOps hace referencia a:",
        "opciones": [
            "Un lenguaje de programación para datos",
            "Machine Learning Operations: despliegue, monitorización y mantenimiento de modelos",
            "Una técnica de limpieza de datos",
            "Un tipo de modelo predictivo"
        ],
        "correcta": 1,
        "explicacion": "MLOps = Machine Learning Operations, relativo al despliegue, monitorización, mantenimiento y actualización de proyectos.",
        "fuente": "teoria"
    },
    {
        "id": 45,
        "tema": 6,
        "pregunta": "En la novena fase del ciclo de vida actualizado de un proyecto de ciencia de datos se:",
        "opciones": [
            "Se evalúa y critica un único modelo",
            "Se operacionaliza y despliega el proyecto en producción",
            "Se realiza solo feature engineering",
            "Se planifica el despliegue pero sin ejecutarlo"
        ],
        "correcta": 1,
        "explicacion": "La novena fase del ciclo de vida actualizado es operacionalizar y desplegar el proyecto en producción según el plan establecido.",
        "fuente": "examen"
    },
    {
        "id": 46,
        "tema": 6,
        "pregunta": "¿Qué es un diccionario de datos?",
        "opciones": [
            "Una base de datos con definiciones",
            "Un documento con nombre, naturaleza y descripción de cada variable",
            "Un glosario de términos técnicos",
            "Un catálogo de datasets disponibles"
        ],
        "correcta": 1,
        "explicacion": "El diccionario de datos incluye nombre, naturaleza, descripción, valores posibles y rango de cada variable.",
        "fuente": "teoria"
    },
    {
        "id": 47,
        "tema": 6,
        "pregunta": "El perfil del científico de datos debe ser:",
        "opciones": [
            "Muy especializado en una sola disciplina",
            "Polifacético, con amplitud de conocimientos y conexiones entre disciplinas",
            "Solo experto en programación",
            "Solo experto en estadística"
        ],
        "correcta": 1,
        "explicacion": "Es más importante la amplitud de conocimientos y las conexiones entre disciplinas que la profundidad en una sola.",
        "fuente": "teoria"
    },
    {
        "id": 48,
        "tema": 6,
        "pregunta": "¿Cuál es un componente mínimo recomendado para el portfolio de un científico de datos?",
        "opciones": [
            "Una patente",
            "Repositorios públicos de proyectos y un blog",
            "Un título de doctorado",
            "Un puesto en una multinacional"
        ],
        "correcta": 1,
        "explicacion": "Como mínimo, un portfolio debería incluir repositorios públicos de proyectos y un blog.",
        "fuente": "teoria"
    },
    {
        "id": 49,
        "tema": 6,
        "pregunta": "La reproducibilidad de un análisis requiere, EXCEPTO:",
        "opciones": [
            "Los mismos datos empleados originalmente",
            "El mismo código y herramientas",
            "Un conjunto de datos diferente para validar",
            "El procedimiento detallado"
        ],
        "correcta": 2,
        "explicacion": "Usar un conjunto de datos diferente corresponde a replicabilidad, no a reproducibilidad.",
        "fuente": "teoria"
    },
    {
        "id": 50,
        "tema": 6,
        "pregunta": "La replicabilidad de un experimento implica:",
        "opciones": [
            "Usar exactamente los mismos datos del estudio original",
            "Realizar un experimento independiente con datos diferentes",
            "No compartir ni datos ni código",
            "Obtener siempre los mismos resultados que el estudio original"
        ],
        "correcta": 1,
        "explicacion": "Replicabilidad es la capacidad de realizar un experimento independiente con un conjunto de datos diferente.",
        "fuente": "teoria"
    },
    {
        "id": 51,
        "tema": 6,
        "pregunta": "El control de versiones en un proyecto de ciencia de datos sirve para:",
        "opciones": [
            "Impedir que otros usuarios modifiquen el código",
            "Favorecer la reproducibilidad registrando cambios en código y datos",
            "Automatizar la descarga de datos",
            "Enviar informes de errores automáticos"
        ],
        "correcta": 1,
        "explicacion": "El control de versiones favorece la reproducibilidad al registrar cambios en código y datos.",
        "fuente": "examen"
    },
    {
        "id": 52,
        "tema": 6,
        "pregunta": "¿Quién acuñó el concepto de programación literaria?",
        "opciones": [
            "Donald Knuth",
            "Geoffrey Hinton",
            "Andrew Ng",
            "Yann LeCun"
        ],
        "correcta": 0,
        "explicacion": "Donald Knuth acuñó el término 'programación literaria' para promover una mejor documentación del código.",
        "fuente": "teoria"
    },
    {
        "id": 53,
        "tema": 6,
        "pregunta": "¿Qué significa P&L?",
        "opciones": [
            "Profit and Loss (Pérdidas y Ganancias)",
            "Performance and Learning",
            "Process and Logic",
            "Product and Launch"
        ],
        "correcta": 0,
        "explicacion": "P&L = Profit and Loss, la declaración de pérdidas y ganancias.",
        "fuente": "teoria"
    },
    {
        "id": 54,
        "tema": 6,
        "pregunta": "La fase de CRISP-DM dedicada a seleccionar técnicas y construir modelos es:",
        "opciones": [
            "Comprensión del negocio",
            "Preparación de los datos",
            "Modelado",
            "Despliegue"
        ],
        "correcta": 2,
        "explicacion": "La fase de modelado incluye selección de técnicas, generación de configuraciones de prueba y construcción/evaluación de modelos.",
        "fuente": "teoria"
    },
    {
        "id": 55,
        "tema": 6,
        "pregunta": "¿Cuál es la frase asociada a George E. P. Box sobre los modelos?",
        "opciones": [
            "'Everything should be made as simple as possible'",
            "'All models are wrong, but some are useful'",
            "'Without data, you are just another person with an opinion'",
            "'Better data will always beat better models'"
        ],
        "correcta": 1,
        "explicacion": "George E. P. Box dijo que todos los modelos son erróneos, pero la cuestión práctica es cuán erróneos deben ser para no ser útiles.",
        "fuente": "teoria"
    },
    {
        "id": 56,
        "tema": 6,
        "pregunta": "¿Qué porcentaje aproximado del tiempo dedica un científico de datos a limpiar datos según la cita del tema?",
        "opciones": [
            "20%",
            "50%",
            "80%",
            "95%"
        ],
        "correcta": 2,
        "explicacion": "La cita de Thomson Nguyen indica que el 80% del tiempo se dedicaba a limpiar datos.",
        "fuente": "teoria"
    },
    {
        "id": 57,
        "tema": 6,
        "pregunta": "En un análisis exploratorio:",
        "opciones": [
            "Se interpretan los datos sin analizar si los hallazgos son aplicables a otros conjuntos",
            "Se comprueba si los patrones se mantienen en otros datos",
            "Se predicen valores futuros",
            "Se explican exactamente las relaciones causa-efecto"
        ],
        "correcta": 0,
        "explicacion": "El análisis exploratorio presenta una interpretación de los datos pero no analiza si es aplicable a otros conjuntos.",
        "fuente": "teoria"
    },
    {
        "id": 58,
        "tema": 6,
        "pregunta": "Un análisis causal se distingue del mecanístico porque:",
        "opciones": [
            "El causal predice valores exactos",
            "El causal solo comprueba efectos en valores promedio, mientras que el mecanístico explica la variación exacta",
            "El mecanístico no explica relaciones",
            "El causal siempre usa experimentos aleatorios"
        ],
        "correcta": 1,
        "explicacion": "El causal comprueba efectos en valores promedio; el mecanístico explica exactamente cómo varía la salida según las entradas.",
        "fuente": "teoria"
    },
    {
        "id": 59,
        "tema": 6,
        "pregunta": "¿Cuál de las siguientes opciones describe mejor el subajuste (underfitting)?",
        "opciones": [
            "Modelo que se ajusta perfectamente a entrenamiento pero no generaliza",
            "Modelo demasiado simple que ni siquiera captura patrones de entrenamiento",
            "Modelo con demasiadas variables",
            "Modelo que funciona igual en entrenamiento y test"
        ],
        "correcta": 1,
        "explicacion": "El subajuste es un modelo demasiado simple que ni siquiera captura bien los patrones de los datos de entrenamiento.",
        "fuente": "teoria"
    },
    {
        "id": 60,
        "tema": 6,
        "pregunta": "¿Qué indica la cita 'Better data will always beat better models'?",
        "opciones": [
            "Que los modelos no importan",
            "Que la calidad de los datos es fundamental para obtener buenos resultados",
            "Que hay que usar siempre modelos simples",
            "Que la limpieza de datos es opcional"
        ],
        "correcta": 1,
        "explicacion": "La cita enfatiza que datos de mejor calidad suelen superar a modelos más sofisticados con datos pobres.",
        "fuente": "teoria"
    },
    {
        "id": 61,
        "tema": 7,
        "pregunta": "¿Quién acuñó el término Industria 4.0?",
        "opciones": [
            "Bill Gates",
            "Klaus Schwab",
            "Angela Merkel",
            "Elon Musk"
        ],
        "correcta": 1,
        "explicacion": "Klaus Schwab, fundador del Foro Económico Mundial, acuñó el término en su libro 'The Fourth Industrial Revolution' (2016).",
        "fuente": "teoria"
    },
    {
        "id": 62,
        "tema": 7,
        "pregunta": "¿En qué libro Klaus Schwab definió el impacto de las tecnologías emergentes del siglo XXI?",
        "opciones": [
            "The Second Machine Age",
            "The Fourth Industrial Revolution",
            "Data Science for Business",
            "The Big Data Revolution"
        ],
        "correcta": 1,
        "explicacion": "El libro es 'The Fourth Industrial Revolution' (2016).",
        "fuente": "teoria"
    },
    {
        "id": 63,
        "tema": 7,
        "pregunta": "¿Cuál de las siguientes tecnologías NO es propia de la Industria 4.0?",
        "opciones": [
            "Internet de las Cosas",
            "Realidad aumentada",
            "Máquinas de vapor",
            "Vehículos autónomos"
        ],
        "correcta": 2,
        "explicacion": "Las máquinas de vapor corresponden a la Primera Revolución Industrial.",
        "fuente": "teoria"
    },
    {
        "id": 64,
        "tema": 7,
        "pregunta": "La Segunda Revolución Industrial estuvo propiciada principalmente por:",
        "opciones": [
            "La mecanización y la máquina de vapor",
            "La electricidad y las telecomunicaciones",
            "Las tecnologías digitales",
            "La robótica y la IA"
        ],
        "correcta": 1,
        "explicacion": "La Segunda Revolución Industrial fue impulsada por la electricidad y las telecomunicaciones.",
        "fuente": "teoria"
    },
    {
        "id": 65,
        "tema": 7,
        "pregunta": "La Tercera Revolución Industrial introdujo:",
        "opciones": [
            "La electricidad",
            "Las tecnologías digitales en los procesos industriales",
            "La robótica avanzada",
            "Las máquinas de vapor"
        ],
        "correcta": 1,
        "explicacion": "La Tercera Revolución Industrial introdujo las tecnologías digitales en los procesos industriales.",
        "fuente": "teoria"
    },
    {
        "id": 66,
        "tema": 7,
        "pregunta": "Según el tema, en la Industria 4.0 lo realmente importante son:",
        "opciones": [
            "Solo los avances tecnológicos",
            "Los cambios en relaciones humanas, productivas, sociales, políticas y económicas",
            "Solo la producción masiva",
            "Solo la reducción de costes"
        ],
        "correcta": 1,
        "explicacion": "Lo importante no es solo la tecnología, sino los cambios en las relaciones humanas, productivas, sociales, políticas y económicas a escala global.",
        "fuente": "teoria"
    },
    {
        "id": 67,
        "tema": 7,
        "pregunta": "¿Cuál es un riesgo clave de la Industria 4.0 relacionado con cadenas de suministro?",
        "opciones": [
            "Exceso de producción local",
            "Dependencia geopolítica de componentes críticos",
            "Falta total de digitalización",
            "Eliminación de todos los sensores"
        ],
        "correcta": 1,
        "explicacion": "Los cambios geopolíticos han puesto de manifiesto la vulnerabilidad de las cadenas de suministro y la dependencia de componentes críticos.",
        "fuente": "teoria"
    },
    {
        "id": 68,
        "tema": 7,
        "pregunta": "¿Qué objetivo persigue la Estrategia Nacional de Industria Conectada 4.0 (IC 4.0) en España?",
        "opciones": [
            "Reducir el número de fábricas",
            "Incrementar valor añadido industrial y empleo cualificado",
            "Eliminar la industria tradicional",
            "Importar únicamente tecnología extranjera"
        ],
        "correcta": 1,
        "explicacion": "IC 4.0 busca incrementar el valor añadido industrial y el empleo cualificado, entre otros objetivos.",
        "fuente": "teoria"
    },
    {
        "id": 69,
        "tema": 7,
        "pregunta": "La norma UNE 0060 describe:",
        "opciones": [
            "Criterios detallados de evaluación de la Industria Digital",
            "Los requisitos para que una empresa industrial sea considerada Industria Digital en España",
            "Los ejes de HADA",
            "La definición de Industria 3.0"
        ],
        "correcta": 1,
        "explicacion": "UNE 0060 describe los requisitos para que una empresa industrial sea considerada Industria Digital en España.",
        "fuente": "examen"
    },
    {
        "id": 70,
        "tema": 7,
        "pregunta": "HADA es la sigla de:",
        "opciones": [
            "Herramienta de Autodiagnóstico Digital Avanzada",
            "Hardware Avanzado para Datos Abiertos",
            "Hub de Análisis de Datos Aplicado",
            "Herramienta de Auditoría de Datos Avanzada"
        ],
        "correcta": 0,
        "explicacion": "HADA = Herramienta de Autodiagnóstico Digital Avanzada, implantada por la Secretaría General de Industria.",
        "fuente": "teoria"
    },
    {
        "id": 71,
        "tema": 7,
        "pregunta": "El Internet de las Cosas (IoT) se define como:",
        "opciones": [
            "Una red social para dispositivos",
            "Objetos físicos con capacidad de conectarse e intercambiar datos",
            "Un protocolo de seguridad informática",
            "Una base de datos centralizada"
        ],
        "correcta": 1,
        "explicacion": "IoT son objetos físicos con sensores, software y capacidad de comunicación para intercambiar datos.",
        "fuente": "teoria"
    },
    {
        "id": 72,
        "tema": 7,
        "pregunta": "¿Cuál de las siguientes NO es una característica del IoT según el tema?",
        "opciones": [
            "Anywhere / Anyplace",
            "Anytime / Anycontext",
            "Any code / Any programmer",
            "Any path / Any network"
        ],
        "correcta": 2,
        "explicacion": "Las características son anywhere/anyplace, anytime/anycontext, anyone/anybody, any service/any business y any path/any network.",
        "fuente": "teoria"
    },
    {
        "id": 73,
        "tema": 7,
        "pregunta": "En una red de sensores (WSN), el 'sumidero' o estación base es el nodo que:",
        "opciones": [
            "Genera energía para los sensores",
            "Recopila información de los sensores y la reenvía",
            "Procesa únicamente datos históricos",
            "Actúa como sensor principal"
        ],
        "correcta": 1,
        "explicacion": "El sumidero o estación base recopila información de los sensores y la reenvía a través de Internet u otra red.",
        "fuente": "teoria"
    },
    {
        "id": 74,
        "tema": 7,
        "pregunta": "¿Cuál es un tipo de red de sensores mencionado en el tema?",
        "opciones": [
            "Redes de sensores cuánticas",
            "Redes de sensores de cuerpo",
            "Redes de sensores virtuales",
            "Redes de sensores atmosféricas exclusivas"
        ],
        "correcta": 1,
        "explicacion": "Entre los tipos mencionados están redes multimedia, subacuáticas, bajo tierra, de cuerpo y sensor-actuador.",
        "fuente": "teoria"
    },
    {
        "id": 75,
        "tema": 7,
        "pregunta": "En una topología en estrella de sensores:",
        "opciones": [
            "Todos los sensores se comunican entre sí sin nodo central",
            "Todos los sensores se comunican con un nodo central",
            "No hay comunicación entre sensores",
            "Cada sensor actúa como servidor independiente"
        ],
        "correcta": 1,
        "explicacion": "En estrella todos los sensores se comunican con un nodo central; si este falla, los demás quedan afectados.",
        "fuente": "teoria"
    },
    {
        "id": 76,
        "tema": 7,
        "pregunta": "El protocolo Zigbee está asociado a:",
        "opciones": [
            "Redes de sensores personales",
            "Redes de computadoras cuánticas",
            "Redes sociales",
            "Bases de datos relacionales"
        ],
        "correcta": 0,
        "explicacion": "Zigbee es un protocolo de comunicación para redes de sensores personales.",
        "fuente": "teoria"
    },
    {
        "id": 77,
        "tema": 7,
        "pregunta": "¿Cuándo apareció por primera vez el término 'smart city'?",
        "opciones": [
            "A comienzos de los años 90",
            "En 2008",
            "En 2010",
            "En 2015"
        ],
        "correcta": 0,
        "explicacion": "El término smart city apareció a comienzos de la década de 1990.",
        "fuente": "teoria"
    },
    {
        "id": 78,
        "tema": 7,
        "pregunta": "Uno de los primeros proyectos precursores de smart cities a nivel mundial fue:",
        "opciones": [
            "Living Innovation Zone (LIZ) en San Francisco 2013",
            "Smart Planet de IBM en 2008",
            "SCADA en Seattle 2018",
            "Vision Zero de Boston 2030"
        ],
        "correcta": 1,
        "explicacion": "Smart Planet de IBM, lanzado en 2008, es considerado uno de los primeros proyectos precursores de smart cities.",
        "fuente": "examen"
    },
    {
        "id": 79,
        "tema": 7,
        "pregunta": "Según Giffinger y Gudrum (2010), ¿cuál de las siguientes NO es una característica de una smart city?",
        "opciones": [
            "Economía",
            "Gobernanza",
            "Competición militar",
            "Movilidad"
        ],
        "correcta": 2,
        "explicacion": "Las 6 características son economía, gobernanza, medio ambiente, personas, movilidad y estilo de vida.",
        "fuente": "teoria"
    },
    {
        "id": 80,
        "tema": 7,
        "pregunta": "Según Harrison et al. (2010), una ciudad inteligente es aquella que es:",
        "opciones": [
            "Instrumentalizada, interconectada e inteligente",
            "Solo tecnológicamente avanzada",
            "Completamente automatizada sin ciudadanos",
            "Solo económicamente potente"
        ],
        "correcta": 0,
        "explicacion": "Harrison et al. definen la smart city como instrumentalizada, interconectada e inteligente.",
        "fuente": "teoria"
    },
    {
        "id": 81,
        "tema": 7,
        "pregunta": "¿Cuáles son los dos elementos imprescindibles para la creación de una smart city desde 2010?",
        "opciones": [
            "Redes 5G y blockchain",
            "IoT/WSN y procesamiento/análisis de grandes volúmenes de datos",
            "Realidad virtual y drones",
            "Impresoras 3D y robots"
        ],
        "correcta": 1,
        "explicacion": "Son imprescindibles IoT y redes de sensores (WSN) para captar datos, y el procesamiento/análisis de grandes volúmenes de datos.",
        "fuente": "teoria"
    },
    {
        "id": 82,
        "tema": 7,
        "pregunta": "La fase 'intelligent city' se distingue de la 'smart city' porque:",
        "opciones": [
            "No usa tecnología",
            "Las TIC catalizan innovación con espacios colaborativos; la smart city pone el foco en la experiencia de usuario",
            "Solo recoge datos sin procesarlos",
            "Es posterior a la smart city"
        ],
        "correcta": 1,
        "explicacion": "Intelligent city usa TIC para innovación colaborativa; smart city se centra en la experiencia práctica y personalizada del usuario.",
        "fuente": "teoria"
    },
    {
        "id": 83,
        "tema": 7,
        "pregunta": "La ciencia ciudadana:",
        "opciones": [
            "Solo la realizan científicos profesionales",
            "Es investigación con participación del público y requiere datos abiertos",
            "No utiliza datos",
            "Es exclusiva de las smart cities asiáticas"
        ],
        "correcta": 1,
        "explicacion": "La ciencia ciudadana involucra al público, frecuentemente científicos amateur, y los datos abiertos son esenciales.",
        "fuente": "teoria"
    },
    {
        "id": 84,
        "tema": 7,
        "pregunta": "¿Qué proyecto español busca impulsar un ecosistema de centros de datos en municipios españoles?",
        "opciones": [
            "FIWARE",
            "EDINT",
            "GAIA-X",
            "CISPE"
        ],
        "correcta": 1,
        "explicacion": "EDINT es el proyecto español que impulsa centros de datos en municipios españoles.",
        "fuente": "teoria"
    },
    {
        "id": 85,
        "tema": 7,
        "pregunta": "Selecciona la afirmación FALSA sobre el proyecto EDINT:",
        "opciones": [
            "Se buscarán sinergias con SEGITTUR",
            "En cada localidad se creará un CEOD",
            "Madrid y Fuenlabrada son municipios seleccionados",
            "Financia a 12 entidades municipales en toda la UE"
        ],
        "correcta": 3,
        "explicacion": "EDINT es un proyecto español, no de toda la UE.",
        "fuente": "examen"
    },
    {
        "id": 86,
        "tema": 7,
        "pregunta": "CEOD significa:",
        "opciones": [
            "Centro de Excelencia y Oficina del Dato",
            "Comité Europeo de Organización de Datos",
            "Consejo de Empresas Operadoras de Datos",
            "Centro de Estudios de Optimización de Datos"
        ],
        "correcta": 0,
        "explicacion": "CEOD = Centro de Excelencia y Oficina del Dato.",
        "fuente": "teoria"
    },
    {
        "id": 87,
        "tema": 7,
        "pregunta": "El concepto 'knowledge gap' en una organización se refiere a:",
        "opciones": [
            "Aumento de la demanda de perfiles cualificados",
            "Conjunto de necesidades medibles por KPIs",
            "Carencia de perfiles para puestos de científicos de datos",
            "Vacío de conocimiento por la marcha de personal clave experimentado"
        ],
        "correcta": 3,
        "explicacion": "Knowledge gap es el vacío de conocimiento generado por la marcha de personal clave con experiencia en el dominio de negocio.",
        "fuente": "examen"
    },
    {
        "id": 88,
        "tema": 7,
        "pregunta": "¿Qué país del sureste asiático vive una situación de inestabilidad política que puede poner en riesgo el abastecimiento de microchips avanzados?",
        "opciones": [
            "Taiwán",
            "Vietnam",
            "China",
            "Japón"
        ],
        "correcta": 0,
        "explicacion": "Taiwán es el principal fabricante de chips avanzados y su inestabilidad política puede afectar el abastecimiento.",
        "fuente": "examen"
    },
    {
        "id": 89,
        "tema": 7,
        "pregunta": "¿Cuál es el principal riesgo para la privacidad en una smart city?",
        "opciones": [
            "Coste elevado de infraestructura",
            "Vigilancia masiva mediante redes de sensores",
            "Falta de conectividad",
            "Escasez de datos"
        ],
        "correcta": 1,
        "explicacion": "La vigilancia masiva mediante redes de sensores es uno de los principales riesgos para la privacidad en smart cities.",
        "fuente": "teoria"
    },
    {
        "id": 90,
        "tema": 7,
        "pregunta": "¿Qué es un espacio de datos?",
        "opciones": [
            "Una base de datos centralizada",
            "Infraestructura para almacenar, compartir y reutilizar datos de forma segura e interoperable",
            "Un centro de procesamiento de datos",
            "Una nube privada para empresas"
        ],
        "correcta": 1,
        "explicacion": "Un espacio de datos permite almacenar, compartir y reutilizar datos de forma segura e interoperable.",
        "fuente": "teoria"
    },
    {
        "id": 91,
        "tema": 8,
        "pregunta": "¿En qué año surgió la iniciativa política y de reglamento para crear el Espacio Único Digital de Datos en la UE?",
        "opciones": [
            "2015",
            "2018",
            "2020",
            "2022"
        ],
        "correcta": 2,
        "explicacion": "En 2020 surge la iniciativa política y de reglamento para crear el Espacio Único Digital de Datos.",
        "fuente": "teoria"
    },
    {
        "id": 92,
        "tema": 8,
        "pregunta": "El Espacio Único Digital de Datos de la UE tiene su origen en:",
        "opciones": [
            "El Reglamento General de Protección de Datos",
            "La Estrategia para un Mercado Digital Único de 2015",
            "El Pacto Verde Europeo",
            "El Reglamento de Ciberseguridad"
        ],
        "correcta": 1,
        "explicacion": "Tiene su origen en la Estrategia para un Mercado Digital Único de la Comisión Europea (2015).",
        "fuente": "teoria"
    },
    {
        "id": 93,
        "tema": 8,
        "pregunta": "¿Cuál fue el hito más importante para el desarrollo del Mercado Único de Datos Europeo en 2020?",
        "opciones": [
            "Directiva sobre Contenidos Digitales",
            "Cláusulas Contractuales Estándar",
            "Comunicación sobre Estrategia Europea de Datos",
            "Reglamento de Ciberseguridad"
        ],
        "correcta": 2,
        "explicacion": "La publicación de la Comunicación sobre Estrategia Europea de Datos fue el hito más importante en 2020.",
        "fuente": "examen"
    },
    {
        "id": 94,
        "tema": 8,
        "pregunta": "Las primeras acciones regulatorias encaminadas al Espacio Único de Datos en la UE (2007-2009) se aplicaron en el sector de:",
        "opciones": [
            "Automoción",
            "Plataformas de pago",
            "Redes eléctricas",
            "Contenidos digitales"
        ],
        "correcta": 0,
        "explicacion": "Las primeras acciones regulatorias entre 2007 y 2009 fueron en el sector de automoción.",
        "fuente": "examen"
    },
    {
        "id": 95,
        "tema": 8,
        "pregunta": "¿En qué año se aprobó el RGPD?",
        "opciones": [
            "2015",
            "2016",
            "2017",
            "2018"
        ],
        "correcta": 1,
        "explicacion": "El RGPD fue aprobado en 2016.",
        "fuente": "teoria"
    },
    {
        "id": 96,
        "tema": 8,
        "pregunta": "¿En qué año entró en vigor el RGPD en todos los Estados Miembros de la UE?",
        "opciones": [
            "2016",
            "2017",
            "2018",
            "2019"
        ],
        "correcta": 2,
        "explicacion": "El RGPD entró en vigor en 2018 en todos los Estados Miembros de la UE.",
        "fuente": "teoria"
    },
    {
        "id": 97,
        "tema": 8,
        "pregunta": "¿Cuál de las siguientes normativas se publicó en 2019?",
        "opciones": [
            "Directiva sobre Proveedores de Servicios de Pago",
            "Reglamento de Ciberseguridad",
            "Comunicación sobre Estrategia Europea de Datos",
            "Libro Blanco sobre IA"
        ],
        "correcta": 1,
        "explicacion": "En 2019 se aprobó el Reglamento de Ciberseguridad, la Directiva sobre datos abiertos, la Directiva sobre datos de electricidad y la Directiva sobre contenidos digitales.",
        "fuente": "teoria"
    },
    {
        "id": 98,
        "tema": 8,
        "pregunta": "Las Cláusulas Contractuales Estándar para transferencia de datos se establecieron en:",
        "opciones": [
            "2019",
            "2020",
            "2021",
            "2022"
        ],
        "correcta": 2,
        "explicacion": "Las Cláusulas Contractuales Estándar para transferencia de datos se establecieron en 2021.",
        "fuente": "teoria"
    },
    {
        "id": 99,
        "tema": 8,
        "pregunta": "¿Cuál de los siguientes es un sector estratégico del Espacio Único Digital de Datos?",
        "opciones": [
            "Minería de criptomonedas",
            "Medicina personalizada",
            "Venta ambulante",
            "Apuestas online"
        ],
        "correcta": 1,
        "explicacion": "Los sectores estratégicos incluyen medicina personalizada, movilidad, Pacto Verde Europeo, gemelos digitales, gobernanza transparente e infraestructuras/ciberseguridad.",
        "fuente": "teoria"
    },
    {
        "id": 100,
        "tema": 8,
        "pregunta": "¿Cuál es el objetivo del Pacto Verde Europeo?",
        "opciones": [
            "Crear un mercado digital único",
            "Alcanzar la neutralidad climática en 2050",
            "Regular las redes sociales",
            "Fomentar la Inteligencia Artificial"
        ],
        "correcta": 1,
        "explicacion": "El Pacto Verde Europeo busca alcanzar la neutralidad climática en 2050.",
        "fuente": "teoria"
    },
    {
        "id": 101,
        "tema": 8,
        "pregunta": "El 'dividendo digital' se refiere a:",
        "opciones": [
            "Un impuesto sobre datos digitales",
            "Beneficios obtenidos por el uso masivo de datos",
            "Una subvención para startups",
            "Derechos de autor sobre contenidos digitales"
        ],
        "correcta": 1,
        "explicacion": "El Dividendo Digital son los beneficios económicos y sociales obtenidos por el uso masivo de datos.",
        "fuente": "teoria"
    },
    {
        "id": 102,
        "tema": 8,
        "pregunta": "Según el tema, ¿qué porcentaje del consumo eléctrico total en la UE corresponde a las TIC?",
        "opciones": [
            "1-2%",
            "2-5%",
            "5-9%",
            "10-15%"
        ],
        "correcta": 2,
        "explicacion": "Las TIC son responsables del 5-9% del consumo eléctrico total en la UE.",
        "fuente": "teoria"
    },
    {
        "id": 103,
        "tema": 8,
        "pregunta": "¿Qué porcentaje de emisiones contaminantes corresponde a las TIC en la UE?",
        "opciones": [
            "0.5%",
            "1%",
            "2%",
            "5%"
        ],
        "correcta": 2,
        "explicacion": "Las TIC son responsables del 2% de las emisiones contaminantes en la UE.",
        "fuente": "teoria"
    },
    {
        "id": 104,
        "tema": 8,
        "pregunta": "¿Cuál es la previsión para 2025 sobre el procesamiento de datos?",
        "opciones": [
            "80% centralizado y 20% en periferia",
            "50% centralizado y 50% en periferia",
            "20% centralizado y 80% en periferia",
            "100% en la nube"
        ],
        "correcta": 2,
        "explicacion": "La previsión para 2025 es que el 80% de los datos se procese en la periferia y solo el 20% en ubicaciones centralizadas.",
        "fuente": "teoria"
    },
    {
        "id": 105,
        "tema": 8,
        "pregunta": "En EE.UU., la organización del espacio de datos está principalmente en manos del:",
        "opciones": [
            "Sector público",
            "Sector privado",
            "Gobierno federal únicamente",
            "Ciudadanos"
        ],
        "correcta": 1,
        "explicacion": "En EE.UU. se cede la organización del espacio de datos al sector privado, generando desequilibrios y concentración en Big Tech.",
        "fuente": "teoria"
    },
    {
        "id": 106,
        "tema": 8,
        "pregunta": "¿Cuál es la diferencia clave entre el enfoque de EE.UU. y la UE respecto a los datos?",
        "opciones": [
            "EE.UU. favorece la privacidad y la UE la competencia",
            "EE.UU. cede la organización del espacio de datos al sector privado",
            "La UE no tiene regulación de datos",
            "EE.UU. y la UE tienen el mismo enfoque"
        ],
        "correcta": 1,
        "explicacion": "En EE.UU. el sector privado organiza el espacio de datos, mientras que la UE busca un marco regulado que proteja ciudadanos y empresas.",
        "fuente": "teoria"
    },
    {
        "id": 107,
        "tema": 8,
        "pregunta": "En China, el mercado de datos se caracteriza por:",
        "opciones": [
            "Ausencia total de regulación",
            "Fuerte regulación gubernamental + explotación masiva por grandes corporaciones",
            "Solo empresas extranjeras",
            "Modelo idéntico al europeo"
        ],
        "correcta": 1,
        "explicacion": "En China se combina una fuerte regulación gubernamental con la explotación masiva de datos por grandes corporaciones.",
        "fuente": "teoria"
    },
    {
        "id": 108,
        "tema": 8,
        "pregunta": "Un intercambio de datos entre la Administración Pública y empresas se denomina:",
        "opciones": [
            "G2G",
            "B2B",
            "G2B",
            "B2G"
        ],
        "correcta": 2,
        "explicacion": "G2B = Government to Business (Administración Pública a empresas).",
        "fuente": "teoria"
    },
    {
        "id": 109,
        "tema": 8,
        "pregunta": "Un intercambio de datos entre empresas usando datos de titularidad privada se denomina:",
        "opciones": [
            "G2B",
            "B2B",
            "B2G",
            "G2G"
        ],
        "correcta": 1,
        "explicacion": "B2B = Business to Business (empresas a empresas).",
        "fuente": "teoria"
    },
    {
        "id": 110,
        "tema": 8,
        "pregunta": "El intercambio de datos entre administraciones públicas se denomina:",
        "opciones": [
            "G2G",
            "B2B",
            "G2B",
            "B2G"
        ],
        "correcta": 0,
        "explicacion": "G2G = Government to Government (administración pública a administración pública).",
        "fuente": "teoria"
    },
    {
        "id": 111,
        "tema": 8,
        "pregunta": "¿Cuál es un riesgo para el desarrollo del Espacio Único Digital de Datos?",
        "opciones": [
            "Exceso de interoperabilidad",
            "Fragmentación entre normativas locales de estados miembros",
            "Sobredimensionamiento de la nube",
            "Exceso de empresas usando cloud"
        ],
        "correcta": 1,
        "explicacion": "La fragmentación entre normativas locales es uno de los principales riesgos identificados.",
        "fuente": "teoria"
    },
    {
        "id": 112,
        "tema": 8,
        "pregunta": "Según el tema, ¿qué proporción de empresas en la UE usa computación en la nube?",
        "opciones": [
            "1 de cada 2",
            "1 de cada 4",
            "1 de cada 10",
            "Todas"
        ],
        "correcta": 1,
        "explicacion": "Solo 1 de cada 4 empresas en la UE usa computación en la nube, y 1 de cada 5 entre pymes.",
        "fuente": "teoria"
    },
    {
        "id": 113,
        "tema": 8,
        "pregunta": "CISPE es el acrónimo de:",
        "opciones": [
            "Código de Informática para Servicios Públicos Europeos",
            "Código de Conducta para Proveedores de Servicios de Infraestructura en la Nube en la UE",
            "Comité Internacional de Seguridad de Proveedores Europeos",
            "Centro de Innovación en Servicios de Procesamiento Europeo"
        ],
        "correcta": 1,
        "explicacion": "CISPE = Código de Conducta para Proveedores de Servicios de Infraestructura en la Nube en la UE.",
        "fuente": "examen"
    },
    {
        "id": 114,
        "tema": 8,
        "pregunta": "FIWARE es:",
        "opciones": [
            "Un satélite de observación terrestre",
            "Una plataforma de código abierto para smart cities e IoT",
            "Un algoritmo de compresión de datos",
            "Una red de comunicación militar"
        ],
        "correcta": 1,
        "explicacion": "FIWARE es una plataforma de código abierto para el desarrollo de smart cities y aplicaciones IoT.",
        "fuente": "teoria"
    },
    {
        "id": 115,
        "tema": 8,
        "pregunta": "GAIA-X es una iniciativa para:",
        "opciones": [
            "Lanzar satélites de comunicación",
            "Desarrollar un ecosistema de datos federado en Europa",
            "Crear un algoritmo de cifrado cuántico",
            "Regular redes sociales"
        ],
        "correcta": 1,
        "explicacion": "GAIA-X busca desarrollar un ecosistema de datos federado en Europa.",
        "fuente": "teoria"
    },
    {
        "id": 116,
        "tema": 8,
        "pregunta": "La cadena de valor del dato comienza con la fase de:",
        "opciones": [
            "Data Usage",
            "Data Acquisition",
            "Data Curation",
            "Data Storage"
        ],
        "correcta": 1,
        "explicacion": "La cadena comienza con la adquisición de datos (Data Acquisition).",
        "fuente": "teoria"
    },
    {
        "id": 117,
        "tema": 8,
        "pregunta": "En la cadena de valor del dato, la fase de Data Curation se encarga de:",
        "opciones": [
            "Adquirir datos de sensores",
            "Garantizar la calidad mediante validación, anotación e interoperabilidad",
            "Almacenar datos en la nube",
            "Visualizar resultados"
        ],
        "correcta": 1,
        "explicacion": "Data Curation asegura la calidad de los datos mediante validación, anotación e interoperabilidad.",
        "fuente": "teoria"
    },
    {
        "id": 118,
        "tema": 8,
        "pregunta": "¿Cuál de los siguientes NO es un espacio común europeo de datos mencionado en el tema?",
        "opciones": [
            "Industria/fabricación",
            "Pacto Verde Europeo",
            "Movilidad",
            "Turismo espacial"
        ],
        "correcta": 3,
        "explicacion": "Los espacios comunes son industria, Pacto Verde, movilidad, salud, finanzas, energía, agrario, administraciones públicas y cualificaciones.",
        "fuente": "teoria"
    },
    {
        "id": 119,
        "tema": 8,
        "pregunta": "GENIVI Alliance evolucionó a:",
        "opciones": [
            "FIWARE",
            "COVESA",
            "GAIA-X",
            "CISPE"
        ],
        "correcta": 1,
        "explicacion": "GENIVI Alliance evolucionó a COVESA (The Connected Vehicle Systems Alliance).",
        "fuente": "teoria"
    },
    {
        "id": 120,
        "tema": 8,
        "pregunta": "COVESA es un ejemplo de:",
        "opciones": [
            "Competencia pura entre fabricantes",
            "Coopetition (cooperación + competencia)",
            "Monopolio estatal",
            "Open source sin estándares"
        ],
        "correcta": 1,
        "explicacion": "COVESA es un ejemplo de coopetition: cooperación para resolver problemas comunes y competencia en el valor diferencial.",
        "fuente": "teoria"
    },
    {
        "id": 121,
        "tema": 8,
        "pregunta": "Según el Reglamento de IA de la UE 2024/1689, un sistema de diagnóstico médico se clasificaría generalmente como riesgo:",
        "opciones": [
            "Mínimo",
            "Limitado",
            "Alto",
            "Prohibido"
        ],
        "correcta": 2,
        "explicacion": "Los sistemas de diagnóstico médico, conducción autónoma e identificación biométrica son de alto riesgo.",
        "fuente": "teoria"
    },
    {
        "id": 122,
        "tema": 8,
        "pregunta": "Según el Reglamento de IA de la UE, los sistemas de vigilancia masiva sin consentimiento son de riesgo:",
        "opciones": [
            "Mínimo",
            "Limitado",
            "Alto",
            "Prohibido"
        ],
        "correcta": 3,
        "explicacion": "La vigilancia masiva sin consentimiento está en la categoría de riesgo prohibido.",
        "fuente": "teoria"
    },
    {
        "id": 123,
        "tema": 8,
        "pregunta": "Un chatbot debe cumplir obligaciones de transparencia según el Reglamento de IA de la UE, por lo que se clasifica como riesgo:",
        "opciones": [
            "Mínimo",
            "Limitado",
            "Alto",
            "Prohibido"
        ],
        "correcta": 1,
        "explicacion": "Los chatbots y generadores de contenido son sistemas de riesgo limitado y deben informar al usuario de que interactúa con una IA.",
        "fuente": "teoria"
    },
    {
        "id": 124,
        "tema": 8,
        "pregunta": "Según el tema, ¿qué perfiles serán demandados durante al menos los próximos 10 años?",
        "opciones": [
            "Solo administradores de sistemas",
            "Especialistas en ciencia de datos",
            "Solo diseñadores gráficos",
            "Solo contables"
        ],
        "correcta": 1,
        "explicacion": "Se espera que la contratación de especialistas en ciencia de datos continúe al mismo ritmo durante al menos los próximos 10 años.",
        "fuente": "teoria"
    },
    {
        "id": 125,
        "tema": 8,
        "pregunta": "¿Qué habilidad cobra creciente importancia en los perfiles de ciencia de datos según el tema?",
        "opciones": [
            "Soldadura de componentes",
            "Storytelling, visualización y comunicación",
            "Mecanografía rápida",
            "Conducción de vehículos"
        ],
        "correcta": 1,
        "explicacion": "Cada vez es más importante el storytelling, la visualización de datos y la comunicación de resultados.",
        "fuente": "teoria"
    },
    {
        "id": 126,
        "tema": 8,
        "pregunta": "La computación cuántica podría amenazar seriamente:",
        "opciones": [
            "La generación de energía renovable",
            "Las medidas de ciberseguridad habituales",
            "La creación de bases de datos relacionales",
            "La transmisión de radio"
        ],
        "correcta": 1,
        "explicacion": "La computación cuántica puede amenazar seriamente las medidas de ciberseguridad más habituales.",
        "fuente": "teoria"
    },
    {
        "id": 127,
        "tema": 8,
        "pregunta": "El aprendizaje máquina explicable (XAI) es especialmente importante cuando:",
        "opciones": [
            "Se juega a videojuegos",
            "Se toman decisiones que afectan derechos o recursos importantes de las personas",
            "Se generan memes",
            "Se ordenan archivos por tamaño"
        ],
        "correcta": 1,
        "explicacion": "XAI es crucial cuando los algoritmos afectan a decisiones judiciales, créditos, inversiones sociales, etc.",
        "fuente": "teoria"
    },
    {
        "id": 128,
        "tema": 8,
        "pregunta": "La sintetización de contenidos, como modelos de lenguaje, presenta riesgos en atención al cliente porque:",
        "opciones": [
            "Son demasiado baratos",
            "Carecen de lógica avanzada para empatizar o interpretar problemas muy complejos",
            "No pueden generar texto",
            "Solo funcionan en inglés"
        ],
        "correcta": 1,
        "explicacion": "Los sistemas de sintetización carecen de lógica avanzada para empatizar o interpretar problemas complejos.",
        "fuente": "teoria"
    },
    {
        "id": 129,
        "tema": 8,
        "pregunta": "¿Cuál de los siguientes es un elemento de diseño del Espacio Único Digital de Datos?",
        "opciones": [
            "Ceder el control a las Big Tech",
            "Colocar en primer lugar los derechos e intereses de las personas",
            "Prohibir el uso de datos públicos",
            "Eliminar la ciberseguridad"
        ],
        "correcta": 1,
        "explicacion": "Un elemento clave es colocar los derechos e intereses de las personas en primer lugar, cumpliendo el RGPD.",
        "fuente": "teoria"
    },
    {
        "id": 130,
        "tema": 8,
        "pregunta": "Según el tema, el coste de replicación de los datos en el Espacio Único Digital es:",
        "opciones": [
            "Muy alto",
            "Moderado",
            "Casi nulo",
            "Depende exclusivamente del sector"
        ],
        "correcta": 2,
        "explicacion": "Uno de los resultados esperables es que el coste de replicación de los datos sea casi nulo.",
        "fuente": "teoria"
    },
    {
        "id": 131,
        "tema": 5,
        "pregunta": "Una empresa que destina presupuesto de IA a proyectos piloto con gran visibilidad en lugar de equipos de procesos internos con alto ROI está incurriendo en:",
        "opciones": [
            "Paradoja empresarial",
            "Sesgo de inversión",
            "Ventaja de implementación",
            "Disrupción limitada"
        ],
        "correcta": 1,
        "explicacion": "El sesgo de inversión destina recursos a proyectos visibles en lugar de a equipos internos de alto retorno.",
        "fuente": "teoria"
    },
    {
        "id": 132,
        "tema": 5,
        "pregunta": "¿Qué tipo de palanca se relaciona con compartir conocimientos y resultados entre departamentos y con socios externos?",
        "opciones": [
            "Palanca de activación",
            "Palanca de dirección",
            "Palanca de amplificación",
            "Palanca de confianza"
        ],
        "correcta": 2,
        "explicacion": "Compartir conocimientos y resultados es una palanca de amplificación porque incrementa el valor a medio/largo plazo.",
        "fuente": "teoria"
    },
    {
        "id": 133,
        "tema": 5,
        "pregunta": "¿Cuál es la principal ventaja del modelo operativo centralizado?",
        "opciones": [
            "Cada unidad de negocio tiene autonomía total",
            "El equipo mantiene coherencia metodológica común",
            "No hay proyectos con aplicación directa",
            "Se evita toda atomización"
        ],
        "correcta": 1,
        "explicacion": "La ventaja principal del modelo centralizado es que el equipo unificado puede implantar una metodología común en todos los proyectos.",
        "fuente": "teoria"
    },
    {
        "id": 134,
        "tema": 6,
        "pregunta": "¿En qué fase de CRISP-DM se definen los objetivos y requisitos desde la perspectiva del negocio?",
        "opciones": [
            "Comprensión de los datos",
            "Preparación de los datos",
            "Comprensión del negocio",
            "Evaluación"
        ],
        "correcta": 2,
        "explicacion": "La comprensión del negocio es la primera fase y define objetivos y requisitos de negocio.",
        "fuente": "teoria"
    },
    {
        "id": 135,
        "tema": 6,
        "pregunta": "Un análisis que presenta gráficos y resultados sin analizar si son aplicables a otros conjuntos de datos es:",
        "opciones": [
            "Descriptivo",
            "Exploratorio",
            "Inferencial",
            "Predictivo"
        ],
        "correcta": 1,
        "explicacion": "El análisis exploratorio interpreta los datos pero no analiza la generalización a otros conjuntos.",
        "fuente": "teoria"
    },
    {
        "id": 136,
        "tema": 6,
        "pregunta": "¿Cuál de los siguientes elementos NO es necesario para la replicabilidad de un experimento?",
        "opciones": [
            "Conjuntos de datos utilizados",
            "Infraestructura equivalente",
            "Software y configuración",
            "Exactamente los mismos datos del estudio original"
        ],
        "correcta": 3,
        "explicacion": "La replicabilidad usa datos diferentes; usar los mismos datos corresponde a reproducibilidad.",
        "fuente": "teoria"
    },
    {
        "id": 137,
        "tema": 7,
        "pregunta": "¿Cuál de las siguientes NO es una fase en la evolución hacia una smart city según el tema?",
        "opciones": [
            "Ciudad digital",
            "Intelligent city",
            "Smart city",
            "Data lake city"
        ],
        "correcta": 3,
        "explicacion": "Las fases son ciudad digital, intelligent city y smart city. No existe 'data lake city'.",
        "fuente": "teoria"
    },
    {
        "id": 138,
        "tema": 7,
        "pregunta": "La red de sensores de cuerpo (body area network) se utiliza principalmente para:",
        "opciones": [
            "Monitorizar entornos industriales",
            "Sensores colocados en el cuerpo humano",
            "Controlar tráfico urbano",
            "Detectar incendios forestales"
        ],
        "correcta": 1,
        "explicacion": "Las redes de sensores de cuerpo están formadas por sensores colocados en el cuerpo humano.",
        "fuente": "teoria"
    },
    {
        "id": 139,
        "tema": 8,
        "pregunta": "¿Cuál de las siguientes afirmaciones sobre el enfoque de la UE respecto a los datos es correcta?",
        "opciones": [
            "Deja todo al sector privado sin regulación",
            "Impone una regulación fuerte que protege intereses de ciudadanos y empresas dentro de un marco de confianza",
            "Prohíbe toda explotación de datos no personales",
            "Copia exactamente el modelo estadounidense"
        ],
        "correcta": 1,
        "explicacion": "La UE aspira a un Espacio Único de Datos con regulación protectora y marco de confianza legal y de ciberseguridad.",
        "fuente": "teoria"
    },
    {
        "id": 140,
        "tema": 8,
        "pregunta": "El intercambio B2G en el contexto del Espacio Único Digital de Datos significa:",
        "opciones": [
            "Business to Government",
            "Business to Business",
            "Government to Business",
            "Government to Government"
        ],
        "correcta": 0,
        "explicacion": "B2G = Business to Government, datos de empresas a Administración Pública.",
        "fuente": "teoria"
    },
    {
        "id": 141,
        "tema": 8,
        "pregunta": "Según el Reglamento de IA de la UE, los sistemas de riesgo mínimo o nulo:",
        "opciones": [
            "Están completamente prohibidos",
            "Deben cumplir estrictos requisitos de seguridad",
            "No están regulados y pueden usarse libremente",
            "Solo pueden usarse en entornos académicos"
        ],
        "correcta": 2,
        "explicacion": "Los sistemas de riesgo mínimo o nulo, como juegos o filtros de spam, no están regulados.",
        "fuente": "teoria"
    },
    {
        "id": 142,
        "tema": 8,
        "pregunta": "La iniciativa europea GAIA-X busca principalmente:",
        "opciones": [
            "Competir con SpaceX en satélites",
            "Crear un ecosistema de datos federado en Europa",
            "Desarrollar robots industriales",
            "Regular el comercio electrónico"
        ],
        "correcta": 1,
        "explicacion": "GAIA-X es una iniciativa para desarrollar un ecosistema de datos federado en Europa.",
        "fuente": "teoria"
    },
    {
        "id": 143,
        "tema": 6,
        "pregunta": "La validación cruzada es una técnica que:",
        "opciones": [
            "Comprueba datos contra una fuente externa",
            "Divide datos en subconjuntos de entrenamiento y validación",
            "Valida resultados con el cliente",
            "Cruza datos de múltiples fuentes"
        ],
        "correcta": 1,
        "explicacion": "La validación cruzada divide los datos en subconjuntos para entrenamiento y validación, ayudando a evaluar modelos.",
        "fuente": "teoria"
    },
    {
        "id": 144,
        "tema": 6,
        "pregunta": "El early stopping consiste en:",
        "opciones": [
            "Detener el entrenamiento cuando el modelo deja de mejorar",
            "Iniciar el entrenamiento más tarde",
            "Parar el servidor de datos",
            "Finalizar el proyecto antes de tiempo"
        ],
        "correcta": 0,
        "explicacion": "Early stopping detiene el entrenamiento cuando el rendimiento en datos de validación deja de mejorar, evitando sobreajuste.",
        "fuente": "teoria"
    },
    {
        "id": 145,
        "tema": 7,
        "pregunta": "Según el tema, ¿dónde se realizaron los primeros intentos de creación de ciudades inteligentes?",
        "opciones": [
            "Australia (1996)",
            "Estados Unidos (2008)",
            "China (2015)",
            "Japón (2015)"
        ],
        "correcta": 0,
        "explicacion": "Los primeros intentos de creación de ciudades inteligentes se realizaron en Australia en 1996.",
        "fuente": "teoria"
    },
    {
        "id": 146,
        "tema": 8,
        "pregunta": "¿Cuál de las siguientes NO es una característica de los datos en el Espacio Único Digital?",
        "opciones": [
            "Coste de replicación casi nulo",
            "Uso simultáneo por múltiples actores",
            "Disponibilidad solo para grandes corporaciones",
            "Disponibles para uso y reutilización"
        ],
        "correcta": 2,
        "explicacion": "El espacio busca que los datos estén disponibles para múltiples actores, no solo para grandes corporaciones.",
        "fuente": "teoria"
    },
    {
        "id": 147,
        "tema": 5,
        "pregunta": "La 'data supply chain' se refiere a:",
        "opciones": [
            "Una cadena de producción física",
            "El flujo de valor de los datasets en las diferentes fases de negocio",
            "Un tipo de cadena de montaje robótica",
            "Un protocolo de blockchain"
        ],
        "correcta": 1,
        "explicacion": "La data supply chain reconoce y promueve el valor de los datasets en las diferentes fases de negocio.",
        "fuente": "teoria"
    },
    {
        "id": 148,
        "tema": 8,
        "pregunta": "El Reglamento UE 2024/1689 regula:",
        "opciones": [
            "El comercio de productos agrícolas",
            "Los sistemas de inteligencia artificial",
            "El transporte marítimo",
            "La propiedad intelectual de libros"
        ],
        "correcta": 1,
        "explicacion": "El Reglamento UE 2024/1689 es el Reglamento de Inteligencia Artificial de la UE.",
        "fuente": "teoria"
    },
    {
        "id": 149,
        "tema": 6,
        "pregunta": "La fase de CRISP-DM en la que se planifica el despliegue, monitorización y mantenimiento es:",
        "opciones": [
            "Evaluación",
            "Modelado",
            "Despliegue",
            "Preparación"
        ],
        "correcta": 2,
        "explicacion": "La fase de despliegue incluye planificar el despliegue, monitorización y mantenimiento del modelo.",
        "fuente": "teoria"
    },
    {
        "id": 150,
        "tema": 8,
        "pregunta": "Según el tema, un sistema de IA utilizado para identificación biométrica se clasifica generalmente como:",
        "opciones": [
            "Riesgo mínimo",
            "Riesgo limitado",
            "Riesgo alto",
            "Riesgo prohibido"
        ],
        "correcta": 2,
        "explicacion": "La identificación biométrica es un ejemplo de sistema de alto riesgo según el Reglamento de IA de la UE.",
        "fuente": "teoria"
    },
    {
        "id": 151,
        "tema": 8,
        "pregunta": "¿Cuál es el objetivo principal del Espacio Único Digital de Datos de la UE?",
        "opciones": [
            "Crear un mercado único de datos seguros con fácil acceso a datos de alta calidad",
            "Eliminar toda regulación de protección de datos",
            "Centralizar todos los datos en un único servidor europeo",
            "Prohibir el intercambio de datos entre empresas"
        ],
        "correcta": 0,
        "explicacion": "El objetivo es crear un mercado único de datos en el que conjuntos de datos personales y no personales sean seguros y los negocios tengan fácil acceso a una cantidad casi infinita de datos de alta calidad.",
        "fuente": "teoria"
    },
    {
        "id": 152,
        "tema": 8,
        "pregunta": "¿En qué año se publicó el Libro Blanco sobre Inteligencia Artificial de la Comisión Europea?",
        "opciones": [
            "2018",
            "2019",
            "2020",
            "2021"
        ],
        "correcta": 2,
        "explicacion": "El Libro Blanco sobre IA se publicó en 2020, en consonancia con la Comunicación sobre Estrategia Europea de Datos.",
        "fuente": "teoria"
    },
    {
        "id": 153,
        "tema": 8,
        "pregunta": "¿En qué sector se aplicaron las primeras acciones regulatorias de la UE relacionadas con datos (2007-2009)?",
        "opciones": [
            "Sector financiero",
            "Sector de automoción",
            "Sector sanitario",
            "Sector energético"
        ],
        "correcta": 1,
        "explicacion": "Las primeras acciones regulatorias encaminadas hacia el Espacio Único de Datos (2007-2009) se aplicaron en el sector de automoción.",
        "fuente": "teoria"
    },
    {
        "id": 154,
        "tema": 8,
        "pregunta": "¿En qué año entró en vigor el RGPD en todos los Estados Miembros de la UE?",
        "opciones": [
            "2016",
            "2017",
            "2018",
            "2019"
        ],
        "correcta": 2,
        "explicacion": "El RGPD fue aprobado en 2016 y entró en vigor en todos los Estados Miembros en 2018.",
        "fuente": "teoria"
    },
    {
        "id": 155,
        "tema": 8,
        "pregunta": "Según los elementos de diseño del Espacio Único de Datos, ¿qué debe colocarse en primer lugar?",
        "opciones": [
            "Los beneficios económicos de las grandes tecnológicas",
            "Los derechos e intereses de las personas",
            "La recolección masiva de todos los datos posibles",
            "La eliminación de fronteras digitales"
        ],
        "correcta": 1,
        "explicacion": "Los elementos de diseño establecen que deben colocarse en primer lugar los derechos e intereses de las personas (RGPD).",
        "fuente": "teoria"
    },
    {
        "id": 156,
        "tema": 8,
        "pregunta": "Actualmente, ¿qué porcentaje del procesamiento de datos se realiza en ubicaciones centralizadas?",
        "opciones": [
            "20%",
            "50%",
            "80%",
            "95%"
        ],
        "correcta": 2,
        "explicacion": "Actualmente el 80% del procesamiento de datos se realiza en ubicaciones centralizadas y el 20% en periferia/objetos inteligentes.",
        "fuente": "teoria"
    },
    {
        "id": 157,
        "tema": 8,
        "pregunta": "Según la previsión para 2025, ¿qué porcentaje de datos se procesará en la periferia y objetos inteligentes?",
        "opciones": [
            "20%",
            "50%",
            "80%",
            "100%"
        ],
        "correcta": 2,
        "explicacion": "La previsión para 2025 es que el 80% de los datos se procese en la periferia y objetos inteligentes, y solo el 20% en ubicaciones centralizadas.",
        "fuente": "teoria"
    },
    {
        "id": 158,
        "tema": 8,
        "pregunta": "En el mercado internacional de datos, ¿qué país cede la organización del espacio de datos al sector privado?",
        "opciones": [
            "China",
            "Estados Unidos",
            "Unión Europea",
            "Japón"
        ],
        "correcta": 1,
        "explicacion": "En EE.UU. se cede la organización del espacio de datos al sector privado, generando desequilibrios y concentración en Big Tech.",
        "fuente": "teoria"
    },
    {
        "id": 159,
        "tema": 8,
        "pregunta": "¿Qué país combina fuerte regulación gubernamental con explotación masiva de datos por grandes corporaciones?",
        "opciones": [
            "Estados Unidos",
            "Unión Europea",
            "China",
            "Reino Unido"
        ],
        "correcta": 2,
        "explicacion": "China combina fuerte regulación gubernamental con explotación masiva de datos por parte de grandes corporaciones.",
        "fuente": "teoria"
    },
    {
        "id": 160,
        "tema": 8,
        "pregunta": "¿Qué significa B2G en el contexto del intercambio de datos?",
        "opciones": [
            "De empresas a gobierno",
            "De gobierno a empresas",
            "De empresas a empresas",
            "De gobierno a gobierno"
        ],
        "correcta": 0,
        "explicacion": "B2G significa Business to Government: intercambio de datos de empresas a la Administración Pública.",
        "fuente": "teoria"
    },
    {
        "id": 161,
        "tema": 8,
        "pregunta": "¿Cuándo se aprobó el Reglamento sobre Gobernanza de Datos de la UE?",
        "opciones": [
            "Enero 2020",
            "Noviembre 2020",
            "Marzo 2021",
            "Enero 2022"
        ],
        "correcta": 1,
        "explicacion": "El Reglamento sobre Gobernanza de Datos se aprobó en noviembre de 2020.",
        "fuente": "teoria"
    },
    {
        "id": 162,
        "tema": 8,
        "pregunta": "¿Cuál es la inversión total prevista para infraestructuras de datos en la UE en la primera fase (2022)?",
        "opciones": [
            "200 millones de euros",
            "500 millones de euros",
            "2.000 millones de euros",
            "10.000 millones de euros"
        ],
        "correcta": 2,
        "explicacion": "La inversión total prevista en la primera fase (2022) es de aproximadamente 2.000 millones de euros.",
        "fuente": "teoria"
    },
    {
        "id": 163,
        "tema": 8,
        "pregunta": "En la cadena de valor del dato, ¿qué fase incluye la validación, anotación e interoperabilidad?",
        "opciones": [
            "Data Analysis",
            "Data Curation",
            "Data Storage",
            "Data Usage"
        ],
        "correcta": 1,
        "explicacion": "Data Curation incluye validación, anotación, interoperabilidad y garantía de calidad.",
        "fuente": "teoria"
    },
    {
        "id": 164,
        "tema": 8,
        "pregunta": "¿A qué ha evolucionado la GENIVI Alliance?",
        "opciones": [
            "A FIWARE",
            "A GAIA-X",
            "A COVESA",
            "A CISPE"
        ],
        "correcta": 2,
        "explicacion": "La GENIVI Alliance ha evolucionado a COVESA (The Connected Vehicle Systems Alliance).",
        "fuente": "teoria"
    },
    {
        "id": 165,
        "tema": 8,
        "pregunta": "¿Qué concepto describe la cooperación entre competidores para resolver problemas comunes, como en GENIVI/COVESA?",
        "opciones": [
            "Monopolio",
            "Coopetition",
            "Outsourcing",
            "Crowdsourcing"
        ],
        "correcta": 1,
        "explicacion": "Coopetition es la combinación de cooperación y competencia: resolución colaborativa de problemas comunes para luego aportar valor diferencial.",
        "fuente": "teoria"
    },
    {
        "id": 166,
        "tema": 8,
        "pregunta": "¿Qué organización automovilística alemana detectó la recopilación masiva y poco transparente de datos en coches modernos?",
        "opciones": [
            "TÜV",
            "ADAC",
            "DEKRA",
            "GTÜ"
        ],
        "correcta": 1,
        "explicacion": "La ADAC detectó que los coches modernos recopilan grandes cantidades de datos personales de forma poco transparente.",
        "fuente": "teoria"
    },
    {
        "id": 167,
        "tema": 8,
        "pregunta": "Según el Reglamento de IA UE, ¿qué sistemas tienen obligaciones de transparencia por ser de riesgo limitado?",
        "opciones": [
            "Juegos y filtros de spam",
            "Chatbots y generadores de contenido",
            "Diagnósticos médicos y conducción autónoma",
            "Vigilancia masiva sin consentimiento"
        ],
        "correcta": 1,
        "explicacion": "Los sistemas de riesgo limitado, como chatbots o generadores de contenido, deben cumplir obligaciones de transparencia e informar a los usuarios que interactúan con IA.",
        "fuente": "teoria"
    },
    {
        "id": 168,
        "tema": 8,
        "pregunta": "Según el Reglamento de IA UE, ¿qué tipo de sistemas están completamente prohibidos?",
        "opciones": [
            "Filtros de spam",
            "Chatbots",
            "Vigilancia masiva sin consentimiento",
            "Sistemas de recomendación"
        ],
        "correcta": 2,
        "explicacion": "Los sistemas de riesgo prohibido, como la vigilancia masiva sin consentimiento, están completamente prohibidos.",
        "fuente": "teoria"
    },
    {
        "id": 169,
        "tema": 8,
        "pregunta": "¿Qué significa XAI?",
        "opciones": [
            "eXtensible Artificial Intelligence",
            "Aprendizaje máquina explicable",
            "eXperimental AI",
            "AI externa"
        ],
        "correcta": 1,
        "explicacion": "XAI significa eXplainable Artificial Intelligence o aprendizaje máquina explicable: conocer por qué los algoritmos toman determinadas decisiones.",
        "fuente": "teoria"
    },
    {
        "id": 170,
        "tema": 8,
        "pregunta": "¿Qué metáfora se utiliza en el tema para describir a la Ciencia de Datos como un campo en constante cambio?",
        "opciones": [
            "Tortuga",
            "Blanco móvil",
            "Reloj de arena",
            "Montaña rusa"
        ],
        "correcta": 1,
        "explicacion": "La Ciencia de Datos se describe como un 'blanco móvil' porque está en constante cambio y evolución.",
        "fuente": "teoria"
    },
    {
        "id": 171,
        "tema": 8,
        "pregunta": "¿Qué tipo de perfiles laborales se advierte que deberían cubrirse con más de una persona?",
        "opciones": [
            "Perfiles junior",
            "Perfiles tipo 'unicornio'",
            "Perfiles de recursos humanos",
            "Perfiles administrativos"
        ],
        "correcta": 1,
        "explicacion": "Se advierte que las ofertas de perfiles tipo 'unicornio', que exigen aglutinar muchos conocimientos diversos, deberían ser cubiertas por más de una persona.",
        "fuente": "teoria"
    },
    {
        "id": 172,
        "tema": 8,
        "pregunta": "¿Qué habilidad adquiere importancia creciente para transmitir el valor de los proyectos de datos?",
        "opciones": [
            "Storytelling y comunicación",
            "Programación en ensamblador",
            "Diseño de hardware",
            "Contabilidad avanzada"
        ],
        "correcta": 0,
        "explicacion": "Adquiere importancia creciente el storytelling y la faceta de visualización de datos y comunicación para transmitir el valor y los resultados de un proyecto.",
        "fuente": "teoria"
    },
    {
        "id": 173,
        "tema": 8,
        "pregunta": "¿Qué tendencia futura puede amenazar seriamente las medidas de ciberseguridad más habituales?",
        "opciones": [
            "Impresión 3D",
            "Computación cuántica",
            "Realidad virtual",
            "Blockchain"
        ],
        "correcta": 1,
        "explicacion": "La computación cuántica puede revolucionar el procesamiento de datos, pero también amenazar seriamente las medidas de ciberseguridad habituales.",
        "fuente": "teoria"
    },
    {
        "id": 174,
        "tema": 8,
        "pregunta": "¿Qué ejemplo de sintetización de contenidos se menciona en el tema?",
        "opciones": [
            "Alexa",
            "Siri",
            "Chatbot GPT-3",
            "Cortana"
        ],
        "correcta": 2,
        "explicacion": "El tema menciona como ejemplo de sintetización de contenidos al Chatbot GPT-3 y sistemas capaces de sintetizar voz humana con naturalidad.",
        "fuente": "teoria"
    },
    {
        "id": 175,
        "tema": 8,
        "pregunta": "¿Qué reto se denomina 'cuadratura del círculo' en el mercado europeo de datos?",
        "opciones": [
            "Conseguir que todos los países adopten el euro digital",
            "Regular y proteger sin frenar la libertad de mercado y la innovación",
            "Eliminar todas las barreras lingüísticas en la UE",
            "Centralizar todos los datos en Bruselas"
        ],
        "correcta": 1,
        "explicacion": "La 'cuadratura del círculo' es el reto de la UE de diseñar una regulación que proteja a ciudadanos y empresas sin frenar la libertad de mercado y la innovación.",
        "fuente": "teoria"
    },
    {
        "id": 176,
        "tema": 7,
        "pregunta": "¿Qué tecnología impulsó la Primera Revolución Industrial?",
        "opciones": [
            "Electricidad y telecomunicaciones",
            "Mecanización y máquina de vapor",
            "Tecnologías digitales",
            "Robótica e inteligencia artificial"
        ],
        "correcta": 1,
        "explicacion": "La Primera Revolución Industrial (siglo XVIII) se caracterizó por la mecanización y la máquina de vapor.",
        "fuente": "teoria"
    },
    {
        "id": 177,
        "tema": 7,
        "pregunta": "¿Cuál de estas tecnologías se emplea para localización e identificación en Industria 4.0?",
        "opciones": [
            "HTML",
            "GIS y RFID",
            "SQL",
            "Blockchain"
        ],
        "correcta": 1,
        "explicacion": "GIS (Sistema de Información Geográfica) y RFID (identificación por radiofrecuencia) son tecnologías de localización e identificación.",
        "fuente": "teoria"
    },
    {
        "id": 178,
        "tema": 7,
        "pregunta": "Los dispositivos vestibles o wearables son:",
        "opciones": [
            "Solo sensores industriales fijos",
            "Dispositivos que se llevan puestos y recogen datos del usuario o entorno",
            "Servidores de centro de datos",
            "Herramientas de software de escritorio"
        ],
        "correcta": 1,
        "explicacion": "Los wearables son dispositivos que se llevan puestos (relojes, pulseras, gafas) y recogen datos del usuario o entorno.",
        "fuente": "teoria"
    },
    {
        "id": 179,
        "tema": 7,
        "pregunta": "NFV significa:",
        "opciones": [
            "Network Functions Virtualization",
            "New Fast Vehicle",
            "National File Version",
            "Node Frequency Vector"
        ],
        "correcta": 0,
        "explicacion": "NFV = Network Functions Virtualization, computación elástica y bajo demanda mediante dispositivos virtuales.",
        "fuente": "teoria"
    },
    {
        "id": 180,
        "tema": 7,
        "pregunta": "¿Cuánto invertirá IBM en fabricación de microchips en EE.UU. según el tema?",
        "opciones": [
            "2.000 millones de dólares",
            "20.000 millones de dólares",
            "200.000 millones de dólares",
            "200 millones de dólares"
        ],
        "correcta": 1,
        "explicacion": "IBM anunció una inversión de 20.000 millones de dólares en fabricación de microchips esenciales.",
        "fuente": "teoria"
    },
    {
        "id": 181,
        "tema": 7,
        "pregunta": "Europa pretende alcanzar el siguiente objetivo en producción de chips para 2030:",
        "opciones": [
            "El 5% del mercado mundial",
            "El 20% del mercado mundial",
            "El 50% del mercado mundial",
            "El 80% del mercado mundial"
        ],
        "correcta": 1,
        "explicacion": "Europa invertirá para conseguir el 20% del mercado de producción de chips para 2030.",
        "fuente": "teoria"
    },
    {
        "id": 182,
        "tema": 7,
        "pregunta": "¿Cuál es el principal componente que recoge información del entorno en una WSN?",
        "opciones": [
            "El sumidero",
            "El sensor",
            "El usuario",
            "El router"
        ],
        "correcta": 1,
        "explicacion": "El sensor es el componente de una WSN que recoge información sobre el entorno en tiempo real.",
        "fuente": "teoria"
    },
    {
        "id": 183,
        "tema": 7,
        "pregunta": "Una red de sensores desplegada bajo el agua se denomina:",
        "opciones": [
            "Red de sensores de cuerpo",
            "Red de sensores subacuática",
            "Red de sensores multimedia",
            "Red sensor-actor"
        ],
        "correcta": 1,
        "explicacion": "Las redes de sensores subacuáticas están desplegadas bajo el agua.",
        "fuente": "teoria"
    },
    {
        "id": 184,
        "tema": 7,
        "pregunta": "Las redes de sensores que no solo detectan el entorno sino que también actúan sobre él son:",
        "opciones": [
            "Redes de sensores multimedia",
            "Redes sensor-actor",
            "Redes de sensores de cuerpo",
            "Redes de sensores bajo tierra"
        ],
        "correcta": 1,
        "explicacion": "Las redes sensor-actor combinan sensado y actuación sobre el entorno.",
        "fuente": "teoria"
    },
    {
        "id": 185,
        "tema": 7,
        "pregunta": "En una topología peer-to-peer de sensores:",
        "opciones": [
            "Todos los sensores se comunican con un nodo central",
            "Los sensores se comunican entre sí, sin depender de un único central",
            "No hay comunicación entre sensores",
            "Cada sensor actúa como servidor independiente"
        ],
        "correcta": 1,
        "explicacion": "En peer-to-peer los sensores se comunican entre sí, lo que la hace más eficiente y resiliente.",
        "fuente": "teoria"
    },
    {
        "id": 186,
        "tema": 7,
        "pregunta": "¿Qué protocolo es especialmente adecuado para redes de sensores personales y domótica por su bajo consumo?",
        "opciones": [
            "HTTP",
            "Zigbee",
            "FTP",
            "SMTP"
        ],
        "correcta": 1,
        "explicacion": "Zigbee es un protocolo de comunicación de bajo consumo y bajo coste para redes de sensores personales y domótica.",
        "fuente": "teoria"
    },
    {
        "id": 187,
        "tema": 7,
        "pregunta": "¿Qué plataforma de hardware libre con microcontroladores se usa frecuentemente para leer sensores y controlar actuadores?",
        "opciones": [
            "Raspberry Pi",
            "Arduino",
            "Zigbee",
            "FIWARE"
        ],
        "correcta": 1,
        "explicacion": "Arduino es una plataforma de hardware libre con microcontroladores para leer sensores y controlar actuadores.",
        "fuente": "teoria"
    },
    {
        "id": 188,
        "tema": 7,
        "pregunta": "¿Cuál de estas es una aplicación típica de las redes de sensores mencionada en el tema?",
        "opciones": [
            "Edición de vídeo profesional",
            "Detección de incendios forestales",
            "Diseño de páginas web",
            "Contabilidad empresarial"
        ],
        "correcta": 1,
        "explicacion": "El tema menciona el uso de redes de sensores para la detección de incendios forestales monitorizando condiciones ambientales.",
        "fuente": "teoria"
    },
    {
        "id": 189,
        "tema": 7,
        "pregunta": "La computación ubícua se refiere a:",
        "opciones": [
            "Un tipo de nube pública",
            "La presencia integrada de la computación en el entorno cotidiano",
            "Un protocolo de comunicación",
            "Un modelo de negocio de software"
        ],
        "correcta": 1,
        "explicacion": "La computación ubícua es el paradigma en el que la computación está presente de forma integrada en el entorno cotidiano; es base del IoT.",
        "fuente": "teoria"
    },
    {
        "id": 190,
        "tema": 7,
        "pregunta": "Según Giffinger y Gudrum (2010), ¿cuál de las siguientes SÍ es una característica de smart city?",
        "opciones": [
            "Competición militar",
            "Economía",
            "Turismo masivo",
            "Minería de datos ilícita"
        ],
        "correcta": 1,
        "explicacion": "Las 6 características son economía, gobernanza, medio ambiente, personas, movilidad y estilo de vida.",
        "fuente": "teoria"
    },
    {
        "id": 191,
        "tema": 7,
        "pregunta": "El proyecto Smart Planet de IBM se lanzó en:",
        "opciones": [
            "1996",
            "2008",
            "2010",
            "2015"
        ],
        "correcta": 1,
        "explicacion": "Smart Planet fue lanzado por IBM en 2008 y es considerado precursor de las smart cities.",
        "fuente": "teoria"
    },
    {
        "id": 192,
        "tema": 7,
        "pregunta": "¿Qué país lanzó en 2015 la Estrategia i-Japan para una sociedad digital dirigida por los ciudadanos?",
        "opciones": [
            "China",
            "Corea del Sur",
            "Japón",
            "Singapur"
        ],
        "correcta": 2,
        "explicacion": "Japón lanzó en 2015 la Estrategia i-Japan para crear una sociedad digital dirigida por los ciudadanos.",
        "fuente": "teoria"
    },
    {
        "id": 193,
        "tema": 7,
        "pregunta": "¿Cuántos pilotos de ciudades inteligentes lanzó China en 2015?",
        "opciones": [
            "20",
            "50",
            "100",
            "200"
        ],
        "correcta": 3,
        "explicacion": "China lanzó 200 pilotos de ciudades inteligentes en 2015, principalmente para mejorar la sostenibilidad urbana.",
        "fuente": "teoria"
    },
    {
        "id": 194,
        "tema": 7,
        "pregunta": "En la fase 'ciudad digital' de una smart city se prioriza:",
        "opciones": [
            "La experiencia de usuario personalizada",
            "La adquisición de datos mediante tecnología y redes de comunicación",
            "La eliminación total de administración pública",
            "La sustitución de los ciudadanos por algoritmos"
        ],
        "correcta": 1,
        "explicacion": "La ciudad digital incorpora tecnología para adquirir datos sobre población, recursos, entorno y aspectos económicos/sociales.",
        "fuente": "teoria"
    },
    {
        "id": 195,
        "tema": 7,
        "pregunta": "¿Qué distingue a la 'intelligent city' de la 'ciudad digital'?",
        "opciones": [
            "No utiliza tecnología",
            "Usa las TIC como catalizadores de innovación colaborativa",
            "Se centra únicamente en la recogida de datos",
            "Es posterior a la smart city"
        ],
        "correcta": 1,
        "explicacion": "La intelligent city utiliza las TIC como catalizadores de innovación, estableciendo espacios colaborativos y herramientas interactivas.",
        "fuente": "teoria"
    },
    {
        "id": 196,
        "tema": 7,
        "pregunta": "La smart city, en su fase más avanzada, se centra especialmente en:",
        "opciones": [
            "La recolección masiva de datos sin procesar",
            "La experiencia de usuario, la auto-adaptación y los servicios personalizados",
            "La centralización de todo el control en un único nodo",
            "La eliminación de la participación ciudadana"
        ],
        "correcta": 1,
        "explicacion": "La smart city pone el foco en la experiencia práctica y personalizada del usuario, auto-adaptándose a sus necesidades.",
        "fuente": "teoria"
    },
    {
        "id": 197,
        "tema": 7,
        "pregunta": "¿Cuál de las siguientes es una dimensión urbana que deben abordar las smart cities?",
        "opciones": [
            "Gobernanza",
            "Competición deportiva",
            "Exclusión tecnológica",
            "Censura de datos"
        ],
        "correcta": 0,
        "explicacion": "Las smart cities abordan dimensiones como gobernanza, movilidad, energía, medio ambiente, economía, personas, estilo de vida, seguridad y residuos.",
        "fuente": "teoria"
    },
    {
        "id": 198,
        "tema": 7,
        "pregunta": "Medialab Matadero es un ejemplo de:",
        "opciones": [
            "Un centro de datos municipal",
            "Una plataforma de creación e investigación impulsada por el Procomún en Madrid",
            "Una red de sensores subacuática",
            "Una norma UNE de Industria 4.0"
        ],
        "correcta": 1,
        "explicacion": "Medialab Matadero (Madrid) es una plataforma de creación, investigación y producción experimental impulsada por el Procomún.",
        "fuente": "teoria"
    },
    {
        "id": 199,
        "tema": 7,
        "pregunta": "La ciencia ciudadana requiere fundamentalmente:",
        "opciones": [
            "La participación exclusiva de científicos profesionales",
            "Datos abiertos",
            "La prohibición de tecnologías TIC",
            "La centralización de la investigación en gobiernos"
        ],
        "correcta": 1,
        "explicacion": "Los datos abiertos son un elemento esencial para posibilitar el desarrollo de proyectos de ciencia ciudadana.",
        "fuente": "teoria"
    },
    {
        "id": 200,
        "tema": 7,
        "pregunta": "¿En qué año acuñó la revista MIT Technology Review el término 'ciencia ciudadana'?",
        "opciones": [
            "1979",
            "1989",
            "1999",
            "2009"
        ],
        "correcta": 1,
        "explicacion": "El término 'ciencia ciudadana' fue acuñado en 1989 por la revista MIT Technology Review.",
        "fuente": "teoria"
    },
    {
        "id": 201,
        "tema": 7,
        "pregunta": "¿Cuál es uno de los principales riesgos de privacidad en una smart city?",
        "opciones": [
            "Escasez de datos",
            "Vigilancia masiva mediante redes de sensores",
            "Falta de conectividad",
            "Reducción del gasto público"
        ],
        "correcta": 1,
        "explicacion": "La vigilancia masiva mediante redes de sensores distribuidos por la ciudad es un riesgo clave para la privacidad.",
        "fuente": "teoria"
    },
    {
        "id": 202,
        "tema": 7,
        "pregunta": "El proyecto EDINT cuenta con un presupuesto cercano a:",
        "opciones": [
            "1 millón de euros",
            "13 millones de euros",
            "130 millones de euros",
            "1.300 millones de euros"
        ],
        "correcta": 1,
        "explicacion": "EDINT tiene un presupuesto cercano a 13 millones de euros.",
        "fuente": "teoria"
    },
    {
        "id": 203,
        "tema": 7,
        "pregunta": "¿Cuántas entidades locales españolas participan en el proyecto EDINT?",
        "opciones": [
            "5",
            "8",
            "12",
            "20"
        ],
        "correcta": 2,
        "explicacion": "EDINT implica a 12 entidades locales españolas y más de 36 empresas y centros de investigación.",
        "fuente": "teoria"
    },
    {
        "id": 204,
        "tema": 7,
        "pregunta": "¿Qué organismo colabora con EDINT en el ámbito turístico?",
        "opciones": [
            "FIWARE",
            "SEGITTUR",
            "GAIA-X",
            "CISPE"
        ],
        "correcta": 1,
        "explicacion": "EDINT colabora con SEGITTUR (Sociedad Estatal para la Gestión de la Innovación y las Tecnologías Turísticas).",
        "fuente": "teoria"
    },
    {
        "id": 205,
        "tema": 7,
        "pregunta": "Según el tema, ¿qué referencia clave aborda smart cities e inteligencia artificial?",
        "opciones": [
            "'The Fourth Industrial Revolution' de Klaus Schwab",
            "'Smart Cities and Artificial Intelligence' de Kirwan y Fu",
            "'Data Science for Business'",
            "'The Second Machine Age'"
        ],
        "correcta": 1,
        "explicacion": "La referencia clave es Kirwan y Fu, 'Smart Cities and Artificial Intelligence', Elsevier, 2020.",
        "fuente": "teoria"
    },
    {
        "id": 206,
        "tema": 7,
        "pregunta": "¿Cuál de las siguientes afirmaciones sobre el knowledge gap es FALSA?",
        "opciones": [
            "Es el vacío de conocimiento por la marcha de personal clave experimentado",
            "Es lo mismo que la carencia de perfiles para científicos de datos",
            "Afecta especialmente a equipos de ciencia de datos",
            "Se produce cuando se pierde conocimiento experto del negocio"
        ],
        "correcta": 1,
        "explicacion": "El knowledge gap no es lo mismo que la falta de perfiles para científicos de datos (talent/skills gap); es la pérdida de conocimiento experto del negocio.",
        "fuente": "teoria"
    },
    {
        "id": 207,
        "tema": 7,
        "pregunta": "Un espacio de datos permite principalmente:",
        "opciones": [
            "Almacenar datos de forma aislada y no compartible",
            "Almacenar, compartir y reutilizar datos de forma segura e interoperable",
            "Eliminar la necesidad de gobernanza de datos",
            "Centralizar todos los datos en una única empresa privada"
        ],
        "correcta": 1,
        "explicacion": "Un espacio de datos es una infraestructura para almacenar, compartir y reutilizar datos de forma segura e interoperable.",
        "fuente": "teoria"
    },
    {
        "id": 208,
        "tema": 7,
        "pregunta": "Según el tema, ¿qué significa que una smart city sea 'instrumentalizada'?",
        "opciones": [
            "Que solo usa instrumentos musicales",
            "Que dispone de medios tecnológicos para captar datos y procesos de la ciudad",
            "Que carece de planificación urbana",
            "Que se financia únicamente con instrumentos financieros"
        ],
        "correcta": 1,
        "explicacion": "'Instrumentalizada' significa que la ciudad dispone de medios tecnológicos para captar datos sobre sus procesos y habitantes.",
        "fuente": "teoria"
    },
    {
        "id": 209,
        "tema": 7,
        "pregunta": "¿Cuál de las siguientes opciones forma parte de las características 'Any' del IoT?",
        "opciones": [
            "Any code / any programmer",
            "Any service / any business",
            "Any language / any framework",
            "Any license / any patent"
        ],
        "correcta": 1,
        "explicacion": "Las características del IoT son anywhere/anyplace, anytime/anycontext, anyone/anybody, any service/any business y any path/any network.",
        "fuente": "teoria"
    },
    {
        "id": 210,
        "tema": 7,
        "pregunta": "Raspberry Pi se describe en el tema como:",
        "opciones": [
            "Un protocolo de red para WSN",
            "Un mini-computador de bajo coste usado en IoT y educación",
            "Una norma de Industria 4.0",
            "Una herramienta de autodiagnóstico digital"
        ],
        "correcta": 1,
        "explicacion": "Raspberry Pi es un mini-computador de bajo coste ampliamente usado en proyectos de IoT, educación y prototipado.",
        "fuente": "teoria"
    },
,{
    "id": 211,
    "tema": 5,
    "pregunta": "¿Qué porcentaje de organizaciones obtiene cero retorno de sus inversiones en GenIA según el MIT NANDA 2025?",
    "opciones": [
        "70%",
        "85%",
        "95%",
        "99%"
    ],
    "correcta": 2,
    "explicacion": "El informe 'The GenAI Divide' del MIT NANDA concluye que el 95% de las organizaciones obtiene cero retorno de la GenIA.",
    "fuente": "teoria"
},
{
    "id": 212,
    "tema": 5,
    "pregunta": "¿Qué porcentaje de proyectos piloto de GenIA consigue buen rendimiento económico según el MIT?",
    "opciones": [
        "1%",
        "5%",
        "15%",
        "25%"
    ],
    "correcta": 1,
    "explicacion": "Solo el 5% de los proyectos piloto de GenIA consigue buen rendimiento económico.",
    "fuente": "teoria"
},
{
    "id": 213,
    "tema": 5,
    "pregunta": "La inversión corporativa estimada en GenIA según el MIT 2025 oscila entre:",
    "opciones": [
        "3-4 mil millones de dólares",
        "30-40 mil millones de dólares",
        "300-400 mil millones de dólares",
        "3-4 billones de dólares"
    ],
    "correcta": 1,
    "explicacion": "La inversión corporativa en GenIA se sitúa entre 30.000 y 40.000 millones de dólares.",
    "fuente": "teoria"
},
{
    "id": 214,
    "tema": 5,
    "pregunta": "La 'Brecha GenIA' se refiere a:",
    "opciones": [
        "La diferencia de velocidad entre modelos de IA",
        "La diferencia entre compradores y creadores de soluciones GenIA",
        "El tamaño de los modelos de lenguaje",
        "La brecha salarial entre científicos de datos"
    ],
    "correcta": 1,
    "explicacion": "La Brecha GenIA es la diferencia entre compradores (empresas, PYMEs) y creadores (startups, consultoras) de soluciones GenIA.",
    "fuente": "teoria"
},
{
    "id": 215,
    "tema": 5,
    "pregunta": "Según la Brecha GenIA, ¿qué sectores han conseguido mejoras de eficiencia significativas con GenIA?",
    "opciones": [
        "Minería y agricultura",
        "Contenidos digitales/telecomunicaciones y servicios profesionales",
        "Hostelería y turismo",
        "Construcción y logística"
    ],
    "correcta": 1,
    "explicacion": "El patrón de disrupción limitada indica que solo contenidos digitales/telecomunicaciones y servicios profesionales han logrado mejoras significativas.",
    "fuente": "teoria"
},
{
    "id": 216,
    "tema": 5,
    "pregunta": "La 'paradoja empresarial' en la Brecha GenIA indica que:",
    "opciones": [
        "Las startups tienen más recursos que las grandes empresas",
        "Las grandes firmas lideran en proyectos piloto pero quedan rezagadas en escalabilidad",
        "Las PYMEs no invierten en GenIA",
        "Los proyectos internos siempre tienen éxito"
    ],
    "correcta": 1,
    "explicacion": "La paradoja empresarial señala que las grandes firmas lideran en proyectos piloto pero no logran escalarlos.",
    "fuente": "teoria"
},
{
    "id": 217,
    "tema": 5,
    "pregunta": "Según la Brecha GenIA, ¿qué proyectos GenIA tienen el doble de tasa de éxito?",
    "opciones": [
        "Los totalmente internos",
        "Los que usan alianzas con socios externos",
        "Los que no usan datos empresariales",
        "Los que eliminan supervisión humana"
    ],
    "correcta": 1,
    "explicacion": "El patrón de ventaja de implementación indica que los proyectos con alianzas externas tienen el doble de tasa de éxito que los internos.",
    "fuente": "teoria"
},
{
    "id": 218,
    "tema": 5,
    "pregunta": "El 'impuesto de verificación' en GenIA es:",
    "opciones": [
        "Un impuesto gubernamental",
        "El coste de verificar forensemente las respuestas de la GenIA",
        "Una tarifa de suscripción a modelos",
        "Una métrica de rendimiento"
    ],
    "correcta": 1,
    "explicacion": "El impuesto de verificación es el coste adicional de comprobar a posteriori la corrección de las respuestas generadas por IA.",
    "fuente": "teoria"
},
{
    "id": 219,
    "tema": 5,
    "pregunta": "¿Quién acuñó el concepto de 'impuesto de verificación'?",
    "opciones": [
        "Sam Altman",
        "Jensen Huang",
        "Tanmai Gopal",
        "Geoffrey Hinton"
    ],
    "correcta": 2,
    "explicacion": "Tanmai Gopal, CEO de PromptQL, acuñó el concepto de impuesto de verificación.",
    "fuente": "teoria"
},
{
    "id": 220,
    "tema": 5,
    "pregunta": "Las 'alucinaciones' en modelos de IA generativa son:",
    "opciones": [
        "Respuestas incorrectas o inventadas",
        "Problemas de hardware",
        "Datos de entrenamiento perfectos",
        "Métricas de rendimiento"
    ],
    "correcta": 0,
    "explicacion": "Las alucinaciones son respuestas incorrectas o inventadas generadas por modelos GenIA, lo que exige supervisión humana en aplicaciones críticas.",
    "fuente": "teoria"
},
{
    "id": 221,
    "tema": 5,
    "pregunta": "¿Qué admitió Sam Altman sobre GPT-5 en septiembre de 2025?",
    "opciones": [
        "Que GPT-5 ya supera a humanos en todo",
        "Problemas en el despliegue de GPT-5 en clientes",
        "Que dejarían de desarrollar GPT-5",
        "Que GPT-5 no usaría datos de clientes"
    ],
    "correcta": 1,
    "explicacion": "Sam Altman, CEO de OpenAI, admitió problemas en el despliegue de GPT-5 en clientes.",
    "fuente": "teoria"
},
{
    "id": 222,
    "tema": 5,
    "pregunta": "Jensen Huang advirtió sobre un posible límite en:",
    "opciones": [
        "La velocidad de los discos duros",
        "La capacidad de escalar el entrenamiento de modelos de IA",
        "El número de usuarios de Internet",
        "El tamaño de las bases de datos"
    ],
    "correcta": 1,
    "explicacion": "El CEO de NVIDIA advirtió que podríamos estar llegando a un límite en la capacidad de escalar el entrenamiento de modelos de IA.",
    "fuente": "teoria"
},
{
    "id": 223,
    "tema": 5,
    "pregunta": "Tras el informe del MIT, NVIDIA cayó aproximadamente:",
    "opciones": [
        "1%",
        "5%",
        "10%",
        "50%"
    ],
    "correcta": 2,
    "explicacion": "NVIDIA cayó alrededor de un 10% en 15 días tras la publicación del informe del MIT NANDA.",
    "fuente": "teoria"
},
{
    "id": 224,
    "tema": 5,
    "pregunta": "La capitalización de NVIDIA en octubre de 2025 era de aproximadamente:",
    "opciones": [
        "456 millones de dólares",
        "4,567 millones de dólares",
        "4,567 billones de dólares",
        "45,67 billones de dólares"
    ],
    "correcta": 2,
    "explicacion": "La capitalización bursátil de NVIDIA en octubre de 2025 era de aproximadamente 4,567 billones (trillones) de dólares.",
    "fuente": "teoria"
},
{
    "id": 225,
    "tema": 5,
    "pregunta": "¿Cuál fue una causa de la caída de NVIDIA de hasta un 26% en abril de 2025?",
    "opciones": [
        "Lanzamiento de un nuevo modelo",
        "Temor a aranceles comerciales de Donald Trump",
        "Aumento de la demanda de chips",
        "Fusión con otra empresa"
    ],
    "correcta": 1,
    "explicacion": "En abril de 2025 NVIDIA cayó hasta un 26% por temor a aranceles comerciales de Donald Trump.",
    "fuente": "teoria"
},
{
    "id": 226,
    "tema": 5,
    "pregunta": "P&L significa:",
    "opciones": [
        "Price and Loss",
        "Profit and Loss",
        "Product and License",
        "Performance and Learning"
    ],
    "correcta": 1,
    "explicacion": "P&L = Profit and Loss, la declaración de pérdidas y ganancias de una empresa.",
    "fuente": "teoria"
},
{
    "id": 227,
    "tema": 5,
    "pregunta": "ROI significa:",
    "opciones": [
        "Return on Investment",
        "Risk of Inaction",
        "Rate of Improvement",
        "Report of Issues"
    ],
    "correcta": 0,
    "explicacion": "ROI = Return on Investment, el retorno de la inversión.",
    "fuente": "teoria"
},
{
    "id": 228,
    "tema": 5,
    "pregunta": "¿Qué empresa adquirió OpenAI según el tema?",
    "opciones": [
        "Google",
        "Amazon",
        "Microsoft",
        "Apple"
    ],
    "correcta": 2,
    "explicacion": "OpenAI fue adquirida por Microsoft Corp.",
    "fuente": "teoria"
},
{
    "id": 229,
    "tema": 5,
    "pregunta": "El estudio del MIT NANDA se titula:",
    "opciones": [
        "The Big Data Revolution",
        "The GenAI Divide: State of AI in Business 2025",
        "AI for Everyone",
        "The Fourth Industrial Revolution"
    ],
    "correcta": 1,
    "explicacion": "El informe se titula 'The GenAI Divide: State of AI in Business 2025'.",
    "fuente": "teoria"
},
{
    "id": 230,
    "tema": 5,
    "pregunta": "¿Cuál de los siguientes es un patrón de la Brecha GenIA?",
    "opciones": [
        "Disrupción total",
        "Disrupción limitada",
        "Éxito universal",
        "Implementación automática"
    ],
    "correcta": 1,
    "explicacion": "Los cuatro patrones son disrupción limitada, paradoja empresarial, sesgo de inversión y ventaja de implementación.",
    "fuente": "teoria"
},
{
    "id": 231,
    "tema": 5,
    "pregunta": "Según el tema, ¿qué metodología ayuda a evitar proyectos GenIA inviables?",
    "opciones": [
        "Waterfall puro",
        "CRISP-DM",
        "Scrum sin objetivos",
        "No usar metodología"
    ],
    "correcta": 1,
    "explicacion": "CRISP-DM, junto con un caso de negocio claro, calidad de datos y gestión de expectativas, ayuda a evitar proyectos inviables.",
    "fuente": "teoria"
},
{
    "id": 232,
    "tema": 5,
    "pregunta": "¿Qué cargo desempeñaba Eric Colson en Stitch Fix?",
    "opciones": [
        "CEO",
        "Chief Algorithms Officer",
        "CTO",
        "Chief Data Officer"
    ],
    "correcta": 1,
    "explicacion": "Eric Colson fue Chief Algorithms Officer en Stitch Fix; antes fue VP Data Science & Engineering en Netflix y Manager BI en Yahoo.",
    "fuente": "teoria"
},
{
    "id": 233,
    "tema": 5,
    "pregunta": "En el modelo de Stitch Fix, ¿cuántas prendas se envían al cliente?",
    "opciones": [
        "3",
        "5",
        "7",
        "10"
    ],
    "correcta": 1,
    "explicacion": "Stitch Fix envía un paquete con 5 prendas seleccionadas por algoritmos y estilistas humanos.",
    "fuente": "teoria"
},
{
    "id": 234,
    "tema": 5,
    "pregunta": "¿Qué ocurre en Stitch Fix si el cliente se queda con todas las prendas?",
    "opciones": [
        "Paga un recargo del 10%",
        "Obtiene un 25% de descuento",
        "No paga nada",
        "Paga el doble"
    ],
    "correcta": 1,
    "explicacion": "Si el cliente se queda con las 5 prendas, obtiene un 25% de descuento sobre el total.",
    "fuente": "teoria"
},
{
    "id": 235,
    "tema": 5,
    "pregunta": "¿Cuántas palancas identificó el estudio de IBM para rentabilizar big data?",
    "opciones": [
        "3",
        "6",
        "9",
        "12"
    ],
    "correcta": 2,
    "explicacion": "El estudio de IBM identificó 9 factores palanca para rentabilizar big data y analítica.",
    "fuente": "teoria"
},
{
    "id": 236,
    "tema": 5,
    "pregunta": "Compartir conocimientos y resultados dentro de la compañía es una palanca de:",
    "opciones": [
        "Activación",
        "Dirección",
        "Amplificación",
        "Confianza"
    ],
    "correcta": 2,
    "explicacion": "Compartir conocimientos y resultados es una palanca de amplificación porque incrementa el valor a medio/largo plazo.",
    "fuente": "teoria"
},
{
    "id": 237,
    "tema": 5,
    "pregunta": "HiPPO significa:",
    "opciones": [
        "Highest Paid Person's Opinion",
        "Highest Performance Professional Objective",
        "Hybrid Intelligent Processing Operator",
        "High Priority Project Office"
    ],
    "correcta": 0,
    "explicacion": "HiPPO = Highest Paid Person's Opinion. Anti-HiPPOs promueve decisiones basadas en datos frente a la opinión del mejor pagado.",
    "fuente": "teoria"
},
{
    "id": 238,
    "tema": 5,
    "pregunta": "El gobierno de datos NO incluye típicamente:",
    "opciones": [
        "Calidad",
        "Seguridad",
        "Privacidad",
        "Diseño de moda"
    ],
    "correcta": 3,
    "explicacion": "El gobierno de datos abarca calidad, seguridad, privacidad, metadatos, acceso, arquitectura y ciclo de vida, no diseño de moda.",
    "fuente": "teoria"
},
{
    "id": 239,
    "tema": 6,
    "pregunta": "¿Cuál es la última fase del ciclo de vida actualizado de 9 fases?",
    "opciones": [
        "Visualización",
        "Evaluación",
        "Operacionalización y despliegue en producción",
        "Ingeniería de características"
    ],
    "correcta": 2,
    "explicacion": "La novena fase es operacionalizar y desplegar el proyecto en producción.",
    "fuente": "teoria"
},
{
    "id": 240,
    "tema": 6,
    "pregunta": "Un KPI debe ser principalmente:",
    "opciones": [
        "Subjetivo",
        "Cuantificable",
        "Secreto",
        "Estático"
    ],
    "correcta": 1,
    "explicacion": "Un KPI es un indicador cuantificable del progreso hacia un resultado deseado.",
    "fuente": "teoria"
},
{
    "id": 241,
    "tema": 6,
    "pregunta": "¿Cuál de estas tareas pertenece a la fase de obtención y preparación de datos?",
    "opciones": [
        "Definir objetivos de negocio",
        "Imputación de valores faltantes",
        "Presentar resultados al CEO",
        "Desplegar el modelo"
    ],
    "correcta": 1,
    "explicacion": "La imputación de valores faltantes forma parte de la limpieza y preparación de datos.",
    "fuente": "teoria"
},
{
    "id": 242,
    "tema": 6,
    "pregunta": "El EDA se utiliza para:",
    "opciones": [
        "Entrenar el modelo final",
        "Explorar distribuciones, valores faltantes y relaciones entre variables",
        "Escribir el contrato del proyecto",
        "Contratar al equipo"
    ],
    "correcta": 1,
    "explicacion": "El EDA (Exploratory Data Analysis) examina distribuciones, valores faltantes, outliers y relaciones antes de modelar.",
    "fuente": "teoria"
},
{
    "id": 243,
    "tema": 6,
    "pregunta": "Según Thomson Nguyen, ¿qué porcentaje del tiempo se dedica a limpiar datos?",
    "opciones": [
        "20%",
        "50%",
        "80%",
        "95%"
    ],
    "correcta": 2,
    "explicacion": "Thomson Nguyen afirmó que el 80% de su tiempo se dedicaba a limpiar datos y que mejores datos vencen a mejores modelos.",
    "fuente": "teoria"
},
{
    "id": 244,
    "tema": 6,
    "pregunta": "The Netflix Prize es un ejemplo de:",
    "opciones": [
        "Un modelo mecanístico",
        "Una competición de construcción y selección de modelos",
        "Una técnica de limpieza de datos",
        "Un tipo de overfitting"
    ],
    "correcta": 1,
    "explicacion": "The Netflix Prize ilustra la construcción de múltiples modelos y su selección según métricas y restricciones.",
    "fuente": "teoria"
},
{
    "id": 245,
    "tema": 6,
    "pregunta": "Un modelo que predice nuevos valores sin explicar la influencia de las entradas es:",
    "opciones": [
        "Descriptivo",
        "Exploratorio",
        "Predictivo",
        "Causal"
    ],
    "correcta": 2,
    "explicacion": "El modelo predictivo predice nuevos valores sin explicar la influencia de los parámetros de entrada.",
    "fuente": "teoria"
},
{
    "id": 246,
    "tema": 6,
    "pregunta": "Un modelo que explica exactamente cómo varía la salida según las entradas es:",
    "opciones": [
        "Causal",
        "Mecanístico",
        "Inferencial",
        "Exploratorio"
    ],
    "correcta": 1,
    "explicacion": "El modelo mecanístico explica exactamente cómo varía la salida en función de los parámetros de entrada.",
    "fuente": "teoria"
},
{
    "id": 247,
    "tema": 6,
    "pregunta": "La regularización se usa para:",
    "opciones": [
        "Aumentar la complejidad del modelo",
        "Penalizar la complejidad y evitar el sobreajuste",
        "Eliminar todos los datos de entrenamiento",
        "Aumentar la velocidad del hardware"
    ],
    "correcta": 1,
    "explicacion": "La regularización penaliza la complejidad del modelo para evitar que se ajuste demasiado a los datos de entrenamiento.",
    "fuente": "teoria"
},
{
    "id": 248,
    "tema": 6,
    "pregunta": "¿Qué técnica detiene el entrenamiento cuando el rendimiento en validación deja de mejorar?",
    "opciones": [
        "Validación cruzada",
        "Regularización",
        "Early stopping",
        "Data augmentation"
    ],
    "correcta": 2,
    "explicacion": "Early stopping detiene el entrenamiento cuando el rendimiento en el conjunto de validación deja de mejorar.",
    "fuente": "teoria"
},
{
    "id": 249,
    "tema": 6,
    "pregunta": "¿Quién dijo 'All models are wrong, some models are useful'?",
    "opciones": [
        "Albert Einstein",
        "George E.P. Box",
        "Donald Knuth",
        "Thomson Nguyen"
    ],
    "correcta": 1,
    "explicacion": "La cita es de George E.P. Box: 'All models are wrong; the practical question is how wrong do they have to be to not be useful.'",
    "fuente": "teoria"
},
{
    "id": 250,
    "tema": 6,
    "pregunta": "MLOps se refiere a:",
    "opciones": [
        "Machine Learning Operations",
        "Machine Learning Optimization",
        "Multiple Learning Objects",
        "Model Learning Office"
    ],
    "correcta": 0,
    "explicacion": "MLOps = Machine Learning Operations, prácticas para desplegar, monitorizar, mantener y actualizar modelos en producción.",
    "fuente": "teoria"
},
{
    "id": 251,
    "tema": 6,
    "pregunta": "¿Cuál es la principal cualidad buscada en un científico de datos según el tema?",
    "opciones": [
        "Especialización extrema en una sola área",
        "Amplitud de conocimientos y conexiones entre disciplinas",
        "Solo experiencia en ventas",
        "Solo programación en ensamblador"
    ],
    "correcta": 1,
    "explicacion": "El perfil del científico de datos debe ser polifacético, con amplitud de conocimientos y capacidad de conectar disciplinas.",
    "fuente": "teoria"
},
{
    "id": 252,
    "tema": 6,
    "pregunta": "¿Quién creó Pandas y Apache Arrow?",
    "opciones": [
        "Hadley Wickham",
        "Wes McKinney",
        "David Robinson",
        "Jenny Bryan"
    ],
    "correcta": 1,
    "explicacion": "Wes McKinney es el creador de Pandas y Apache Arrow.",
    "fuente": "teoria"
},
{
    "id": 253,
    "tema": 6,
    "pregunta": "¿Quién creó el tidyverse y tidymodels?",
    "opciones": [
        "Wes McKinney",
        "Hadley Wickham",
        "David Robinson",
        "Jenny Bryan"
    ],
    "correcta": 1,
    "explicacion": "Hadley Wickham creó el tidyverse y tidymodels en R.",
    "fuente": "teoria"
},
{
    "id": 254,
    "tema": 6,
    "pregunta": "¿Quién fue científica de datos en Arsenal FC según el tema?",
    "opciones": [
        "Jenny Bryan",
        "Hilary Parker",
        "Susana Ferreras",
        "Hadley Wickham"
    ],
    "correcta": 2,
    "explicacion": "Susana Ferreras trabajó como científica de datos en Arsenal FC y fue delegada de la selección femenina española de baloncesto.",
    "fuente": "teoria"
},
{
    "id": 255,
    "tema": 6,
    "pregunta": "¿Quién coanfitriona el podcast Not So Standard Deviations?",
    "opciones": [
        "Wes McKinney",
        "David Robinson",
        "Hilary Parker",
        "Susana Ferreras"
    ],
    "correcta": 2,
    "explicacion": "Hilary Parker coanfitriona el podcast Not So Standard Deviations con Roger D. Peng.",
    "fuente": "teoria"
},
{
    "id": 256,
    "tema": 6,
    "pregunta": "¿Qué empresa validó solo el 25% de estudios oncológicos según el tema?",
    "opciones": [
        "Amgen",
        "Bayer HealthCare",
        "Pfizer",
        "Novartis"
    ],
    "correcta": 1,
    "explicacion": "Bayer HealthCare validó solo el 25% de estudios oncológicos; Amgen confirmó solo 6 de 53 artículos emblemáticos.",
    "fuente": "teoria"
},
{
    "id": 257,
    "tema": 6,
    "pregunta": "Amgen confirmó solo 6 de 53 artículos emblemáticos en el área de:",
    "opciones": [
        "Psicología",
        "Oncología",
        "Economía",
        "Meteorología"
    ],
    "correcta": 1,
    "explicacion": "Amgen confirmó solo 6 de 53 artículos emblemáticos en oncología.",
    "fuente": "teoria"
},
{
    "id": 258,
    "tema": 6,
    "pregunta": "En psicología, ¿qué porcentaje de autores no respondió sobre sus datos en 6 meses?",
    "opciones": [
        "25%",
        "50%",
        "73%",
        "90%"
    ],
    "correcta": 2,
    "explicacion": "De 249 artículos de la APA, el 73% de los autores no respondió sobre sus datos en 6 meses.",
    "fuente": "teoria"
},
{
    "id": 259,
    "tema": 6,
    "pregunta": "¿Quién escribió 'Why Most Published Research Findings Are False'?",
    "opciones": [
        "Donald Knuth",
        "John Ioannidis",
        "Roger Peng",
        "Geoffrey Hinton"
    ],
    "correcta": 1,
    "explicacion": "John Ioannidis publicó 'Why Most Published Research Findings Are False' en PLoS Medicine en 2005.",
    "fuente": "teoria"
},
{
    "id": 260,
    "tema": 6,
    "pregunta": "La programación literaria fue propuesta por:",
    "opciones": [
        "Albert Einstein",
        "Donald Knuth",
        "George E.P. Box",
        "Thomson Nguyen"
    ],
    "correcta": 1,
    "explicacion": "Donald Knuth propuso la programación literaria en 1992 para documentar el código como una obra de literatura.",
    "fuente": "teoria"
},
{
    "id": 261,
    "tema": 6,
    "pregunta": "¿Cuál es la diferencia fundamental entre reproducibilidad y replicabilidad?",
    "opciones": [
        "No hay diferencia",
        "Reproducibilidad usa los mismos datos; replicabilidad usa datos diferentes",
        "Reproducibilidad es solo para software; replicabilidad solo para hardware",
        "Reproducibilidad es obligatoria; replicabilidad está prohibida"
    ],
    "correcta": 1,
    "explicacion": "Reproducibilidad recomputa resultados con los mismos datos; replicabilidad realiza un experimento independiente con datos diferentes.",
    "fuente": "teoria"
},
{
    "id": 262,
    "tema": 6,
    "pregunta": "¿Qué paquete Python se menciona en la Actividad 2 para resúmenes descriptivos?",
    "opciones": [
        "pandas",
        "summarytools",
        "matplotlib",
        "tensorflow"
    ],
    "correcta": 1,
    "explicacion": "La Actividad 2 utiliza el paquete Python summarytools para obtener resúmenes descriptivos en el EDA.",
    "fuente": "teoria"
},
{
    "id": 263,
    "tema": 6,
    "pregunta": "El documento 'What is the question?' de Leek & Peng se usa en la Actividad 2 para:",
    "opciones": [
        "Elegir el dataset",
        "Clasificar el tipo de análisis/modelo",
        "Instalar Python",
        "Crear una base de datos"
    ],
    "correcta": 1,
    "explicacion": "'What is the question?' de Leek & Peng sirve para identificar el tipo de análisis o modelo según la clasificación del documento.",
    "fuente": "teoria"
},
{
    "id": 264,
    "tema": 6,
    "pregunta": "¿Qué plataforma se menciona como recurso para encontrar proyectos de ejemplo?",
    "opciones": [
        "LinkedIn",
        "Kaggle",
        "TikTok",
        "Spotify"
    ],
    "correcta": 1,
    "explicacion": "Kaggle se menciona como plataforma útil para encontrar proyectos de ejemplo, aunque no debe limitarse a competiciones.",
    "fuente": "teoria"
},
{
    "id": 265,
    "tema": 6,
    "pregunta": "Un análisis que comprueba si patrones se mantienen en otros datasets sin hacer predicciones es:",
    "opciones": [
        "Descriptivo",
        "Inferencial",
        "Predictivo",
        "Mecanístico"
    ],
    "correcta": 1,
    "explicacion": "El análisis inferencial comprueba si patrones observados se mantienen en otros conjuntos de datos sin hacer predicciones.",
    "fuente": "teoria"
},
{
    "id": 266,
    "tema": 6,
    "pregunta": "Un modelo demasiado simple que no captura los patrones de entrenamiento está sufriendo:",
    "opciones": [
        "Overfitting",
        "Underfitting",
        "Regularización",
        "Early stopping"
    ],
    "correcta": 1,
    "explicacion": "El underfitting ocurre cuando el modelo es demasiado simple y no captura los patrones de los datos de entrenamiento.",
    "fuente": "teoria"
},
{
    "id": 267,
    "tema": 6,
    "pregunta": "¿Cuál de estos NO es un elemento necesario para la replicabilidad?",
    "opciones": [
        "Conjuntos de datos",
        "Infraestructura equivalente",
        "Software y código",
        "Secreto comercial sobre la metodología"
    ],
    "correcta": 3,
    "explicacion": "La replicabilidad requiere datos, infraestructura equivalente, software/código y metodología detallada, no secreto comercial.",
    "fuente": "teoria"
},
{
    "id": 268,
    "tema": 6,
    "pregunta": "Según Einstein citado en el tema, los modelos deben ser:",
    "opciones": [
        "Tan complejos como sea posible",
        "Tan simples como sea posible, pero no más",
        "Siempre mecanísticos",
        "Siempre causales"
    ],
    "correcta": 1,
    "explicacion": "Einstein: 'Everything should be made as simple as possible, but not simpler.'",
    "fuente": "teoria"
},
{
    "id": 269,
    "tema": 6,
    "pregunta": "El control de versiones con Git favorece principalmente:",
    "opciones": [
        "La reproducibilidad y colaboración",
        "El overfitting",
        "La eliminación de datos",
        "La compra de hardware"
    ],
    "correcta": 0,
    "explicacion": "Git registra cambios en código y datos, favoreciendo la reproducibilidad, la colaboración y la recuperación de estados anteriores.",
    "fuente": "teoria"
},
{
    "id": 270,
    "tema": 6,
    "pregunta": "Un portfolio recomendado para un científico de datos incluye:",
    "opciones": [
        "Solo currículum en papel",
        "Repositorios públicos y un blog",
        "Solo certificados universitarios",
        "Solo redes sociales"
    ],
    "correcta": 1,
    "explicacion": "Se recomienda crear un portfolio con repositorios públicos y un blog para mostrar proyectos y conocimientos.",
    "fuente": "teoria"
}
];