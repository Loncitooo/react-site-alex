import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Traducciones en inglés y español
const resources = {
  en: {
    translation: {
      // Home
      hello: "HELLO, I'M",
      name: "ALEX COVARRUBIAS VALDENEBRO",
      degree:
        "Degree: Doctor in Industrial and Labor Relations. Cornell University",
      affiliation: "Affiliation: Center for Border Studies",
      email: "acova@colson.edu.mx",
      viewFullCV: "View Full CV",
      viewBriefCV: "View Brief CV",
      viewMotivationLetter: "View Motivation Letter",
      home: "Home",
      // publications: "Publications & Courses",
      changeLanguage: "EN",
      // Proyectos
      projects: "Projects",
      My: "My",
      period: "Period",
      status: "Status",
      completed: "Completed",
      objective: "Objective",
      responsiblesAndCollaborators: "Responsibles and collaborators",
      fundingSources: "Funding sources",
      usmcaTitle:
        "USMCA, new labor agenda and cross-border labor institutions: Where is the transition of human-labor rights in Mexico headed?",
      usmcaObjective:
        "The person in charge has studied workers' rights and the evolution of movements for the freedom of association and collective bargaining for over two decades, particularly in the automotive industry. His CONACYT Frontier Science project, 'The Limits of an Expanding Automotive Industry: An Analytical Model to Study the Factors That Condition the Middle-Income Trap in Mexico', which is set to conclude in April 2024, is the latest in a series of related projects and studies. This project is a derivative of the previous one. In other words, it is a continuity project in the field of frontier science research. The new trade agreement for North America (USMCA) mandated a new labor law (NLL) and created unique cross-border institutions to monitor and promote the implementation of fundamental human-labor rights in Mexico. In connection with this, the 2019 Labor Law Reform specifically sanctioned changes to guarantee the exercise of Fundamental Labor Rights in Mexico.",
      electricTransportTitle:
        "Contributing to the decarbonization of Mexican cities through an electric transport ecosystem and sustainable mobility: Case studies and intervention in two polar cities (Cuernavaca, Morelos and Hermosillo, Sonora)",
      electricTransportObjective:
        "The objective of the project is to develop a comprehensive, progressive, and inclusive electric transport ecosystem and sustainable mobility in the targeted cities, with the participation of key stakeholders and based on the introduction of technological routes, business models, and the development of social and institutional governance capacities committed to environmental care, in order to reduce carbon emissions, greenhouse gases and climate-altering compounds (GHG), as well as heat impacts and heat islands, contributing to improving air quality, health, and the quality of life of their populations.",
      middleIncomeTrapTitle:
        "The Limits of an Expanding Automotive Industry: An Analytical Model to Study the Factors that Condition the Middle-Income Trap in Mexico.",
      middleIncomeTrapObjective:
        "The project aims to formulate an alternative analytical model to assess the factors that condition the middle-income trap in the country, based on evidence from the Mexican Automotive Industry (MAI), with the goal of enriching the theory of the factors that condition it with institutional and social concepts not considered so far. These are: A) the concept of institutional complementarity, to study the degrees of articulation between the government’s innovation agenda, academia, and private sector initiatives for the industry (science and technology programs and projects); and B) the concept of the economic morality of inequality, to study how the justice ideologies of business and labor organizations affect their employment and income relations. A gender perspective will be promoted by integrating a team of women—including a postdoctoral researcher—who will pursue their theses and support their training with products from the project.",
      // Media
      media: "Media",
      videos: "Videos",
      articles: "My Articles",
      sheinbaumArticle: "Sheinbaum, leadership, and work.",
      // Publicaciones
      publications: "Publications",
      searchPlaceholder: "Search publication...",
      noPublicationsFound: "No publications or courses found",
      publicationTitles: {
        publication1:
          "Labor Upsurge in the North American Automobile Transition: Towards a New Industrial and Labor Relations Stage?",
        publication2:
          "ENFORCEMENT OF THE UNITED STATES-MEXICO-CANADA AGREEMENT (“USMCA”) RAPID RESPONSE MECHANISM: VIEWS FROM MEXICAN AUTO SECTOR WORKERS",
        publication3:
          "Unraveling the middle-income trap in Mexico. An institutional complementarity approach as seen from the automotive industry",
        publication4:
          "A new cycle of industrial product and the onset of labor transformation: Building analytical approaches to study the automotive transition across North America",
        publication5: "Labor rights and the USMCA",
        publication6:
          "The USMCA and the Mexican automobile industry: towards a new labour model?",
        publication7:
          "THE QUICK RESPONSE MECHANISM OF THE UNITED STATES-MEXICO-CANADA AGREEMENT",
        publication7Subtitle: "OPINIONS OF AUTOMOTRIC WORKERS OF MEXICO",
        publication8: "New Frontiers of the Automobile Industry",
        publication8Subtitle:
          "Exploring Geographies, Technology, and Institutional Challenges",
        course1:
          "Sustainable Mobilities Course for the PhD in Urban and Environmental Studies.",
      },
    },
  },
  es: {
    translation: {
      hello: "HOLA, SOY",
      name: "ALEX COVARRUBIAS VALDENEBRO",
      degree:
        "Grado: Doctor en Relaciones Industriales y Laborales. Universidad de Cornell",
      affiliation: "Adscripción: Centro de Estudios Transfronterizos",
      email: "acova@colson.edu.mx",
      viewFullCV: "Ver Currículum Completo",
      viewBriefCV: "Ver Currículum Breve",
      viewMotivationLetter: "Ver Carta de Motivación",
      home: "Inicio",
      // publications: "Publicaciones y Cursos",
      projects: "Proyectos",
      // media: "Medios",
      changeLanguage: "ES",
      // Proyectos
      My: "Mis",
      period: "Periodo",
      status: "Estado",
      completed: "Completado",
      objective: "Objetivo",
      responsiblesAndCollaborators: "Responsables y colaboradores",
      fundingSources: "Fuentes de financiamiento",
      usmcaTitle:
        "T-MEC, nueva agenda laboral e instituciones laborales transfronterizas: ¿Hacia dónde se dirige la transición de los derechos humano-laborales en México?",
      usmcaObjective:
        "El responsable ha estudiado los derechos de los trabajadores y la evolución de los movimientos por la libertad de asociación y la negociación colectiva durante más de dos décadas, particularmente en la industria automotriz. Su proyecto de Ciencia de Frontera del CONACYT, 'Los límites de una industria automotriz en expansión: Un modelo analítico para estudiar los factores que condicionan la trampa de ingresos medios en México', que concluirá en abril de 2024, es el último de una serie de proyectos y estudios relacionados. Este proyecto es un derivado del anterior. En otras palabras, es un proyecto de continuidad en el campo de la investigación de ciencia de frontera. El nuevo acuerdo comercial para América del Norte (T-MEC) mandató una nueva ley laboral (NLL) y creó instituciones transfronterizas únicas para monitorear y promover la implementación de los derechos humano-laborales fundamentales en México. En conexión con esto, la Reforma Laboral de 2019 sancionó específicamente cambios para garantizar el ejercicio de los Derechos Laborales Fundamentales en México.",
      electricTransportTitle:
        "Contribuyendo a la descarbonización de las ciudades mexicanas a través de un ecosistema de transporte eléctrico y movilidad sostenible: Estudios de caso e intervención en dos ciudades polares (Cuernavaca, Morelos y Hermosillo, Sonora)",
      electricTransportObjective:
        "El objetivo del proyecto es desarrollar un ecosistema de transporte eléctrico y movilidad sostenible integral, progresivo e inclusivo en las ciudades objetivo, con la participación de actores clave y basado en la introducción de rutas tecnológicas, modelos de negocio y el desarrollo de capacidades de gobernanza social e institucional comprometidas con el cuidado del medio ambiente, con el fin de reducir las emisiones de carbono, los gases de efecto invernadero y los compuestos alteradores del clima (GEI), así como los impactos de calor y las islas de calor, contribuyendo a mejorar la calidad del aire, la salud y la calidad de vida de sus poblaciones.",
      middleIncomeTrapTitle:
        "Los límites de una industria automotriz en expansión: Un modelo analítico para estudiar los factores que condicionan la trampa de ingresos medios en México.",
      middleIncomeTrapObjective:
        "El proyecto tiene como objetivo formular un modelo analítico alternativo para evaluar los factores que condicionan la trampa de ingresos medios en el país, basado en evidencia de la Industria Automotriz Mexicana (IAM), con el objetivo de enriquecer la teoría de los factores que la condicionan con conceptos institucionales y sociales no considerados hasta ahora. Estos son: A) el concepto de complementariedad institucional, para estudiar los grados de articulación entre la agenda de innovación del gobierno, la academia y las iniciativas del sector privado para la industria (programas y proyectos de ciencia y tecnología); y B) el concepto de la moralidad económica de la desigualdad, para estudiar cómo las ideologías de justicia de las organizaciones empresariales y laborales afectan sus relaciones de empleo e ingresos. Se promoverá una perspectiva de género integrando un equipo de mujeres—incluyendo una investigadora posdoctoral—que realizarán sus tesis y apoyarán su formación con productos del proyecto.",
      // Media
      media: "Media",
      videos: "Videos",
      articles: "Artículos",
      sheinbaumArticle: "Sheinbaum, liderazgo y trabajo.",
      // Publicaciones
      publications: "Publicaciones",
      searchPlaceholder: "Buscar publicación...",
      noPublicationsFound: "No se encontraron publicaciones o cursos",
      publicationTitles: {
        publication1:
          "El auge laboral en la transición automotriz de América del Norte: ¿Hacia una nueva etapa de relaciones industriales y laborales?",
        publication2:
          "APLICACIÓN DEL MECANISMO DE RESPUESTA RÁPIDA DEL TRATADO ENTRE MÉXICO, ESTADOS UNIDOS Y CANADÁ (“T-MEC”): OPINIONES DE LOS TRABAJADORES DEL SECTOR AUTOMOTRIZ MEXICANO",
        publication3:
          "Desentrañando la trampa de ingresos medios en México. Un enfoque de complementariedad institucional visto desde la industria automotriz",
        publication4:
          "Un nuevo ciclo de producto industrial y el inicio de la transformación laboral: Construyendo enfoques analíticos para estudiar la transición automotriz en América del Norte",
        publication5: "Derechos laborales y el T-MEC",
        publication6:
          "El T-MEC y la industria automotriz mexicana: ¿hacia un nuevo modelo laboral?",
        publication7:
          "EL MECANISMO DE RESPUESTA RÁPIDA DEL TRATADO ENTRE MÉXICO, ESTADOS UNIDOS Y CANADÁ",
        publication7Subtitle:
          "OPINIONES DE TRABAJADORES AUTOMOTRICES DE MÉXICO",
        publication8: "Nuevas fronteras de la industria automotriz",
        publication8Subtitle:
          "Explorando Geografías, Tecnología y Desafíos Institucionales",
        course1:
          "Curso de Movilidades Sustentables para el Doctorado en Estudios Urbanos y Ambientales.",
      },
    },
  },
};
// Configuración de i18n
i18n.use(initReactI18next).init({
  resources,
  lng: "es", // Idioma predeterminado
  fallbackLng: "en", // Idioma de respaldo
  interpolation: {
    escapeValue: false, // No escapar valores (útil para HTML)
  },
});

export default i18n;
