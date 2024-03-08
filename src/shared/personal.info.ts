interface ISkill {
  skillName: string;
  percent: number;
  iconSrc: string;
  color: string;
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
    skillName: 'Figma',
    percent: 20,
    iconSrc: 'assets/svg/figma.svg',
    color: '#0acf83',
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
  readonly intro: string = `
  My name is Samet. I am a Software Engineer,
  undergraduate from Eastern Mediterranean University.
  I am very passionate about solving problems and web development`;
}
