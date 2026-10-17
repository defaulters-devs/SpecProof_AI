/**
 * Team DEFAULTERS Configuration
 * 
 * SpecProof AI is developed by Team DEFAULTERS.
 * Profiles verified for public deployment.
 */

export interface TeamMember {
  id: string;
  name: string;
  role?: string;
  githubUrl: string;
  linkedinUrl: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'jay-chaurasia',
    name: 'Jay Chaurasia',
    role: 'Lead Engineer',
    githubUrl: 'https://github.com/Jaychaurasia',
    linkedinUrl: 'https://www.linkedin.com/in/jay-chaurasia/',
  },
  {
    id: 'kunal-soni',
    name: 'Kunal Soni',
    role: 'Core Engineer',
    githubUrl: 'https://github.com/kunal7828-soni',
    linkedinUrl: 'https://www.linkedin.com/in/kunal-soni-dev',
  },
  {
    id: 'krishnkant-chaurasia',
    name: 'Krishnkant Chaurasia',
    role: 'Core Engineer',
    githubUrl: 'https://github.com/MrChaurasiaJi',
    linkedinUrl: 'https://www.linkedin.com/in/krashnkantchaurasia/',
  },
  {
    id: 'piyush-bramhe',
    name: 'Piyush Bramhe',
    role: 'Core Engineer',
    githubUrl: 'https://github.com/piyush-bramhe',
    linkedinUrl: 'https://www.linkedin.com/in/piyushbramhe/',
  },
];

export const PROJECT_METADATA = {
  name: 'SpecProof AI',
  teamName: 'DEFAULTERS',
  repoUrl: 'https://github.com/defaulters-devs/SpecProof_AI',
  version: '0.1.0-alpha',
  statusDescription: 'SpecProof AI enterprise landing page and demonstration interface.',
};
