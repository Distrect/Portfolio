interface ISkill {
  skillName: string;
  percent: number;
  iconSrc: string;
  color: string;
}

interface ISocialMediaLinks {
  socialMedia: string;
  url: string;
  icon: string;
}

interface IPersonalInfo {
  name: string;
  lastname: string;
  email: string;
  phoneNumber: string;
  title: string;
  birthDate: Date;
  intro: string;
  skills: ISkill[];
  location: string;
  status: string;
  socialMedias: ISocialMediaLinks[];
}

interface ISkilArea {
  areaName: string;
  explanation: string;
  skills: ISkill[];
  icon: string;
}

interface RPersonalInfo {
  label: string;
  attribute: string;
}

const skillz: ISkill[] = [
  {
    skillName: 'HTML',
    percent: 90,
    iconSrc: 'assets/svg/html.svg',
    color: '#d93933',
  },
  {
    skillName: 'CSS',
    percent: 85,
    iconSrc: 'assets/svg/css.svg',
    color: '#d93933',
  },
  {
    skillName: 'Typescript',
    percent: 85,
    iconSrc: 'assets/svg/typescript.svg',
    color: '#007acc',
  },
  {
    skillName: 'ReactJS',
    percent: 75,
    iconSrc: 'assets/svg/reactjs.svg',
    color: '#61dbfb',
  },
  {
    skillName: 'NodeJS',
    percent: 60,
    iconSrc: 'assets/svg/nodejs.svg',
    color: '#6cc24a',
  },
  {
    skillName: 'NestJS',
    percent: 50,
    iconSrc: 'assets/svg/nestjs.svg',
    color: '#ff0000',
  },
  {
    skillName: 'MySQL',
    percent: 40,
    iconSrc: 'assets/svg/mysql.svg',
    color: '#00758f',
  },
  {
    skillName: 'Typeorm',
    percent: 45,
    iconSrc: 'assets/svg/typeorm.svg',
    color: '#fe0200',
  },
  {
    skillName: 'Sequelize',
    percent: 50,
    iconSrc: 'assets/svg/sequelize.svg',
    color: '#2379bd',
  },
  {
    skillName: 'Figma',
    percent: 20,
    iconSrc: 'assets/svg/figma.svg',
    color: '#0acf83',
  },
];

const socialMedia: ISocialMediaLinks[] = [
  {
    socialMedia: 'Github',
    icon: 'assets/svg/github.svg',
    url: '',
  },
  {
    socialMedia: 'LinkedIn',
    icon: 'assets/svg/linkedin.svg',
    url: '',
  },
  {
    socialMedia: 'Whatsapp',
    icon: 'assets/svg/whatsapp.svg',
    url: '',
  },
];

export default class Person implements IPersonalInfo {
  readonly name: string = 'Samet';
  readonly lastname: string = 'Sarıçiçek';
  readonly fullName: string = this.name + ' ' + this.lastname;
  readonly email: string = 'sametsaricicekym@gmail.com';
  readonly phoneNumber: string = '+905428601502';
  readonly title: string = 'Web Developer';
  readonly birthDate: Date = new Date(2001, 1, 15);
  readonly skills: ISkill[] = skillz;
  readonly location: string = 'Cyprus/Ncosia';
  readonly status: string = 'Undergratuade';
  readonly socialMedias: ISocialMediaLinks[] = socialMedia;
  readonly degree: string = 'EMU';
  readonly program: string = 'Software Engineering';
  readonly intro: string = `
  My name is Samet. I am a Software Engineer,
  undergraduate from Eastern Mediterranean University.
  I am very passionate about solving problems and web development`;

  readonly frontendSkills: ISkilArea = {
    areaName: 'Frontend Development',
    explanation: `I started to learn programing from frontend development. 
    I create many application however complex, however simple. 
    While developing apps, aside from logic and requirements, i also focus on responsivness and performance`,
    skills: [...skillz.slice(0, 4)],
    icon: 'assets/svg/frontend.svg',
  };

  readonly backendSkills: ISkilArea = {
    areaName: 'Backend Development',
    explanation: `After learning frontend, i needed to develop backend applications for my projects. 
    So i started to learn backend and studied server theories
    `,
    skills: [...skillz.slice(4, 6)],
    icon: 'assets/svg/backend.svg',
  };

  readonly databaseSkills: ISkilArea = {
    areaName: 'Database Operations',
    explanation: `For full-stack applications i needed to learn database management. I am beginner but i am developing this skill`,
    skills: [...skillz.slice(6, 9)],
    icon: 'assets/svg/database.svg',
  };

  readonly uiSkills: ISkilArea = {
    areaName: 'UI&UX Design',
    explanation: `I am very beginer on this skill journey`,
    skills: [skillz[skillz.length - 1]],
    icon: 'assets/svg/ui.svg',
  };

  private transformDate(date: Date) {
    return (
      date.getDate().toString() +
      '/' +
      date.getMonth().toString().padStart(2, '0') +
      '/' +
      date.getFullYear().toString()
    );
  }

  public get personalInfo(): RPersonalInfo[] {
    const personalInfo: RPersonalInfo[] = [
      { label: 'Name', attribute: this.fullName },
      { label: 'Birthday', attribute: this.transformDate(this.birthDate) },
      { label: 'Location', attribute: this.location },
      { label: 'Title', attribute: this.title },
      { label: 'Status', attribute: this.status },
      { label: 'Degree', attribute: this.degree },
      { label: 'Program', attribute: this.program },
    ];

    return personalInfo;
  }

  public get skillAreas(): ISkilArea[] {
    return [
      this.frontendSkills,
      this.backendSkills,
      this.databaseSkills,
      this.uiSkills,
    ];
  }
}
