import {
  IPersonalInfo,
  LanguageSkills,
  Skills,
  SocialMediaLinks,
} from './personal.info.interface';

export default class Person implements IPersonalInfo {
  readonly name: string = 'Samet';
  readonly lastname: string = 'Sarıçiçek';
  readonly fullName: string = this.name + ' ' + this.lastname;
  readonly email: string = 'sametsaricicekym@gmail.com';
  readonly phoneNumber: string = '+905428601502';
  readonly title: string = 'Web Developer';
  readonly birthDate: Date = new Date(2001, 1, 15);
  readonly location: string = 'Cyprus/Ncosia';

  public selectedQuote: {
    quote: string;
    author: string;
  };

  readonly socialMedias: SocialMediaLinks = [
    {
      socialMedia: 'Github',
      icon: 'assets/svg/social/github.svg',
      url: 'https://github.com/Distrect',
    },
    {
      socialMedia: 'LinkedIn',
      icon: 'assets/svg/social/linkedin.svg',
      url: 'https://www.linkedin.com/in/samet-sar%C4%B1%C3%A7i%C3%A7ek-779212272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    },
    {
      socialMedia: 'Whatsapp',
      icon: 'assets/svg/social/whatsapp.svg',
      url: 'https://wa.me/35799414778',
    },
    {
      socialMedia: 'Instagram',
      icon: 'assets/svg/social/instagram.svg',
      url: 'https://www.facebook.com/profile.php?id=61560305348608',
    },
    {
      socialMedia: 'Facebook',
      icon: 'assets/svg/social/facebook.svg',
      url: 'https://www.facebook.com/profile.php?id=61560305348608',
    },
  ];

  readonly degree: string = 'EMU';
  readonly program: string = 'Software Engineering';

  readonly intro: string = `
  A passionate, inquisitive, and skilled software engineer with a strong desire to continuously learn and grow. Leveraging my software engineering education, I am committed to expanding my knowledge base by exploring new technologies and delving into emerging software concepts. With a keen interest in front-end development, I am actively seeking new opportunities to contribute my expertise and further my professional career.`;

  readonly background: string = `I was born and raised in Nicosia, Cyprus, and I am originally from Turkey. I graduated from the Software Engineering department at Eastern Mediterranean University. During my university years, I developed my skills in web technologies. Along with my engineering knowledge, I built a solid foundation in software and I am continually improving myself in this field. I enjoy learning new technologies and concepts. Currently, I am actively seeking experience and job opportunities that will enhance my skills.`;

  readonly outro: string =
    'Thank you for taking the time to explore my portfolio. I am enthusiastic about leveraging my skills and experiences to contribute to a forward-thinking company. I am eager to bring my dedication, creativity, and problem-solving abilities to a dynamic team environment.';

  readonly skills: Skills = [
    {
      skillName: 'HTML',
      percent: 90,
      iconSrc: 'assets/svg/skill/html.svg',
    },
    {
      skillName: 'CSS',
      percent: 85,
      iconSrc: 'assets/svg/skill/css.svg',
    },
    {
      skillName: 'Typescript',
      percent: 85,
      iconSrc: 'assets/svg/skill/typescript.svg',
    },
    {
      skillName: 'ReactJS',
      percent: 75,
      iconSrc: 'assets/svg/skill/reactjs.svg',
    },
    {
      skillName: 'NodeJS',
      percent: 60,
      iconSrc: 'assets/svg/skill/nodejs.svg',
    },
    {
      skillName: 'NestJS',
      percent: 50,
      iconSrc: 'assets/svg/skill/nestjs.svg',
    },
    {
      skillName: 'MySQL',
      percent: 40,
      iconSrc: 'assets/svg/skill/mysql.svg',
    },
    {
      skillName: 'Figma',
      percent: 20,
      iconSrc: 'assets/svg/skill/figma.svg',
    },
  ];
  readonly languageSkills: LanguageSkills = [
    { langugage: 'Turkish' },
    { langugage: 'English' },
  ];

  readonly experiences = [
    {
      companyName: 'Near East Technology',
      title: 'Frontend Developer',
      startDate: new Date(2023, 6, 25),
      endDate: new Date(2023, 9, 25),
      explanation:
        'During my internship at Near East Technology, I gained firsthand experience of how a software company operates and its general processes. My role involved developing the front-end of assigned projects and ensuring seamless connections. Over the course of my 3-month internship, I acquired proficiency in JavaScript, HTML, CSS, and various frameworks.',
    },
  ];

  readonly educations = [
    {
      school: 'Bülent Ecevit Anadolu Lisesi',
      startYear: '2015',
      endYear: '2019',
    },
    {
      school: 'Doğu Akdeniz Üniversitesi',
      startYear: '2019',
      endYear: '2024',
    },
  ];

  readonly hobies = ['Hiking', 'Reading Books'];

  readonly _quotes = [
    {
      quote: '“Waste no more time arguing what a good man should be. Be One”',
      author: 'Marcus Aurelius',
    },
    {
      quote: '“Be tolerant with others and strict with yourself”',
      author: 'Marcus Aurelius',
    },
    {
      quote:
        '“In the midst of winter, I found there was, within me, an invincible summer"',
      author: 'Albert Camus',
    },
    {
      quote: '"We are not made to be confined to narrow places"',
      author: 'Seneca',
    },
  ];

  private readonly _contactDetails = {
    name: 'Samet Sarıçiçek',
    email: 'sametsarticicekym@gmail.com',
    number: '+357 99 414778(Whatsapp)',
    address: 'Cyprus/Ncosia, 99040 - TRNC',
  };

  constructor() {
    this.selectedQuote = this.getRandomQuote();
  }

  get contactDetails(): string[] {
    return Object.values(this._contactDetails);
  }

  public getRandomQuote() {
    return this._quotes[Math.floor(Math.random() * this._quotes.length)];
  }
}

/*

 readonly frontendSkills: ISkilArea = {
    areaName: 'Frontend Development',
    explanation: `I started to learn programing from frontend development. 
    I create many application however complex, however simple. 
    While developing apps, aside from logic and requirements, i also focus on responsivness and performance`,
    skills: [...skillz.slice(0, 4)],
    icon: 'assets/svg/frontend.svg',
    svgComponent: FrontendSVGComponent,
    inputs: { fill: 'dynamic' },
  };

  readonly backendSkills: ISkilArea = {
    areaName: 'Backend Development',
    explanation: `After learning frontend, i needed to develop backend applications for my projects. 
    So i started to learn backend and studied server theories
    `,
    skills: [...skillz.slice(4, 6)],
    icon: 'assets/svg/backend.svg',
    svgComponent: BackendSVGComponent,
    inputs: { fill: 'dynamic' },
  };

  readonly databaseSkills: ISkilArea = {
    areaName: 'Database Operations',
    explanation: `For full-stack applications i needed to learn database management. I am beginner but i am developing this skill`,
    skills: [...skillz.slice(6, 9)],
    icon: 'assets/svg/database.svg',
    svgComponent: DatabaseSVGComponent,
    inputs: { fill: 'dynamic' },
  };

  readonly uiSkills: ISkilArea = {
    areaName: 'UI&UX Design',
    explanation: `I am very beginer on this skill journey`,
    skills: [skillz[skillz.length - 1]],
    icon: 'assets/svg/ui.svg',
    svgComponent: UiSVGComponent,
    inputs: { fill: 'dynamic' },
  };

  */
