const tutorialsComponent=new Vue({
  el:"#tutorialsComponent",
  data:{
    tutorials:[
      {
        "id":1,
        "title":"Clasificación de frutos agrícolas",
        "people":[
          {
            "img":"./src/images/Material/Juan Vasquez.png",
            "name": "Dr. Juan Irving Vasquéz",
            "description":`Juan Irving Vasquez recibió los grados de maestría en ciencias y doctorado en ciencias por el Instituto Nacional de Astrofísica Óptica y Electrónica (INAOE) en 2009 y 2014 respectivamente. El grado de Ingeniero en Sistemas Computacionales lo adquirió por el Instituto Tecnológico de Tehuacán en 2006. De 2016 a 2021 fue investigador del programa cátedras CONACYT. Desde 2021 es profesor de tiempo completo en el Instituto Politécnico Nacional. Su producción científica incluye diversas publicaciones en revistas arbitradas y congresos internacionales, así como desarrollos tecnológicos aplicados a la industria. Sus intereses actuales de investigación incluyen visión computacional basada en aprendizaje, robótica móvil, planificación de movimientos, así como sus aplicaciones a vehículos autónomos. Desde 2017 ha sido reconocido como investigador nacional por parte del CONACYT, actualmente en nivel 1.`,
          },
          {
            "img":"./src/images/Material/Carlos Olgín.png",
            "name": "Dr. Juan Carlos Olguín Rojas",
            "description":"Próximamente",
          },
        ],
        "schedule":"Miércoles, 09 de noviembre, 12:30 hrs.",
        "description":`México es uno de los mayores exportadores de frutos agrícolas a nivel mundial. La implementación de tecnología de punta en los procesos de producción puede mejorar la calidad y cantidad de los productos exportados. En este taller, se verá el uso de técnicas de visión computacional basada en aprendizaje profundo para la clasificación de los frutos sobre una banda transportadora. Se abordarán tres temas: creación de conjunto de datos, selección del modelo de clasificación y entrenamiento personalizado. El enfoque del taller será práctico utilizando como estudio de caso: la clasificación de variedades de manzana sobre una banda transportadora. En particular se entrenará una red neuronal profunda usando la librería Keras sobre nuestro conjunto de datos personalizado.`,
        "requirements":[
          {
            "type":"text",
            "text":"Programación en Python",
          },
          {
            "type":"text",
            "text":"Computadora con acceso a internet",
          },
          {
            "type":"text",
            "text":"Cuenta de google para usar Colab",
          },
          {
            "type":"text",
            "text":"Deseable: Introducción a las redes neuronales",
          }
        ],
        "type":"TUTORIAL ACADEMIA",
        "link":"",
      },
      {
        "id":0,
        "title":"Análisis de sentimientos en la toma de decisiones",
        "people":[
          {
            "img":"./src/images/Material/Delia Hernández.png",
            "name": "Dra. Delia Hernández Farias",
            "description":`La Dra. Delia Irazú Hernández Farías es Investigadora Titular "A" en el
            Instituto Nacional de Astrofísica, Óptica y Electrónica (INAOE) en
            Puebla, México. Es Ingeniera en Sistemas Computacionales
            y Maestra en Ciencias en Ciencias de la Computación por el Tecnológico
            Nacional de México campus León. Obtuvo el grado de Doctora en
            Informática en la Universidad Politécnica de Valéncia, España
            y en la Universidad de Turín, Italia en Septiembre de 2017. Es miembro
            del Sistema Nacional de Investigadores Nivel I. Entre sus intereses de
            investigación están aprendizaje automático, reconocimiento de patrones,
            inteligencia artificial y principalmente en el área de las tecnologías
            del lenguaje aplicadas en distintas tareas como análisis de
            sentimientos, detección de ironía, perfilado de autoría, detección de
            problemas de salud mental, entre otras.`,
          },
        ],
        "schedule":"Jueves, 10 de noviembre, 12:30 hrs.",
        "description":`La cantidad y variedad de datos generados en Internet representa una
        fuente de información para analizar la percepción de los usuarios sobre
        productos, servicios, etc.
        En el taller se hará una revisión de conceptos básicos y aplicaciones
        del análisis de sentimientos y de su impacto en la toma de decisiones.`,
        "requirements":[
          {
            "type":"text",
            "text":"Próximamente"
          }
        ],
        "themes":[
          "Introducción al Análisis de Sentimientos",
          "Tareas relacionadas con el Análisis de Sentimientos",
          "Enfoques basados en Recursos Léxicos",
          "Enfoques basados en Clasificadores tradicionales",
          "Enfoques basados en Aprendizaje Profundo",
          "Retos del Análisis de Sentimientos",
          "Aplicaciones del Análisis de Sentimientos"
        ],
        "type":"TUTORIAL ACADEMIA",
        "link":"",
      },
      {
        "id":2,
        "title":"Sistemas de recomendación: ¿Qué estilo de cerveza artesanal debería beber?",
        "people":[
          {
            "img":"./src/images/Material/Jhonatan Perera.png",
            "name": "MC. Jhonatan Perera Angulo",
            "description":`Estudió la Licenciatura en Matemáticas en la Facultad de Matemáticas de la UADY.

            Después estudió la Maestría en Ciencias de la Computación, especializado en Criptografía, en el Cinvestav de CDMX.
            
            De 2016 a 2020 trabajó en Plenumsoft. Empezó como “Especialista en Geometría Computacional y Minería de Datos”, después como “Científico de Datos” y finalmente como “Líder del equipo de Ciencia de Datos”.
            
            En 2018 arrancó con “Datolok”, una empresa enfocada en Soluciones en Ciencia de Datos.
            
            De 2020 a 2022 trabajó para la para la Universidad Anáhuac Mayab como Científico de Datos en un proyecto sobre predicción y prevención de deserción escolar.
            
            Actualmente trabaja como Científico de Datos en Vinden, empresa del sector Transporte Público, que brinda soluciones de datos a gobierno, transportistas y usuarios.
            
            Además tiene experiencia docente en diversas instituciones académicas, como:
            Instituto Tecnológico del Petróleo y la Energía (Mérida): Impartición de diplomados, cursos y webinars.
            
            Universidad Politécnica de Yucatán (Mérida): Profesor de asignatura.
            Tecnológico de Monterrey (CDMX y Puebla): Impartición de talleres.
            Universidad Católica del Maule (Chile): Impartición de diplomado.`,
          },
        ],
        "schedule":"Miércoles, 09 de noviembre, 16:00 hrs.",
        "description":`Los Sistemas de Recomendación son herramientas y técnicas que ayudan a los usuarios a encontrar información, productos o servicios, agregando y analizando sugerencias de otros usuarios. Pertenecen a un área conocida como Inteligencia Colectiva y sus principales aplicaciones se dan en el Comercio Electrónico.

        En este taller daremos una introducción a los Sistemas de Recomendación, definiremos el Problema de Arranque en Frío (cold start problem) en este contexto  y revisaremos una propuesta de solución para un caso de uso relacionado con la cerveza artesanal.`,
        "requirements":[
          {
            "type":"text",
            "text":"Jupiter Notebooks",
          },
          {
            "type":"text",
            "text":"Python",
          }
        ],
        "type":"TUTORIAL INDUSTRIA",
        "link":"",
      },
      {
        "id":3,
        "title":"Ciencia de datos espaciales en Python",
        "people":[
          {
            "img":"./src/images/Material/David Esparza.png",
            "name": "Mtro. David Esparza Alba",
            "description":`David es egresado de la carrera de Ingeniería Electrónica por la Universidad Panamericana y obtuvo el grado de Maestro en Ciencias Computacionales por el CIMAT. En la academia ha realizado estancias de investigación en el CIMAT y en la Universidad de Ritsumeikan, enfocándose en las áreas de Estadística Bayesiana y Aprendizaje Maquina. Frecuentemente colabora con la Universidad Panamericana como profesor de la clase de Diseño y Análisis de Algoritmos. David cuenta con más de diez años de experiencia como ingeniero de software y ha trabajado en Amazon y Oracle, donde actualmente implementa sistemas de análisis de datos espaciales. De manera independiente entrevista a candidatos para diversas empresas, tales como, Indeed, Roblox, Walmart, entre otras. David es el fundador de dnd-learning, una empresa enfocada en la creación de contenido educativo en el área de algoritmos y programación competitiva. Además, es coautor del libro "Algoritmos para Programación Competitiva".`,
          },
        ],
        "schedule":"Jueves, 10 de noviembre, 16:00 hrs.",
        "description":"La geografía tiene una gran influencia en diversas áreas, desde fenómenos naturales, hasta en la forma de relacionarnos con otras personas. En este taller conoceremos técnicas que involucran datos geográficos para realizar diversas tareas en el área de Ciencia de Datos, tales como análisis de datos, modelos de regresión y de agrupamiento. Se abarcarán ejemplos donde se analizará la relación de los datos con su ubicación geográfica, y cómo esa relación juega un rol vital para crear mejores modelos de aprendizaje máquina.",
        "requirements":[
          {
            "type":"text",
            "text":"Python",
          },
          {
            "type":"text",
            "text":"pandas library",
          },
          {
            "type":"text",
            "text":"geopandas library",
          },
          {
            "type":"text",
            "text":"pysal library",
          },
          {
            "type":"text",
            "text":"scikit-learn library",
          }
        ],
        "type":"TUTORIAL INDUSTRIA",
        "link":"",
      },
    ]
  },
  methods:{
    getName:function(people){
      let name="";
      for(let i=0;i<people.length;i++){
        const person=people[i];
        name+=i==people.length-2? person.name+"<br>" :person.name+", ";
      }
      name=name.slice(0,name.length-2);
      return name;
    }
  }
})