const theoryData = [
    {
        id: 5,
        title: "Tema 5 - Cultura del dato y decisiones basadas en datos",
        summary: "Factores palanca, toma de decisiones data-driven, modelos operativos de ciencia de datos y marcos de madurez.",
        sections: [
            {
                title: "5.1 ¿Qué es la Ciencia de Datos?",
                content: `
                    <p>La <span class="keyword">Ciencia de Datos</span> es el área de conocimiento que integra <strong>computación, matemáticas y estadística</strong> junto con <strong>conocimiento experto de un dominio de aplicación</strong> para resolver problemas y tomar decisiones mediante el procesamiento y análisis de datos.</p>
                    <ul>
                        <li>Va más allá de la aproximación científica clásica: no solo explica, sino que busca generar valor.</li>
                        <li>El <span class="keyword">aprendizaje máquina (ML)</span> es esencial, pero no el único componente.</li>
                        <li>La combinación de computación y conocimiento experto sin rigor estadístico es peligrosa: hay que conocer los requisitos y condiciones previas de los algoritmos.</li>
                        <li>La única alternativa viable son los <strong>equipos multidisciplinares</strong>.</li>
                    </ul>
                    <p><strong>Objetivo:</strong> obtener conocimiento valioso y desarrollar productos y servicios basados en datos (Transformación Digital, Industria 4.0).</p>
                    <h4>Caso Stitch Fix</h4>
                    <p>Startup de asesoramiento personal de ropa. Mezcla algoritmos de recomendación con estilistas humanos. Modelo híbrido de Inteligencia Artificial + Inteligencia Humana. Ejemplo de permeabilidad entre IT, data science, negocio, ventas y RR.HH.</p>
                `
            },
            {
                title: "5.1 Transformación digital",
                content: `
                    <p>La transformación digital incide en tres áreas:</p>
                    <ul>
                        <li><strong>El cliente:</strong> imagen de marca, segmentación, fidelización.</li>
                        <li><strong>El negocio:</strong> multicanalidad, diseño y mejora de productos/servicios, nuevos modelos de negocio.</li>
                        <li><strong>La empresa:</strong> mejora de procesos (process mining), liderazgo, cultura de decisión basada en evidencias y experiencia.</li>
                    </ul>
                    <p>Según un estudio de 2015 de Territorio Creativo (ahora Good Rebels):</p>
                    <ul>
                        <li>El <strong>69%</strong> de empresas españolas había iniciado transformación digital, pero de forma táctica más que estratégica.</li>
                        <li>El <strong>65%</strong> identificaba la incorporación del big data como herramienta clave.</li>
                        <li>El <strong>50%</strong> de empresas y directores no se sentían preparados por falta de hoja de ruta, desconocimiento del impacto o falta de formación.</li>
                    </ul>
                    <p><strong>Sector más preparado:</strong> Telecomunicaciones. <strong>Sectores avanzados:</strong> Energía, Banca y Seguros, Salud, Automoción, Telecomunicaciones, Turismo y Transporte. <strong>Sectores atrasados:</strong> Moda y Belleza, Servicios, Cultura/Ocio, Distribución y Retail.</p>
                `
            },
            {
                title: "5.1 Palancas de activación, dirección y amplificación",
                content: `
                    <p>Estudio de IBM identificó 9 factores palanca para rentabilizar big data y analítica.</p>
                    <h4>Palancas de activación</h4>
                    <p>Fundamentos para crear valor añadido mediante ciencia de datos:</p>
                    <ul>
                        <li>Acciones y decisiones basadas en la combinación de <strong>evidencias empíricas</strong> y <strong>conocimiento de negocio</strong>.</li>
                        <li>Métricas que cuantifiquen resultados de negocio y midan mejoras.</li>
                        <li>Disponibilidad de plataformas hardware/software para análisis eficiente de Big Data (software libre vs. propietario; ROI, knowledge gap, transferencia de conocimiento, dependencia de proveedores).</li>
                    </ul>
                    <h4>Palancas de dirección</h4>
                    <p>Acciones para convertir resultados de analytics en valor de negocio:</p>
                    <ul>
                        <li>Crear una <strong>cultura del dato</strong> en la compañía.</li>
                        <li>Reconocer el valor de los datasets en las fases de negocio → <em>data supply chain</em>.</li>
                        <li>Implantar estrategia de datos, gobierno de datos y gestión de artefactos.</li>
                        <li>Crear confianza: transparencia y comprensión de los modelos.</li>
                    </ul>
                    <h4>Data supply chain</h4>
                    <p>La <span class="keyword">data supply chain</span> es el flujo de valor de los datasets a lo largo de las diferentes fases de negocio. Reconocer este flujo permite identificar dónde se generan, procesan y consumen los datos, optimizando su aprovechamiento y evitando pérdidas de valor.</p>
                    <h4>Palancas de amplificación</h4>
                    <p>Incrementan el valor a medio/largo plazo:</p>
                    <ul>
                        <li>Visión común sobre decisiones basadas en evidencias.</li>
                        <li>Gestión y monitorización de inversiones en big data y analytics.</li>
                        <li>Compartir conocimientos y resultados dentro de la compañía y con socios/proveedores/clientes.</li>
                    </ul>
                `
            },
            {
                title: "5.2 Data-driven organization",
                content: `
                    <p>Organización que se basa en los datos para informar y mejorar su toma de decisiones, calidad de procesos, productos y servicios.</p>
                    <ul>
                        <li>No se dirige ciegamente por los datos, sino que los combina con la experiencia e intuición humana.</li>
                        <li><strong>IA + IH</strong> (Inteligencia Artificial + Inteligencia Humana) con realimentación en ambos sentidos.</li>
                    </ul>
                    <blockquote>"Without data, you're just another person with an opinion." — William E. Deming</blockquote>
                    <h4>Obtención y explotación de datos</h4>
                    <ul>
                        <li>Identificar datos útiles, asegurar calidad y gobierno, limpiar y preparar.</li>
                        <li>Consolidar información con representación estándar.</li>
                        <li>Consumir datos mediante APIs estándar con buena documentación.</li>
                        <li>Productos: informes, alertas, análisis de inteligencia de negocio.</li>
                        <li>Objetivo: que el análisis se traduzca en acciones que incrementen el valor.</li>
                    </ul>
                    <p>Los datos preparados deben quedar disponibles para cualquier proyecto de la empresa, no solo para uno concreto. Esto ahorra costes, acelera proyectos y facilita la reutilización.</p>
                    <h4>A favor y en contra de los datos</h4>
                    <ul>
                        <li><strong>A favor:</strong> reutilizables, formato digital (no se degradan, aunque pueden corromperse), valor estratégico.</li>
                        <li><strong>En contra:</strong> problemas de integridad (sesgos, errores, valores faltantes), homogeneidad (duplicados, representaciones dispares) y vigencia (datos caducados).</li>
                    </ul>
                `
            },
            {
                title: "5.2 Modelos operativos de ciencia de datos",
                content: `
                    <h4>Centralizado</h4>
                    <p>Un único equipo de Ciencia de Datos recibe encargos de las unidades de negocio, actuando como consultoría interna.</p>
                    <ul>
                        <li><strong>Ventajas:</strong> coherencia metodológica, pocos proyectos sin aplicación directa.</li>
                        <li><strong>Inconvenientes:</strong> riesgo de atomización de proyectos por necesidades puntuales sin visión a medio/largo plazo.</li>
                    </ul>
                    <h4>Desplegado</h4>
                    <p>Equipo central + pequeños equipos avanzados en las unidades de negocio que hacen de puente.</p>
                    <ul>
                        <li><strong>Ventajas:</strong> coherencia central y cercanía al negocio; factorización de problemas recurrentes.</li>
                        <li><strong>Inconvenientes:</strong> más difícil de implantar; requiere perfiles específicos.</li>
                    </ul>
                    <h4>Difuso</h4>
                    <p>Unidades de Ciencia de Datos integradas en cada unidad de negocio, sin equipo central.</p>
                    <ul>
                        <li><strong>Ventajas:</strong> conocimiento profundo de las necesidades.</li>
                        <li><strong>Inconvenientes:</strong> riesgo de repetición de esfuerzos, dificultad para desarrollar estrategia y metodología común.</li>
                    </ul>
                    <p><strong>Conclusión:</strong> no hay una solución única. En organizaciones medianas/grandes suele funcionar mejor el modelo desplegado. En startups, cualquier modelo puede valer si se adapta. Los modelos deben revisarse conforme evoluciona la organización.</p>
                `
            },
            {
                title: "5.2 Buenas prácticas y nuevos roles",
                content: `
                    <ul>
                        <li>Permitir acceso a los datos a tanta gente como sea posible, dentro de los límites legales.</li>
                        <li>Favorecer la <span class="keyword">data literacy</span> (alfabetización en datos).</li>
                        <li>Formar a directivos para interpretar resultados de análisis.</li>
                        <li>Tener claros los objetivos estratégicos: ¿dónde quiero llegar? ¿en qué mejorar?</li>
                    </ul>
                    <h4>Nuevos roles</h4>
                    <ul>
                        <li><strong>CDO</strong> (Chief Data Officer)</li>
                        <li><strong>CAO</strong> (Chief Analytics/Algorithms Officer)</li>
                        <li><strong>CDS</strong> (Chief Data Scientist)</li>
                        <li><strong>CRS</strong> (Chief Research Scientist)</li>
                    </ul>
                    <h4>Riesgos culturales y de gestión</h4>
                    <p><span class="keyword">Knowledge gap</span>: vacío de conocimiento que se produce cuando personal clave con experiencia en el dominio de negocio abandona la organización. Este riesgo afecta especialmente a equipos de ciencia de datos, que necesitan combinar conocimiento técnico con conocimiento experto del negocio.</p>
                    <p><span class="keyword">Sesgo de inversión</span>: tendencia a destinar presupuesto de IA a proyectos piloto muy visibles en lugar de a equipos o procesos internos con alto retorno de inversión (ROI). Para evitarlo, las decisiones de inversión deben basarse en evidencias y métricas de negocio, no solo en visibilidad.</p>
                `
            },
            {
                title: "5.3 Data Science Maturity Model (DSMM)",
                content: `
                    <p>Modelo que describe los niveles de madurez de una organización en ciencia de datos:</p>
                    <ol>
                        <li><strong>Collect</strong> (Recolección)</li>
                        <li><strong>Describe</strong> (Descripción)</li>
                        <li><strong>Discover</strong> (Descubrimiento)</li>
                        <li><strong>Predict</strong> (Predicción)</li>
                        <li><strong>Advise</strong> (Consejo)</li>
                    </ol>
                    <p>El nivel más avanzado es <strong>Advise</strong>. El orden de madurez es: Collect → Describe → Discover → Predict → Advise.</p>
                `
            },
            {
                title: "5.3 Data Mesh",
                content: `
                    <p>Enfoque de gestión de datos que trata el <strong>dato y el código software como una misma unidad</strong>, favoreciendo esquemas descentralizados de la propiedad de los dominios de datos.</p>
                    <h4>Principios</h4>
                    <ul>
                        <li>Descentralización de la propiedad de datos.</li>
                        <li>Dato como producto.</li>
                        <li>Plataforma de datos autoservicio.</li>
                        <li>Gobernanza federada.</li>
                    </ul>
                    <p>Se opone a los enfoques centralizados tipo data lake o data warehouse tradicionales.</p>
                `
            },
            {
                title: "5.3 Gobierno de datos y ciclo de vida",
                content: `
                    <p>El gobierno de datos abarca dimensiones como calidad, seguridad, privacidad, metadatos, acceso, arquitectura y gestión de ciclo de vida.</p>
                    <p>El <span class="keyword">ciclo de vida de los datos</span> incluye generación, recolección, almacenamiento, procesamiento, uso, compartición, archivado y destrucción segura.</p>
                `
            }
        ]
    },
    {
        id: 6,
        title: "Tema 6 - Proyectos de Ciencia e Ingeniería de Datos",
        summary: "Ciclo de vida CRISP-DM, roles y perfiles, reproducibilidad, tipos de modelos y MLOps.",
        sections: [
            {
                title: "6.1 El ciclo de vida de los proyectos: metodología",
                content: `
                    <p>La Ciencia de Datos combina <strong>ingeniería</strong> y <strong>análisis de datos</strong>. Necesita metodologías que organicen ambas facetas.</p>
                    <p>El método <span class="keyword">CRISP-DM</span> (Cross-Industry Standard Process for Data Mining) es el estándar de facto para gestionar proyectos de Ciencia de Datos. Es independiente del sector y de la herramienta, e iterativo.</p>
                    <h4>Fases de CRISP-DM</h4>
                    <ol>
                        <li><strong>Comprensión del negocio:</strong> definir objetivos y requisitos desde la perspectiva del negocio.</li>
                        <li><strong>Comprensión de los datos:</strong> recopilación inicial, descripción, exploración y verificación de calidad.</li>
                        <li><strong>Preparación de los datos:</strong> selección, limpieza, construcción, integración y formateo.</li>
                        <li><strong>Modelado:</strong> selección de técnicas, generación de configuraciones de prueba, construcción y evaluación.</li>
                        <li><strong>Evaluación:</strong> revisar pasos ejecutados y asegurar que cumplen objetivos de negocio.</li>
                        <li><strong>Despliegue:</strong> planificar despliegue, monitorización y mantenimiento.</li>
                    </ol>
                    <p>El ciclo es <strong>iterativo</strong>, no lineal.</p>
                    <h4>Ciclo de vida actualizado (9 fases)</h4>
                    <p>Algunas metodologías actuales amplían CRISP-DM a un ciclo de vida de <strong>9 fases</strong> que incorpora etapas de producción y gobernanza:</p>
                    <ol>
                        <li>Definición de objetivos de negocio y KPIs.</li>
                        <li>Obtención y comprensión de los datos.</li>
                        <li>Preparación y limpieza de los datos.</li>
                        <li>Análisis Exploratorio de Datos (EDA).</li>
                        <li>Ingeniería de características.</li>
                        <li>Construcción de modelos.</li>
                        <li>Evaluación y comparación de modelos.</li>
                        <li>Visualización y presentación de resultados.</li>
                        <li><strong>Operacionalización y despliegue en producción</strong> (planificar, ejecutar y mantener).</li>
                    </ol>
                    <p>La <strong>novena fase</strong> consiste en operacionalizar y desplegar el proyecto en producción según el plan establecido.</p>
                `
            },
            {
                title: "6.1 Fases en detalle",
                content: `
                    <h4>Fase 1: Definición de objetivos</h4>
                    <p>Concepto clave: <span class="keyword">KPI</span> (Key Performance Indicator). Indicadores clave de rendimiento que miden el éxito de una organización. Deben ser cuantificables, pueden ser cuantitativos o cualitativos, y siempre se basan en una comprensión detallada de los aspectos críticos.</p>
                    <p>La toma de decisiones debe medir el estado actual para predecir consecuencias futuras, teniendo en cuenta la incertidumbre.</p>
                    <p>En el ámbito empresarial, los proyectos de datos deben alinearse con indicadores financieros como el <span class="keyword">P&L</span> (Profit and Loss, Pérdidas y Ganancias), que refleja el resultado económico de la organización.</p>
                    <h4>Fase 2: Obtención y preparación de datos</h4>
                    <ul>
                        <li>Obtención de datos: múltiples fuentes (offline vs. tiempo real).</li>
                        <li>Almacenamiento: estructurados vs. no estructurados, datos enlazados, metadatos y estándares.</li>
                        <li>Limpieza y organización: imputación de valores faltantes, eliminación de duplicados.</li>
                        <li>Tratamiento: ontologías, identificación/extracción de datos relevantes.</li>
                        <li>Cómputo y paralelización: particionado, compresión, multiprocesado, cloud computing, paradigmas como MapReduce.</li>
                    </ul>
                    <h4>Diccionario de datos y EDA</h4>
                    <p>El <span class="keyword">diccionario de datos</span> es un documento que recoge, para cada variable: nombre, naturaleza, descripción, valores posibles y rango. Es fundamental para que cualquier persona del equipo comprenda el significado de los datos.</p>
                    <p>El <span class="keyword">EDA</span> (Exploratory Data Analysis o Análisis Exploratorio de Datos) examina distribuciones, valores faltantes, outliers y relaciones entre variables para entender la estructura de los datos antes de modelar.</p>
                    <blockquote>"80% of my time was spent cleaning the data. Better data will always beat better models." — Thomson Nguyen</blockquote>
                `
            },
            {
                title: "6.1 Fase 3: construcción de modelos",
                content: `
                    <p>Se construyen uno o varios modelos para resolver el objetivo marcado. La elección depende de costes, tiempo, recursos y requisitos.</p>
                    <h4>Tipos de modelos según Leek y Peng</h4>
                    <ul>
                        <li><span class="keyword">Descriptivo</span>: resúmenes de los datos sin interpretación.</li>
                        <li><span class="keyword">Exploratorio</span>: interpretación del modelo de datos sin analizar si es aplicable a otros conjuntos.</li>
                        <li><span class="keyword">Inferencial</span>: comprueba si patrones observados se mantienen en otros conjuntos de datos, sin hacer predicciones.</li>
                        <li><span class="keyword">Predictivo</span>: predice nuevos valores sin explicar la influencia de los parámetros de entrada.</li>
                        <li><span class="keyword">Causal</span>: comprueba cómo cambios en un parámetro afectan a la salida, solo en valores promedio.</li>
                        <li><span class="keyword">Mecanístico</span>: explica exactamente cómo varía la salida en función de los parámetros de entrada.</li>
                    </ul>
                    <h4>Sobreajuste y subajuste</h4>
                    <p><span class="keyword">Overfitting</span> (sobreajuste): modelo que se ajusta perfectamente a los datos de entrenamiento pero no generaliza bien a datos nuevos. Suele deberse a un modelo demasiado complejo para la cantidad o calidad de datos disponibles.</p>
                    <p><span class="keyword">Underfitting</span> (subajuste): modelo demasiado simple que ni siquiera captura bien los patrones de los datos de entrenamiento.</p>
                    <h4>Técnicas para mitigar el sobreajuste</h4>
                    <ul>
                        <li><strong>Validación cruzada:</strong> divide los datos en subconjuntos de entrenamiento y validación para evaluar de forma más robusta cómo generaliza el modelo.</li>
                        <li><strong>Regularización:</strong> penaliza la complejidad del modelo para evitar que se ajuste demasiado a los datos de entrenamiento.</li>
                        <li><strong>Early stopping:</strong> detiene el entrenamiento cuando el rendimiento en datos de validación deja de mejorar.</li>
                        <li><strong>Aumentar la complejidad del modelo no es una solución;</strong> de hecho, suele empeorar el sobreajuste.</li>
                    </ul>
                    <blockquote>"Remember that all models are wrong; the practical question is how wrong do they have to be to not be useful." — George E. P. Box</blockquote>
                    <blockquote>"Everything should be made as simple as possible, but not simpler." — Albert Einstein</blockquote>
                `
            },
            {
                title: "6.1 Fases 4-6: evaluación, visualización y despliegue",
                content: `
                    <h4>Fase 4: Evaluación / comparación de modelos</h4>
                    <p>Proceso iterativo de creación, comparación y mejora. Se usan métricas de rendimiento para elegir el modelo más adecuado.</p>
                    <h4>Fase 5: Visualización y presentación</h4>
                    <p>Si no se comunican bien los resultados, el trabajo habrá sido en balde. Hay que ajustar el nivel de detalle al público. La representación gráfica es fundamental.</p>
                    <h4>Fase 6: Despliegue en producción</h4>
                    <p>Importancia creciente del despliegue, monitorización, mantenimiento y actualización. Surge el concepto de <span class="keyword">MLOps</span> (Machine Learning Operations).</p>
                `
            },
            {
                title: "6.2 Roles y perfiles",
                content: `
                    <h4>Perfil del científico de datos</h4>
                    <p>Debe ser polifacético; es más importante la amplitud de conocimientos y las conexiones entre disciplinas que la profundidad en una sola.</p>
                    <ul>
                        <li>Desarrollo de software, redes, sistemas de información.</li>
                        <li>Teoría de la información, procesamiento de señales.</li>
                        <li>Matemáticas y estadística.</li>
                        <li>Visualización de datos y comunicación.</li>
                        <li>Gestión de proyectos y liderazgo.</li>
                        <li>Conocimiento del dominio de aplicación (deseable).</li>
                    </ul>
                    <p>Es aconsejable crear un <strong>portfolio</strong> con repositorios públicos y un blog. Perfiles avanzados pueden incluir libros, artículos o tutoriales.</p>
                    <p>Cada organización puede tener un concepto diferente del científico de datos que busca. Cuidado con ofertas de perfiles "unicornio" que deberían cubrirse con varias personas.</p>
                `
            },
            {
                title: "6.3 Reproducibilidad y replicabilidad",
                content: `
                    <h4>Problema de la reproducibilidad</h4>
                    <p>En áreas como oncología, psicología o economía se han encontrado dificultades para replicar estudios. Esto cuestiona la fiabilidad de muchas investigaciones.</p>
                    <h4>Reproducibilidad</h4>
                    <p>Capacidad para recomputar los resultados de un análisis con los <strong>mismos datos</strong> y conociendo los detalles del pipeline. Requiere datos, código y procedimiento.</p>
                    <h4>Replicabilidad</h4>
                    <p>Capacidad de realizar un experimento independiente con un <strong>conjunto de datos diferente</strong> del original. Si los resultados no son consistentes, se necesitan más réplicas y meta-análisis.</p>
                    <h4>Elementos necesarios</h4>
                    <ul>
                        <li>Conjuntos de datos utilizados.</li>
                        <li>Infraestructura equivalente.</li>
                        <li>Software: código, dependencias, configuración.</li>
                        <li>Metodología detallada (limpieza, análisis, resultados, conclusiones).</li>
                    </ul>
                    <h4>Control de versiones</h4>
                    <p>El <span class="keyword">control de versiones</span> (por ejemplo con Git) registra los cambios en el código y, cuando es posible, en los datos. Es una práctica esencial para favorecer la reproducibilidad, facilitar la colaboración y poder volver a estados anteriores del proyecto.</p>
                    <p>La <span class="keyword">programación literaria</span> (Donald Knuth) promueve documentar el código como una obra de literatura para mejorar la reproducibilidad.</p>
                `
            }
        ]
    },
    {
        id: 7,
        title: "Tema 7 - La revolución de los datos",
        summary: "Industria 4.0, Internet de las Cosas (IoT), ciudades inteligentes, ciencia ciudadana, espacios de datos municipales y retos de privacidad y seguridad.",
        sections: [
            {
                title: "7.1 El concepto de Industria 4.0",
                content: `
                    <p><span class="keyword">Industria 4.0</span> o Cuarta Revolución Industrial: término acuñado por <strong>Klaus Schwab</strong>, economista y empresario alemán, fundador y Presidente Ejecutivo del Foro Económico Mundial.</p>
                    <p>En <strong>2016</strong> publicó el libro <em>"The Fourth Industrial Revolution"</em> (4IR) para definir el impacto de las tecnologías emergentes en el desarrollo humano del siglo XXI.</p>
                    <h4>Etapas de la revolución industrial</h4>
                    <ol>
                        <li><strong>Primera Revolución Industrial (siglo XVIII):</strong> mecanización y máquina de vapor.</li>
                        <li><strong>Segunda Revolución Industrial:</strong> propiciada por la electricidad y las telecomunicaciones.</li>
                        <li><strong>Tercera Revolución Industrial:</strong> introducción de las tecnologías digitales en los procesos industriales.</li>
                        <li><strong>Cuarta Revolución Industrial:</strong> robótica, materiales avanzados, genética, IoT, drones, ingeniería biomédica, vehículos autónomos, inteligencia artificial y aprendizaje automático.</li>
                    </ol>
                    <p><strong>Lo importante no es solo la tecnología</strong>, sino los cambios en las relaciones humanas, productivas, sociales, políticas y económicas a escala global.</p>
                `
            },
            {
                title: "7.1 Componentes clave y dispositivos vestibles",
                content: `
                    <h4>Componentes de la Industria 4.0</h4>
                    <ul>
                        <li>Dispositivos móviles.</li>
                        <li>Internet de las Cosas (IoT).</li>
                        <li>Tecnologías de localización e identificación (ej. <span class="keyword">GIS</span>, <span class="keyword">RFID</span>).</li>
                        <li>Interfaces avanzadas hombre-máquina.</li>
                        <li>Sensores.</li>
                        <li>Procesamiento y análisis de grandes volúmenes de datos.</li>
                        <li>Multicanalidad en relaciones con el cliente.</li>
                        <li>Dispositivos vestibles (<span class="keyword">wearable devices</span>) y realidad aumentada.</li>
                        <li>Computación elástica, bajo demanda, dispositivos virtuales (<span class="keyword">NFV</span>, Network Functions Virtualization).</li>
                    </ul>
                    <h4>Dispositivos vestibles (wearables)</h4>
                    <p>Dispositivos que se llevan puestos y recogen datos del usuario o del entorno. Ejemplos: relojes inteligentes, pulseras de actividad, gafas de realidad aumentada, ropa inteligente y dispositivos médicos portátiles.</p>
                `
            },
            {
                title: "7.1 Riesgos: cadenas de suministro y microchips",
                content: `
                    <p>Durante años, los procesos globalizados de fabricación se han regido principalmente por los beneficios económicos para elegir la localización de la producción de componentes esenciales.</p>
                    <h4>Riesgos actuales</h4>
                    <ul>
                        <li><strong>Cadenas de suministro globales:</strong> cambios geopolíticos (guerras, tensiones económicas, conflictos de intereses) han puesto de relieve la vulnerabilidad de localizar la producción lejos de los mercados consumidores.</li>
                        <li><strong>Componentes críticos:</strong> la producción de microchips se ha convertido en un valor esencial para la estabilidad de un país.</li>
                    </ul>
                    <h4>Ejemplos de respuesta</h4>
                    <ul>
                        <li>El Presidente de EE.UU. Joe Biden visitó una nueva planta de semiconductores de IBM; la empresa invertirá <strong>20.000 millones de dólares</strong> en fabricación de microchips esenciales.</li>
                        <li>Europa invertirá miles de millones de euros para conseguir el <strong>20% del mercado de producción de chips para 2030</strong>.</li>
                    </ul>
                    <p><strong>Taiwán</strong> es el principal fabricante de microchips avanzados; su situación de inestabilidad política puede poner en riesgo el abastecimiento mundial.</p>
                `
            },
            {
                title: "7.1 La Industria 4.0 en España",
                content: `
                    <p><span class="keyword">Estrategia Nacional de Industria Conectada 4.0 (IC 4.0)</span>: plan español para impulsar la transformación digital de la industria.</p>
                    <h4>Objetivos</h4>
                    <ul>
                        <li>Incrementar valor añadido industrial y empleo cualificado en el sector industrial.</li>
                        <li>Favorecer el modelo industrial de futuro para la industria española, aumentando su potencial de crecimiento y desarrollando oferta local de soluciones digitales.</li>
                        <li>Desarrollar palancas competitivas diferenciales para favorecer la industria española e impulsar sus exportaciones.</li>
                    </ul>
                    <h4>Normas UNE y herramienta HADA</h4>
                    <ul>
                        <li><span class="keyword">UNE 0060</span>: describe los requisitos para que una empresa industrial sea considerada Industria Digital en España.</li>
                        <li><span class="keyword">UNE 0061</span>: criterios detallados de evaluación para la Industria Digital en España.</li>
                        <li><span class="keyword">HADA</span>: Herramienta de Autodiagnóstico Digital Avanzada, implantada por la Secretaría General de Industria.</li>
                    </ul>
                `
            },
            {
                title: "7.2 Definición y características del IoT",
                content: `
                    <p><span class="keyword">IoT</span> (Internet of Things): objetos físicos que tienen la capacidad para conectarse entre sí e intercambiar datos con otros dispositivos.</p>
                    <h4>Características técnicas</h4>
                    <ul>
                        <li>Disponen de <strong>sensores</strong> para adquirir datos sobre el entorno.</li>
                        <li>Tienen <strong>software y capacidad de procesamiento</strong>.</li>
                        <li>Emplean <strong>tecnologías de comunicación en red</strong>.</li>
                    </ul>
                    <p>Se apoya en <strong>computación ubícua</strong>, sensores, sistemas integrados y aprendizaje máquina.</p>
                    <h4>Características de acceso y servicio</h4>
                    <p>El IoT se caracteriza por la idea de acceso y servicio en cualquier lugar, momento, contexto, persona, servicio, red o camino:</p>
                    <ul>
                        <li>Anywhere / Anyplace</li>
                        <li>Anytime / Anycontext</li>
                        <li>Anyone / Anybody</li>
                        <li>Any service / Any business</li>
                        <li>Any path / Any network</li>
                    </ul>
                `
            },
            {
                title: "7.2 Redes de sensores (WSN)",
                content: `
                    <p><span class="keyword">WSN</span> (Wireless Sensor Network): red de dispositivos con sensores que recogen y transmiten información.</p>
                    <h4>Componentes</h4>
                    <ul>
                        <li><strong>Sensor:</strong> recoge información sobre el entorno en tiempo real.</li>
                        <li><strong>Sumidero o estación base:</strong> nodo que recopila información procedente de los sensores para reenviarla a través de Internet o a otra red.</li>
                        <li><strong>Usuarios:</strong> reciben y procesan la información de la red de sensores en tiempo real.</li>
                    </ul>
                    <h4>Tipos de redes de sensores</h4>
                    <ul>
                        <li>Redes de sensores multimedia.</li>
                        <li>Redes de sensores subacuáticas.</li>
                        <li>Redes de sensores bajo tierra.</li>
                        <li>Redes de sensores de cuerpo.</li>
                        <li>Redes sensor-actor.</li>
                    </ul>
                    <p>El tipo de despliegue y las tecnologías implicadas son esenciales para determinar la capacidad y rendimiento de la red.</p>
                `
            },
            {
                title: "7.2 Topologías, protocolos y computación integrada",
                content: `
                    <h4>Topologías en redes de sensores</h4>
                    <ul>
                        <li><strong>Estrella:</strong> todos los sensores se comunican con un nodo central. Fácil de gestionar, pero vulnerable si falla el nodo central.</li>
                        <li><strong>Peer-to-peer:</strong> los sensores se comunican entre sí. Más compleja pero más eficiente y resiliente.</li>
                    </ul>
                    <h4>Protocolo Zigbee</h4>
                    <p><span class="keyword">Zigbee</span>: protocolo de comunicación diseñado para redes de sensores personales y domótica. Destaca por su bajo consumo energético y bajo coste, ideal para redes con muchos dispositivos de poca potencia.</p>
                    <h4>Computación integrada</h4>
                    <ul>
                        <li><strong>Raspberry Pi:</strong> mini-computador de bajo coste ampliamente usado en proyectos de IoT, educación y prototipado.</li>
                        <li><strong>Arduino:</strong> plataforma de hardware libre con microcontroladores para leer sensores y controlar actuadores.</li>
                    </ul>
                    <h4>Aplicaciones</h4>
                    <p>Ejemplos: circuitos de detección de condiciones ambientales y sistemas que inferen ocupación de una estancia a partir de datos ambientales (temperatura, humedad, CO₂, etc.). También se emplean en detección de incendios forestales, agricultura de precisión, salud y logística.</p>
                `
            },
            {
                title: "7.3 La ciudad inteligente",
                content: `
                    <p>El término <span class="keyword">smart city</span> (ciudad inteligente) apareció por primera vez a comienzos de la década de 1990. Durante mucho tiempo no existió una visión clara de qué elementos son indispensables en una ciudad "inteligente".</p>
                    <h4>Tres elementos que han influido en la urbanización</h4>
                    <ul>
                        <li>Los avances tecnológicos, en especial las TIC.</li>
                        <li>La innovación, especialmente la producida de manera colectiva.</li>
                        <li>La globalización y los retos que esta plantea.</li>
                    </ul>
                    <h4>Definiciones y referencias clave</h4>
                    <ul>
                        <li><strong>Smart Planet (IBM, 2008):</strong> uno de los primeros proyectos precursores de las smart cities a nivel mundial.</li>
                        <li><strong>Harrison et al. (2010):</strong> ciudad <strong>instrumentalizada, interconectada e inteligente</strong>.</li>
                        <li><strong>Giffinger y Gudrum (2010):</strong> proponen 6 características para conseguir una ciudad inteligente: economía, gobernanza, medio ambiente, personas, movilidad y estilo de vida.</li>
                    </ul>
                    <h4>Dos elementos imprescindibles desde 2010</h4>
                    <ul>
                        <li>La <strong>IoT y las redes de sensores (WSN)</strong> como mecanismo indispensable para captar información en tiempo real sobre la ciudad, su entorno, sus habitantes y procesos clave (gobierno, movilidad, energía y recursos, seguridad, residuos).</li>
                        <li>El <strong>procesamiento y análisis de grandes volúmenes de datos</strong> descriptivos y de actividad, que permitan tomar decisiones de forma eficiente e incluso anticiparse a las necesidades de la ciudad y sus habitantes.</li>
                    </ul>
                    <p>Como resultado, la <strong>Ciencia e Ingeniería de Datos</strong> se convierte en pieza clave para el éxito de las smart cities.</p>
                `
            },
            {
                title: "7.3 Ejemplos de ciudades inteligentes",
                content: `
                    <ul>
                        <li><strong>Australia (1996):</strong> primeros intentos de creación de ciudades inteligentes.</li>
                        <li><strong>EE.UU.:</strong> lanzamiento de un proyecto de smart cities por el gobierno de Barack Obama.</li>
                        <li><strong>Unión Europea (2015):</strong> la Agenda Digital de la Comisión Europea incluye como objetivo fundamental el desarrollo de smart cities, con proyectos piloto de ciudades inteligentes y comunidades rurales inteligentes.</li>
                        <li><strong>Japón (2015):</strong> Estrategia i-Japan para crear una sociedad digital dirigida por los ciudadanos, tranquilizadora y vibrante.</li>
                        <li><strong>China (2015):</strong> lanzó 200 pilotos de ciudades inteligentes, principalmente para mejorar la sostenibilidad de su enorme población urbana.</li>
                    </ul>
                `
            },
            {
                title: "7.3 Fases de creación y dimensiones",
                content: `
                    <h4>Fases de creación de una ciudad inteligente</h4>
                    <ol>
                        <li><strong>Ciudad digital:</strong> incorpora elementos tecnológicos como redes de comunicación, tecnologías de información y visualización para adquirir datos sobre población, recursos, entorno, aspectos económicos y sociales.</li>
                        <li><strong>Intelligent city:</strong> las TIC se utilizan como catalizadores de innovación, no de forma incremental, sino estableciendo espacios colaborativos, herramientas interactivas y empleando sistemas integrados. Se puede utilizar inteligencia artificial y aprendizaje automático para tomar decisiones a alto nivel.</li>
                        <li><strong>Smart city:</strong> es una intelligent city que pone el foco en la experiencia de los usuarios y en los aspectos prácticos. Se auto-adapta y proporciona interfaces y servicios personalizados para las necesidades de los usuarios.</li>
                    </ol>
                    <h4>Dimensiones de una ciudad</h4>
                    <p>Las smart cities deben abordar múltiples dimensiones urbanas: gobernanza, movilidad, energía, medio ambiente, economía, personas, estilo de vida, seguridad, residuos, etc.</p>
                `
            },
            {
                title: "7.3 Inteligencia colectiva y ciencia ciudadana",
                content: `
                    <h4>Iniciativas de inteligencia colectiva</h4>
                    <p>Ejemplo: <span class="keyword">Medialab Matadero</span> (Madrid), una de las mejores plataformas de creación, investigación y producción experimental impulsada por el Procomún.</p>
                    <h4>Ciencia ciudadana</h4>
                    <p>Investigación científica realizada con la participación del público, con frecuencia científicos amateur o no profesionales. El término fue acuñado en <strong>1989</strong> por la revista <em>MIT Technology Review</em>.</p>
                    <ul>
                        <li>Los <strong>datos abiertos</strong> son un elemento esencial para posibilitar el desarrollo de proyectos de ciencia ciudadana.</li>
                        <li>La ciencia ciudadana se ha convertido en un <strong>pilar esencial de las ciudades inteligentes</strong>, posibilitando que sus habitantes desarrollen innovación para mejorar su actividad, infraestructura, entorno y calidad de vida.</li>
                    </ul>
                `
            },
            {
                title: "7.3 Riesgos para la privacidad y seguridad",
                content: `
                    <ul>
                        <li><strong>Vigilancia masiva</strong> mediante redes de sensores distribuidos por la ciudad.</li>
                        <li><strong>Uso indebido de datos personales</strong> por terceros o por administraciones.</li>
                        <li><strong>Ciberataques</strong> a infraestructuras críticas (energía, agua, transporte).</li>
                        <li><strong>Pérdida de anonimato</strong> en espacios públicos.</li>
                    </ul>
                    <p>La proliferación de sensores y sistemas conectados exige un diseño cuidadoso de gobernanza, ciberseguridad y protección de datos.</p>
                `
            },
            {
                title: "7.3 EDINT, CEOD y espacio de datos",
                content: `
                    <p><span class="keyword">EDINT</span> (Espacios de Datos para las Infraestructuras Urbanas Inteligentes): proyecto nacional español liderado por la FEMP para impulsar un ecosistema de centros de datos en municipios españoles.</p>
                    <ul>
                        <li>Presupuesto cercano a <strong>13 millones de euros</strong>.</li>
                        <li>Implica a <strong>12 entidades locales</strong> españolas y más de 36 empresas y centros de investigación españoles.</li>
                        <li>Coordinado por la FEMP, con el apoyo de Red.es y en colaboración con <strong>SEGITTUR</strong>.</li>
                        <li>Municipios participantes: A Coruña, Alcoi, Diputación de Badajoz, Fuenlabrada, Diputación de Jaén, Jerez de la Frontera, Logroño, Madrid, Málaga, Mataró, Santander y Valencia.</li>
                    </ul>
                    <p><span class="keyword">CEOD</span> (Centro de Excelencia y Oficina del Dato): espacio físico de gestión y compartición de datos municipales.</p>
                    <p><span class="keyword">Espacio de datos</span>: infraestructura para almacenar, compartir y reutilizar datos de forma segura e interoperable.</p>
                `
            },
            {
                title: "7.3 Referencias y lecturas recomendadas",
                content: `
                    <p>El tema se basa principalmente en el material del profesor Felipe Ortega y en la siguiente referencia clave:</p>
                    <ul>
                        <li><strong>Christopher Grant Kirwan y Zhiyong Fu.</strong> <em>Smart Cities and Artificial Intelligence</em>. Elsevier, 2020. ISBN: 978-0-12-817024-3.</li>
                    </ul>
                    <p>Referencias adicionales del tema:</p>
                    <ul>
                        <li>Klaus Schwab, <em>The Fourth Industrial Revolution</em> (2016).</li>
                        <li>Harrison et al. (2010), definición de smart city instrumentalizada, interconectada e inteligente.</li>
                        <li>Giffinger y Gudrum (2010), seis características de smart city.</li>
                        <li>MIT Technology Review (1989), acuñación del término "ciencia ciudadana".</li>
                    </ul>
                `
            }
        ]
    }
];

const flashcardsData = [
    { id: 1, tema: 5, anverso: "Ciencia de Datos", reverso: "Área que integra computación, matemáticas, estadística y conocimiento experto de un dominio para resolver problemas y tomar decisiones mediante datos." },
    { id: 2, tema: 5, anverso: "Transformación digital: áreas de actuación", reverso: "El cliente, el negocio y la empresa (procesos, liderazgo, cultura)." },
    { id: 3, tema: 5, anverso: "Palancas de activación", reverso: "Evidencias + conocimiento de negocio; métricas; plataformas hardware/software para Big Data." },
    { id: 4, tema: 5, anverso: "Palancas de dirección", reverso: "Cultura del dato; estrategia y gobierno de datos; confianza y transparencia." },
    { id: 5, tema: 5, anverso: "Palancas de amplificación", reverso: "Visión común; gestión de inversiones; compartir conocimientos dentro y fuera de la empresa." },
    { id: 6, tema: 5, anverso: "Data-driven organization", reverso: "Organización que usa datos para informar decisiones combinándolos con experiencia humana (IA + IH)." },
    { id: 7, tema: 5, anverso: "Modelo operativo centralizado", reverso: "Un único equipo de Ciencia de Datos actúa como consultoría interna." },
    { id: 8, tema: 5, anverso: "Modelo operativo desplegado", reverso: "Equipo central + equipos avanzados en unidades de negocio que hacen de puente." },
    { id: 9, tema: 5, anverso: "Modelo operativo difuso", reverso: "Unidades de Ciencia de Datos en cada negocio sin equipo central. Riesgo de repetición de esfuerzos." },
    { id: 10, tema: 5, anverso: "Data Science Maturity Model", reverso: "Collect → Describe → Discover → Predict → Advise. El más avanzado es Advise." },
    { id: 11, tema: 5, anverso: "Data Mesh", reverso: "Dato y código como una misma unidad; propiedad descentralizada de dominios de datos." },
    { id: 12, tema: 5, anverso: "CDO / CAO / CDS / CRS", reverso: "Chief Data Officer, Chief Analytics/Algorithms Officer, Chief Data Scientist, Chief Research Scientist." },
    { id: 13, tema: 6, anverso: "CRISP-DM", reverso: "Cross-Industry Standard Process for Data Mining. 6 fases iterativas: negocio, datos, preparación, modelado, evaluación, despliegue." },
    { id: 14, tema: 6, anverso: "KPI", reverso: "Key Performance Indicator. Indicador cuantificable del éxito de una organización." },
    { id: 15, tema: 6, anverso: "Modelo descriptivo", reverso: "Resúmenes de datos sin interpretación." },
    { id: 16, tema: 6, anverso: "Modelo exploratorio", reverso: "Interpretación del modelo sin analizar si es aplicable a otros datos." },
    { id: 17, tema: 6, anverso: "Modelo inferencial", reverso: "Comprueba si patrones se mantienen en otros conjuntos de datos sin hacer predicciones." },
    { id: 18, tema: 6, anverso: "Modelo predictivo", reverso: "Predice nuevos valores sin explicar la influencia de los parámetros de entrada." },
    { id: 19, tema: 6, anverso: "Modelo causal", reverso: "Comprueba cómo cambios en un parámetro afectan a la salida, en valores promedio." },
    { id: 20, tema: 6, anverso: "Modelo mecanístico", reverso: "Explica exactamente cómo varía la salida según los parámetros de entrada." },
    { id: 21, tema: 6, anverso: "Overfitting", reverso: "Modelo que se ajusta perfectamente a entrenamiento pero no generaliza a datos nuevos." },
    { id: 22, tema: 6, anverso: "MLOps", reverso: "Machine Learning Operations: despliegue, monitorización, mantenimiento y actualización de modelos." },
    { id: 23, tema: 6, anverso: "Reproducibilidad", reverso: "Recomputar resultados con los mismos datos y el mismo pipeline." },
    { id: 24, tema: 6, anverso: "Replicabilidad", reverso: "Realizar un experimento independiente con datos diferentes." },
    { id: 25, tema: 6, anverso: "Programación literaria", reverso: "Documentar el código como una obra de literatura (Donald Knuth)." },
    { id: 26, tema: 8, anverso: "Espacio Único Digital de Datos", reverso: "Iniciativa de la UE para un mercado único de datos seguros. Impulso en 2020." },
    { id: 27, tema: 8, anverso: "Estrategia Europea de Datos (2020)", reverso: "Hito más importante para el Mercado Único de Datos Europeo en 2020." },
    { id: 28, tema: 8, anverso: "RGPD / GDPR", reverso: "Reglamento General de Protección de Datos. Aprobado 2016, aplicado 2018." },
    { id: 29, tema: 8, anverso: "Dividendo digital", reverso: "Beneficios obtenidos por el uso masivo de datos." },
    { id: 30, tema: 8, anverso: "Pacto Verde Europeo", reverso: "Iniciativa de la UE para alcanzar la neutralidad climática en 2050." },
    { id: 31, tema: 8, anverso: "CISPE", reverso: "Código de Conducta para Proveedores de Servicios de Infraestructura en la Nube en la UE." },
    { id: 32, tema: 8, anverso: "FIWARE", reverso: "Plataforma de código abierto para smart cities e IoT." },
    { id: 33, tema: 8, anverso: "GAIA-X", reverso: "Iniciativa para un ecosistema de datos federado en Europa." },
    { id: 34, tema: 8, anverso: "Reglamento de IA UE 2024/1689", reverso: "Clasifica riesgos de IA en mínimo, limitado, alto y prohibido." },
    { id: 35, tema: 8, anverso: "Consumo energético TIC en UE", reverso: "5-9% del consumo eléctrico total y 2% de emisiones contaminantes." },
    { id: 36, tema: 5, anverso: "Sesgo de inversión", reverso: "Destinar presupuesto de IA a proyectos visibles en lugar de equipos o procesos internos de alto ROI." },
    { id: 37, tema: 5, anverso: "Data supply chain", reverso: "Flujo de valor de los datasets a lo largo de las fases de negocio." },
    { id: 38, tema: 6, anverso: "Ciclo de vida actualizado (9 fases)", reverso: "Extensión de CRISP-DM donde la novena fase es operacionalizar y desplegar en producción." },
    { id: 39, tema: 6, anverso: "Diccionario de datos", reverso: "Documento con nombre, naturaleza, descripción, valores posibles y rango de cada variable." },
    { id: 40, tema: 6, anverso: "EDA", reverso: "Exploratory Data Analysis: análisis exploratorio de distribuciones, valores faltantes y relaciones." },
    { id: 41, tema: 6, anverso: "P&L", reverso: "Profit and Loss: declaración de pérdidas y ganancias." },
    { id: 42, tema: 6, anverso: "Validación cruzada", reverso: "Divide datos en subconjuntos de entrenamiento y validación para evaluar la generalización." },
    { id: 43, tema: 6, anverso: "Early stopping", reverso: "Detener el entrenamiento cuando el rendimiento en validación deja de mejorar." },
    { id: 44, tema: 6, anverso: "Underfitting", reverso: "Modelo demasiado simple que no captura los patrones de los datos de entrenamiento." },
    { id: 45, tema: 6, anverso: "Control de versiones", reverso: "Registro de cambios en código y datos para favorecer la reproducibilidad." },
    { id: 46, tema: 8, anverso: "CISPE", reverso: "Cloud Infrastructure Services Providers in Europe; código de conducta para proveedores de nube en la UE." },
    { id: 47, tema: 8, anverso: "FIWARE", reverso: "Plataforma de código abierto para smart cities e IoT impulsada por la UE." },
    { id: 48, tema: 8, anverso: "GAIA-X", reverso: "Iniciativa para un ecosistema de datos federado en Europa." },
    { id: 49, tema: 8, anverso: "Libro Blanco sobre IA (2020)", reverso: "Documento de la Comisión Europea publicado en 2020 junto con la Estrategia Europea de Datos, sobre el marco de IA en la UE." },
    { id: 50, tema: 8, anverso: "Reglamento sobre Gobernanza de Datos", reverso: "Reglamento de noviembre 2020 que establece un marco para la gobernanza intersectorial del acceso y uso de datos en la UE." },
    { id: 51, tema: 8, anverso: "Inversión en infraestructuras datos UE", reverso: "Primera fase en 2022 con una inversión total prevista de aproximadamente 2.000 millones de euros." },
    { id: 52, tema: 8, anverso: "G2B", reverso: "Intercambio de datos de la Administración Pública a empresas." },
    { id: 53, tema: 8, anverso: "B2B", reverso: "Intercambio de datos entre empresas." },
    { id: 54, tema: 8, anverso: "B2G", reverso: "Intercambio de datos de empresas a la Administración Pública." },
    { id: 55, tema: 8, anverso: "G2G", reverso: "Intercambio de datos entre administraciones públicas." },
    { id: 56, tema: 8, anverso: "Data Acquisition", reverso: "Fase de la cadena de valor del dato: adquisición de datos estructurados/no estructurados, eventos, sensores, streams, multimodalidad." },
    { id: 57, tema: 8, anverso: "Data Analysis", reverso: "Fase de la cadena de valor del dato: stream mining, análisis semántico, ML, extracción de información, datos vinculados." },
    { id: 58, tema: 8, anverso: "Data Curation", reverso: "Fase de la cadena de valor del dato: validación, anotación, interoperabilidad y garantía de calidad." },
    { id: 59, tema: 8, anverso: "Data Storage", reverso: "Fase de la cadena de valor del dato: bases en memoria, NoSQL, cloud, escalabilidad, seguridad." },
    { id: 60, tema: 8, anverso: "Data Usage", reverso: "Fase de la cadena de valor del dato: soporte a decisiones, predicciones, simulaciones, visualización, control." },
    { id: 61, tema: 8, anverso: "GENIVI Alliance", reverso: "Alianza del sector automoción, ejemplo de coopetition, que ha evolucionado a COVESA." },
    { id: 62, tema: 8, anverso: "COVESA", reverso: "The Connected Vehicle Systems Alliance. Plataforma de coopetition para sistemas del coche inteligente conectado a IoT." },
    { id: 63, tema: 8, anverso: "Riesgo mínimo o nulo en IA", reverso: "Sistemas como juegos o filtros de spam. No están regulados en el Reglamento de IA UE 2024/1689." },
    { id: 64, tema: 8, anverso: "Riesgo limitado en IA", reverso: "Chatbots o generadores de contenido. Obligaciones de transparencia: informar que se interactúa con IA." },
    { id: 65, tema: 8, anverso: "Riesgo alto en IA", reverso: "Diagnósticos médicos, conducción autónoma, identificación biométrica. Estrictos requisitos de seguridad, transparencia y supervisión humana." },
    { id: 66, tema: 8, anverso: "Riesgo prohibido en IA", reverso: "Vigilancia masiva sin consentimiento. Completamente prohibidos en el Reglamento de IA UE 2024/1689." },
    { id: 67, tema: 8, anverso: "ADAC", reverso: "Organización automovilística alemana que detectó la recopilación masiva y poco transparente de datos personales en coches modernos." },
    { id: 68, tema: 8, anverso: "Blanco móvil (Ciencia de Datos)", reverso: "Metáfora que describe a la Ciencia de Datos como un campo en constante cambio y evolución." },
    { id: 69, tema: 8, anverso: "Computación cuántica", reverso: "Tendencia futura que puede revolucionar el procesamiento de datos, pero amenaza la ciberseguridad habitual." },
    { id: 70, tema: 8, anverso: "XAI", reverso: "Aprendizaje máquina explicable. Busca entender por qué los algoritmos toman determinadas decisiones." },
    { id: 71, tema: 8, anverso: "Sintetización de contenidos", reverso: "Tendencia futura ejemplificada por GPT-3 y sistemas de síntesis de voz natural. Riesgos en atención al cliente." },
    { id: 72, tema: 8, anverso: "Perfil unicornio", reverso: "Oferta laboral que exige aglutinar muchos conocimientos diversos; en realidad debería cubrirse con varias personas." },
    { id: 73, tema: 8, anverso: "Storytelling en Ciencia de Datos", reverso: "Habilidad crecientemente importante para comunicar resultados y valor de los proyectos de datos." },
    { id: 74, tema: 8, anverso: "Cuadratura del círculo (mercado de datos)", reverso: "Reto de la UE: regular y proteger sin frenar la libertad de mercado y la innovación en el Espacio Único de Datos." },
    { id: 75, tema: 7, anverso: "Industria 4.0", reverso: "Cuarta Revolución Industrial. Término acuñado por Klaus Schwab en 2016. Combina robótica, IA, IoT, drones, vehículos autónomos, genética y materiales avanzados." },
    { id: 76, tema: 7, anverso: "Klaus Schwab", reverso: "Economista y empresario alemán, fundador del Foro Económico Mundial. Autor de 'The Fourth Industrial Revolution' (2016)." },
    { id: 77, tema: 7, anverso: "The Fourth Industrial Revolution (2016)", reverso: "Libro de Klaus Schwab que define el impacto de las tecnologías emergentes en el desarrollo humano del siglo XXI." },
    { id: 78, tema: 7, anverso: "Primera Revolución Industrial", reverso: "Siglo XVIII. Mecanización y máquina de vapor." },
    { id: 79, tema: 7, anverso: "Segunda Revolución Industrial", reverso: "Propiciada por la electricidad y las telecomunicaciones." },
    { id: 80, tema: 7, anverso: "Tercera Revolución Industrial", reverso: "Introducción de las tecnologías digitales en los procesos industriales." },
    { id: 81, tema: 7, anverso: "Cuarta Revolución Industrial: tecnologías", reverso: "Robótica, materiales avanzados, genética, IoT, drones, ingeniería biomédica, vehículos autónomos, IA y aprendizaje automático." },
    { id: 82, tema: 7, anverso: "Impacto real de Industria 4.0", reverso: "No solo la tecnología, sino los cambios en relaciones humanas, productivas, sociales, políticas y económicas a escala global." },
    { id: 83, tema: 7, anverso: "GIS", reverso: "Sistema de Información Geográfica. Tecnología de localización e identificación en Industria 4.0." },
    { id: 84, tema: 7, anverso: "RFID", reverso: "Radio Frequency Identification. Tecnología de identificación mediante radiofrecuencia." },
    { id: 85, tema: 7, anverso: "Wearable devices", reverso: "Dispositivos vestibles que recogen datos del usuario o del entorno: relojes inteligentes, pulseras de actividad, gafas AR, ropa inteligente." },
    { id: 86, tema: 7, anverso: "NFV", reverso: "Network Functions Virtualization. Computación elástica y bajo demanda mediante dispositivos virtuales." },
    { id: 87, tema: 7, anverso: "Riesgos de cadenas de suministro", reverso: "Dependencia globalizada de componentes críticos. Cambios geopolíticos (guerras, tensiones) revelan vulnerabilidades." },
    { id: 88, tema: 7, anverso: "Microchips como componente crítico", reverso: "La producción de semiconductores es esencial para la estabilidad económica y tecnológica de un país." },
    { id: 89, tema: 7, anverso: "Inversión IBM en microchips (EE.UU.)", reverso: "20.000 millones de dólares en fabricación de microchips, anunciada en planta visitada por Joe Biden." },
    { id: 90, tema: 7, anverso: "Objetivo europeo de fabricación de chips", reverso: "Conseguir el 20% del mercado de producción de chips para 2030." },
    { id: 91, tema: 7, anverso: "Taiwán y semiconductores", reverso: "Principal fabricante de microchips avanzados. Su inestabilidad política puede poner en riesgo el abastecimiento mundial." },
    { id: 92, tema: 7, anverso: "Estrategia IC 4.0", reverso: "Estrategia Nacional de Industria Conectada 4.0 en España. Busca incrementar valor añadido industrial y empleo cualificado." },
    { id: 93, tema: 7, anverso: "Objetivos de IC 4.0", reverso: "Incrementar valor añadido y empleo cualificado; favorecer modelo industrial de futuro; desarrollar palancas competitivas diferenciales." },
    { id: 94, tema: 7, anverso: "UNE 0060", reverso: "Describe los requisitos para que una empresa industrial sea considerada Industria Digital en España." },
    { id: 95, tema: 7, anverso: "UNE 0061", reverso: "Criterios detallados de evaluación para la Industria Digital en España." },
    { id: 96, tema: 7, anverso: "HADA", reverso: "Herramienta de Autodiagnóstico Digital Avanzada, implantada por la Secretaría General de Industria." },
    { id: 97, tema: 7, anverso: "IoT", reverso: "Internet of Things. Objetos físicos con sensores, software y capacidad de conexión para intercambiar datos." },
    { id: 98, tema: 7, anverso: "Tres capacidades básicas del IoT", reverso: "Sensores para adquirir datos, software/procesamiento y tecnologías de comunicación en red." },
    { id: 99, tema: 7, anverso: "Computación ubícua", reverso: "Paradigma en el que la computación está presente de forma integrada en el entorno cotidiano. Base del IoT." },
    { id: 100, tema: 7, anverso: "Características 'Any' del IoT", reverso: "Anywhere/anyplace, anytime/anycontext, anyone/anybody, any service/any business, any path/any network." },
    { id: 101, tema: 7, anverso: "WSN", reverso: "Wireless Sensor Network. Red de dispositivos con sensores que recogen y transmiten información." },
    { id: 102, tema: 7, anverso: "Componentes de una WSN", reverso: "Sensor (adquiere datos), sumidero/estación base (recopila y reenvía) y usuarios (procesan la información)." },
    { id: 103, tema: 7, anverso: "Sensor (WSN)", reverso: "Componente que recoge información sobre el entorno en tiempo real." },
    { id: 104, tema: 7, anverso: "Sumidero o estación base (WSN)", reverso: "Nodo que recopila información de los sensores para reenviarla a Internet u otra red." },
    { id: 105, tema: 7, anverso: "Tipos de redes de sensores", reverso: "Multimedia, subacuáticas, bajo tierra, de cuerpo y sensor-actor." },
    { id: 106, tema: 7, anverso: "Redes sensor-actor", reverso: "WSN que no solo sensan el entorno sino que también actúan sobre él." },
    { id: 107, tema: 7, anverso: "Topología en estrella", reverso: "Todos los sensores se comunican con un nodo central. Fácil de gestionar pero vulnerable si falla el central." },
    { id: 108, tema: 7, anverso: "Topología peer-to-peer", reverso: "Los sensores se comunican entre sí. Más compleja pero más eficiente y resiliente." },
    { id: 109, tema: 7, anverso: "Zigbee", reverso: "Protocolo de comunicación para redes de sensores personales y domótica. Bajo consumo y bajo coste." },
    { id: 110, tema: 7, anverso: "Raspberry Pi", reverso: "Mini-computador de bajo coste ampliamente usado en proyectos de IoT, educación y prototipado." },
    { id: 111, tema: 7, anverso: "Arduino", reverso: "Plataforma de hardware libre con microcontroladores para leer sensores y controlar actuadores." },
    { id: 112, tema: 7, anverso: "Aplicación WSN: incendios forestales", reverso: "Redes de sensores monitorizan temperatura, humedad y humo para detectar incendios." },
    { id: 113, tema: 7, anverso: "Smart city", reverso: "Ciudad que usa tecnología y datos para mejorar calidad de vida, optimizar recursos y reducir impacto ambiental." },
    { id: 114, tema: 7, anverso: "Origen del término smart city", reverso: "Apareció a comienzos de la década de 1990." },
    { id: 115, tema: 7, anverso: "Tres elementos de la urbanización smart", reverso: "Avances tecnológicos (TIC), innovación colectiva y globalización/retos globales." },
    { id: 116, tema: 7, anverso: "Smart Planet", reverso: "Proyecto de IBM lanzado en 2008, precursor mundial de las smart cities." },
    { id: 117, tema: 7, anverso: "Harrison et al. (2010)", reverso: "Definen la smart city como ciudad instrumentalizada, interconectada e inteligente." },
    { id: 118, tema: 7, anverso: "Giffinger y Gudrum (2010)", reverso: "Proponen 6 características de smart city: economía, gobernanza, medio ambiente, personas, movilidad y estilo de vida." },
    { id: 119, tema: 7, anverso: "Dos elementos imprescindibles de smart city", reverso: "IoT/WSN para captar datos en tiempo real y procesamiento/análisis de grandes volúmenes de datos." },
    { id: 120, tema: 7, anverso: "Rol de la Ciencia e Ingeniería de Datos", reverso: "Pieza clave para el éxito de las smart cities, ya que permite procesar y analizar los datos captados." },
    { id: 121, tema: 7, anverso: "Australia 1996 smart cities", reverso: "Primeros intentos de creación de ciudades inteligentes en Australia." },
    { id: 122, tema: 7, anverso: "Smart cities en EE.UU.", reverso: "Proyecto de smart cities impulsado por el gobierno de Barack Obama." },
    { id: 123, tema: 7, anverso: "Agenda Digital UE 2015", reverso: "Incluye el desarrollo de smart cities como objetivo fundamental, con proyectos piloto y comunidades rurales inteligentes." },
    { id: 124, tema: 7, anverso: "i-Japan 2015", reverso: "Estrategia japonesa para crear una sociedad digital dirigida por los ciudadanos." },
    { id: 125, tema: 7, anverso: "China 200 pilotos smart cities", reverso: "En 2015 China lanzó 200 pilotos para mejorar la sostenibilidad de su población urbana." },
    { id: 126, tema: 7, anverso: "Ciudad digital", reverso: "Primera fase: incorpora tecnología para adquirir datos sobre población, recursos, entorno y aspectos económicos/sociales." },
    { id: 127, tema: 7, anverso: "Intelligent city", reverso: "Segunda fase: las TIC catalizan innovación colaborativa mediante espacios, herramientas interactivas y sistemas integrados." },
    { id: 128, tema: 7, anverso: "Smart city (fase avanzada)", reverso: "Intelligent city centrada en la experiencia de usuario, auto-adaptación y servicios personalizados." },
    { id: 129, tema: 7, anverso: "Dimensiones de una ciudad", reverso: "Gobernanza, movilidad, energía, medio ambiente, economía, personas, estilo de vida, seguridad y residuos." },
    { id: 130, tema: 7, anverso: "Medialab Matadero", reverso: "Plataforma de creación, investigación y producción experimental impulsada por el Procomún en Madrid." },
    { id: 131, tema: 7, anverso: "Ciencia ciudadana", reverso: "Investigación científica con participación del público, frecuentemente científicos amateur. Requiere datos abiertos." },
    { id: 132, tema: 7, anverso: "Origen término 'ciencia ciudadana'", reverso: "Acuñado en 1989 por la revista MIT Technology Review." },
    { id: 133, tema: 7, anverso: "Datos abiertos y ciencia ciudadana", reverso: "Los datos abiertos son esenciales para posibilitar proyectos de ciencia ciudadana." },
    { id: 134, tema: 7, anverso: "Vigilancia masiva en smart cities", reverso: "Riesgo derivado de la proliferación de sensores distribuidos por la ciudad." },
    { id: 135, tema: 7, anverso: "Ciberataques a infraestructuras críticas", reverso: "Riesgo de smart cities: ataques a sistemas de energía, agua o transporte." },
    { id: 136, tema: 7, anverso: "Pérdida de anonimato", reverso: "Riesgo de smart cities: los ciudadanos pueden perder anonimato en espacios públicos." },
    { id: 137, tema: 7, anverso: "EDINT", reverso: "Espacios de Datos para las Infraestructuras Urbanas Inteligentes. Proyecto español de ecosistema de centros de datos en municipios." },
    { id: 138, tema: 7, anverso: "EDINT: presupuesto y entidades", reverso: "Presupuesto cercano a 13 millones de euros, 12 entidades locales españolas, FEMP, Red.es y colaboración con SEGITTUR." },
    { id: 139, tema: 7, anverso: "CEOD", reverso: "Centro de Excelencia y Oficina del Dato. Espacio físico de gestión y compartición de datos municipales." },
    { id: 140, tema: 7, anverso: "Espacio de datos", reverso: "Infraestructura para almacenar, compartir y reutilizar datos de forma segura e interoperable." },
    { id: 141, tema: 7, anverso: "Knowledge gap", reverso: "Vacío de conocimiento generado por la marcha de personal clave experimentado en el dominio de negocio." },
    { id: 142, tema: 7, anverso: "Referencia Kirwan y Fu (2020)", reverso: "'Smart Cities and Artificial Intelligence'. Elsevier. ISBN 978-0-12-817024-3." }
];;
