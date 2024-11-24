import {
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    git,
    figma,
    sql,
    angular,
    seidor,
    colmena,
    threejs,
    felipeph,
    falabella,
    scl,
    desafio,
    ricomida,
    lacalchona,
    osprey,
    piesdemercurio,
    bootstrap,
    sequelize

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-Stack Developer",
      icon:  felipeph,
    }
  ];
  
   const technologies = [
    { name: "HTML 5", icon: html, progress: 80, color: "#5f90d3" },
    { name: "JavaScript", icon: javascript, progress: 70, color: "#5f90d3"},
    { name: "CSS3", icon: css, progress: 70, color: "#5f90d3"},
    { name: "Typescript", icon: typescript, progress: 30, color: "#5f90d3"  },
    { name: "React", icon: reactjs, progress: 55, color: "#5f90d3" },
    { name: "Angular", icon: angular, progress: 40 , color: "#5f90d3"},
    { name: "Tailwind CSS", icon: tailwind, progress: 50, color: "#5f90d3"},
    { name: "Bootstrap", icon: bootstrap, progress: 60, color: "#5f90d3"  },
    { name: "Node JS", icon: nodejs, progress: 80, color: "#5f90d3"  },
    { name: "Sequelize", icon: sequelize, progress: 60, color: "#5f90d3"  },
    { name: "Three JS", icon: threejs, progress: 60, color: "#5f90d3"},
    { name: "Git", icon: git, progress: 60, color: "#5f90d3" },

    // otras tecnologías...
  ];

  
  const experiences = [
    {
      title: "Trainee ABAP Consultant ",
      company_name: "Seidor Chile",
      icon: seidor,
      iconBg: "#E6DEDD",
      date: "June 2013 - June 2015",
      points: [
        "Consultant and trainee developer at companys ballerina, molymet and colmena golden cross.",
        "Develope Forms, label printing, reports, incidents, custom programs, batch input, among others.",
        "Development of custom programs, Improvements and incidents.",
      ],
    },
    {
      title: "ABAP Development",
      company_name: "Colmena Golden Cross",
      icon: colmena,
      iconBg: "#E6DEDD",
      date: "Jan 2017 - Aug 2019",
      points: [
        "Developing and maintaining SAP applications using ABAP languaje in system SAP R/3",
        "Collaborating with cross-functional to create high-quality products.",
        "Development of customs programs in the financial module, Incidents and improvements. Check printing, electronic invoicing, web service, among others.",
      ],
    },
    {
      title: "ABAP Consultant",
      company_name: "SCL Consultores",
      icon: scl,
      iconBg: "#E6DEDD",
      date: "Sept 2019 - May 2021",
      points: [
        "Developing and maintaining SAP applications using ABAP languaje in system SAP R/3.",
        "Provided services to clients such as mall plaza norte in real estate and financial modules, support in the development of the CCU CONECTA project.",
      ],
    },
    {
      title: "ABAP Developer",
      company_name: "Falabella",
      icon: falabella,
      iconBg: "#E6DEDD",
      date: "Agu 2021 - Feb 2023",
      points: [
        "Z developments in FI module, incidents, improvements,web service, Worfklow implementation, massive load,sending emails, ALB's, cds.",
        "Workflow implementation for related companys",
      ],
    },
    {
      title: "Full-stack Javascript Bootcamp ",
      company_name: "Desafio Latam & Talento Digital",
      icon: desafio,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - May 2024",
      points: [
        "Course and Certificate Full-stack Trainee Development with Javascript",
        "Freelance development at vakum.cl",
        "Autonomous learning of new technologies.",
 
      ],
    },
  ];
  
  const projects = [
    {
      name: "Pies de Mercurio",
      description:
        "",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Three JS",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CCS",
          color: "yellow-text-gradient",
        },
      ],
      image: piesdemercurio,
      source_code_link: "https://www.piesdemercurio.com/",
    },
    {
      name: "La Calchona",
      description:
        "",
      tags: [
        {
          name: "Next JS",
          color: "blue-text-gradient",
        },
        {
          name: "Framer Motion",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind CSS",
          color: "yellow-text-gradient",
        },
      ],
      image: lacalchona,
      source_code_link: "https://www.lacalchona.cl",
    },
    {
      name: "Osprey",
      description:
        "",
      tags: [
        {
          name: "Leaflet",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "GeoJson",
          color: "yellow-text-gradient",
        },
      ],
      image: osprey,
      source_code_link: "https://github.com/felipegtrujillo/Geojson-map",
    }
  ];
  
  export { services, technologies, experiences, projects };