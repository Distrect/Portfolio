import { Type } from '@angular/core';

interface ILanguageSkill {
  langugage: string;
}

export type LanguageSkills = ILanguageSkill[];

export interface ISkill {
  skillName: string;
  percent: number;
  iconSrc: string;
}

export interface IProject {
  url: string;
  description: string;
  projectName: string;
}

export type Skills = ISkill[];

export interface ISocialMediaLink {
  socialMedia: string;
  url: string;
  icon: string;
}

export type SocialMediaLinks = ISocialMediaLink[];

export interface IPersonalInfo {
  name: string;
  lastname: string;
  birthDate: Date;
  email: string;
  phoneNumber: string;
  title: string;
  intro: string;
  skills: ISkill[];
  languageSkills: LanguageSkills;
  location: string;
  socialMedias: SocialMediaLinks;
}

export interface RPersonalInfo {
  label: string;
  attribute: string;
}
