export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Work',
      href: '#work',
    },
    {
      id: 4,
      name: 'Contact',
      href: '#contact',
    },
  ];
  
  export const clientReviews = [
    {
      id: 1,
      name: 'Emily Johnson',
      position: 'Marketing Director at GreenLeaf',
      img: 'assets/review1.png',
      review:
        'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
      id: 2,
      name: 'Mark Rogers',
      position: 'Founder of TechGear Shop',
      img: 'assets/review2.png',
      review:
        'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
      id: 3,
      name: 'John Dohsas',
      position: 'Project Manager at UrbanTech ',
      img: 'assets/review3.png',
      review:
        'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
      id: 4,
      name: 'Ether Smith',
      position: 'CEO of BrightStar Enterprises',
      img: 'assets/review4.png',
      review:
        'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
  ];
  
  export const myProjects = [
    {
      title: 'KHOJ - A search engine',
      desc: 'khoj; a search engine application designed for making web surfing easier and efficient. The system is based on advanced techniques for retrieving documents, dynamically updating data, and ensuring scalability through a Flask-based backend.',
      subdesc:
        'It connected to a responsive, user-centric frontend. Users can search for documents, retrieve relevant results, and update backend data, including lexicons, indices, and document metadata, all via an intuitive user interface (UI).',
      href: '/',
      texture: 'textures/project/project1.mp4',
      logo: 'assets/project-logo1.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        width: '70px',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: 'assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'Python',
          path: 'assets/python.png',
        },
        {
          id: 2,
          name: 'HTML',
          path: 'assets/html.png',
        },
        {
          id: 3,
          name: 'CSS',
          path: 'assets/css.png',
        },
        {
          id: 4,
          name: 'Java script',
          path: 'assets/js.png',
        },
      ],
    },
    {
      title: 'Crime Patrol - A crime displaying dashboard webapp',
      desc: 'Crime Patrol is a web based dashboard that is designed to show city crime on map. It is designed specifially to provide law enforcement agencies details in simplified form and also to help people remain aware of their surroundings.',
      subdesc:
        'It was made using react by integrating tableau to plot data on the map and a sql database to store and retrieve data from.',
      href: '/',
      texture: '/textures/project/project2.mp4',
      logo: '/assets/project-logo2.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: 'assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: 'assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: 'assets/js.png',
        },
        {
          id: 4,
          name: 'Tableau',
          path: 'assets/tableau.png',
        },
      ],
    },
    {
      title: 'HStore - Online Shopping Store',
      desc: 'A typial online store developed in springboot to show my skills in JAVA and its framework. This store had all features that any modern store has, taking it right next to them.',
      subdesc:
        'With a focus on Object oriented Programming and using legacy frame work like spring boot, it was designed to be user friendly and super efficient.',
      href: '/',
      texture: 'textures/project/project3.mp4',
      logo: 'assets/project-logo3.png',
      logoStyle: {
        backgroundColor: 'black',
        background:
          'linear-gradient(0deg,rgba(12, 3, 3, 0.31),rgba(44, 2, 2, 0.31)), linear-gradient(180deg, rgba(39, 20, 20, 0.9) 0%, rgba(20, 21, 22, 0.8) 100%)',
        border: '0.2px solid rgb(46, 25, 25)',
        boxShadow: '0px 0px 60px 0px rgba(78, 14, 14, 0.3)',
      },
      spotlight: 'assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'JAVA',
          path: 'assets/java.png',
        },
        {
          id: 2,
          name: 'Spring',
          path: 'assets/spring.png',
        },
        {
          id: 3,
          name: 'Bootstrap',
          path: 'assets/bs.png',
        },
        {
          id: 4,
          name: 'HTML',
          path: 'assets/html.png',
        },
      ],
    },
    {
      title: 'Kunhar Restraunt management system',
      desc: 'Kunhar restarunt management system is an offline solution to maintain orders and payments efficintly in a restraunt. It provides a very user friendly user interface to manage orders. ',
      subdesc:
        'Built with Python, it uses tkinter for dynamic ui and a mysql database to store and fetch data from.',
      href: '/',
      texture: 'textures/project/project4.mp4',
      logo: 'assets/project-logo4.png',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: 'assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'Python',
          path: 'assets/python.png',
        },
        {
          id: 2,
          name: 'MySql',
          path: 'assets/mysql.png',
        },
      ],
    },
    {
      title: 'ONLINE POS',
      desc: 'It is online point of sale system to manage sales, orders and payments efficiently using a webapp unlike to a traditional way. ',
      subdesc:
        'It was built using spring boot and connected to mysql database. It offers a very modern and userfreindly interface making it super easy to use.',
      href: '/',
      texture: 'textures/project/project5.mp4',
      logo: 'assets/project-logo5.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: 'assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'JAVA',
          path: 'assets/java.png',
        },
        {
          id: 2,
          name: 'MySql',
          path: 'assets/mysql.png',
        },
        {
          id: 3,
          name: 'Springboot',
          path: 'assets/spring.png',
        },
        {
          id: 4,
          name: 'HTML',
          path: 'assets/html.png',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
      deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
      ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
      targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Frontend Development',
      pos: 'Excellent',
      duration: 'since 2024',
      title: "React , Javascript , HTML ,CSS",
      icon: 'assets/front.png',
      animation: 'salute',
    },
    {
      id: 2,
      name: 'Backend Development',
      pos: 'Excellent',
      duration: 'since 2023',
      title: "Python, Node, Java",
      icon: 'assets/back.png',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Database management',
      pos: 'Good',
      duration: 'Since 2024',
      title: "Mysql, MongoDB",
      icon: 'assets/mysql.png',
      animation: 'victory',
    },
    {
      id: 4,
      name: 'Software Design',
      pos: 'Good',
      duration: 'Since 2024',
      title: "UML, plantUML, Visual Paradigm ",
      icon: 'assets/uml.png',
      animation: 'idle',
    },
  ];
  